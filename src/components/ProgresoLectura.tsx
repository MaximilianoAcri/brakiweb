import { useEffect, useState } from 'react';

/**
 * A hairline gold bar across the top showing how far down the page you are.
 *
 * The page runs about ten screens on a phone, which is long enough that a
 * reader loses the sense of how much is left. This gives that back for two
 * pixels of height.
 *
 * The scroll handler is throttled to one frame: scroll fires far more often
 * than the screen repaints, and writing state on every event would be work
 * thrown away. It also only animates `transform`, so the browser never has to
 * reflow the page to draw it.
 */
const ProgresoLectura = () => {
  const [avance, setAvance] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let pendiente = false;

    const medir = () => {
      pendiente = false;
      const alcance = document.documentElement.scrollHeight - window.innerHeight;
      setAvance(alcance > 0 ? Math.min(1, window.scrollY / alcance) : 0);
    };

    const alScrollear = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener('scroll', alScrollear, { passive: true });
    window.addEventListener('resize', alScrollear, { passive: true });
    return () => {
      window.removeEventListener('scroll', alScrollear);
      window.removeEventListener('resize', alScrollear);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none motion-reduce:hidden"
    >
      <div
        className="h-full bg-accent-gold origin-left"
        style={{ transform: `scaleX(${avance})` }}
      />
    </div>
  );
};

export default ProgresoLectura;
