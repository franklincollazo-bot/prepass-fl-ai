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
      id: 11,
      question: "¿Cuál es el objetivo principal de un 'Stop-Loss' en una póliza de Gastos Médicos Mayores?",
      options: ["Pagar el deducible del asegurado", "Limitar el riesgo de la aseguradora", "Limitar la responsabilidad financiera máxima del asegurado", "Evitar que el asegurado cancele la póliza"],
      answer: "Limitar la responsabilidad financiera máxima del asegurado"
    },
    {
      id: 12,
      question: "¿Qué sistema de salud utiliza un 'Gatekeeper' (Médico de cabecera) para controlar el acceso a especialistas?",
      options: ["PPO", "HMO", "Medicare", "Indemnización tradicional"],
      answer: "HMO"
    },
    {
      id: 13,
      question: "En una póliza de discapacidad, el tiempo que debe pasar entre el inicio de la incapacidad y el comienzo de los beneficios se llama:",
      options: ["Período de prueba", "Período de gracia", "Período de eliminación", "Período de espera legal"],
      answer: "Período de eliminación"
    },
    {
      id: 14,
      question: "¿Qué parte de Medicare cubre principalmente los gastos de hospitalización?",
      options: ["Parte A", "Parte B", "Parte C", "Parte D"],
      answer: "Parte A"
    },
    {
      id: 15,
      question: "La cláusula de 'Coseguro' (80/20) se activa después de que:",
      options: ["Se paga la prima anual", "Se satisface el deducible", "Termina el período de gracia", "Se aprueba el reclamo"],
      answer: "Se satisface el deducible"
    },
    {
      id: 16,
      question: "En una PPO, si el asegurado utiliza un médico fuera de la red (Out-of-Network):",
      options: ["La aseguradora no paga nada", "Los beneficios se reducen y los costos aumentan para el asegurado", "La aseguradora paga el 100%", "El asegurado es penalizado con una multa estatal"],
      answer: "Los beneficios se reducen y los costos aumentan para el asegurado"
    },
    {
      id: 17,
      question: "¿Cuál de las siguientes se considera una Actividad de la Vida Diaria (ADL) para calificar beneficios de Long-Term Care?",
      options: ["Conducir un vehículo", "Cocinar para la familia", "Bañarse o vestirse solo", "Pagar las cuentas"],
      answer: "Bañarse o vestirse solo"
    },
    {
      id: 18,
      question: "Una póliza de discapacidad 'Non-Cancellable' garantiza que:",
      options: ["La aseguradora puede aumentar las primas cada año", "Las primas no pueden aumentar y la póliza no puede ser cancelada hasta los 65 años", "El asegurado puede cancelar cuando quiera sin aviso", "La aseguradora puede cambiar los beneficios si el asegurado cambia de empleo"],
      answer: "Las primas no pueden aumentar y la póliza no puede ser cancelada hasta los 65 años"
    },
    {
      id: 19,
      question: "Medicaid es un programa de salud financiado por:",
      options: ["Solo el gobierno federal", "Solo donaciones privadas", "El gobierno federal y estatal para personas de bajos ingresos", "Solo el estado de Florida"],
      answer: "El gobierno federal y estatal para personas de bajos ingresos"
    },
    {
      id: 20,
      question: "La definición de incapacidad más restrictiva para el asegurado es:",
      options: ["Propia ocupación (Own Occupation)", "Cualquier ocupación (Any Occupation)", "Incapacidad parcial", "Incapacidad residual"],
      answer: "Cualquier ocupación (Any Occupation)"
    },
    {
      id: 201,
      question: "Una póliza de salud que solo cubre una enfermedad específica, como el cáncer, se conoce como:",
      options: ["Póliza de Gastos Médicos Mayores", "Póliza de Riesgo Limitado (Dread Disease)", "Póliza de Indemnización Hospitalaria", "Seguro Complementario de Medicare"],
      answer: "Póliza de Riesgo Limitado (Dread Disease)"
    },
    {
      id: 202,
      question: "¿Bajo COBRA, cuántos empleados debe tener una empresa para estar obligada a ofrecer la continuación de beneficios?",
      options: ["5 o más", "10 o más", "20 o más", "50 o más"],
      answer: "20 o más"
    },
    {
      id: 203,
      question: "La provisión que evita que una persona cobre beneficios de dos pólizas de salud por más del 100% del gasto se llama:",
      options: ["Coseguro", "Coordinación de Beneficios", "Subrogación", "Doble Indemnización"],
      answer: "Coordinación de Beneficios"
    },
    {
      id: 204,
      question: "¿Cuál es el período de inscripción abierta anual de Medicare?",
      options: ["1 de enero al 31 de marzo", "15 de octubre al 7 de diciembre", "1 de julio al 15 de septiembre", "Todo el año"],
      answer: "15 de octubre al 7 de diciembre"
    },
    {
      id: 205,
      question: "Una póliza de 'Blanket Insurance' (Seguro de Manta) se usa comúnmente para:",
      options: ["Individuos de alto riesgo", "Grupos que cambian constantemente, como estudiantes en un viaje", "Solo empleados gubernamentales", "Personas mayores de 80 años"],
      answer: "Grupos que cambian constantemente, como estudiantes en un viaje"
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
