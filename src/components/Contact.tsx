const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-secondary-bg/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-accent-gold font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Canales de Atención</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-primary-text mb-10 leading-tight">Iniciá tu consulta hoy.</h3>
            
            <div className="space-y-12 mt-12">
              <div className="flex items-start space-x-6">
                <div className="bg-primary-text text-white p-4 rounded-sm shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-text text-xl">Ubicación</h4>
                  <p className="text-primary-text/60 text-sm mt-2 font-sans leading-relaxed">Tapiales, Zona Oeste, Buenos Aires.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary-text text-white p-4 rounded-sm shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-text text-xl">Email</h4>
                  <p className="text-primary-text/60 text-sm mt-2 font-sans leading-relaxed">braki.abogados@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#25D366] text-white p-4 rounded-sm shadow-xl shadow-[#25D366]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-text text-xl">WhatsApp</h4>
                  <p className="text-primary-text/60 text-sm mt-2 font-sans leading-relaxed">+54 9 11 6494-9605</p>
                  <a href="https://wa.me/5491164949605" className="text-accent-gold text-[10px] font-display font-bold uppercase tracking-[0.2em] mt-3 block hover:underline">Chatear ahora</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-10 md:p-16 rounded-sm shadow-2xl border border-secondary-bg/20">
              <form action="https://formspree.io/f/braki.abogados@gmail.com" method="POST" className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="name" className="text-[10px] font-display uppercase tracking-[0.2em] font-bold text-primary-text/50">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="border-b border-secondary-bg py-3 focus:border-accent-gold outline-none transition-colors font-sans"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="email" className="text-[10px] font-display uppercase tracking-[0.2em] font-bold text-primary-text/50">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="border-b border-secondary-bg py-3 focus:border-accent-gold outline-none transition-colors font-sans"
                      placeholder="juan@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label htmlFor="phone" className="text-[10px] font-display uppercase tracking-[0.2em] font-bold text-primary-text/50">Teléfono / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="border-b border-secondary-bg py-3 focus:border-accent-gold outline-none transition-colors font-sans"
                    placeholder="+54 9 11 ..."
                  />
                </div>

                <div className="flex flex-col space-y-3">
                  <label htmlFor="message" className="text-[10px] font-display uppercase tracking-[0.2em] font-bold text-primary-text/50">Tu Consulta</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="border-b border-secondary-bg py-3 focus:border-accent-gold outline-none transition-colors resize-none font-sans"
                    placeholder="Contanos brevemente tu caso..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary-text text-white py-5 rounded-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-accent-corporate transition-all shadow-xl"
                >
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
