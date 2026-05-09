const Footer = () => {
  return (
    <footer className="bg-primary-text text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          {/* Logo & Info */}
          <div className="w-full lg:w-1/3">
            <span className="font-serif font-bold text-white text-2xl tracking-tighter mb-8 block">Braki & Asoc.</span>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-sans">
              Defensa estratégica y soluciones reales. 
              Compromiso con la excelencia y la ética profesional en cada caso.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col space-y-4">
              <h5 className="text-accent-gold font-display font-bold uppercase tracking-[0.2em] text-[10px]">Navegación</h5>
              <a href="#inicio" className="text-sm text-white/60 hover:text-white transition-colors font-sans">Inicio</a>
              <a href="#areas-de-practica" className="text-sm text-white/60 hover:text-white transition-colors font-sans">Práctica</a>
              <a href="#sobre-el-estudio" className="text-sm text-white/60 hover:text-white transition-colors font-sans">Nosotros</a>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h5 className="text-accent-gold font-display font-bold uppercase tracking-[0.2em] text-[10px]">Legal</h5>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-sans">Términos de Uso</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-sans">Privacidad</a>
            </div>

            <div className="flex flex-col space-y-4">
              <h5 className="text-accent-gold font-display font-bold uppercase tracking-[0.2em] text-[10px]">Contacto</h5>
              <span className="text-sm text-white/60 font-sans">Tapiales, Buenos Aires</span>
              <span className="text-sm text-white/60 font-sans">braki.abogados@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-display uppercase tracking-widest">
            © {new Date().getFullYear()} Estudio Jurídico Braki & Asoc. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-[9px] font-display uppercase tracking-[0.4em] font-bold">Diseño & Desarrollo Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
