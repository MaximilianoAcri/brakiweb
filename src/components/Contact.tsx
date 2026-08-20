import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import {
  ADDRESS_LOCALITY,
  ADDRESS_STREET,
  CALENDLY_URL,
  CONTACT_EMAIL,
  FORM_ENDPOINT,
  FORM_SUBJECT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  OPENING_HOURS,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '../config';
import Reveal from './Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_VALUES = { name: '', email: '', phone: '', message: '' };

const Contact = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState<Status>('idle');
  /** Honeypot: real users never see this field, bots fill everything in. */
  const [botField, setBotField] = useState('');

  const update =
    (field: keyof typeof INITIAL_VALUES) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [field]: event.target.value }));

  /** Formats the enquiry as a WhatsApp message, used as the no-backend fallback. */
  const buildWhatsappMessage = () =>
    [
      `Hola, soy ${values.name}.`,
      '',
      values.message,
      '',
      `Email: ${values.email}`,
      `Teléfono: ${values.phone}`,
    ].join('\n');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Silently accept the submission if the honeypot was filled, so the bot
    // gets no signal that it was rejected.
    if (botField) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: values.name,
          email: values.email,
          telefono: values.phone,
          consulta: values.message,
          _subject: FORM_SUBJECT,
          // Sets the notification's Reply-To, so hitting reply answers the client.
          _replyto: values.email,
          _template: 'table',
          _honey: '',
        }),
      });

      // FormSubmit reports failures with HTTP 200 and {"success": "false"} in
      // the body — checking response.ok alone would tell a client their enquiry
      // went through when it did not. The body is the source of truth.
      const result = (await response.json()) as { success?: string; message?: string };

      if (!response.ok || result.success !== 'true') {
        throw new Error(result.message ?? `FormSubmit responded ${response.status}`);
      }

      setStatus('success');
      setValues(INITIAL_VALUES);
    } catch {
      // Delivery failed — offer WhatsApp rather than losing the enquiry.
      setStatus('error');
    }
  };

  // No `outline-none` here: it used to suppress the only focus indicator a
  // keyboard user gets. The global :focus-visible rule in index.css draws it.
  const inputClass =
    'border-b border-secondary-bg py-3 focus:border-accent-gold transition-colors font-sans';
  const labelClass =
    'text-[10px] font-display uppercase tracking-[0.2em] font-bold text-primary-text/75';

  return (
    <section id="contacto" className="py-20 md:py-32 bg-secondary-bg/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <Reveal className="w-full lg:w-2/5">
            <p className="text-accent-gold-text font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Canales de Atención</p>
            <h2 className="text-5xl md:text-6xl font-serif text-primary-text mb-10 leading-tight">Iniciá tu consulta hoy.</h2>

            {/* Booking gets its own block above the channel list: a scheduled
                meeting is the highest-intent action on the page. */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 flex items-center gap-6 bg-accent-gold text-primary-text p-8 rounded-sm shadow-xl shadow-accent-gold/20 hover:bg-[#B59640] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                <span className="block font-serif font-bold text-xl">Agendá tu reunión</span>
                <span className="block text-primary-text/90 text-sm mt-1 font-sans">
                  Reservá 30 minutos en el horario que te quede cómodo.
                </span>
              </span>
              <span
                className="ml-auto text-2xl transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <div className="space-y-12 mt-12">
              <div className="flex items-start space-x-6">
                <div className="bg-primary-text text-white p-4 rounded-sm shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary-text text-xl">Ubicación</h3>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-text/70 text-sm mt-2 font-sans leading-relaxed block hover:text-accent-gold transition-colors py-1"
                  >
                    {ADDRESS_STREET}
                    <br />
                    {ADDRESS_LOCALITY}
                  </a>
                  <p className="text-primary-text/70 text-sm mt-3 font-sans leading-relaxed">
                    <span className="font-bold text-primary-text">Horario:</span> {OPENING_HOURS}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary-text text-white p-4 rounded-sm shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary-text text-xl">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary-text/75 text-sm mt-2 font-sans leading-relaxed block hover:text-accent-gold transition-colors py-1"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#0F7A6D] text-white p-4 rounded-sm shadow-xl shadow-[#0F7A6D]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary-text text-xl">WhatsApp</h3>
                  <p className="text-primary-text/75 text-sm mt-2 font-sans leading-relaxed">{WHATSAPP_DISPLAY}</p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-gold-text text-[10px] font-display font-bold uppercase tracking-[0.2em] mt-3 block hover:underline py-2"
                  >
                    Chatear ahora
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white p-4 rounded-sm shadow-xl shadow-[#DD2A7B]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary-text text-xl">Instagram</h3>
                  <p className="text-primary-text/75 text-sm mt-2 font-sans leading-relaxed">@{INSTAGRAM_HANDLE}</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-gold-text text-[10px] font-display font-bold uppercase tracking-[0.2em] mt-3 block hover:underline py-2"
                  >
                    Seguinos
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Section */}
          <Reveal delay={120} className="w-full lg:w-3/5">
            <div className="bg-white p-10 md:p-16 rounded-sm shadow-2xl border border-secondary-bg/20">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Honeypot — visually hidden from users, irresistible to bots. */}
                <div className="absolute w-px h-px -m-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">No completar</label>
                  <input
                    type="text"
                    id="company"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(event) => setBotField(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="name" className={labelClass}>Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={update('name')}
                      className={inputClass}
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="email" className={labelClass}>Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={update('email')}
                      className={inputClass}
                      placeholder="juan@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label htmlFor="phone" className={labelClass}>Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update('phone')}
                    className={inputClass}
                    placeholder="+54 9 11 ..."
                  />
                </div>

                <div className="flex flex-col space-y-3">
                  <label htmlFor="message" className={labelClass}>Tu Consulta</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={values.message}
                    onChange={update('message')}
                    className={`${inputClass} resize-none`}
                    placeholder="Contanos brevemente tu caso..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary-text text-white py-5 rounded-sm font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-accent-corporate transition-all shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Consulta'}
                </button>

                {/* aria-live so screen readers announce the result without a page change. */}
                <div role="status" aria-live="polite">
                  {status === 'success' && (
                    <p className="text-sm font-sans text-green-700 bg-green-50 border border-green-200 rounded-sm p-4">
                      ¡Gracias! Recibimos tu consulta y te vamos a responder a la brevedad.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm font-sans text-red-700 bg-red-50 border border-red-200 rounded-sm p-4">
                      No pudimos enviar tu consulta. Escribinos por{' '}
                      <a
                        href={whatsappLink(buildWhatsappMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold"
                      >
                        WhatsApp
                      </a>{' '}
                      o a{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-bold">
                        {CONTACT_EMAIL}
                      </a>.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
