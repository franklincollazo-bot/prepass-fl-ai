import { OpenAI } from 'openai';
import { supabase } from '../../lib/supabase';

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const INSURANCE_KNOWLEDGE_BASE = `
CONOCIMIENTO MAESTRO - FLORIDA HEALTH INSURANCE (2-40)
- Eres el Tutor de Maná Academy (PrePass FL AI).
- Tu objetivo es que el estudiante apruebe el examen estatal de Florida.
- Sé preciso, conciso y motivador.

CONCEPTOS CLAVE MÓDULO 1:
1. Elementos del Contrato: Acuerdo (Oferta y Aceptación), Consideración (Prima y Declaraciones), Partes Competentes (18+ años, mente sana), Propósito Legal.
2. Contrato de Adhesión: La empresa redacta, el cliente acepta. Ambigüedades a favor del cliente.
3. Contrato Aleatorio: Intercambio desigual de valores.
4. Contrato Unilateral: Solo la aseguradora hace una promesa legalmente vinculante.
5. Contrato Condicional: El cumplimiento depende de un evento futuro (la pérdida).
6. Representaciones: Declaraciones que el cliente cree verdaderas. Garantías: Verdades absolutas.
7. Ocultación (Concealment): Omisión intencional de datos materiales. Puede anular la póliza.
8. MIB (Medical Information Bureau): Intercambio de info médica para prevenir fraudes.
9. FCRA (Fair Credit Reporting Act): Protege la privacidad del consumidor en reportes de crédito.
10. Regla de Oro: Si no hay pago inicial, se requiere Firma de Declaración de Buena Salud al entregar la póliza.
11. Riesgo Puro: Solo posibilidad de pérdida (Asegurable). Riesgo Especulativo: Posibilidad de ganancia o pérdida (No asegurable).
12. Selección Adversa: Riesgos pobres que buscan seguro más que los riesgos normales.
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
