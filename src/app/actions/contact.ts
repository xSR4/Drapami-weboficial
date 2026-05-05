'use server';

/**
 * @fileOverview Acciones de servidor para manejar las comunicaciones del formulario de contacto.
 */

import { resend } from '@/lib/resend';

interface ContactEmailData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

/**
 * Envía una notificación por correo electrónico para una nueva consulta utilizando Resend.
 * 
 * @param data Los datos de la consulta enviada.
 */
export async function sendContactEmail(data: ContactEmailData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn('RESEND_API_KEY no configurada en las variables de entorno.');
    return { success: false, error: 'API Key no configurada' };
  }

  try {
    const { data: resData, error } = await resend.emails.send({
      from: 'Dra. Pami Web <onboarding@resend.dev>', // Nota: En producción usar un dominio verificado
      to: ['drapamiconsultorios@gmail.com'],
      subject: `Nueva Consulta Web: ${data.subject}`,
      html: `
        <div style="font-family: sans-serif; color: #2D3142; line-height: 1.6;">
          <h2 style="color: #5AA1D8;">Nueva consulta recibida</h2>
          <p>Has recibido un nuevo mensaje desde el formulario de contacto de tu landing page.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Paciente/Padre:</strong> ${data.fullName}</p>
          <p><strong>Email de contacto:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phoneNumber || 'No proporcionado'}</p>
          <p><strong>Asunto:</strong> ${data.subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <p><strong>Mensaje:</strong></p>
            <p>${data.message}</p>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">Este es un mensaje automático generado por tu sitio web.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return { success: false, error };
    }

    return { success: true, id: resData?.id };
  } catch (error) {
    console.error('Error inesperado al enviar email:', error);
    return { success: false, error };
  }
}
