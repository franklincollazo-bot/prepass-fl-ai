import { OpenAI } from 'openai';

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const INSURANCE_KNOWLEDGE_BASE = `
CONOCIMIENTO INTEGRAL - FLORIDA HEALTH INSURANCE (2-40)
- Eres el Tutor de Maná Academy (PrePass FL AI).
- Tu objetivo es que el estudiante apruebe el examen estatal de Florida con dominio total de la materia.
- Sé preciso, conciso y capaz de profundizar en explicaciones técnicas si el alumno lo solicita.

CONTENIDO DETALLADO MÓDULO 1:

1. FUNDAMENTOS DEL CONTRATO:
- Acuerdo (Oferta y Aceptación): La oferta ocurre cuando el solicitante envía la aplicación y paga la prima inicial. La aceptación ocurre cuando el asegurador emite la póliza.
- Consideración: Valor intercambiado. Para el asegurado: prima + declaraciones en solicitud. Para el asegurador: promesa de pagar beneficios.
- Partes Competentes: Capacidad legal, edad legal (18+) y lucidez mental.
- Propósito Legal: Interés asegurable (debe existir al momento de la SOLICITUD) y conformidad con la ley.

2. CARACTERÍSTICAS LEGALES:
- Adhesión (Adhesion): Preparado por una parte (asegurador). El asegurado "se adhiere" sin negociar. Ambigüedades se resuelven a favor del asegurado.
- Aleatorio (Aleatory): Intercambio desigual de valores. Las primas pagadas son pequeñas frente al beneficio.
- Unilateral: Solo una parte (asegurador) hace una promesa exigible legalmente.
- Condicional: El cumplimiento depende de que ocurran condiciones específicas.

3. PROCESOS DE CAMPO Y SUSCRIPCIÓN:
- El Agente es el "Suscriptor de Campo". Debe prevenir la Selección Adversa.
- Recibo Condicional: Cobertura efectiva desde la fecha de solicitud o examen médico (lo último), SI el riesgo es aceptable.
- Declaración de Buena Salud: Obligatoria si la prima no se pagó con la solicitud.
- Firmas requeridas: Agente, Solicitante y Dueño de la póliza (si aplica).

4. PRÁCTICAS DESLEALES EN FLORIDA (UNFAIR TRADE PRACTICES):
- Misrepresentation (Tergiversación): Mentir sobre términos, beneficios o dividendos de una póliza propia.
- Twisting: Engañar a un cliente para que reemplace su póliza actual de OTRA compañía por una nueva, perjudicándolo para ganar comisión.
- Churning: Engañar a un cliente para que reemplace su póliza actual de la MISMA compañía por una nueva, usando los valores de la anterior para ganar comisión (Reemplazo Interno).
- Sliding: Agregar coberturas o servicios extras a una póliza sin el consentimiento informado del cliente o decir que son obligatorios cuando no lo son.
- Rebating: Dar cualquier incentivo (parte de la comisión, regalos caros, etc.) que no esté especificado en la póliza para inducir la venta.
- Defamation (Difamación): Hacer declaraciones falsas o maliciosas sobre la situación financiera de OTRA aseguradora.
- Coercion/Boycott: Usar fuerza o presión para restringir el comercio o forzar a un cliente a comprar a un agente específico.
- Unfair Discrimination: Cobrar diferentes tarifas a personas del mismo riesgo o clase.
- False Advertising: Anuncios engañosos en cualquier medio.
- Regla de Reemplazo: Proceso legal que obliga a dar el "Aviso de Reemplazo" firmado por el cliente y el agente.
- Free Look (Examen Libre): 10 días en salud general (30 días en Medicare/Suplementos). El tiempo empieza al ENTREGAR la póliza.

CONTENIDO DETALLADO MÓDULO 2 (TIPOS DE PÓLIZAS):
- Incapacidad (Disability): Own Occ (su ocupación) vs Any Occ (cualquier ocupación). Período de Eliminación (deducible de tiempo) y Período de Beneficio.
- Gastos Médicos Mayores: Deducible, Coseguro (80/20), Stop-Loss (límite de bolsillo).
- HMO: Gatekeeper (Médico de Cuidado Primario), Copagos, Red Cerrada, Capitación.
- PPO: Red Abierta, Proveedores Preferidos, Mayores costos fuera de la red.
- COBRA: 18 meses (despido), 36 meses (muerte/divorcio). Aplicable a grupos de 20+ empleados.
- Conversión Grupal: 31 días para convertir a individual sin prueba de asegurabilidad.
- Medicare: Parte A (Hospital), Parte B (Médicos), Parte C (Advantage), Parte D (Medicamentos).
- Medicaid: Para personas con bajos ingresos y recursos.

CONTENIDO DETALLADO MÓDULO 3 (PROVISIONES Y CLÁUSULAS):
- Contrato Completo (Entire Contract): Póliza + Aplicación + Endosos. Solo un oficial de la compañía puede hacer cambios.
- Período de Gracia: 7 días (semanal), 10 días (mensual), 31 días (demás).
- Reincorporación (Reinstatement): Automática tras 45 días si no hay rechazo. Cobertura de accidentes inmediata; enfermedades tras 10 días.
- Aviso de Reclamo: 20 días. Formas de Reclamo: 15 días. Prueba de Pérdida: 90 días.
- Límite de Tiempo en Ciertas Defensas: 2 años (Incontestabilidad).
- Examen Físico y Autopsia: Asegurador paga los costos.
- Renovabilidad:
  * No Cancelable: No cambia prima ni beneficios.
  * Renovable Garantizado: Puede subir la prima por clase, pero no cancelar.
  * Condicionalmente Renovable: Puede cancelar por condiciones específicas (ej. jubilación).
  * Opcionalmente Renovable: Asegurador decide en cada aniversario.

ESTRATEGIAS PARA EL EXAMEN PEARSON VUE:
- Cuidado con "EXCEPTO", "NO", "FALSO": Estas preguntas buscan la opción incorrecta.
- Distractores Brillantes: Opciones que suenan muy profesionales pero no responden la pregunta específica.
- Regla de Oro: Si dos opciones son opuestas, una de ellas suele ser la correcta.
- Práctica: Siempre recomienda leer la pregunta completa dos veces antes de elegir.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  
  if (!openai) {
    return res.status(500).json({ error: 'OpenAI API Key not configured' });
  }

  try {
    const { message, language = 'es' } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { 
          role: "system", 
          content: `Eres el tutor experto de Maná Academy (PrePass FL AI). Ayudas a estudiantes a pasar el examen de seguros de Florida (2-40). 
          Responde siempre en el idioma solicitado (${language}). 
          Usa este conocimiento base para tus respuestas: ${INSURANCE_KNOWLEDGE_BASE}. 
          Tus respuestas deben ser precisas, concisas y directas al grano, como un mentor experimentado.` 
        },
        { role: "user", content: message }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    const aiMessage = response.choices[0].message.content;

    return res.status(200).json({ reply: aiMessage });
  } catch (error) {
    console.error('AI Tutor Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
