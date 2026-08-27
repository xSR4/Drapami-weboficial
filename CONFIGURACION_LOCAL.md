# Configuración local

1. Copia `.env.example` como `.env.local`.
2. Reemplaza `RESEND_API_KEY` por tu clave real de Resend.
3. No subas `.env.local` a GitHub.
4. Detén el servidor de Next.js y vuelve a ejecutar `npm run dev` después de modificar variables de entorno.

Ejemplo mínimo:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=drapamiconsultorios@gmail.com
CONTACT_FROM_EMAIL="Dra. Pami Web <onboarding@resend.dev>"
```

Cuando el dominio `drapami.pe` esté verificado en Resend:

```env
CONTACT_FROM_EMAIL="Dra. Pami Web <web@drapami.pe>"
```
