import fotoPerfil from '../assets/fotoperfil.webp';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="sobre-el-estudio" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Section */}
          <Reveal className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src={fotoPerfil} 
                  alt="Pablo Matías Braki" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge/Overlay */}
              <div className="absolute -bottom-10 -right-10 bg-accent-gold p-10 text-primary-text shadow-2xl hidden md:block">
                <p className="text-[10px] font-display uppercase tracking-[0.22em] font-bold mb-3 text-primary-text">Fundador</p>
                <p className="text-3xl font-serif font-bold mb-1">Pablo Matías Braki</p>
                <p className="text-primary-text text-xs font-display tracking-widest italic">Abogado</p>
              </div>
            </div>
            
            {/* Background decorative square */}
            <div className="absolute -top-10 -left-10 w-full h-full border-[1px] border-accent-gold/20 -z-10" />
          </Reveal>

          {/* Text Section */}
          <Reveal delay={120} className="w-full lg:w-1/2">
            <p className="text-accent-gold-text font-display font-bold uppercase tracking-[0.22em] text-[10px] mb-6">Sobre el Estudio</p>
            <h2 className="text-5xl md:text-6xl font-serif text-primary-text mb-10 leading-tight">
              Excelencia Jurídica <br />
              con Visión Estratégica.
            </h2>
            
            <div className="space-y-7 text-primary-text/80 leading-[1.78] font-sans">
              <p>
                El <strong className="text-primary-text">Estudio Jurídico Braki & Asoc.</strong> nace con el propósito de redefinir la relación entre el abogado y su cliente. 
                Entendemos que detrás de cada consulta hay una historia, una preocupación y una necesidad de soluciones reales.
              </p>
              <p>
                Liderado por el <strong className="text-primary-text">Dr. Pablo Matías Braki</strong>, nuestro equipo se especializa en navegar la complejidad del sistema legal argentino 
                con agilidad y precisión. Con una sólida formación jurídica y años de experiencia en el sistema legal argentino, 
                aplicamos ese conocimiento con precisión y compromiso en cada caso.
              </p>
              <p>
                Nuestra filosofía es simple: <strong className="text-primary-text">defensa estratégica</strong>. No nos limitamos a responder; nos anticipamos. 
                Ubicados en Tapiales, Zona Oeste, brindamos atención personalizada a particulares y empresas que buscan un respaldo legal serio, 
                moderno y, sobre todo, humano.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-bg flex items-center justify-center text-accent-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-text font-bold text-[11px] font-display uppercase tracking-widest">Matriculado</p>
                  <p className="text-[10px] text-primary-text/75 font-display tracking-widest">CPACF / CALM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-bg flex items-center justify-center text-accent-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-text font-bold text-[11px] font-display uppercase tracking-widest">Especialista</p>
                  <p className="text-[10px] text-primary-text/75 font-display tracking-widest">Civil y Comercial – ART</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
