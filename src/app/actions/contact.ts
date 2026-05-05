'use server';

/**
 * @fileOverview Acciones de servidor para manejar las comunicaciones del formulario de contacto.
 */

interface ContactEmailData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

/**
 * En el futuro se puede implementar aquí la lógica de envío de correos.
 * Por ahora la lógica se maneja directamente en el cliente con Firestore.
 */
export async function sendContactEmail(data: ContactEmailData) {
  console.log('Simulación de envío de email:', data);
  return { success: true };
}
