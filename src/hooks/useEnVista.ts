import { useEffect, useRef, useState } from 'react';

/**
 * Tells you when an element first reaches the viewport, once.
 *
 * Extracted from Reveal so the counters can share it instead of each component
 * hand-rolling its own observer. It keeps the three things that were learned
 * the hard way there:
 *
 * 1. If the browser has no IntersectionObserver, or the visitor asked for
 *    reduced motion, it reports visible immediately and never observes. A
 *    component built on this can then never leave content stranded.
 * 2. It waits for load before observing. On first mount the fonts and images
 *    have not landed, the document is far shorter than its final height, and
 *    everything looks like it is on screen — an observer attached then fires
 *    for the whole page at once and disconnects.
 * 3. The huge top rootMargin counts anything at or above the fold as visible.
 *    Following a nav anchor teleports past whole sections, which never
 *    intersect on any rendered frame and would otherwise stay hidden forever.
 */
export function useEnVista<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const [enVista, setEnVista] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    );
  });

  useEffect(() => {
    if (enVista) return;
    const nodo = ref.current;
    if (!nodo) return;

    let observador: IntersectionObserver | null = null;

    const arrancar = () => {
      observador = new IntersectionObserver(
        (entradas) => {
          if (entradas.some((e) => e.isIntersecting)) {
            setEnVista(true);
            observador?.disconnect();
          }
        },
        { threshold: 0, rootMargin: '9999px 0px -80px 0px' }
      );
      observador.observe(nodo);
    };

    if (document.readyState === 'complete') {
      requestAnimationFrame(() => requestAnimationFrame(arrancar));
    } else {
      window.addEventListener('load', arrancar, { once: true });
    }

    // Whatever happens, nothing stays hidden.
    const salvavidas = window.setTimeout(() => setEnVista(true), 3000);

    return () => {
      observador?.disconnect();
      window.removeEventListener('load', arrancar);
      window.clearTimeout(salvavidas);
    };
  }, [enVista]);

  return { ref, enVista };
}
