const QUESTIONS_POOL = {
  1: [
    { id: 101, topic: "Riesgo", question: "El método STARR de manejo de riesgos incluye todos los siguientes, EXCEPTO:", options: ["Avoidance", "Reduction", "Speculation", "Retention"], answer: "Speculation" },
    { id: 102, topic: "Elementos Legales", question: "¿Cuál de los siguientes NO es un elemento necesario para un contrato legal?", options: ["Acuerdo", "Consideración", "Autoridad Aparente", "Propósito Legal"], answer: "Autoridad Aparente" },
    { id: 103, topic: "Suscripción", question: "La organización que recopila información sobre el historial médico de los solicitantes de seguros es:", options: ["OIR", "MIB", "DFS", "FCRA"], answer: "MIB" },
    { id: 104, topic: "Contratos", question: "Un contrato de seguro es 'Aleatorio' porque:", options: ["Las partes intercambian valores iguales", "El intercambio de valores es desigual", "Solo una parte hace una promesa", "El asegurador redacta todo el contrato"], answer: "El intercambio de valores es desigual" },
    { id: 105, topic: "Ética", question: "¿Cuál de las siguientes es una autoridad que no está escrita pero es necesaria para realizar el trabajo?", options: ["Expresa", "Implícita", "Aparente", "Fiduciaria"], answer: "Implícita" }
  ],
  2: [
    { id: 201, topic: "Incapacidad", question: "¿Cuál es el periodo de espera antes de que comiencen los beneficios de incapacidad?", options: ["Periodo de Gracia", "Periodo de Eliminación", "Periodo de Beneficio", "Periodo de Inscripción"], answer: "Periodo de Eliminación" },
    { id: 202, topic: "HMO", question: "Un sistema de salud que requiere un Médico de Cabecera (PCP) y se enfoca en la prevención se llama:", options: ["PPO", "HMO", "Gastos Médicos Mayores", "Indemnización"], answer: "HMO" },
    { id: 203, topic: "LTC", question: "¿Cuántas ADLs (Actividades Diarias) debe ser incapaz de realizar una persona para calificar para LTC?", options: ["Al menos 1", "Al menos 2", "Al menos 4", "Las 6"], answer: "Al menos 2" },
    { id: 204, topic: "Grupo", question: "Bajo COBRA, ¿cuántos meses puede continuar la cobertura por terminación de empleo?", options: ["12 meses", "18 meses", "24 meses", "36 meses"], answer: "18 meses" },
    { id: 205, topic: "Dental", question: "Un plan dental que paga según los cargos Usuales, Razonables y Costumbristas (UCR) es:", options: ["Programado", "No Programado", "Capitado", "De Red Cerrada"], answer: "No Programado" }
  ],
  3: [
    { id: 301, topic: "Provisiones", question: "El asegurado debe notificar un reclamo por escrito a la aseguradora dentro de:", options: ["10 días", "15 días", "20 días", "90 días"], answer: "20 días" },
    { id: 302, topic: "Provisiones", question: "Después de recibir el aviso de reclamo, la aseguradora debe enviar los formularios dentro de:", options: ["10 días", "15 días", "20 días", "30 días"], answer: "15 días" },
    { id: 303, topic: "Renovabilidad", question: "La cláusula de renovación más favorable para el asegurado, donde no se pueden subir primas, es:", options: ["Garantizada", "No Cancelable", "Opcional", "Condicional"], answer: "No Cancelable" },
    { id: 304, topic: "Prueba de Pérdida", question: "El tiempo máximo para presentar una prueba de pérdida por escrito es:", options: ["20 días", "30 días", "90 días", "1 año"], answer: "90 días" },
    { id: 305, topic: "Provisiones", question: "La provisión que establece que el asegurado tiene tiempo tras el vencimiento para pagar la prima es:", options: ["Periodo de Gracia", "Reincorporación", "Incontestabilidad", "Consideración"], answer: "Periodo de Gracia" }
  ],
  4: [
    { id: 401, topic: "Medicare", question: "¿Qué parte de Medicare cubre los servicios de hospitalización?", options: ["Parte A", "Parte B", "Parte C", "Parte D"], answer: "Parte A" },
    { id: 402, topic: "Medicare", question: "¿Qué parte de Medicare cubre las medicinas recetadas?", options: ["Parte A", "Parte B", "Parte C", "Parte D"], answer: "Parte D" },
    { id: 403, topic: "Medicare", question: "Para calificar para beneficios por incapacidad del Seguro Social, la incapacidad debe durar al menos:", options: ["3 meses", "5 meses", "12 meses", "24 meses"], answer: "12 meses" },
    { id: 404, topic: "Medigap", question: "Las pólizas de Suplemento de Medicare (Medigap) son vendidas por:", options: ["El Gobierno Federal", "El Estado de Florida", "Compañías Privadas", "Medicare.gov"], answer: "Compañías Privadas" },
    { id: 405, topic: "Medicaid", question: "Medicaid es financiado por:", options: ["Solo el Estado", "Solo el Gobierno Federal", "Tanto el Estado como el Federal", "Primas de los usuarios"], answer: "Tanto el Estado como el Federal" }
  ],
  5: [
    { id: 501, topic: "Fiscalidad", question: "En un seguro de salud individual, ¿cómo tributan los beneficios?", options: ["Como ingreso ordinario", "Están libres de impuestos", "Tienen un impuesto del 10%", "Son deducibles"], answer: "Están libres de impuestos" },
    { id: 502, topic: "COB", question: "Bajo la Regla del Cumpleaños, ¿qué plan es primario para un hijo dependiente?", options: ["El del padre mayor", "El del padre que gana más", "El del padre cuyo cumpleaños ocurre primero en el año", "El que se compró primero"], answer: "El del padre cuyo cumpleaños ocurre primero en el año" },
    { id: 503, topic: "Managed Care", question: "La revisión que ocurre mientras el asegurado está en el hospital se llama:", options: ["Prospectiva", "Concurrente", "Retrospectiva", "Pre-autorización"], answer: "Concurrente" },
    { id: 504, topic: "Tax", question: "Si un empleador paga las primas de incapacidad grupal, ¿cómo son los beneficios para el empleado?", options: ["Libres de impuestos", "Gravables como ingreso", "Deducibles", "Sujetos a multa"], answer: "Gravables como ingreso" },
    { id: 505, topic: "HSA", question: "Para abrir una HSA, el asegurado debe tener un plan de:", options: ["Bajo deducible", "Alto deducible (HDHP)", "Solo hospital", "Medicare"], answer: "Alto deducible (HDHP)" }
  ],
  6: [
    { id: 601, topic: "Reguladores", question: "¿Quién supervisa la solvencia financiera de las aseguradoras en Florida?", options: ["El CFO", "La OIR", "El DFS", "La Legislatura"], answer: "La OIR" },
    { id: 602, topic: "Licencias", question: "¿Cuántas horas de educación continua debe completar un agente cada 2 años?", options: ["10 horas", "20 horas", "24 horas", "40 horas"], answer: "24 horas" },
    { id: 603, topic: "Ética", question: "El reemplazo de una póliza mediante declaraciones falsas o incompletas se llama:", options: ["Sliding", "Twisting", "Churning", "Rebating"], answer: "Twisting" },
    { id: 604, topic: "CFO", question: "El CFO de Florida tiene el poder de:", options: ["Hacer leyes de seguros", "Sentenciar a prisión", "Emitir citaciones y realizar audiencias", "Aumentar las primas"], answer: "Emitir citaciones y realizar audiencias" },
    { id: 605, topic: "Ética", question: "Mezclar los fondos de las primas con los fondos personales del agente se llama:", options: ["Commingling", "Rebating", "Twisting", "Sliding"], answer: "Commingling" }
  ],
  7: [
    { id: 701, topic: "Salud Florida", question: "¿Cuál es el periodo de gracia en Florida para una póliza de salud con prima mensual?", options: ["7 días", "10 días", "31 días", "45 días"], answer: "10 días" },
    { id: 702, topic: "Maternidad", question: "En Florida, la estancia mínima obligatoria tras un parto natural es de:", options: ["24 horas", "48 horas", "72 horas", "96 horas"], answer: "48 horas" },
    { id: 703, topic: "Small Group", question: "En Florida, un 'Pequeño Empleador' tiene entre:", options: ["1 y 25 empleados", "1 y 50 empleados", "1 y 100 empleados", "20 y 50 empleados"], answer: "1 y 50 empleados" },
    { id: 704, topic: "LTC Florida", question: "¿Cuál es el periodo de examen libre (Free Look) para LTC en Florida?", options: ["10 días", "20 días", "30 días", "45 días"], answer: "30 días" },
    { id: 705, topic: "Reglas", question: "La cobertura para un recién nacido comienza automáticamente:", options: ["A los 30 días", "Tras el pago de la primera prima", "En el momento del nacimiento", "Tras la notificación al DFS"], answer: "En el momento del nacimiento" }
  ]
};

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).send();
  const { chapterId } = req.query;
  const questions = QUESTIONS_POOL[chapterId] || [];
  const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  return res.status(200).json(shuffled);
}
