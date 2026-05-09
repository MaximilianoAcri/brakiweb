import fondoHero from '../assets/Fondohero.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fondoHero} 
          alt="Estudio Jurídico Braki & Asoc" 
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Color Overlay: #3B2A20 with 50% opacity */}
        <div className="absolute inset-0 bg-[#3B2A20]/50 z-10" />
      </div>
      
      <div className="container ml-0 px-6 md:px-12 lg:pl-16 relative z-20 text-left max-w-2xl lg:w-1/2 fade-in-up">
        {/* Top Label - Adjusted margin and color */}
        <div className="flex flex-col items-start mb-10 mt-16">
          <span className="text-primary-text/90 font-display font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px]">
            Estudio Jurídico Braki & Asoc.
          </span>
          <div className="w-16 h-[1px] bg-accent-gold mt-4" />
        </div>
        
        {/* Main Title - Reduced size to force two exact lines on 1536px+ */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-10 font-bold max-w-4xl">
          Defensa estratégica. <br />
          <span className="text-[#F4EDE2]/90">Soluciones concretas.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl leading-relaxed font-sans">
          Asesoramiento legal integral con enfoque boutique. 
          Excelencia académica y resultados efectivos para cada caso.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <a 
            href="https://wa.me/5491164949605"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gold text-white px-12 py-5 rounded-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#B59640] transition-all w-full sm:w-auto shadow-2xl text-center"
          >
            Contactanos
          </a>
          <a 
            href="#areas-de-practica"
            className="border border-white/40 text-white px-12 py-5 rounded-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-primary-text transition-all w-full sm:w-auto text-center"
          >
            Nuestras Áreas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
