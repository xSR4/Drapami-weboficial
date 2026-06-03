'use server';

import { resend } from '@/lib/resend';

interface ContactEmailData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Error: RESEND_API_KEY no está configurada.');
    return { success: false, error: 'RESEND_API_KEY no configurada' };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || 'r.alva@pucp.edu.pe';

  try {
    const { data: resData, error } = await resend.emails.send({
      from: 'Dra. Pami Web <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: data.email,
      subject: `Nueva Consulta: ${data.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #5AA1D8; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Consulta Web</h1>
          </div>

          <div style="padding: 24px; color: #1e293b;">
            <p><strong>Nombre:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono/WhatsApp:</strong> ${data.phoneNumber || 'No proporcionado'}</p>
            <p><strong>Asunto:</strong> ${data.subject}</p>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

            <p><strong>Mensaje:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; font-style: italic;">
              ${data.message.replace(/\n/g, '<br/>')}
            </div>
          </div>

          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
            Este mensaje fue enviado desde el formulario de contacto de drapami.com
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend API:', JSON.stringify(error, null, 2));
      return { success: false, error };
    }

    console.log('Correo enviado correctamente:', resData);
    return { success: true, data: resData };
  } catch (error) {
    console.error('Error inesperado al enviar el email:', error);
    return { success: false, error };
  }
}