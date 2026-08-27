import { useEffect, useState } from 'react';
import { useEnVista } from '../hooks/useEnVista';

const prefiereQuieto = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts up to a number when it scrolls into view.
 *
 * Two details that keep it from being annoying:
 *
 * - `tabular-nums` fixes the digit width, so the figure does not jitter
 *   sideways while it climbs.
 * - Assistive technology gets the final number from the very first render. A
 *   screen reader should hear "5", not every step on the way, which is why the
 *   animated digits are aria-hidden.
 *
 * Under reduced motion the state simply starts at its final value — deriving it
 * rather than correcting it inside an effect, which would render the wrong
 * number for a frame.
 */
const Contador = ({
  hasta,
  sufijo = '',
  duracion = 1100,
  className = '',
}: {
  hasta: number;
  sufijo?: string;
  duracion?: number;
  className?: string;
}) => {
  const { ref, enVista } = useEnVista<HTMLSpanElement>();
  const [valor, setValor] = useState(() => (prefiereQuieto() ? hasta : 0));

  useEffect(() => {
    if (!enVista || prefiereQuieto()) return;

    let cuadro = 0;
    const inicio = performance.now();

    const paso = (ahora: number) => {
      const t = Math.min(1, (ahora - inicio) / duracion);
      // Ease-out cubic: arranca rapido y frena, que es como se lee un conteo.
      const suave = 1 - Math.pow(1 - t, 3);
      setValor(Math.round(hasta * suave));
      if (t < 1) cuadro = requestAnimationFrame(paso);
    };

    cuadro = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(cuadro);
  }, [enVista, hasta, duracion]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true" className="tabular-nums">
        {valor}
        {sufijo}
      </span>
      <span className="sr-only">
        {hasta}
        {sufijo}
      </span>
    </span>
  );
};

export default Contador;
