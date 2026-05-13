import { OpenAI } from 'openai';
import { supabase } from '@/lib/supabase';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { message, userId, language } = req.body;

  // 1. Obtener contexto del curso (RAG)
  const { data: content } = await supabase.from('course_modules').select('content');

  // 2. Consultar a la IA con el rol de Tutor de Seguros de Florida
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: `Eres el tutor experto de PrePass FL AI. Ayudas a estudiantes a pasar el examen de seguros de Florida. Responde siempre en el idioma: ${language}. Usa un tono motivador y profesional.` },
      { role: "user", content: `Contexto del curso: ${JSON.stringify(content)}. Pregunta del estudiante: ${message}` }
    ]
  });

  const aiMessage = response.choices[0].message.content;

  // 3. Guardar interacción para mejorar el curso después
  await supabase.from('interactions').insert({ user_id: userId, query: message, response: aiMessage });

  return res.status(200).json({ reply: aiMessage });
}
