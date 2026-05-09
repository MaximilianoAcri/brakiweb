import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <span className={`font-serif font-bold text-2xl tracking-tighter whitespace-nowrap transition-colors duration-300 ${
              isScrolled ? 'text-primary-text' : 'text-white'
            }`}>
              Braki & Asoc.
            </span>
          </a>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-[11px] font-display font-semibold tracking-[0.2em] uppercase hover:text-accent-gold transition-colors duration-300 ${
                isScrolled ? 'text-primary-text' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://wa.me/5491164949605" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent-gold hover:bg-[#B59640] text-white px-7 py-3 rounded-sm text-[10px] font-display font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-accent-gold/20"
          >
            Consultá ahora
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? 'text-primary-text' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-primary-bg shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4 border-t border-secondary-bg/50">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-display font-medium uppercase tracking-[0.15em]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5491164949605"
            className="bg-accent-gold text-white text-center py-4 rounded-sm text-xs font-display font-bold uppercase tracking-[0.2em]"
          >
            Consultá ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
