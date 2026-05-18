const QUESTIONS_POOL = {
  1: [
    {
      id: 1,
      question: "Todas las siguientes organizaciones ayudan a regular la industria de seguros en Florida, EXCEPTO:",
      options: ["MIB (Medical Information Bureau)", "OIR (Office of Insurance Regulation)", "DFS (Department of Financial Services)", "La Legislatura de Florida"],
      answer: "MIB (Medical Information Bureau)"
    },
    {
      id: 2,
      question: "¿Cuál de los siguientes NO es un elemento necesario para que un contrato de seguro sea legalmente vinculante?",
      options: ["Acuerdo (Oferta y Aceptación)", "Consideración", "Propósito Legal", "Autoridad Aparente"],
      answer: "Autoridad Aparente"
    },
    {
      id: 3,
      question: "En un contrato de Adhesión, si existe una ambigüedad en el lenguaje de la póliza, ¿cuál de los siguientes enunciados es CORRECTO?",
      options: ["El tribunal favorecerá a la aseguradora", "La póliza se anula inmediatamente", "El tribunal favorecerá al asegurado debido al carácter del contrato", "El agente es responsable de pagar los daños"],
      answer: "El tribunal favorecerá al asegurado debido al carácter del contrato"
    },
    {
      id: 4,
      question: "Todas las siguientes son formas de autoridad de un agente, EXCEPTO:",
      options: ["Autoridad Expresa", "Autoridad Fiduciaria", "Autoridad Implícita", "Autoridad Aparente"],
      answer: "Autoridad Fiduciaria"
    },
    {
      id: 5,
      question: "¿Cuál de las siguientes prácticas NO se considera una violación ética en Florida?",
      options: ["Twisting", "Sliding", "Commingling", "Reemplazo de póliza con divulgación completa"],
      answer: "Reemplazo de póliza con divulgación completa"
    },
    {
      id: 6,
      question: "El método STARR de manejo de riesgos incluye todos los siguientes, EXCEPTO:",
      options: ["Avoidance (Evitar)", "Reduction (Reducir)", "Speculation (Especulación)", "Retention (Retener)"],
      answer: "Speculation (Especulación)"
    },
    {
      id: 7,
      question: "Respecto al período de examen libre (Free Look) en Florida, ¿cuál de los siguientes enunciados es FALSO?",
      options: ["Comienza cuando la póliza es entregada al asegurado", "Permite la devolución total de la prima", "Dura 10 días para pólizas de salud generales", "Dura 60 días para todas las pólizas de Medicare Supplement"],
      answer: "Dura 60 días para todas las pólizas de Medicare Supplement"
    },
    {
      id: 8,
      question: "Todas las siguientes son definiciones de un Riesgo (Hazard), EXCEPTO:",
      options: ["Una condición física que aumenta la pérdida", "La causa de la pérdida (Peril)", "Una actitud de descuido (Morale)", "Una intención deshonesta (Moral)"],
      answer: "La causa de la pérdida (Peril)"
    },
    {
      id: 9,
      question: "Bajo la ley FCRA, un solicitante NO tiene derecho a realizar cuál de las siguientes acciones:",
      options: ["Saber qué hay en su reporte", "Ser notificado si se solicita un reporte de investigación", "Recibir el pago de una indemnización por solo aparecer en el MIB", "Pedir que se corrija información errónea"],
      answer: "Recibir el pago de una indemnización por solo aparecer en el MIB"
    },
    {
      id: 10,
      question: "¿Cuál de los siguientes NO es un ejemplo de Twisting?",
      options: [
        "Comparaciones engañosas para inducir el reemplazo",
        "Tergiversación de beneficios para ganar una comisión",
        "Informar al cliente sobre los beneficios reales de su póliza actual",
        "Ocultar cláusulas de exclusión de la nueva póliza"
      ],
      answer: "Informar al cliente sobre los beneficios reales de su póliza actual"
    }
  ],
  2: [
    {
      id: 1,
      question: "Todas las siguientes son características de un plan HMO, EXCEPTO:",
      options: ["Enfoque en el cuidado preventivo", "Elección libre de cualquier médico fuera de la red sin referido", "Uso de un Médico de Atención Primaria (Gatekeeper)", "Servicios proporcionados por una red específica"],
      answer: "Elección libre de cualquier médico fuera de la red sin referido"
    },
    {
      id: 2,
      question: "Un asegurado con una póliza de Gastos Médicos Mayores (Deducible $500, Coseguro 80/20) incurre en una factura de $2,500. ¿Cuál de los siguientes cálculos para determinar el pago del asegurado es INCORRECTO?",
      options: [
        "Pagar primero el deducible de $500",
        "Pagar el 20% de los $2,000 restantes ($400)",
        "Pagar un total de $900 de su bolsillo",
        "Pagar el 20% de los $2,500 totales ($500)"
      ],
      answer: "Pagar el 20% de los $2,500 totales ($500)"
    },
    {
      id: 3,
      question: "¿Cuál de las siguientes NO es una función del 'Gatekeeper' en un HMO?",
      options: [
        "Controlar el acceso a especialistas",
        "Coordinar el cuidado de salud del miembro",
        "Aprobar el pago de dividendos a los accionistas",
        "Reducir costos evitando visitas innecesarias a especialistas"
      ],
      answer: "Aprobar el pago de dividendos a los accionistas"
    },
    {
      id: 4,
      question: "Respecto al Período de Eliminación en un seguro de Incapacidad, ¿cuál de los siguientes enunciados es CORRECTO?",
      options: [
        "Es un deducible de tiempo",
        "Es el tiempo que el asegurado debe esperar antes de que los beneficios comiencen",
        "Mientras más largo sea, menor será la prima",
        "Todas las anteriores son correctas"
      ],
      answer: "Todas las anteriores son correctas"
    },
    {
      id: 5,
      question: "En una póliza de Persona Clave (Key Person Disability), todos los siguientes enunciados son falsos, EXCEPTO:",
      options: [
        "La empresa paga las primas y recibe los beneficios",
        "Las primas son deducibles de impuestos para la empresa",
        "Los beneficios son gravables para el empleado clave",
        "El empleado clave es el dueño de la póliza"
      ],
      answer: "La empresa paga las primas y recibe los beneficios"
    },
    {
      id: 6,
      question: "¿Cuál de los siguientes NO es un beneficio típico cubierto por Medicare Parte A?",
      options: ["Hospitalización", "Cuidado en un hogar de ancianos especializado", "Cuidado de hospicio", "Servicios médicos y quirúrgicos (Outpatient)"],
      answer: "Servicios médicos y quirúrgicos (Outpatient)"
    },
    {
      id: 7,
      question: "Todas las siguientes son letras correspondientes a las partes de Medicare, EXCEPTO:",
      options: ["Parte A - Hospital", "Parte B - Médicos", "Parte E - Medicamentos Recetados", "Parte C - Medicare Advantage"],
      answer: "Parte E - Medicamentos Recetados"
    },
    {
      id: 8,
      question: "Respecto a Medicaid, ¿cuál de los siguientes enunciados es FALSO?",
      options: [
        "Es un programa federal administrado por el estado",
        "Está destinado a personas con recursos financieros limitados",
        "Se financia exclusivamente con las primas de los asegurados",
        "Proporciona asistencia médica a familias e individuos de bajos ingresos"
      ],
      answer: "Se financia exclusivamente con las primas de los asegurados"
    },
    {
      id: 9,
      question: "Bajo la ley de Florida, todas las siguientes son prácticas desleales de reclamos, EXCEPTO:",
      options: [
        "Negar un reclamo sin una investigación razonable",
        "No responder oportunamente a las comunicaciones sobre un reclamo",
        "Pagar un reclamo dentro de los 30 días posteriores a la prueba de pérdida",
        "Ofrecer un acuerdo mucho menor al valor real del reclamo"
      ],
      answer: "Pagar un reclamo dentro de los 30 días posteriores a la prueba de pérdida"
    },
    {
      id: 10,
      question: "¿Cuál de las siguientes NO es una causa de pérdida (Peril)?",
      options: ["Fuego", "Accidente", "Cables eléctricos en mal estado", "Enfermedad"],
      answer: "Cables eléctricos en mal estado"
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
