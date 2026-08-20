/**
 * Single source of truth for the firm's contact details.
 *
 * The WhatsApp number used to be hardcoded in four separate components, which
 * meant changing it required finding every copy. Import from here instead.
 */

/** Digits only, international format — this is what wa.me expects. */
export const WHATSAPP_NUMBER = '5491164949605';

/** Human-readable version shown in the UI. */
export const WHATSAPP_DISPLAY = '+54 9 11 6494-9605';

export const CONTACT_EMAIL = 'braki.abogados@gmail.com';

export const ADDRESS_STREET = 'Av. Boulogne Sur Mer 820';
export const ADDRESS_LOCALITY = 'Tapiales, Zona Oeste, Buenos Aires';
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_LOCALITY}`;

/** Opens the address in the visitor's default maps app. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_FULL
)}`;

export const OPENING_HOURS = 'Lunes a jueves de 09:00 a 18:00 h';

export const INSTAGRAM_HANDLE = 'braki.abogados';
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/**
 * Calendly booking page for a 30-minute consultation.
 *
 * Deliberately stripped of the tracking parameters the original link carried
 * (utm_source=braze, utm_campaign, lid, back, month). Those came from a
 * marketing email: keeping them would attribute every visitor from this site to
 * that email campaign in Calendly's analytics, and `month=2026-08` would pin the
 * calendar to August 2026 forever.
 */
export const CALENDLY_URL = 'https://calendly.com/braki-abogados/30min';

/** Builds a wa.me link, optionally pre-filling the chat with a message. */
export const whatsappLink = (message?: string): string =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Contact form delivery, via FormSubmit (https://formsubmit.co).
 *
 * FormSubmit needs no account: the endpoint is the destination address itself,
 * and the AJAX variant returns JSON so the page never has to navigate away.
 *
 * ACTIVATION: the very first submission does not deliver. FormSubmit emails
 * CONTACT_EMAIL asking to confirm the address; once that link is clicked, every
 * later submission arrives in the inbox.
 *
 * Optionally set VITE_FORMSUBMIT_TOKEN to the random endpoint token FormSubmit
 * issues after activation. That keeps the address out of the page source, where
 * scrapers would otherwise find it.
 */
const FORMSUBMIT_TOKEN: string | undefined =
  import.meta.env.VITE_FORMSUBMIT_TOKEN || undefined;

export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${
  FORMSUBMIT_TOKEN ?? CONTACT_EMAIL
}`;

/** Subject line of the notification email, so enquiries are easy to filter. */
export const FORM_SUBJECT = 'Nueva consulta desde la web';
