import { OpenAI } from 'openai';
import { supabase } from '../../lib/supabase';

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
- Partes Competentes: Capacidad legal, edad legal y lucidez mental.
- Propósito Legal: Interés asegurable y conformidad con la ley.

2. CARACTERÍSTICAS LEGALES:
- Adhesión (Adhesion): Preparado por una parte (asegurador). El asegurado "se adhiere" sin negociar. Ambigüedades se resuelven a favor del asegurado.
- Aleatorio (Aleatory): Intercambio desigual de valores. Las primas pagadas son pequeñas frente al beneficio por muerte o reclamo.
- Unilateral: Solo una parte (asegurador) hace una promesa exigible legalmente.
- Condicional: El cumplimiento depende de que ocurran condiciones específicas (como la pérdida cubierta).
- Personal: El contrato es entre la aseguradora y el individuo; no se puede transferir a otro sin consentimiento de la empresa.

3. PROCESOS DE CAMPO Y SUSCRIPCIÓN (FIELD UNDERWRITING):
- El Agente es el "Suscriptor de Campo". Debe prevenir la Selección Adversa (riesgos pobres que buscan seguro más que los normales).
- Solicitud (Application): Es el documento principal. Se divide en Parte 1 (Info General) y Parte 2 (Historial Médico).
- Firmas Requeridas: Agente y Solicitante (y dueño si es distinto).
- Cambios en Solicitud: Tachar, corregir, iniciales del cliente. Nunca borrar o usar corrector.
- Recibo Condicional: Cobertura efectiva desde la fecha de solicitud o examen médico (lo último), SI el riesgo es aceptable según las normas de la empresa.
- Entrega de Póliza: Si la prima no se pagó con la solicitud, el agente debe recolectar la prima y obtener una "Declaración de Buena Salud" firmada por el asegurado al momento de la entrega.

4. FUENTES DE INFORMACIÓN Y PRIVACIDAD:
- MIB (Medical Information Bureau): Organización sin fines de lucro de aseguradoras. Almacena info médica codificada para detectar fraudes.
- FCRA (Fair Credit Reporting Act): Protege la privacidad del consumidor. El asegurador debe avisar al cliente si se solicita un informe de crédito o investigación.
- Informes de Agente: El agente comunica sus observaciones sobre el estilo de vida del cliente a la aseguradora.
- Exámenes Médicos: Pagados por la aseguradora. Pueden incluir APS (Declaración de Médico Tratante) o exámenes de paramédicos.

5. OTROS CONCEPTOS:
- Riesgo Puro (Asegurable): Solo pérdida. Riesgo Especulativo (No asegurable): Ganancia o pérdida.
- Peligro (Peril): Causa de pérdida. Peligro Físico, Moral (honestidad), Morale (descuido).
- Garantía (Warranty): Verdad absoluta. Representación (Representation): Verdad según el leal saber y entender.
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
