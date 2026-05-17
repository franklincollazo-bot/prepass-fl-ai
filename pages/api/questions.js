const QUESTIONS_POOL = {
  1: [
    {
      id: 1,
      question: "¿Qué organización sin fines de lucro ayuda a las aseguradoras a detectar fraude mediante el intercambio de información médica?",
      options: ["OIR", "MIB", "FCRA", "NAIC"],
      answer: "MIB"
    },
    {
      id: 2,
      question: "¿En qué momento debe existir el interés asegurable en una póliza de salud?",
      options: ["Al momento del reclamo", "Al momento de la solicitud", "Al momento de la entrega", "Al momento del examen médico"],
      answer: "Al momento de la solicitud"
    },
    {
      id: 3,
      question: "Si una póliza de seguro es un contrato de Adhesión, ¿cómo se resuelven las ambigüedades en el texto?",
      options: ["A favor de la aseguradora", "A favor del asegurado", "Se anula el contrato", "A favor del agente"],
      answer: "A favor del asegurado"
    },
    {
      id: 4,
      question: "¿Qué tipo de autoridad no está escrita pero es necesaria para que el agente realice sus funciones?",
      options: ["Autoridad Expresa", "Autoridad Implícita", "Autoridad Aparente", "Autoridad Fiduciaria"],
      answer: "Autoridad Implícita"
    },
    {
      id: 5,
      question: "Mezclar los fondos de las primas de los clientes con los fondos personales del agente se conoce como:",
      options: ["Twisting", "Sliding", "Commingling", "Churning"],
      answer: "Commingling"
    },
    {
      id: 6,
      question: "El método STARR de manejo de riesgos incluye 'Transfer'. ¿Cuál es el ejemplo principal de transferencia?",
      options: ["No conducir un auto", "Instalar alarmas", "Comprar una póliza de seguro", "Ahorrar dinero para emergencias"],
      answer: "Comprar una póliza de seguro"
    },
    {
      id: 7,
      question: "¿Cuál es el período de examen libre (Free Look) para seguros de salud en Florida (regla general)?",
      options: ["10 días", "20 días", "30 días", "14 días"],
      answer: "10 días"
    },
    {
      id: 8,
      question: "Un peligro (Peril) se define como:",
      options: ["Una condición que aumenta la pérdida", "La causa de la pérdida", "La incertidumbre de pérdida", "La deshonestidad del cliente"],
      answer: "La causa de la pérdida"
    },
    {
      id: 9,
      question: "¿Qué ley federal garantiza que el solicitante sea notificado si se solicita un reporte de investigación del consumidor?",
      options: ["HIPAA", "MIB Act", "Fair Credit Reporting Act (FCRA)", "Social Security Act"],
      answer: "Fair Credit Reporting Act (FCRA)"
    },
    {
      id: 10,
      question: "Inducir a un cliente a reemplazar su póliza actual mediante comparaciones engañosas de otra compañía se llama:",
      options: ["Churning", "Twisting", "Sliding", "Rebating"],
      answer: "Twisting"
    }
  ]
};

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).send();
  
  const { chapterId } = req.query;
  const questions = QUESTIONS_POOL[chapterId] || [];
  
  // Barajar y devolver 5-10 preguntas aleatorias
  const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  
  return res.status(200).json(shuffled);
}
