import { OpenAI } from 'openai';
import { supabase } from '../../lib/supabase';

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  
  if (!openai) {
    return res.status(500).json({ error: 'OpenAI API Key not configured' });
  }

  try {
    const { message, userId, language } = req.body;

    // 1. Obtener contexto del curso (RAG)
    const { data: content } = await supabase.from('course_modules').select('content_es');

    // 2. Consultar a la IA
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: `Eres el tutor experto de PrePass FL AI. Ayudas a estudiantes a pasar el examen de seguros de Florida. Responde siempre en el idioma: ${language}. Usa un tono motivador y profesional.` },
        { role: "user", content: `Contexto del curso: ${JSON.stringify(content)}. Pregunta del estudiante: ${message}` }
      ]
    });

    const aiMessage = response.choices[0].message.content;

    // 3. Guardar interacción
    await supabase.from('interactions').insert({ user_id: userId, query: message, response: aiMessage });

    return res.status(200).json({ reply: aiMessage });
  } catch (error) {
    console.error('AI Tutor Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
