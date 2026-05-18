const QUESTIONS_POOL = {
  1: [
    {
      id: 1,
      topic: "Regulación",
      question: "Todas las siguientes organizaciones ayudan a regular la industria de seguros en Florida, EXCEPTO:",
      options: ["MIB (Medical Information Bureau)", "OIR (Office of Insurance Regulation)", "DFS (Department of Financial Services)", "La Legislatura de Florida"],
      answer: "MIB (Medical Information Bureau)"
    },
    {
      id: 2,
      topic: "Elementos Legales",
      question: "¿Cuál de los siguientes NO es un elemento necesario para que un contrato de seguro sea legalmente vinculante?",
      options: ["Acuerdo (Oferta y Aceptación)", "Consideración", "Propósito Legal", "Autoridad Aparente"],
      answer: "Autoridad Aparente"
    },
    {
      id: 3,
      topic: "Tipos de Contrato",
      question: "En un contrato de Adhesión, si existe una ambigüedad en el lenguaje de la póliza, ¿cuál de los siguientes enunciados es CORRECTO?",
      options: ["El tribunal favorecerá a la aseguradora", "La póliza se anula inmediatamente", "El tribunal favorecerá al asegurado debido al carácter del contrato", "El agente es responsable de pagar los daños"],
      answer: "El tribunal favorecerá al asegurado debido al carácter del contrato"
    },
    {
      id: 4,
      topic: "Autoridad",
      question: "Todas las siguientes son formas de autoridad de un agente, EXCEPTO:",
      options: ["Autoridad Expresa", "Autoridad Fiduciaria", "Autoridad Implícita", "Autoridad Aparente"],
      answer: "Autoridad Fiduciaria"
    },
    {
      id: 5,
      topic: "Ética",
      question: "¿Cuál de las siguientes prácticas NO se considera una violación ética en Florida?",
      options: ["Twisting", "Sliding", "Commingling", "Reemplazo de póliza con divulgación completa"],
      answer: "Reemplazo de póliza con divulgación completa"
    },
    {
      id: 6,
      topic: "STARR",
      question: "El método STARR de manejo de riesgos incluye todos los siguientes, EXCEPTO:",
      options: ["Avoidance (Evitar)", "Reduction (Reducir)", "Speculation (Especulación)", "Retention (Retener)"],
      answer: "Speculation (Especulación)"
    },
    {
      id: 7,
      topic: "Free Look",
      question: "Respecto al período de examen libre (Free Look) en Florida, ¿cuál de los siguientes enunciados es FALSO?",
      options: ["Comienza cuando la póliza es entregada al asegurado", "Permite la devolución total de la prima", "Dura 10 días para pólizas de salud generales", "Dura 60 días para todas las pólizas de Medicare Supplement"],
      answer: "Dura 60 días para todas las pólizas de Medicare Supplement"
    },
    {
      id: 8,
      topic: "Hazards",
      question: "Todas las siguientes son definiciones de un Riesgo (Hazard), EXCEPTO:",
      options: ["Una condición física que aumenta la pérdida", "La causa de la pérdida (Peril)", "Una actitud de descuido (Morale)", "Una intención deshonesta (Moral)"],
      answer: "La causa de la pérdida (Peril)"
    },
    {
      id: 9,
      topic: "FCRA",
      question: "Bajo la ley FCRA, un solicitante NO tiene derecho a realizar cuál de las siguientes acciones:",
      options: ["Saber qué hay en su reporte", "Ser notificado si se solicita un reporte de investigación", "Recibir el pago de una indemnización por solo aparecer en el MIB", "Pedir que se corrija información errónea"],
      answer: "Recibir el pago de una indemnización por solo aparecer en el MIB"
    },
    {
      id: 10,
      topic: "Twisting",
      question: "¿Cuál de los siguientes NO es un ejemplo de Twisting?",
      options: [
        "Comparaciones engañosas para inducir el reemplazo",
        "Tergiversación de beneficios para ganar una comisión",
        "Informar al cliente sobre los beneficios reales de su póliza actual",
        "Ocultar cláusulas de exclusión de la nueva póliza"
      ],
      answer: "Informar al cliente sobre los beneficios reales de su póliza actual"
    },
    {
      id: 11,
      topic: "Churning",
      question: "¿Cuál es la diferencia principal entre Twisting y Churning?",
      options: [
        "Twisting es con la competencia; Churning es reemplazo interno con la misma aseguradora",
        "Twisting es legal; Churning es ilegal",
        "Twisting requiere permiso del DFS; Churning no",
        "No hay diferencia, son términos intercambiables"
      ],
      answer: "Twisting es con la competencia; Churning es reemplazo interno con la misma aseguradora"
    },
    {
      id: 12,
      topic: "Rebating",
      question: "La práctica de ofrecer una parte de la comisión del agente al solicitante como incentivo para comprar se conoce como:",
      options: ["Sliding", "Rebating", "Coerción", "Defamation"],
      answer: "Rebating"
    },
    {
      id: 13,
      topic: "Sliding",
      question: "Un agente incluye automáticamente un seguro de muerte accidental en una póliza de salud sin que el cliente lo solicite ni sea informado. Esta práctica se llama:",
      options: ["Churning", "Twisting", "Sliding", "Boycott"],
      answer: "Sliding"
    },
    {
      id: 14,
      topic: "Coerción",
      question: "Un banco le dice a un solicitante de préstamo que el préstamo solo será aprobado si compra su seguro a través de una agencia específica. Esto es un ejemplo de:",
      options: ["Rebating", "Coerción", "Discriminación Unfair", "Publicidad Falsa"],
      answer: "Coerción"
    }
  ],
  2: [
    {
      id: 1,
      topic: "Incapacidad",
      question: "En una póliza de discapacidad, el 'Período de Eliminación' actúa como:",
      options: ["Un límite de beneficio", "Un deducible de tiempo", "Una exclusión de enfermedad", "Un período de gracia"],
      answer: "Un deducible de tiempo"
    },
    {
      id: 2,
      topic: "HMO",
      question: "¿Cómo se llama el médico que controla el acceso a especialistas en un plan HMO?",
      options: ["Ajustador", "Suscriptor", "Gatekeeper (Médico de Cuidado Primario)", "Director Médico"],
      answer: "Gatekeeper (Médico de Cuidado Primario)"
    },
    {
      id: 3,
      topic: "COBRA",
      question: "Bajo COBRA, ¿cuál es el período máximo de continuación de cobertura para un empleado despedido (por causa no grave)?",
      options: ["12 meses", "18 meses", "24 meses", "36 meses"],
      answer: "18 meses"
    },
    {
      id: 4,
      topic: "Medicare",
      question: "¿Qué parte de Medicare cubre los servicios de hospitalización?",
      options: ["Parte A", "Parte B", "Parte C", "Parte D"],
      answer: "Parte A"
    },
    {
      id: 5,
      topic: "Conversión",
      question: "El período de conversión para cambiar de un seguro grupal a uno individual sin prueba de asegurabilidad es de:",
      options: ["10 días", "30 días", "31 días", "45 días"],
      answer: "31 días"
    }
  ],
  3: [
    {
      id: 1,
      topic: "Provisiones Obligatorias",
      question: "Según la provisión de 'Contrato Completo', ¿quién tiene autoridad para realizar cambios en una póliza de seguro?",
      options: ["El agente", "El asegurado", "Un oficial ejecutivo de la compañía", "El beneficiario"],
      answer: "Un oficial ejecutivo de la compañía"
    },
    {
      id: 2,
      topic: "Incontestabilidad",
      question: "El 'Límite de Tiempo en Ciertas Defensas' (Time Limit on Certain Defenses) generalmente prohíbe al asegurador negar un reclamo por declaraciones erróneas después de:",
      options: ["1 año", "2 años", "3 años", "5 años"],
      answer: "2 años"
    },
    {
      id: 3,
      topic: "Aviso de Reclamo",
      question: "Un asegurado debe notificar al asegurador sobre un reclamo dentro de los ___ días posteriores a la pérdida:",
      options: ["10 días", "15 días", "20 días", "90 días"],
      answer: "20 días"
    },
    {
      id: 4,
      topic: "Reincorporación",
      question: "Si el asegurador no rechaza una solicitud de reincorporación, la póliza se considera reincorporada automáticamente después de ___ días:",
      options: ["10 días", "30 días", "45 días", "60 días"],
      answer: "45 días"
    },
    {
      id: 5,
      topic: "Renovabilidad",
      question: "¿Cuál de las siguientes cláusulas de renovación ofrece la mayor protección al asegurado (no se puede cancelar ni cambiar la prima)?",
      options: ["Cancelable", "Opcionalmente Renovable", "Renovable Garantizada", "No Cancelable"],
      answer: "No Cancelable"
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
