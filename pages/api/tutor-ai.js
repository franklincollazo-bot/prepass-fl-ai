import { OpenAI } from 'openai';
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
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
