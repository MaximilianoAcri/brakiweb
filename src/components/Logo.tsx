/**
 * Wordmark for the firm.
 *
 * The brand was plain text everywhere, which gives a shared link, a favicon or a
 * WhatsApp preview nothing to be recognised by. This pairs a small monogram with
 * the name so there is at least one reusable mark.
 *
 * `tone` follows the navbar: the hero is a dark photo, everything after it is
 * light. `compact` drops the wordmark and keeps only the monogram.
 */
const Logo = ({
  tone = 'dark',
  compact = false,
}: {
  tone?: 'dark' | 'light';
  compact?: boolean;
}) => {
  const text = tone === 'light' ? 'text-white' : 'text-primary-text';

  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center border border-accent-gold"
      >
        <span className="font-serif font-bold text-accent-gold text-[15px] leading-none tracking-tight">
          B<span className="text-[11px] align-super">&amp;</span>A
        </span>
      </span>

      {!compact && (
        <span
          className={`font-serif font-bold text-2xl tracking-tighter whitespace-nowrap transition-colors duration-300 ${text}`}
        >
          Braki &amp; Asoc.
        </span>
      )}
    </span>
  );
};

export default Logo;
