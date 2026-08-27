import type { ReactNode } from 'react';
import { useEnVista } from '../hooks/useEnVista';

/**
 * Reveals its children as they scroll into view.
 *
 * The observer logic lives in useEnVista, which the counters share. What stays
 * here is the presentation:
 *
 * - Only `opacity` and `transform` animate. Animating height or margin would
 *   shift the layout while somebody is reading it.
 * - `data-revelado` lets children react to the reveal without each one running
 *   an observer of its own — see .regla-dorada in index.css.
 */
const Reveal = ({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  /** Stagger, in ms. Keep it small — long chains feel broken, not elegant. */
  delay?: number;
  as?: 'div' | 'section' | 'li';
  className?: string;
}) => {
  const { ref, enVista } = useEnVista<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      data-revelado={enVista ? 'true' : 'false'}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        enVista ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={enVista ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
