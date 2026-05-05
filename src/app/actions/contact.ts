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
 * Simula el envío de una notificación por correo electrónico para una nueva consulta.
 * En un entorno de producción, aquí se integraría con un proveedor como Resend o SendGrid.
 * 
 * @param data Los datos de la consulta enviada.
 */
export async function sendContactEmail(data: ContactEmailData) {
  // NOTA: En producción, se usaría un servicio como Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: 'web@drapami.com', to: 'drapamiconsultorios@gmail.com', ... });
  
  console.log('--- NUEVA CONSULTA RECIBIDA ---');
  console.log(`Destinatario principal: drapamiconsultorios@gmail.com`);
  console.log(`Paciente: ${data.fullName}`);
  console.log(`Email: ${data.email}`);
  console.log(`Teléfono: ${data.phoneNumber || 'No proporcionado'}`);
  console.log(`Asunto: ${data.subject}`);
  console.log(`Mensaje: ${data.message}`);
  console.log('-------------------------------');

  // Simulamos el tiempo de procesamiento del servidor
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return { success: true };
}
