import fondoHero from '../assets/Fondohero.webp';
import { CALENDLY_URL, whatsappLink } from '../config';
import emblema from '../assets/emblema-claro.webp';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fondoHero}
          /* Decorative background sitting behind a colour overlay — an empty alt
             keeps screen readers from announcing it as content. */
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-right md:object-center motion-safe:animate-[heroZoom_24s_ease-out_forwards]"
        />
        {/* Color Overlay: #3B2A20 with 50% opacity */}
        <div className="absolute inset-0 bg-[#3B2A20]/50 z-10" />
      </div>
      
      <div className="container ml-0 px-6 md:px-12 lg:pl-16 relative z-20 text-left max-w-2xl lg:max-w-none lg:w-3/5 xl:w-1/2 fade-in-up">
        {/* Top Label - Adjusted margin and color */}
        <div className="flex flex-col items-start mb-8">
          {/* The firm's emblem, in its light variant so it reads against the
              photo. Only the crest is used — the "Estudio Juridico" and tagline
              lines baked into the full logo are illegible at this size and would
              repeat the headline. Eager, not lazy: it is above the fold. */}
          <img
            src={emblema}
            alt="Estudio Jurídico Braki & Asoc."
            width={355}
            height={300}
            loading="eager"
            decoding="async"
            className="h-[72px] md:h-[112px] lg:h-[130px] w-auto"
          />
          <div className="w-16 h-[1px] bg-accent-gold mt-5" />
        </div>
        
        {/* Main Title - Reduced size to force two exact lines on 1536px+ */}
        <h1 className="text-4xl md:text-5xl xl:text-[3.5rem] font-serif text-white leading-[1.1] mb-10 font-bold max-w-4xl">
          Defensa estratégica. <br />
          <span className="text-[#F4EDE2]/90">Soluciones concretas.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-xl leading-relaxed font-sans">
          Accidentes de trabajo y ART, daños y perjuicios, defensa del consumidor,
          civil y comercial. Atención personalizada en Tapiales, Zona Oeste.
        </p>
        
        {/* Buttons */}
        {/* Booking is the primary action. It used to live only in the navbar,
            which collapses into the burger below 1024px — leaving the highest
            intent action invisible on phones and tablets. */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gold text-primary-text px-8 md:px-10 py-5 rounded-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap hover:bg-[#D9BC85] transition-all w-full sm:w-auto shadow-2xl text-center inline-flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendá tu reunión
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/70 text-white px-8 md:px-10 py-5 rounded-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap hover:bg-white hover:text-primary-text transition-all w-full sm:w-auto text-center inline-flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
            </svg>
            Escribinos ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
