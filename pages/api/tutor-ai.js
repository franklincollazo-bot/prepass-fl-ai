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
- Misrepresentation (Tergiversación): Mentir sobre términos o beneficios propios.
- Twisting: Mentir sobre la competencia para forzar reemplazo.
- Churning: Reemplazo interno innecesario para ganar comisión.
- Sliding: Agregar coberturas extras sin permiso.
- Rebating: Dar regalos o parte de la comisión para vender.
- Defamation (Difamación): Mentir sobre la solvencia de otra aseguradora.
- Coercion/Boycott: Obligar a comprar para obtener otro servicio.
- Unfair Discrimination: Diferentes primas para mismo riesgo/clase.
- False Advertising: Anuncios engañosos.
- Regla de Reemplazo: Obliga a dar el "Aviso de Reemplazo" firmado.
- Free Look (Examen Libre): 10 días en salud general (30 días en Medicare/Mayores 65).

CONTENIDO DETALLADO MÓDULO 2 (TIPOS DE PÓLIZAS):

1. GASTOS MÉDICOS MAYORES:
- Deducible: Pago inicial del asegurado.
- Coseguro (Coinsurance): Reparto de gastos (ej. 80/20).
- Stop-Loss: Límite máximo de gasto de bolsillo para el cliente.

2. SISTEMAS ADMINISTRADOS (MANAGED CARE):
- HMO: Red cerrada, requiere Médico de Cuidado Primario (PCP) como Gatekeeper. Pago por Capitación. Prevención es prioridad.
- PPO: Red abierta, descuentos con proveedores preferidos. Puedes salir de la red pagando más. No requiere Gatekeeper.
- POS: Híbrido entre HMO y PPO.

3. INGRESO POR DISCAPACIDAD (DISABILITY):
- Reemplaza ingreso, no paga facturas médicas.
- Período de Eliminación: Espera antes del pago (deducible de tiempo).
- Período de Beneficio: Duración de los pagos.
- Discapacidad Presuntiva: Pérdida total de vista, habla, oído o dos extremidades.

4. SEGUROS GRUPALES:
- Contrato Maestro (Dueño: Empleador).
- Certificado de Seguro (Para el empleado).
- Conversión: 31 días para cambiar a individual sin examen médico.

5. OTROS:
- AD&D: Suma Principal (Muerte/2 extremidades) vs Suma de Capital (1 extremidad).
- Dental y Visión: Coberturas específicas y limitadas.

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
