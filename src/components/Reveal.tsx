import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Reveals its children as they scroll into view.
 *
 * Three things this deliberately gets right:
 *
 * 1. It never hides content it cannot bring back. If IntersectionObserver is
 *    missing, or the user asked for reduced motion, the children render visible
 *    and no animation is set up at all. A watchdog also reveals anything still
 *    hidden after 2s, so a wedged observer can never leave the page blank.
 * 2. It animates only `opacity` and `transform`, which the compositor handles
 *    without reflowing. Animating height or margin here would shift the layout
 *    while the user reads — bad for Cumulative Layout Shift.
 * 3. It observes once and disconnects. Re-animating on every scroll past is
 *    distracting on a page this long.
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
  const ref = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return reduced || !('IntersectionObserver' in window);
  });

  useEffect(() => {
    if (visible) return;

    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver | null = null;
    let failsafe = 0;

    /*
     * Wait for layout to settle before observing.
     *
     * On first mount the fonts and images have not landed yet, so the document
     * is far shorter than its final height and elements that belong near the
     * bottom are momentarily inside the viewport. An observer attached at that
     * instant fires "intersecting" for the whole page, reveals everything at
     * once and disconnects — the reveal silently does nothing from then on.
     */
    const start = () => {
      observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer?.disconnect();
        }
      },
      {
        threshold: 0,
        /*
         * The bottom margin fires the reveal slightly before the element
         * reaches the fold, so it has finished animating by the time it is
         * properly in view.
         *
         * The enormous top margin is what makes jumping work. Following a nav
         * anchor teleports the viewport past whole sections; those elements
         * never intersect on any rendered frame, so a plain observer never
         * fires for them and they stay blank. Extending the root upwards means
         * anything at or above the fold counts as intersecting, so skipped
         * sections are already revealed when the user scrolls back up.
         */
        rootMargin: '9999px 0px -80px 0px',
      }
    );

      observer.observe(node);
    };

    if (document.readyState === 'complete') {
      // Two frames: one for the pending style/layout pass, one to read it back.
      requestAnimationFrame(() => requestAnimationFrame(start));
    } else {
      window.addEventListener('load', start, { once: true });
    }

    // Watchdog: whatever happens, nothing stays invisible.
    failsafe = window.setTimeout(() => setVisible(true), 3000);

    return () => {
      observer?.disconnect();
      window.removeEventListener('load', start);
      window.clearTimeout(failsafe);
    };
  }, [visible]);

  return (
    <Tag
      ref={ref as never}
      /* Lets children react to the reveal without each one observing on its
         own — see .regla-dorada in index.css. */
      data-revelado={visible ? 'true' : 'false'}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={visible ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
