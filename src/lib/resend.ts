import { Resend } from 'resend';

/**
 * Devuelve un cliente de Resend solo cuando la API key está disponible.
 *
 * Esto evita que toda la aplicación falle al importar este módulo cuando
 * RESEND_API_KEY todavía no ha sido configurada (por ejemplo, en desarrollo
 * local o durante un Preview Deployment).
 */
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}
