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
    },
    {
      id: 101,
      question: "¿Cómo se llama la tendencia de las personas con mayor probabilidad de pérdida a buscar seguro con más frecuencia?",
      options: ["Riesgo Moral", "Selección Adversa", "Riesgo Morale", "Distribución de Pérdidas"],
      answer: "Selección Adversa"
    },
    {
      id: 102,
      question: "Un cliente que deja de cerrar la puerta de su casa con llave porque sabe que tiene seguro está demostrando un:",
      options: ["Riesgo Físico", "Riesgo Moral", "Riesgo Morale (Actitud)", "Peligro Especulativo"],
      answer: "Riesgo Morale (Actitud)"
    },
    {
      id: 103,
      question: "En un contrato de seguros, la 'Consideración' por parte de la aseguradora es:",
      options: ["El pago de la prima", "Las declaraciones en la solicitud", "La promesa de pagar beneficios cubiertos", "La firma del agente"],
      answer: "La promesa de pagar beneficios cubiertos"
    },
    {
      id: 104,
      question: "¿Cuál de los siguientes es un ejemplo de un Riesgo Físico (Physical Hazard)?",
      options: ["Un cliente deshonesto", "Cables eléctricos expuestos", "Falta de cuidado por tener seguro", "Fumar en la cama"],
      answer: "Cables eléctricos expuestos"
    },
    {
      id: 105,
      question: "¿Qué tipo de aseguradora es propiedad de sus clientes (dueños de pólizas) y puede pagar dividendos?",
      options: ["Compañía de Acciones (Stock)", "Compañía Mutua", "Aseguradora Fraternal", "Recíproca"],
      answer: "Compañía Mutua"
    }
  ],
  2: [
    {
      id: 1,
      question: "¿Qué tipo de plan de salud requiere que el asegurado elija un Médico de Atención Primaria (Gatekeeper)?",
      options: ["PPO", "HMO", "POS", "Indemnización"],
      answer: "HMO"
    },
    {
      id: 2,
      question: "Un asegurado tiene una póliza de Gastos Médicos Mayores con un deducible de $500 y un coseguro de 80/20. Si el asegurado incurre en una factura médica de $2,500, ¿cuánto es el monto TOTAL que el asegurado debe pagar de su bolsillo?",
      options: [
        "$500",
        "$900",
        "$400",
        "$2,000"
      ],
      answer: "$900"
    },
    {
      id: 3,
      question: "¿Cuál de los siguientes es un objetivo principal del 'Gatekeeper' en un HMO?",
      options: [
        "Aumentar las ganancias de los accionistas",
        "Controlar los costos y coordinar el acceso a especialistas",
        "Garantizar que todos los reclamos sean pagados al 100%",
        "Auditar las finanzas del asegurado"
      ],
      answer: "Controlar los costos y coordinar el acceso a especialistas"
    },
    {
      id: 12,
      question: "En una póliza de Seguro de Ingreso por Incapacidad, el 'Período de Eliminación' actúa como:",
      options: [
        "Un deducible de tiempo",
        "Un período de gracia",
        "Una cláusula de suicidio",
        "Un beneficio adicional"
      ],
      answer: "Un deducible de tiempo"
    },
    {
      id: 13,
      question: "Una empresa compra una póliza de Seguro de Discapacidad de Persona Clave (Key Person) para su mejor vendedor. ¿Cuál es el tratamiento fiscal de esta póliza?",
      options: [
        "Las primas son deducibles y los beneficios son gravables",
        "Las primas NO son deducibles y los beneficios son libres de impuestos",
        "Tanto las primas como los beneficios son deducibles",
        "Las primas son deducibles y los beneficios son libres de impuestos"
      ],
      answer: "Las primas NO son deducibles y los beneficios son libres de impuestos"
    },
    {
      id: 14,
      question: "¿Cuál de las siguientes NO es una característica típica de un plan PPO?",
      options: [
        "Libertad para elegir proveedores fuera de la red",
        "Uso obligatorio de un Gatekeeper para todas las consultas",
        "Copagos más bajos cuando se usa la red preferida",
        "Deducibles anuales"
      ],
      answer: "Uso obligatorio de un Gatekeeper para todas las consultas"
    },

    {
      id: 3,
      question: "¿Cuál es el objetivo principal del 'Gatekeeper' en un HMO?",
      options: [
        "Aumentar las primas",
        "Controlar los costos y referir a especialistas",
        "Vender pólizas adicionales",
        "Auditar a la aseguradora"
      ],
      answer: "Controlar los costos y referir a especialistas"
    },
    {
      id: 4,
      question: "Si un asegurado tiene un plan PPO y decide atenderse con un proveedor fuera de la red (Out-of-Network), ¿qué sucede?",
      options: [
        "El seguro no cubre nada",
        "El seguro cubre el 100%",
        "El seguro cubre una parte, pero el costo para el asegurado es mayor",
        "El asegurado es expulsado del plan"
      ],
      answer: "El seguro cubre una parte, pero el costo para el asegurado es mayor"
    },
    {
      id: 5,
      question: "¿Qué porcentaje de coseguro es el más común en las pólizas de Gastos Médicos Mayores?",
      options: ["50/50", "100/0", "80/20", "10/90"],
      answer: "80/20"
    },
    {
      id: 6,
      question: "¿Cuál de los siguientes servicios suele estar cubierto al 100% por un HMO para prevenir enfermedades?",
      options: ["Cirugía estética", "Cuidado preventivo y exámenes físicos", "Medicina alternativa", "Equipos de gimnasio"],
      answer: "Cuidado preventivo y exámenes físicos"
    },
    {
      id: 7,
      question: "Un plan de salud que combina características de HMO y PPO se conoce como:",
      options: ["POS (Point of Service)", "Medicare", "Medicaid", "TRICARE"],
      answer: "POS (Point of Service)"
    },
    {
      id: 8,
      question: "En el contexto de seguros de salud, ¿qué significa 'In-Network'?",
      options: [
        "Proveedores que han firmado un contrato con la aseguradora",
        "Médicos que solo atienden emergencias",
        "Cualquier hospital del estado",
        "Proveedores internacionales"
      ],
      answer: "Proveedores que han firmado un contrato con la aseguradora"
    },
    {
      id: 9,
      question: "¿Qué sucede cuando el asegurado alcanza su límite de 'Stop-Loss'?",
      options: [
        "La aseguradora cancela la póliza inmediatamente",
        "La aseguradora paga el 100% de los gastos cubiertos por el resto del año de la póliza",
        "El asegurado debe pagar el doble de deducible el próximo año",
        "Se suspenden los beneficios por 30 días"
      ],
      answer: "La aseguradora paga el 100% de los gastos cubiertos por el resto del año de la póliza"
    },
    {
      id: 15,
      question: "En Florida, ¿cuál es el propósito de la cláusula de 'Período de Prueba' (Probationary Period) en una póliza de salud grupal?",
      options: [
        "Permitir que el asegurado cancele la póliza sin penalización",
        "Excluir la cobertura de enfermedades preexistentes durante un tiempo inicial",
        "Darle tiempo a la aseguradora para investigar el fraude",
        "Evitar reclamos inmediatos por enfermedades que el asegurado ya tenía antes de la póliza"
      ],
      answer: "Evitar reclamos inmediatos por enfermedades que el asegurado ya tenía antes de la póliza"
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
