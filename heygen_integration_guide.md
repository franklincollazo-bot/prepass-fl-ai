# Guía de Automatización PrePass FL AI + HeyGen

Para crear 5000 ventas, necesitamos que el marketing funcione solo. Aquí tienes cómo conectar mis scripts con HeyGen.

## Paso 1: Configurar el Avatar en HeyGen
1. Entra en [HeyGen.com](https://www.heygen.com).
2. Sube una foto tuya profesional (o usa un avatar de stock).
3. Selecciona una voz para cada idioma (HeyGen tiene voces naturales en Español, Creole, Portugués y Francés).

## Paso 2: Automatización vía Zapier (Recomendado)
Puedes conectar esta herramienta conmigo para que los videos se generen en masa:
1. **Trigger (Disparador):** Cada vez que yo cree un nuevo script en un archivo .txt en Google Drive.
2. **Action (Acción):** Zapier envía el texto a HeyGen mediante su API.
3. **Resultado:** HeyGen renderiza el video automáticamente y te lo envía por email o lo sube a tu cuenta de TikTok/Instagram.

## Paso 3: Scripts Listos para Copiar
Usa los guiones que generé en `marketing_scripts.md`.
- **Tip Pro:** Usa la función "Translate" de HeyGen si quieres que tu propia voz se traduzca perfectamente a los otros 4 idiomas manteniendo tu tono.

## Paso 4: Embudo de Ventas (Funnel)
1. **Anuncio en Redes:** Video generado por HeyGen.
2. **Landing Page:** Diseño moderno (ver `frontend/Dashboard_Mockup.jsx`).
3. **Pago:** Stripe ($49.00).
4. **Entrega:** Email automático con acceso al portal y link para agendar la sesión 1-a-1 contigo.
