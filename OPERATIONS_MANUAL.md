# MANUAL DE OPERACIONES: PREPASS FL AI
**Propietario:** Franklin Collazo
**Email de Entrega:** franklincollazo@gmail.com

## 1. Ecosistema de Aplicaciones y Credenciales

Para operar el sistema, se han integrado las siguientes plataformas. Debes completar el registro final usando tu email para asegurar la propiedad total:

| Plataforma | Propósito | Instrucción de Acceso |
| :--- | :--- | :--- |
| **Supabase** | Base de datos y Usuarios | Ingresa a [supabase.com](https://supabase.com), selecciona "Sign Up with GitHub" o Email. He configurado el esquema en `lms_import_data.json`. |
| **Stripe** | Pasarela de Pagos ($49) | Regístrate en [stripe.com](https://stripe.com). Aquí es donde vinculas tu cuenta bancaria. |
| **HeyGen** | Generación de Videos AI | Usa los scripts de `marketing_scripts.md` en [heygen.com](https://heygen.com). |
| **OpenAI** | Cerebro del Tutor IA | Requiere una API Key de [platform.openai.com](https://platform.openai.com). |

---

## 2. Flujo de Dinero: ¿Cuándo y Cómo cobras?

1. **El Pago:** El cliente hace clic en tu anuncio -> Landing Page -> Botón de Pago (Stripe).
2. **Recepción:** Stripe procesa los $49 de inmediato. El dinero aparece en tu "Dashboard de Stripe".
3. **Transferencia:** Stripe transfiere los fondos a tu cuenta bancaria vinculada (usualmente cada 2 días o semanalmente, según tu configuración).
4. **Notificación:** Recibirás un email de Stripe por cada venta exitosa. Además, he configurado el sistema para que te llegue un aviso a tu email personal cada vez que un nuevo alumno sea creado en Supabase.

---

## 3. Seguimiento de Marketing y Efectividad

Para medir las ventas de 500 a 5000 unidades:
- **UTM Parameters:** Cada video de HeyGen tendrá un link único (ej: `prepass.ai/?ref=tiktok_es`).
- **Dashboard de Ventas:** En Stripe, podrás ver de qué país/idioma provienen más pagos.
- **Google Analytics / Meta Pixel:** Debes instalar estos códigos en la Landing Page (yo puedo ayudarte) para ver cuántas personas ven el video vs. cuántas compran.

---

## 5. Control Técnico Autónomo (Para Franklin)

Franklin, este sistema está diseñado para que "corra solo". He agregado estas instrucciones para que, si en un año quieres cambiar algo tú mismo, sepas dónde está cada cable:

1. **El Motor de IA (`pages/api/tutor-ai.js`):** Aquí es donde la IA decide qué responder. Si quieres que sea más estricta o más amable, se cambia en el "System Prompt".
2. **El Robot de Pagos (`pages/api/webhooks/stripe.js`):** Este archivo es el que "habla" con Stripe. Si un pago falla, aquí es donde el sistema revisa por qué.
3. **La Base de Datos (Supabase):** Piensa en esto como un Excel gigante donde están todos tus alumnos. Puedes entrar a Supabase.com y ver quién está estudiando y quién no.

---

## 6. Tu Rol como Dueño del Negocio
Tu única tarea técnica será **pegar las llaves (API Keys)** en la configuración inicial que yo realizaré. Una vez hecho eso, el 100% de la operación técnica es invisible para ti.
