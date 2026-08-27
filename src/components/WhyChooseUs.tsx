import Contador from './Contador';
import Reveal from './Reveal';

const WhyChooseUs = () => {
  /*
   * DRAFT — for Pablo to approve or correct.
   *
   * The previous five ("Atención personalizada", "Compromiso total",
   * "Claridad en la comunicación", "Rapidez de respuesta", "Enfoque
   * estratégico") were true of every firm in the country, so they
   * differentiated nothing. These say concrete things, and every one of them is
   * grounded in something the site already states: a single named lawyer, a
   * street address in Zona Oeste, a boutique practice.
   *
   * Nothing here promises a result, a price or a response time — those would be
   * claims the firm has not made.
   */
  const differentials = [
    {
      title: "Te atiende el titular",
      description: "No vas a explicar tu caso tres veces ni a hablar con alguien distinto cada vez. El Dr. Braki lleva personalmente cada expediente, desde la primera consulta."
    },
    {
      title: "Estamos en Zona Oeste",
      description: "El estudio está en Tapiales, en Av. Boulogne Sur Mer 820. No tenés que cruzar la ciudad hasta Tribunales para hacer una consulta o firmar un papel."
    },
    {
      title: "Te lo explicamos en castellano",
      description: "Vas a entender en qué instancia está tu causa, qué se presentó y qué sigue. Sin latín, sin tecnicismos y sin que tengas que preguntar dos veces."
    },
    {
      title: "Los plazos no se negocian",
      description: "En ART, en consumidor y en penal, el reloj arranca el primer día. Trabajamos sobre los vencimientos desde que tomamos el caso, no cuando ya están encima."
    },
    {
      title: "Primero la estrategia, después el escrito",
      description: "Antes de presentar algo definimos a dónde queremos llegar y por qué camino. A veces conviene negociar, a veces conviene litigar; la diferencia se decide, no se improvisa."
    }
  ];

  return (
    <section id="diferenciales" className="py-20 md:py-32 bg-accent-corporate text-white overflow-hidden relative">
      {/* Decorative texture. Drawn with a CSS gradient rather than fetched from
          transparenttextures.com — a third-party request on every page load for
          a pattern rendered at 5% opacity was not worth the dependency. */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, #fff 0 1px, transparent 1px 14px)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* The right-hand list already staggered in while this column arrived
              all at once, which read as unfinished. Each block now lands in
              reading order. */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <p className="text-accent-gold font-display font-bold uppercase tracking-[0.22em] text-[10px] mb-6">Valores del Estudio</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
                ¿Por qué confiar <br />
                en nuestra firma?
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-white/75 text-lg mb-16 max-w-lg leading-[1.75] font-sans">
                En Braki & Asoc. combinamos la excelencia técnica con una calidez humana que nos diferencia. 
                No solo resolvemos problemas, construimos soluciones.
              </p>
            </Reveal>

            {/* Only verifiable claims here. A "95% casos exitosos" figure was
                removed: it is unprovable and, for a law firm, advertising
                success rates invites a professional-conduct problem. */}
            <div className="grid grid-cols-2 gap-12">
              <Reveal delay={270} className="flex flex-col">
                <Contador
                  hasta={5}
                  sufijo="+"
                  className="text-5xl font-serif text-accent-gold font-bold mb-2"
                />
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white/70">Años de experiencia</span>
              </Reveal>
              <Reveal delay={380} className="flex flex-col">
                <Contador
                  hasta={6}
                  className="text-5xl font-serif text-accent-gold font-bold mb-2"
                />
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white/70">Áreas de práctica</span>
              </Reveal>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-10">
              {differentials.map((item, index) => (
                <Reveal key={item.title} delay={index * 70} className="flex gap-8 group">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 border border-accent-gold/20 rounded-full text-accent-gold font-serif italic text-2xl group-hover:bg-accent-gold group-hover:text-accent-corporate transition-all duration-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-[15px] leading-[1.75] max-w-md font-sans">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
