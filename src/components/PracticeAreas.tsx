import { useState } from 'react';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

const iconClass = 'h-8 w-8';

/**
 * One practice area. The full descriptions run ~500 characters each; showing
 * all six in full made this section 30% of the entire page. Collapsed to four
 * lines with an expander, the copy is still there for anyone who wants it.
 */
const AreaCard = ({ title, description, icon }: { title: string; description: string; icon: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-xl motion-safe:hover:-translate-y-1 transition-all duration-500 group border-b-2 border-transparent hover:border-accent-gold">
      <div className="text-accent-gold mb-6 group-hover:scale-110 transition-transform duration-500 motion-reduce:group-hover:scale-100">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-primary-text mb-4">{title}</h3>
      <p className={`text-primary-text/75 text-sm leading-relaxed font-sans ${expanded ? '' : 'line-clamp-3'}`}>
        {description}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        className="mt-4 self-start text-accent-gold-text text-[10px] font-display font-bold uppercase tracking-[0.2em] hover:underline py-2"
      >
        {expanded ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};

const PracticeAreas = () => {
  const areas = [
    {
      title: "Accidentes de Trabajo – ART",
      description: "Respaldamos a los trabajadores que han sufrido un accidente laboral o enfermedad profesional, exigiendo el reconocimiento integral de las indemnizaciones y prestaciones médicas correspondientes. Actuamos con firmeza ante las Aseguradoras de Riesgos del Trabajo (ART), Comisiones Médicas y el fuero judicial, combatiendo rechazos de siniestros, altas médicas prematuras o fijaciones de incapacidad insuficientes. Evaluamos cada situación de forma individual para trazar el camino más seguro hacia una reparación justa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Defensa del Consumidor",
      description: "Protegemos los derechos de los usuarios frente a incumplimientos de empresas, proveedores y prestadores de servicios. Nos hacemos cargo de reclamos complejos relacionados con planes de ahorro, concesionarias, entidades financieras, seguros y contratos de consumo. Nuestro objetivo es alcanzar una solución ágil y eficiente, agotando las instancias de negociación administrativa o avanzando con acciones judiciales contundentes cuando la situación lo requiera.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Daños y Perjuicios",
      description: "Reclamamos la reparación integral del daño sufrido en accidentes de tránsito, casos de mala praxis médica y supuestos de responsabilidad civil. Cuantificamos con precisión cada rubro indemnizatorio —incapacidad sobreviniente, daño moral, gastos médicos, lucro cesante y tratamiento psicológico— respaldando el reclamo con prueba pericial sólida. Impulsamos la negociación con las aseguradoras cuando la propuesta resulta razonable, y avanzamos con la vía judicial sin dilaciones cuando la oferta no refleja el perjuicio realmente padecido.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Derecho Civil y Comercial",
      description: "Ofrecemos asesoramiento integral y representación estratégica frente a conflictos civiles, comerciales o incumplimientos contractuales entre particulares y empresas. Gestionamos con eficacia procesos vinculados a contratos de locación, cobros, restitución de inmuebles y desalojos. Ante cada controversia, evaluamos detalladamente el escenario para identificar la alternativa jurídica y económica más conveniente, priorizando siempre la protección absoluta de sus intereses patrimoniales.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Derecho Penal",
      description: "Ejercemos la representación técnica en causas penales con absoluta rigurosidad, asumiendo tanto la defensa de personas imputadas como la querella en representación de víctimas. Trabajamos desde las etapas iniciales del proceso para diseñar una estrategia a medida, garantizando un acompañamiento cercano en denuncias, indagatorias, excarcelaciones y producción de prueba, hasta la instancia de juicio y recursos. Nuestro compromiso se basa en combinar la excelencia técnica procesal con el resguardo estricto de la confidencialidad de cada caso.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Ejecuciones",
      description: "Maximizamos la recuperación ágil y efectiva de créditos a través del cobro extrajudicial y la ejecución forzada de deudas. Llevamos adelante la ejecución de pagarés, cheques, contratos, alquileres atrasados y otras obligaciones exigibles, impulsando el seguimiento estricto de embargos y medidas cautelares. Abordamos cada expediente con una visión pragmática, asegurando que el reclamo no solo sea viable jurídicamente, sino económicamente efectivo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="areas-de-practica" className="py-20 md:py-32 bg-primary-bg">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-accent-gold-text font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Áreas de Especialización</p>
          <h2 className="text-5xl md:text-6xl font-serif text-primary-text mb-8">Práctica Profesional</h2>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto" />
        </Reveal>

        {/* items-stretch keeps every card in a row the same height even though
            the descriptions differ in length. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {areas.map((area, index) => (
            // Cap the stagger at three steps: the grid is three wide, so the
            // fourth card starts a new row and should not wait on the first.
            <Reveal key={area.title} delay={(index % 3) * 90}>
              <AreaCard {...area} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
