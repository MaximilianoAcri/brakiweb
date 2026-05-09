const WhyChooseUs = () => {
  const differentials = [
    {
      title: "Atención personalizada",
      description: "Tratamos cada asunto como único, manteniendo un contacto directo y constante con el cliente."
    },
    {
      title: "Compromiso total",
      description: "Nos involucramos a fondo en la resolución de cada caso, defendiendo sus intereses como propios."
    },
    {
      title: "Claridad en la comunicación",
      description: "Explicamos procesos complejos en términos simples para que siempre sepa dónde está parado."
    },
    {
      title: "Rapidez de respuesta",
      description: "Entendemos que el tiempo es un factor crítico en asuntos legales y actuamos con celeridad."
    },
    {
      title: "Enfoque estratégico",
      description: "Analizamos cada escenario para encontrar la solución más eficiente y beneficiosa a largo plazo."
    }
  ];

  return (
    <section id="diferenciales" className="py-32 bg-accent-corporate text-white overflow-hidden relative">
      {/* Decorative texture or background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-accent-gold font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Valores del Estudio</h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
              ¿Por qué confiar <br />
              en nuestra firma?
            </h3>
            <p className="text-white/60 text-lg mb-16 max-w-lg leading-relaxed font-sans">
              En Braki & Asoc. combinamos la excelencia técnica con una calidez humana que nos diferencia. 
              No solo resolvemos problemas, construimos soluciones.
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col">
                <span className="text-5xl font-serif text-accent-gold font-bold mb-2">5+</span>
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white/40">Años de experiencia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-serif text-accent-gold font-bold mb-2">95%</span>
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white/40">Casos exitosos</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-10">
              {differentials.map((item, index) => (
                <div key={item.title} className="flex gap-8 group">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 border border-accent-gold/20 rounded-full text-accent-gold font-serif italic text-2xl group-hover:bg-accent-gold group-hover:text-accent-corporate transition-all duration-500">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
