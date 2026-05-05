import { Resend } from 'resend';

/**
 * Cliente de Resend configurado.
 * Asegúrate de tener la variable RESEND_API_KEY en tu archivo .env
 */
export const resend = new Resend(process.env.RESEND_API_KEY);
