import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { whatsappLink } from './config'

function App() {
  return (
    <div className="min-h-screen bg-primary-bg selection:bg-accent-gold/30 selection:text-primary-text">
      {/* Lets keyboard and screen-reader users jump past the nav. Hidden until
          focused, so it costs sighted users nothing. */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary-text focus:text-white focus:px-6 focus:py-3 focus:rounded-sm focus:text-sm focus:font-display"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <PracticeAreas />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>

      <Footer />

      {/*
        Floating WhatsApp button.

        Was a bare green circle with a permanent `animate-pulse`: an icon with no
        label, animating forever. Now it is a labelled pill on desktop (the label
        says what happens when you press it) that collapses to a circle on phones
        where horizontal room is scarce. The brand green #25D366 only reaches
        1.98:1 against a white glyph — below the 3:1 WCAG asks of non-text — so
        this uses a darker WhatsApp teal, which measures 5.2:1 against the
        white glyph and the label.
      */}
      <a
        href={whatsappLink()}
        className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-0 md:gap-3 bg-[#0F7A6D] hover:bg-[#0B5F55] text-white p-3.5 md:px-5 md:py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-[0_0_0_6px_rgba(15,122,109,0.20)]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-6 md:h-6 shrink-0" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        <span className="hidden md:inline font-display font-bold text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
          Escribinos
        </span>
      </a>
    </div>
  )
}

export default App
