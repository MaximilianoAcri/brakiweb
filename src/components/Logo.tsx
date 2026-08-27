/**
 * Wordmark for the navbar.
 *
 * This deliberately carries no monogram. The firm's real mark — the PB script
 * inside a laurel wreath — was tested here at 36px, 44px and 90px: it only
 * becomes legible around 90px, because it is a hairline script whose strokes
 * fall below two pixels at navbar size and read as a smudge. Cropping it
 * tighter either clips the B or drags in stray laurel leaves.
 *
 * An invented placeholder monogram used to sit here. It was removed once the
 * real logo arrived: a made-up mark competing with the firm's actual identity
 * is worse than no mark at all. The real logo runs at full size in the footer,
 * where it has the room it needs.
 */
const Logo = ({ tone = 'dark' }: { tone?: 'dark' | 'light' }) => (
  <span
    className={`font-serif font-bold text-2xl tracking-tight whitespace-nowrap transition-colors duration-300 ${
      tone === 'light' ? 'text-white' : 'text-primary-text'
    }`}
  >
    Braki <span className="text-accent-gold">&amp;</span> Asoc.
  </span>
);

export default Logo;
