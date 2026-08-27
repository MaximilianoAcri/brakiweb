import { useState, useEffect } from 'react';
import { CALENDLY_URL } from '../config';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Passive so the listener never blocks scrolling, and throttled to one
    // frame: scroll fires far more often than the screen repaints.
    let pendiente = false;

    const medir = () => {
      pendiente = false;
      setIsScrolled(window.scrollY > 20);
    };

    const alScrollear = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener('scroll', alScrollear, { passive: true });
    return () => window.removeEventListener('scroll', alScrollear);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'ÁREAS DE PRÁCTICA', href: '#areas-de-practica' },
    { name: 'DIFERENCIALES', href: '#diferenciales' },
    { name: 'SOBRE EL ESTUDIO', href: '#sobre-el-estudio' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-bg/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#inicio" className="transition-opacity hover:opacity-90 flex items-center">
            <Logo tone={isScrolled ? 'dark' : 'light'} />
          </a>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`group relative text-[11px] font-display font-semibold tracking-[0.2em] uppercase hover:text-accent-gold transition-colors duration-300 py-2 ${
                isScrolled ? 'text-primary-text' : 'text-white'
              }`}
            >
              {link.name}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-accent-gold transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gold hover:bg-[#D9BC85] text-primary-text px-7 py-3 rounded-sm text-[10px] font-display font-bold uppercase tracking-[0.2em] motion-safe:active:scale-[0.97] transition-all duration-300 shadow-lg shadow-accent-gold/20 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendá tu reunión
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`lg:hidden p-3 transition-colors duration-300 ${
            isScrolled ? 'text-primary-text' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {/* `invisible` when collapsed keeps the links out of the tab order —
          `max-h-0` alone still lets keyboard users focus hidden links. */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-primary-bg shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen visible' : 'max-h-0 invisible'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 border-t border-secondary-bg/50">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-display font-medium uppercase tracking-[0.15em] py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-accent-gold text-primary-text text-center py-4 rounded-sm text-xs font-display font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendá tu reunión
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
