import {
  ADDRESS_FULL,
  CONTACT_EMAIL,
  MAPS_URL,
  OPENING_HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '../config';
import logoClaro from '../assets/logo-claro.webp';

const Footer = () => {
  return (
    <footer className="bg-primary-text text-white py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/*
          A 12-column grid rather than two equal link columns side by side.
          With matching widths and rhythm, the rows of "Navegación" and
          "Contacto" lined up and the eye read them as pairs — as if "Práctica"
          somehow went with the opening hours. Different widths break that, and
          the wider contact column takes up the dead space on the right.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-5">
            {/* The firm's own mark, in its light variant. The artwork is dark brown
                ink on cream, which disappears against this footer, so the ink is
                remapped to cream and gold. It sits here rather than in the navbar
                because the script monogram and the laurel need room to read. */}
            <img
              src={logoClaro}
              alt="Estudio Jurídico Braki & Asoc."
              width={440}
              height={454}
              loading="lazy"
              decoding="async"
              className="mb-8 block w-[210px] h-auto"
            />
            <p className="text-white/70 text-[15px] leading-[1.75] max-w-sm font-sans">
              Defensa estratégica y soluciones reales. 
              Compromiso con la excelencia y la ética profesional en cada caso.
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-3">
              <h2 className="text-accent-gold font-display font-bold uppercase tracking-[0.2em] text-[10px]">Navegación</h2>
              <a href="#inicio" className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2">Inicio</a>
              <a href="#areas-de-practica" className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2">Práctica</a>
              <a href="#diferenciales" className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2">Diferenciales</a>
              <a href="#sobre-el-estudio" className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2">Nosotros</a>
              <a href="#contacto" className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2">Contacto</a>
          </div>


          <div className="lg:col-span-4 flex flex-col space-y-3">
              <h2 className="text-accent-gold font-display font-bold uppercase tracking-[0.2em] text-[10px]">Contacto</h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2"
              >
                {ADDRESS_FULL}
              </a>
              <span className="text-sm text-white/75 font-sans py-2">{OPENING_HOURS}</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 hover:text-white transition-colors font-sans py-2"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 hover:text-white transition-colors font-sans inline-flex items-center gap-2 py-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white/60 text-[10px] font-display uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Estudio Jurídico Braki & Asoc. Todos los derechos reservados.
          </p>
          {/* Plain <a>, not an anchor link: the policy is a separate static page. */}
          <a
            href="/privacidad.html"
            className="text-white/60 hover:text-white transition-colors text-[10px] font-display uppercase tracking-widest text-center md:text-right py-2"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
