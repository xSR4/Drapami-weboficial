# Fase 1 — SEO técnico, analítica y performance

## Código completado
- [x] Centralizar datos del sitio, contacto, dirección, redes y WhatsApp.
- [x] Implementar metadata SEO global con metadataBase, title template y description.
- [x] Implementar metadata específica para Home, Tratamientos y Sedación.
- [x] Implementar canonical URLs.
- [x] Implementar Open Graph y Twitter metadata.
- [x] Crear robots.txt mediante src/app/robots.ts.
- [x] Crear sitemap.xml mediante src/app/sitemap.ts.
- [x] Implementar JSON-LD tipo Dentist/LocalBusiness.
- [x] Optimizar imágenes locales a WebP y eliminar unoptimized.
- [x] Configurar formatos AVIF/WebP en Next.js.
- [x] Centralizar tracking de eventos GA4.
- [x] Medir clics en WhatsApp con placement/service/location.
- [x] Medir clics en teléfono y correo.
- [x] Medir generate_lead en el formulario de contacto.
- [x] Medir interacciones con el asistente sin enviar el texto escrito por el usuario.
- [x] Enmascarar formularios sensibles para Clarity.
- [x] Reemplazar wa.link por wa.me directo y medible.
- [x] Corregir destinatario/configuración del formulario de contacto.
- [x] Añadir .env.example documentando variables requeridas.
- [x] Crear página 404 orientada a recuperación de conversión.

## Plataforma pendiente
- [ ] Vercel: configurar variables de entorno de producción.
- [ ] Vercel: definir www.drapami.pe como dominio principal y redirigir el dominio alternativo.
- [ ] Vercel: desplegar primero una Preview y validar visualmente Home, Tratamientos y Sedación.
- [ ] GA4: confirmar Measurement ID de producción.
- [ ] GA4: habilitar Enhanced Measurement.
- [ ] GA4: marcar whatsapp_click, generate_lead y phone_click como Key Events.
- [ ] GA4: crear dimensiones personalizadas de evento: placement, service, location, lead_source y form_name.
- [ ] GA4/Google Ads: vincular ambas cuentas cuando se prepare la estrategia SEM.
- [ ] Search Console: crear/verificar propiedad de dominio drapami.pe mediante DNS.
- [ ] Search Console: enviar https://www.drapami.pe/sitemap.xml.
- [ ] Search Console: inspeccionar /, /tratamientos y /sedacion después del despliegue.
- [ ] Google: validar el JSON-LD publicado con Rich Results Test / Schema Validator.
- [ ] Microsoft Clarity: revisar pertinencia y cumplimiento por tratarse de una web de odontopediatría orientada a padres; mantenerlo desactivado si no se valida.
- [ ] Resend: verificar el dominio de envío y confirmar SPF/DKIM antes de usar web@drapami.pe en producción.
- [ ] Performance: ejecutar PageSpeed Insights móvil y escritorio después del despliegue.
- [ ] QA: comprobar que todos los CTA registran eventos y que el formulario entrega correo correctamente.

## Criterio de cierre de Fase 1
La fase queda cerrada cuando el código está desplegado en producción, Search Console recibe el sitemap, GA4 muestra los eventos clave, el formulario entrega correos y se valida rendimiento/SEO sin errores críticos.
