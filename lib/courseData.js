export const COLORS = {
  black: '#000000',
  darkBg: '#F5E6CC', 
  navy: '#0A1B33',
  gold: '#C5A059',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#64748b',
  border: '#D9CBB0'
};

export const LOGO_URL = "https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png";

export const CHAPTERS_DATA = {
  1: {
    title: "Capítulo 1: Conceptos Básicos y Suscripción",
    subtitle: "Principios de Riesgo y el Proceso de Selección",
    manual: "/Modulo1_Manual_Completo.html",
    guia: "/Modulo1_Guia_Estudio.html",
    subtopics: [
      {
        id: "1.1",
        title: "1.1 Conceptos de Seguro y Riesgo (STARR)",
        videoUrl: "https://app.heygen.com/embeds/15e40e5af6694a0598ed91f0973a46e6",
        summary: "Identifica los riesgos y cómo gestionarlos a través del acrónimo STARR."
      },
      {
        id: "1.2",
        title: "1.2 Autoridad del Agente y Elementos Legales",
        videoUrl: "https://app.heygen.com/embeds/e9f6a9dce7f0409e83bbbcdab25ad135",
        summary: "Diferencia entre autoridad expresa, implícita y aparente, y los elementos ALCAL."
      },
      {
        id: "1.3",
        title: "1.3 Características del Contrato de Seguro",
        videoUrl: "https://app.heygen.com/embeds/3284d46ca0e64e86a5aa8c84cb9660b8",
        summary: "Adhesión, Aleatorio, Unilateral y Condicional."
      },
      {
        id: "1.4",
        title: "1.4 El Proceso de Suscripción (MIB y FCRA)",
        videoUrl: "https://app.heygen.com/embeds/3c5c55a1cb434dce8caff51c35e8d1fe",
        summary: "Cómo las aseguradoras investigan el riesgo médico y de crédito."
      },
      {
        id: "1.5",
        title: "1.5 Ética y Entrega de la Póliza",
        videoUrl: "https://app.heygen.com/embeds/4f78d27571724087b35f7714ce9c97ae",
        summary: "Domina las prácticas éticas y el proceso final de entrega."
      }
    ]
  },
  2: {
    title: "Capítulo 2: Tipos de Pólizas de Salud",
    subtitle: "Gastos Médicos, Incapacidad y Cuidados a Largo Plazo",
    manual: "/Modulo2_Manual_Completo.html",
    guia: "/Modulo2_Guia_Estudio.html",
    subtopics: [
      {
        id: "2.1",
        title: "2.1 El Seguro de Incapacidad (Income)",
        videoUrl: "https://app.heygen.com/embeds/97e8d8caddaf43cd915ec2e81d9a3db8",
        summary: "Protección del ingreso: Own Occ vs Any Occ."
      },
      {
        id: "2.2",
        title: "2.2 Gastos Médicos y Redes (HMO/PPO)",
        videoUrl: "https://app.heygen.com/embeds/76a3fbb4e17d4b4fb0470642606535ae",
        summary: "Deducibles, Coaseguro y diferencias entre redes."
      },
      {
        id: "2.3",
        title: "2.3 Seguro de Grupo y COBRA",
        videoUrl: "https://app.heygen.com/embeds/7908fe9c1f454e318a9a48003e5b676a",
        summary: "Reglas de elegibilidad y continuación de cobertura grupal."
      },
      {
        id: "2.4",
        title: "2.4 Long Term Care (LTC) y Otros Planes",
        videoUrl: "PLACEHOLDER_2_4",
        summary: "Cuidados a largo plazo, Dental, Visión y Planes de Accidentes."
      }
    ]
  },
  3: {
    title: "Capítulo 3: Provisiones, Cláusulas y Endosos",
    subtitle: "Derechos y Obligaciones en el Contrato",
    manual: "/Modulo3_Manual_Completo.html",
    guia: "/Modulo3_Guia_Estudio.html",
    subtopics: [
      {
        id: "3.1",
        title: "3.1 Provisiones Obligatorias (20-15-90)",
        videoUrl: "https://app.heygen.com/embeds/659a01deb2d34a97a2cba24c6660b319",
        summary: "Domina las 12 provisiones que protegen al asegurado."
      },
      {
        id: "3.2",
        title: "3.2 Provisiones Opcionales y Renovabilidad",
        videoUrl: "PLACEHOLDER_3_2",
        summary: "Cambio de ocupación, misstatement of age y tipos de renovación."
      }
    ]
  },
  4: {
    title: "Capítulo 4: Seguros Sociales",
    subtitle: "Medicare, Medicaid y Seguridad Social",
    manual: "/Modulo4_Manual_Completo.html",
    guia: "/Modulo4_Guia_Estudio.html",
    subtopics: [
      {
        id: "4.1",
        title: "4.1 Medicare y sus Partes (A, B, C, D)",
        videoUrl: "https://app.heygen.com/embeds/33aa798c903f4f63ae9259b8ba78f9f4",
        summary: "Hospital, Médico, Advantage y Medicamentos."
      },
      {
        id: "4.2",
        title: "4.2 Suplementos, Medicaid y Social Security",
        videoUrl: "https://app.heygen.com/embeds/fb57fe20cebe48a0be10f48d58277bab",
        summary: "Medigap y beneficios por incapacidad del gobierno."
      }
    ]
  },
  5: {
    title: "Capítulo 5: Otros Conceptos y Consideraciones Fiscales",
    subtitle: "Impuestos, Dependientes y Managed Care",
    manual: "/Modulo5_Manual_Completo.html",
    guia: "/Modulo5_Guia_Estudio.html",
    subtopics: [
      {
        id: "5.1",
        title: "5.1 Coordinación de Beneficios e Impuestos",
        videoUrl: "https://app.heygen.com/embeds/cce9b70266ac40aaa9f7fbd2071058af",
        summary: "Regla del cumpleaños y tratamiento fiscal de primas/beneficios."
      },
      {
        id: "5.2",
        title: "5.2 Managed Care y Cuentas HSA/FSA",
        videoUrl: "https://app.heygen.com/embeds/8b45aa133cec46e7aac00f0f6a0136fa",
        summary: "Utilización de recursos y cuentas con ventaja fiscal."
      }
    ]
  },
  6: {
    title: "Capítulo 6: Estatutos y Reglas de Florida - Comunes",
    subtitle: "Regulación General del Estado",
    manual: "/Modulo6_Manual_Completo.html",
    guia: "/Modulo6_Guia_Estudio.html",
    subtopics: [
      {
        id: "6.1",
        title: "6.1 El CFO, DFS y la OIR",
        videoUrl: "https://app.heygen.com/embeds/c8f4bb1485934e1d926edce4bf4ac5fb",
        summary: "Autoridades reguladoras y sus poderes en Florida (CFO, DFS y OIR)."
      },
      {
        id: "6.2",
        title: "6.2 Licenciamiento y Prácticas Prohibidas",
        videoUrl: "https://app.heygen.com/embeds/71942155f75b46d78faccbfe94412b21",
        summary: "Licenciamiento, Ética y Prácticas Prohibidas (Sliding, Twisting, Churning)."
      }
    ]
  },
  7: {
    title: "Capítulo 7: Estatutos y Reglas de Florida - Salud",
    subtitle: "Leyes Específicas para Seguros Médicos",
    manual: "/Modulo7_Manual_Completo.html",
    guia: "/Modulo7_Guia_Estudio.html",
    subtopics: [
      {
        id: "7.1",
        title: "7.1 Provisiones y Coberturas Obligatorias",
        videoUrl: "PLACEHOLDER_7_1",
        summary: "Reglas de Florida para maternidad, diabetes, recién nacidos e hijos incapacitados."
      },
      {
        id: "7.2",
        title: "7.2 Publicidad, LTC y Small Group en Florida",
        videoUrl: "PLACEHOLDER_7_2",
        summary: "Publicidad, Small Group (1-50), Mini-COBRA y reglas de Medicare Supplement en Florida."
      }
    ]
  }
};

export const QUESTIONS_POOL = {
  1: [
    { id: 101, topic: "Riesgo", question: "El método STARR de manejo de riesgos incluye todos los siguientes, EXCEPTO:", options: ["Avoidance", "Reduction", "Speculation", "Retention"], answer: "Speculation" },
    { id: 102, topic: "Elementos Legales", question: "¿Cuál de los siguientes NO es un elemento necesario para un contrato legal?", options: ["Acuerdo", "Consideración", "Autoridad Aparente", "Propósito Legal"], answer: "Autoridad Aparente" },
    { id: 103, topic: "Suscripción", question: "La organización que recopila información sobre el historial médico de los solicitantes de seguros es:", options: ["OIR", "MIB", "DFS", "FCRA"], answer: "MIB" },
    { id: 104, topic: "Contratos", question: "Un contrato de seguro es 'Aleatorio' porque:", options: ["Las partes intercambian valores iguales", "El intercambio de valores es desigual", "Solo una parte hace una promesa", "El asegurador redacta todo el contrato"], answer: "El intercambio de valores es desigual" },
    { id: 105, topic: "Ética", question: "¿Cuál de las siguientes es una autoridad que no está escrita pero es necesaria para realizar el trabajo?", options: ["Expresa", "Implícita", "Aparente", "Fiduciaria"], answer: "Implícita" },
    { id: 106, topic: "Riesgo", question: "Un riesgo que ofrece la posibilidad de ganar o perder se llama:", options: ["Riesgo Puro", "Riesgo Especulativo", "Riesgo Asegurable", "Peligro"], answer: "Riesgo Especulativo" },
    { id: 107, topic: "Contratos", question: "El concepto de que el asegurado tiene derecho a lo que una persona razonable esperaría de la póliza es:", options: ["Waiver", "Adhesión", "Expectativas Razonables", "Estoppel"], answer: "Expectativas Razonables" },
    { id: 108, topic: "Legal", question: "La omisión intencional de un hecho material en una solicitud de seguro se llama:", options: ["Representación", "Garantía", "Ocultamiento (Concealment)", "Fraude"], answer: "Ocultamiento (Concealment)" },
    { id: 109, topic: "Suscripción", question: "La ley federal que protege la privacidad de la información crediticia del consumidor es:", options: ["HIPAA", "FCRA", "MIB", "COBRA"], answer: "FCRA" },
    { id: 110, topic: "Contratos", question: "Un contrato de 'Adhesión' significa que:", options: ["Las partes negocian los términos", "El asegurador redacta el contrato y el asegurado lo acepta 'tal cual'", "El contrato es cancelable en cualquier momento", "Es un contrato verbal"], answer: "El asegurador redacta el contrato y el asegurado lo acepta 'tal cual'" },
    { id: 111, topic: "Suscripción", question: "Todos los siguientes son ejemplos de 'Hazards' (Peligros Indirectos), EXCEPTO:", options: ["Fumar cigarrillos", "Conducir de forma temeraria", "Un incendio en la vivienda", "Padecer una enfermedad hereditaria"], answer: "Un incendio en la vivienda" },
    { id: 112, topic: "Agencia", question: "El Agente representa a la aseguradora, por lo tanto, el conocimiento del agente es:", options: ["Conocimiento del asegurado", "Conocimiento del examinador", "Conocimiento de la aseguradora", "Información confidencial"], answer: "Conocimiento de la aseguradora" },
    { id: 113, topic: "Contratos", question: "Un contrato en el que solo una de las partes está legalmente obligada a cumplir sus promesas es:", options: ["Aleatorio", "Unilateral", "Adhesión", "Condicional"], answer: "Unilateral" },
    { id: 114, topic: "Suscripción", question: "Al completar la solicitud, ¿quién debe firmar para validar el documento?", options: ["Solo el Agente", "Solo el Solicitante", "El Agente y el Solicitante", "El Agente y el Examinador"], answer: "El Agente y el Solicitante" },
    { id: 115, topic: "Riesgo", question: "¿Cuál de los siguientes NO es un método de transferencia de riesgo?", options: ["Comprar una póliza de seguro", "Contratar un servicio de mantenimiento", "La retención de fondos", "Incorporar una empresa"], answer: "La retención de fondos" },
    { id: 116, topic: "Legal", question: "Las declaraciones hechas por el solicitante en la aplicación que se consideran verdaderas a su mejor saber y entender son:", options: ["Warranties (Garantías)", "Representations (Representaciones)", "Concealments", "Conditional"], answer: "Representations (Representaciones)" },
    { id: 117, topic: "MIB", question: "El Medical Information Bureau (MIB) obtiene su información de:", options: ["Los hospitales directamente", "Los médicos del estado", "Las solicitudes enviadas a otras aseguradoras", "El examinador de Florida"], answer: "Las solicitudes enviadas a otras aseguradoras" },
    { id: 118, topic: "Fraude", question: "La renuncia voluntaria de un derecho legal conocido se llama:", options: ["Estoppel", "Waiver", "Adhesión", "Consideración"], answer: "Waiver" },
    { id: 119, topic: "Suscripción", question: "Un informe del consumidor que incluye entrevistas con amigos y vecinos se llama:", options: ["Consumer Report", "Investigative Consumer Report", "Medical Report", "Underwriting Report"], answer: "Investigative Consumer Report" },
    { id: 120, topic: "Consideración", question: "En un contrato de seguro, la 'Consideración' del asegurado consiste en:", options: ["La promesa de pagar reclamos", "La firma del agente", "El pago de la prima y las declaraciones en la solicitud", "La entrega de la póliza"], answer: "El pago de la prima y las declaraciones en la solicitud" },
    { id: 121, topic: "Entrega", question: "Si la prima no se pagó con la solicitud, la cobertura comienza cuando:", options: ["La aseguradora aprueba el riesgo", "El agente firma la póliza", "Se entrega la póliza y se cobra la prima inicial", "Se realiza el examen médico"], answer: "Se entrega la póliza y se cobra la prima inicial" },
    { id: 122, topic: "Riesgo", question: "Un riesgo que es 'Asegurable' debe cumplir con todos los siguientes, EXCEPTO:", options: ["Debe ser accidental", "Debe ser catastrófico para la aseguradora", "Debe tener un costo medible", "Debe haber un grupo grande de unidades similares"], answer: "Debe ser catastrófico para la aseguradora" },
    { id: 123, topic: "Legal", question: "Si un asegurado firma una aplicación con información falsa para obtener una póliza, ha cometido:", options: ["Sliding", "Fraude", "Concealment", "Waiver"], answer: "Fraude" },
    { id: 124, topic: "MIB", question: "El propósito principal del MIB es:", options: ["Pagar reclamos médicos", "Ayudar a las aseguradoras a detectar fraude y prevenir la selección adversa", "Fijar los precios de las primas", "Licenciar a los agentes"], answer: "Ayudar a las aseguradoras a detectar fraude y prevenir la selección adversa" },
    { id: 125, topic: "Suscripción", question: "Un prospecto que presenta un nivel de riesgo superior al promedio se clasifica como:", options: ["Standard", "Preferred", "Substandard", "Declined"], answer: "Substandard" }
  ],
  2: [
    { id: 201, topic: "Incapacidad", question: "¿Cuál es el periodo de espera antes de que comiencen los beneficios de incapacidad?", options: ["Periodo de Gracia", "Periodo de Eliminación", "Periodo de Beneficio", "Periodo de Inscripción"], answer: "Periodo de Eliminación" },
    { id: 202, topic: "HMO", question: "Un sistema de salud que requiere un Médico de Cabecera (PCP) y se enfoca en la prevención se llama:", options: ["PPO", "HMO", "Gastos Médicos Mayores", "Indemnización"], answer: "HMO" },
    { id: 203, topic: "LTC", question: "¿Cuántas ADLs (Actividades Diarias) debe ser incapaz de realizar una persona para calificar para LTC?", options: ["Al menos 1", "Al menos 2", "Al menos 4", "Las 6"], answer: "Al menos 2" },
    { id: 204, topic: "Grupo", question: "Bajo COBRA, ¿cuántos meses puede continuar la cobertura por terminación de empleo?", options: ["12 meses", "18 meses", "24 meses", "36 meses"], answer: "18 meses" },
    { id: 205, topic: "Dental", question: "Un plan dental que paga según los cargos Usuales, Razonables y Costumbristas (UCR) es:", options: ["Programado", "No Programado", "Capitado", "De Red Cerrada"], answer: "No Programado" },
    { id: 206, topic: "Gastos Médicos", question: "La disposición que limita el gasto total del asegurado en un año se llama:", options: ["Deducible", "Coseguro", "Límite de Gastos de Bolsillo (Stop-Loss)", "Exclusión"], answer: "Límite de Gastos de Bolsillo (Stop-Loss)" },
    { id: 207, topic: "Grupo", question: "¿Cuál es el periodo máximo de continuación bajo COBRA para dependientes tras la muerte del asegurado?", options: ["18 meses", "24 meses", "31 meses", "36 meses"], answer: "36 meses" },
    { id: 208, topic: "PPO", question: "En un plan PPO, si el asegurado usa un proveedor fuera de la red:", options: ["La aseguradora no paga nada", "El asegurado paga un coseguro más alto", "La aseguradora paga el 100%", "El médico es sancionado"], answer: "El asegurado paga un coseguro más alto" },
    { id: 209, topic: "Dental", question: "Un plan dental que tiene un monto fijo de beneficios para cada procedimiento es un plan:", options: ["Programado", "No Programado", "Basado en UCR", "Integral"], answer: "Programado" },
    { id: 210, topic: "Accidentes", question: "Una póliza que solo paga por accidentes específicos como viajes en avión es:", options: ["Gastos Médicos Mayores", "Póliza de Riesgo Limitado (Dread Disease)", "Póliza de Muerte Accidental", "Hospital Indemnity"], answer: "Póliza de Riesgo Limitado (Dread Disease)" },
    { id: 211, topic: "HMO", question: "Todas las siguientes son características de un HMO, EXCEPTO:", options: ["Servicio de Prepago", "Fomento de la Medicina Preventiva", "Libertad total de elegir cualquier médico", "Cargos de Copago nominales"], answer: "Libertad total de elegir cualquier médico" },
    { id: 212, topic: "Gastos Médicos", question: "En una póliza de Gastos Médicos Mayores, el 'Deducible' tiene el propósito de:", options: ["Aumentar los beneficios", "Eliminar los reclamos pequeños y reducir el costo de la prima", "Pagar el salario del agente", "Sustituir al coseguro"], answer: "Eliminar los reclamos pequeños y reducir el costo de la prima" },
    { id: 213, topic: "Incapacidad", question: "La definición de incapacidad total más restrictiva para el asegurado es:", options: ["Own Occupation (Ocupación Propia)", "Any Occupation (Cualquier Ocupación)", "Presuntiva", "Parcial"], answer: "Any Occupation (Cualquier Ocupación)" },
    { id: 214, topic: "LTC", question: "Las pólizas de Cuidados a Largo Plazo (LTC) proporcionan beneficios por un periodo de al menos:", options: ["6 meses", "12 meses", "24 meses", "5 años"], answer: "12 meses" },
    { id: 215, topic: "Dental", question: "¿Cuál de los siguientes servicios dentales se considera generalmente 'Básico'?", options: ["Limpiezas rutinarias", "Empastes y extracciones", "Ortodoncia", "Coronas y puentes"], answer: "Empastes y extracciones" },
    { id: 216, topic: "Grupo", question: "En el seguro de grupo, el contrato se establece entre la aseguradora y:", options: ["Cada empleado", "El empleador (Dueño de la póliza)", "El examinador del estado", "El sindicato únicamente"], answer: "El empleador (Dueño de la póliza)" },
    { id: 217, topic: "Gastos Médicos", question: "Una póliza de 'Indemnización Hospitalaria' paga un beneficio basado en:", options: ["El costo real del hospital", "Un monto fijo en dólares por cada día de estancia", "El deducible de la póliza", "El ingreso del asegurado"], answer: "Un monto fijo en dólares por cada día de estancia" },
    { id: 218, topic: "Incapacidad", question: "Todos los siguientes factores influyen en la prima de una póliza de incapacidad, EXCEPTO:", options: ["La edad", "La ocupación", "La religión del asegurado", "El monto del beneficio mensual"], answer: "La religión del asegurado" },
    { id: 219, topic: "POS", question: "Un plan de Punto de Servicio (POS) es una combinación de:", options: ["Medicare y Medicaid", "HMO y PPO", "Dental y Visión", "Vida y Salud"], answer: "HMO y PPO" },
    { id: 220, topic: "COBRA", question: "Bajo COBRA, el empleador puede cobrar al ex-empleado un máximo de la prima total de:", options: ["50%", "100%", "102%", "150%"], answer: "102%" },
    { id: 221, topic: "LTC", question: "El beneficio de LTC que se proporciona en el hogar del asegurado se llama:", options: ["Cuidado de Respiro (Respite Care)", "Cuidado de Custodia", "Home Health Care", "Adult Day Care"], answer: "Home Health Care" },
    { id: 222, topic: "HMO", question: "El Médico de Cabecera en un HMO también es conocido como el:", options: ["Ajustador", "Gatekeeper (Portero)", "Suscriptor", "Especialista"], answer: "Gatekeeper (Portero)" },
    { id: 223, topic: "Suscripción", question: "Al suscribir un riesgo de grupo, la aseguradora se enfoca principalmente en:", options: ["La salud de cada individuo", "El riesgo del grupo como un todo", "La riqueza de la empresa", "La ubicación geográfica únicamente"], answer: "El riesgo del grupo como un todo" },
    { id: 224, topic: "Dental", question: "Un plan dental que cubre todos los servicios sin deducibles ni coseguro es un plan:", options: ["Programado", "No Programado", "Integral (Prepaid)", "De Riesgo"], answer: "Integral (Prepaid)" },
    { id: 225, topic: "Incapacidad", question: "El beneficio por incapacidad 'Presuntiva' se paga si el asegurado pierde:", options: ["Un dedo", "La vista en ambos ojos o dos extremidades", "El trabajo por 2 meses", "Un diente"], answer: "La vista en ambos ojos o dos extremidades" }
  ],
  3: [
    { id: 301, topic: "Provisiones", question: "El asegurado debe notificar un reclamo por escrito a la aseguradora dentro de:", options: ["10 días", "15 días", "20 días", "90 días"], answer: "20 días" },
    { id: 302, topic: "Provisiones", question: "Después de recibir el aviso de reclamo, la aseguradora debe enviar los formularios dentro de:", options: ["10 días", "15 días", "20 días", "30 días"], answer: "15 días" },
    { id: 303, topic: "Renovabilidad", question: "La cláusula de renovación más favorable para el asegurado, donde no se pueden subir primas, es:", options: ["Garantizada", "No Cancelable", "Opcional", "Condicional"], answer: "No Cancelable" },
    { id: 304, topic: "Prueba de Pérdida", question: "El tiempo máximo para presentar una prueba de pérdida por escrito es:", options: ["20 días", "30 días", "90 días", "1 año"], answer: "90 días" },
    { id: 305, topic: "Provisiones", question: "La provisión que establece que el asegurado tiene tiempo tras el vencimiento para pagar la prima es:", options: ["Periodo de Gracia", "Reincorporación", "Incontestabilidad", "Consideración"], answer: "Periodo de Gracia" },
    { id: 306, topic: "Legal", question: "El periodo de tiempo en que una póliza no puede ser impugnada por declaraciones falsas (excepto fraude) es de:", options: ["1 año", "2 años", "3 años", "5 años"], answer: "2 años" },
    { id: 307, topic: "Reincorporación", question: "Tras la reincorporación de una póliza, los reclamos por enfermedad tienen un periodo de espera de:", options: ["Inmediato", "10 días", "30 días", "45 días"], answer: "10 días" },
    { id: 308, topic: "Beneficiarios", question: "El beneficiario que recibe el dinero si el beneficiario primario ha muerto es el:", options: ["Irrevocable", "Contingente", "Fiduciario", "Terciario"], answer: "Contingente" },
    { id: 309, topic: "Legal", question: "¿Cuánto tiempo debe esperar el asegurado antes de emprender acciones legales contra la aseguradora?", options: ["20 días", "60 días", "90 días", "2 años"], answer: "60 días" },
    { id: 310, topic: "Renovabilidad", question: "Una póliza 'Garantizada Renovable' significa que la aseguradora:", options: ["No puede subir primas", "Debe renovar la póliza pero puede subir primas por clase", "Puede cancelar por cualquier motivo", "No tiene periodo de gracia"], answer: "Debe renovar la póliza pero puede subir primas por clase" },
    { id: 311, topic: "Provisiones", question: "Todas las siguientes son disposiciones 'Obligatorias' del uniforme de la póliza de salud, EXCEPTO:", options: ["Periodo de Gracia", "Reincorporación", "Cambio de Ocupación", "Prueba de Pérdida"], answer: "Cambio de Ocupación" },
    { id: 312, topic: "Provisiones", question: "Si el asegurado y el beneficiario primario mueren en el mismo accidente, los beneficios se pagan a:", options: ["Los herederos del beneficiario", "El patrimonio (Estate) del asegurado", "El estado de Florida", "La aseguradora"], answer: "El patrimonio (Estate) del asegurado" },
    { id: 313, topic: "Primas", question: "Si la aseguradora recibe una prima por una póliza cancelada, ¿qué porcentaje debe reembolsar?", options: ["Pró-rata", "Short-rate", "100%", "50%"], answer: "Pró-rata" },
    { id: 314, topic: "Provisiones", question: "La disposición que permite al asegurado cambiar a un beneficiario revocable se llama:", options: ["Asignación", "Cambio de Beneficiario", "Privilegio de Conversión", "Incontestabilidad"], answer: "Cambio de Beneficiario" },
    { id: 315, topic: "Accidentes", question: "Bajo la disposición de 'Pago de Reclamos', los beneficios por muerte se pagan al:", options: ["Médico", "Hospital", "Beneficiario designado", "Agente"], answer: "Beneficiario designado" },
    { id: 316, topic: "Provisiones", question: "La disposición de 'Examen Físico y Autopsia' otorga el derecho de realizar estos exámenes a:", options: ["El asegurado", "El beneficiario", "La aseguradora (a sus expensas)", "El examinador del estado"], answer: "La aseguradora (a sus expensas)" },
    { id: 317, topic: "Legal", question: "El periodo máximo para entablar una acción legal tras presentar la prueba de pérdida es de:", options: ["1 año", "2 años", "3 años", "5 años"], answer: "3 años" },
    { id: 318, topic: "Provisiones", question: "Si el asegurado cambia a una ocupación menos riesgosa, la aseguradora debe:", options: ["Reducir el beneficio", "Aumentar la prima", "Reembolsar el exceso de prima", "Cancelar la póliza"], answer: "Reembolsar el exceso de prima" },
    { id: 319, topic: "Edad", question: "Si se descubre un error en la edad del asegurado al momento del reclamo, la aseguradora:", options: ["Cancela la póliza", "Paga el beneficio completo y luego cobra la diferencia", "Ajusta los beneficios a lo que la prima habría comprado a la edad correcta", "No paga nada"], answer: "Ajusta los beneficios a lo que la prima habría comprado a la edad correcta" },
    { id: 320, topic: "Provisiones", question: "La disposición de 'Cambio de Ocupación' es una disposición de tipo:", options: ["Obligatoria", "Opcional", "Prohibida", "Estatutaria"], answer: "Opcional" },
    { id: 321, topic: "Renovabilidad", question: "La cláusula de renovabilidad que permite a la aseguradora cancelar la póliza en cualquier fecha de vencimiento de prima es:", options: ["Opcionalmente Renovable", "Cancelable", "Garantizada Renovable", "Condicional"], answer: "Opcionalmente Renovable" },
    { id: 322, topic: "Provisiones", question: "Bajo la disposición de 'Reincorporación', ¿cuántos días tiene la aseguradora para rechazar una solicitud antes de que sea automática?", options: ["10 días", "30 días", "45 días", "90 días"], answer: "45 días" },
    { id: 323, topic: "Provisiones", question: "Todas las siguientes son disposiciones 'Opcionales', EXCEPTO:", options: ["Misstatement of Age", "Illegal Occupation", "Grace Period", "Change of Occupation"], answer: "Grace Period" },
    { id: 324, topic: "Legal", question: "La cláusula de 'Consideración' establece que la validez del contrato depende de:", options: ["La salud del asegurado", "El intercambio de algo de valor (Prima/Promesa)", "La entrega física de la póliza", "El periodo de gracia"], answer: "El intercambio de algo de valor (Prima/Promesa)" },
    { id: 325, topic: "Beneficiarios", question: "Un beneficiario que NO puede ser cambiado sin su consentimiento escrito se llama:", options: ["Revocable", "Contingente", "Irrevocable", "Primario"], answer: "Irrevocable" }
  ],
  4: [
    { id: 401, topic: "Medicare", question: "¿Qué parte de Medicare cubre los servicios de hospitalización?", options: ["Parte A", "Parte B", "Parte C", "Parte D"], answer: "Parte A" },
    { id: 402, topic: "Medicare", question: "¿Qué parte de Medicare cubre las medicinas recetadas?", options: ["Parte A", "Parte B", "Parte C", "Parte D"], answer: "Parte D" },
    { id: 403, topic: "Medicare", question: "Para calificar para beneficios por incapacidad del Seguro Social, la incapacidad debe durar al menos:", options: ["3 meses", "5 meses", "12 meses", "24 meses"], answer: "12 meses" },
    { id: 404, topic: "Medigap", question: "Las pólizas de Suplemento de Medicare (Medigap) son vendidas por:", options: ["El Gobierno Federal", "El Estado de Florida", "Compañías Privadas", "Medicare.gov"], answer: "Compañías Privadas" },
    { id: 405, topic: "Medicaid", question: "Medicaid es financiado por:", options: ["Solo el Estado", "Solo el Gobierno Federal", "Tanto el Estado como el Federal", "Primas de los usuarios"], answer: "Tanto el Estado como el Federal" },
    { id: 406, topic: "Medicare", question: "La Parte B de Medicare generalmente paga un coseguro del:", options: ["50%", "70%", "80%", "100%"], answer: "80%" },
    { id: 407, topic: "Seguro Social", question: "El periodo de espera para recibir beneficios de incapacidad del Seguro Social es de:", options: ["3 meses", "5 meses", "6 meses", "12 meses"], answer: "5 meses" },
    { id: 408, topic: "Medigap", question: "¿Qué periodo de tiempo tiene un asegurado para revisar una póliza Medigap (Free Look)?", options: ["10 días", "20 días", "30 días", "45 días"], answer: "30 días" },
    { id: 409, topic: "Medicaid", question: "Para ser elegible para Medicaid, el solicitante debe:", options: ["Tener 65 años o más", "Tener bajos ingresos y recursos", "Haber pagado impuestos de nómina por 10 años", "Tener Medicare Parte A"], answer: "Tener bajos ingresos y recursos" },
    { id: 410, topic: "LTC", question: "Un periodo de eliminación en una póliza de Cuidados a Largo Plazo (LTC) se define en:", options: ["Dólares", "Días", "Número de visitas", "Porcentaje"], answer: "Días" },
    { id: 411, topic: "Medicare", question: "Todas las siguientes son partes de Medicare, EXCEPTO:", options: ["Parte A", "Parte B", "Parte E", "Parte D"], answer: "Parte E" },
    { id: 412, topic: "Medicare", question: "¿Qué parte de Medicare se conoce como Medicare Advantage?", options: ["Parte A", "Parte B", "Parte C", "Parte D"], answer: "Parte C" },
    { id: 413, topic: "Medigap", question: "Una póliza de Suplemento de Medicare NO puede duplicar los beneficios de:", options: ["Medicare", "Seguro de Vida", "Incapacidad", "Planes Dentales"], answer: "Medicare" },
    { id: 414, topic: "LTC", question: "Todos los siguientes son ADLs (Actividades Diarias) para calificar para LTC, EXCEPTO:", options: ["Comer", "Bañarse", "Conducir", "Vestirse"], answer: "Conducir" },
    { id: 415, topic: "Medicare", question: "El periodo de inscripción inicial para Medicare Parte B dura:", options: ["3 meses", "6 meses", "7 meses", "1 año"], answer: "7 meses" },
    { id: 416, topic: "Medicare", question: "La Parte A de Medicare es financiada principalmente por:", options: ["Primas de los usuarios", "Impuestos de nómina FICA", "El tesoro del estado de Florida", "Donaciones"], answer: "Impuestos de nómina FICA" },
    { id: 417, topic: "Medicare", question: "¿Cuál es el deducible de la Parte B de Medicare?", options: ["Es gratis", "Un monto fijo anual", "Un porcentaje de los ingresos", "Depende del hospital"], answer: "Un monto fijo anual" },
    { id: 418, topic: "Seguro Social", question: "El Seguro Social define la incapacidad total como la incapacidad de realizar:", options: ["Cualquier ocupación sustancialmente lucrativa", "Su propia ocupación", "Trabajos manuales", "Trabajo de oficina"], answer: "Cualquier ocupación sustancialmente lucrativa" },
    { id: 419, topic: "Medigap", question: "El periodo de inscripción abierta para Medigap comienza cuando el individuo:", options: ["Cumple 60 años", "Se inscribe en Medicare Parte B y tiene 65 años o más", "Se jubila", "Pierde su seguro de grupo"], answer: "Se inscribe en Medicare Parte B y tiene 65 años o más" },
    { id: 420, topic: "Medicaid", question: "Medicaid es un programa de bienestar social administrado por:", options: ["La Asociación Nacional de Comisionados", "El Estado", "Las compañías privadas únicamente", "El Agente"], answer: "El Estado" },
    { id: 421, topic: "LTC", question: "El beneficio de LTC que ayuda a los cuidadores familiares a tomar un descanso se llama:", options: ["Home Care", "Skilled Care", "Respite Care", "Adult Day Care"], answer: "Respite Care" },
    { id: 422, topic: "Medicare", question: "Si un individuo no se inscribe en la Parte D cuando es elegible, puede enfrentar una multa de:", options: ["10% anual", "1% mensual de por vida", "$100 por mes", "No hay multa"], answer: "1% mensual de por vida" },
    { id: 423, topic: "LTC", question: "Una póliza de LTC proporciona cobertura por un periodo mínimo de:", options: ["6 meses", "12 meses", "24 meses", "5 años"], answer: "12 meses" },
    { id: 424, topic: "Medicare", question: "La Parte B de Medicare cubre todos los siguientes, EXCEPTO:", options: ["Servicios médicos", "Exámenes de diagnóstico", "Servicios de hospitalización", "Cuidado ambulatorio"], answer: "Servicios de hospitalización" },
    { id: 425, topic: "LTC", question: "El nivel de cuidado de LTC que requiere asistencia médica las 24 horas por profesionales licenciados es:", options: ["Cuidado Intermedio", "Cuidado de Custodia", "Cuidado Especializado (Skilled Nursing Care)", "Home Health Care"], answer: "Cuidado Especializado (Skilled Nursing Care)" }
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
    { id: 505, topic: "HSA", question: "Para abrir una HSA, el asegurado debe tener un plan de:", options: ["Bajo deducible", "Alto deducible (HDHP)", "Solo hospital", "Medicare"], answer: "Alto deducible (HDHP)" },
    { id: 506, topic: "Propiedad", question: "¿Quién tiene el derecho de cambiar al beneficiario y asignar la póliza?", options: ["El asegurado", "El beneficiario", "El dueño de la póliza", "El examinador"], answer: "El dueño de la póliza" },
    { id: 507, topic: "Asignación", question: "El tipo de asignación que transfiere todos los derechos de propiedad de forma permanente es:", options: ["Asignación Colateral", "Asignación Parcial", "Asignación Absoluta", "Asignación Condicional"], answer: "Asignación Absoluta" },
    { id: 508, topic: "Beneficiarios", question: "Si un beneficiario es designado como 'Irrevocable', el dueño necesita su permiso para:", options: ["Pagar la prima", "Cambiar al beneficiario", "Ver el contrato", "Solicitar un reclamo"], answer: "Cambiar al beneficiario" },
    { id: 509, topic: "Dependientes", question: "La cobertura para un recién nacido debe notificarse a la aseguradora dentro de:", options: ["10 días", "31 días", "45 días", "60 días"], answer: "31 días" },
    { id: 510, topic: "Dependientes", question: "Un hijo incapacitado puede continuar bajo la póliza de sus padres tras los 26 años si:", options: ["Paga una prima doble", "Es incapaz de mantenerse por sí mismo y depende de los padres", "Vive en un estado diferente", "No tiene seguro social"], answer: "Es incapaz de mantenerse por sí mismo y depende de los padres" },
    { id: 511, topic: "Managed Care", question: "La revisión de utilización que requiere autorización antes de un procedimiento se llama:", options: ["Concurrente", "Prospectiva", "Retrospectiva", "Post-médica"], answer: "Prospectiva" },
    { id: 512, topic: "Managed Care", question: "El profesional que coordina el cuidado para un paciente con una enfermedad crónica y costosa es el:", options: ["Agente", "Gerente de Casos (Case Manager)", "Suscriptor", "Actuario"], answer: "Gerente de Casos (Case Manager)" },
    { id: 513, topic: "FSA", question: "¿Qué sucede con los fondos no utilizados en una FSA al final del año?", options: ["Se acumulan para el año siguiente", "Se devuelven al empleado", "Se pierden (Regla de Úsalo o Piérdelo)", "Se transfieren a una HSA"], answer: "Se pierden (Regla de Úsalo o Piérdelo)" },
    { id: 514, topic: "HRA", question: "¿Quién financia al 100% un Arreglo de Reembolso de Salud (HRA)?", options: ["El empleado", "El empleador", "El Gobierno", "El Agente"], answer: "El empleador" },
    { id: 515, topic: "Fiscalidad", question: "Las primas pagadas por un individuo en una póliza de gastos médicos son deducibles si superan el:", options: ["5% del AGI", "7.5% del AGI", "10% del AGI", "15% del AGI"], answer: "7.5% del AGI" },
    { id: 516, topic: "Managed Care", question: "Todas las siguientes son técnicas de 'Manejo de Casos', EXCEPTO:", options: ["Pre-autorización", "Revisión Concurrente", "PAGO PRO-RATA (DISPOSICIÓN DE CANCELACIÓN)", "Revisión Retrospectiva"], answer: "PAGO PRO-RATA (DISPOSICIÓN DE CANCELACIÓN)" },
    { id: 517, topic: "COB", question: "El propósito principal de la Coordinación de Beneficios (COB) es:", options: ["Aumentar el pago de primas", "Prevenir el sobre-seguro y el lucro por parte del asegurado", "Pagar al agente comisión doble", "Cancelar la póliza"], answer: "Prevenir el sobre-seguro y el lucro por parte del asegurado" },
    { id: 518, topic: "Tax", question: "Si un asegurado paga sus propias primas de incapacidad individual, los beneficios son:", options: ["Gravables como ingreso", "Sujetos a multa", "Libres de impuestos", "Solo el 50% libre de impuestos"], answer: "Libres de impuestos" },
    { id: 519, topic: "HSA", question: "Los fondos de una Cuenta de Ahorros de Salud (HSA) que no se usan en un año:", options: ["Se pierden", "Se devuelven al empleador", "Se acumulan y crecen para años futuros", "Se donan al estado"], answer: "Se acumulan y crecen para años futuros" },
    { id: 520, topic: "Managed Care", question: "La revisión que analiza los expedientes médicos después de que el paciente sale del hospital se llama:", options: ["Revisión Prospectiva", "Revisión Concurrente", "Revisión Retrospectiva", "Pre-autorización"], answer: "Revisión Retrospectiva" },
    { id: 521, topic: "COB", question: "En el caso de divorcio, el plan primario para un niño suele ser el del padre que:", options: ["Tiene la custodia", "Gana más dinero", "Es el más joven", "Tiene el seguro más antiguo"], answer: "Tiene la custodia" },
    { id: 522, topic: "Tax", question: "Las primas pagadas por un empleador para un seguro médico grupal son:", options: ["Deducibles para el empleador y no gravables para el empleado", "Deducibles para ambos", "No deducibles", "Gravables para el empleado"], answer: "Deducibles para el empleador y no gravables para el empleado" },
    { id: 523, topic: "Legal", question: "Todas las siguientes son consideraciones legales en una póliza de salud, EXCEPTO:", options: ["Incontestabilidad", "Asignación Colateral", "SELECCIÓN ADVERSA (PROCESO DE SUSCRIPCIÓN)", "Periodo de Gracia"], answer: "SELECCIÓN ADVERSA (PROCESO DE SUSCRIPCIÓN)" },
    { id: 524, topic: "HRA", question: "Un Arreglo de Reembolso de Salud (HRA) se diferencia de una HSA en que:", options: ["Es financiado por el empleado", "No requiere un plan de alto deducible (HDHP)", "Es obligatorio para todos", "Es solo para Medicare"], answer: "No requiere un plan de alto deducible (HDHP)" },
    { id: 525, topic: "Managed Care", question: "El objetivo de la 'Revisión de Utilización' es:", options: ["Subir las primas", "Evaluar la necesidad y propiedad del cuidado médico", "Pagar comisiones", "Vender más pólizas"], answer: "Evaluar la necesidad y propiedad del cuidado médico" }
  ],
  6: [
    { id: 601, topic: "Reguladores", question: "¿Quién supervisa la solvencia financiera de las aseguradoras en Florida?", options: ["El CFO", "La OIR", "El DFS", "La Legislatura"], answer: "La OIR" },
    { id: 602, topic: "Licencias", question: "¿Cuántas horas de educación continua debe completar un agente cada 2 años?", options: ["10 horas", "20 horas", "24 horas", "40 horas"], answer: "24 horas" },
    { id: 603, topic: "Ética", question: "El reemplazo de una póliza mediante declaraciones falsas o incompletas se llama:", options: ["Sliding", "Twisting", "Churning", "Rebating"], answer: "Twisting" },
    { id: 604, topic: "CFO", question: "El CFO de Florida tiene el poder de:", options: ["Hacer leyes de seguros", "Sentenciar a prisión", "Emitir citaciones y realizar audiencias", "Aumentar las primas"], answer: "Emitir citaciones y realizar audiencias" },
    { id: 605, topic: "Ética", question: "Mezclar los fondos de las primas con los fondos personales del agente se llama:", options: ["Commingling", "Rebating", "Twisting", "Sliding"], answer: "Commingling" },
    { id: 606, topic: "Licencias", question: "Un agente debe notificar un cambio de nombre o dirección al DFS dentro de:", options: ["10 días", "15 días", "30 días", "60 días"], answer: "30 días" },
    { id: 607, topic: "Nombramientos", question: "Si un agente no tiene un nombramiento activo con una aseguradora durante cuánto tiempo, su licencia caduca:", options: ["12 meses", "24 meses", "36 meses", "48 meses"], answer: "48 meses" },
    { id: 608, topic: "Reglas", question: "Decirle a un cliente que una cobertura es obligatoria por ley cuando no lo es, es un ejemplo de:", options: ["Twisting", "Sliding", "Churning", "Rebating"], answer: "Sliding" },
    { id: 609, topic: "Registros", question: "¿Cuánto tiempo debe un agente conservar los registros de sus transacciones de seguros?", options: ["1 año", "3 años", "5 años", "De por vida"], answer: "3 años" },
    { id: 610, topic: "Reguladores", question: "¿Quién es el jefe del Departamento de Servicios Financieros (DFS)?", options: ["El Gobernador", "El Comisionado de Seguros", "El CFO", "El Fiscal General"], answer: "El CFO" },
    { id: 611, topic: "Ética", question: "Todos los siguientes son ejemplos de prácticas comerciales desleales, EXCEPTO:", options: ["Coacción", "Boicot", "Rebating (cuando está aprobado)", "Difamación"], answer: "Rebating (cuando está aprobado)" },
    { id: 612, topic: "Licencias", question: "La licencia de un agente que no está debidamente nombrada por una aseguradora se considera:", options: ["Cancelada", "Inactiva", "Pendiente", "Suspendida"], answer: "Inactiva" },
    { id: 613, topic: "Agencia", question: "Un agente tiene una responsabilidad fiduciaria hacia:", options: ["Solo su familia", "Solo su gerente", "Tanto el cliente como la aseguradora", "El examinador únicamente"], answer: "Tanto el cliente como la aseguradora" },
    { id: 614, topic: "Sanciones", question: "Si el CFO descubre que un agente ha cometido fraude, puede imponer todas las siguientes, EXCEPTO:", options: ["Multas administrativas", "Suspensión de licencia", "Pena de muerte", "Revocación de licencia"], answer: "Pena de muerte" },
    { id: 615, topic: "Reguladores", question: "El Financial Services Commission en Florida está compuesto por todos los siguientes, EXCEPTO:", options: ["El Gobernador", "El Comisionado de Seguros", "El CFO", "El Comisionado de Agricultura"], answer: "El Comisionado de Seguros" },
    { id: 616, topic: "Ética", question: "Ofrecer algo de valor al prospecto que no está especificado en el contrato para inducir la compra es:", options: ["Twisting", "Rebating", "Sliding", "Coerción"], answer: "Rebating" },
    { id: 617, topic: "Licencias", question: "Un agente 'No Residente' en Florida es aquel que:", options: ["No tiene licencia en su estado natal", "Vive en otro estado pero tiene licencia para vender en Florida", "Vive en Florida pero vende en Texas", "No tiene seguro social"], answer: "Vive en otro estado pero tiene licencia para vender en Florida" },
    { id: 618, topic: "OIR", question: "El propósito de la Office of Insurance Regulation (OIR) es:", options: ["Hacer leyes", "Castigar criminales", "Supervisar la solvencia y las tarifas de las aseguradoras", "Recaudar impuestos"], answer: "Supervisar la solvencia y las tarifas de las aseguradoras" },
    { id: 619, topic: "Registros", question: "Los registros de los agentes en Florida deben estar disponibles para inspección por parte del DFS:", options: ["Solo con una orden judicial", "En cualquier momento razonable", "Solo los domingos", "Solo si el cliente se queja"], answer: "En cualquier momento razonable" },
    { id: 620, topic: "Licencias", question: "Para obtener una licencia de agente en Florida, el solicitante debe cumplir con todos los siguientes, EXCEPTO:", options: ["Tener al menos 18 años", "Ser ciudadano estadounidense únicamente", "Tener buen carácter moral", "Completar el curso educativo requerido"], answer: "Ser ciudadano estadounidense únicamente" },
    { id: 621, topic: "Ética", question: "La práctica de usar declaraciones engañosas para convencer a un asegurado de cancelar una póliza y comprar otra se llama:", options: ["Sliding", "Twisting", "Churning", "Adhesión"], answer: "Twisting" },
    { id: 622, topic: "Reglas", question: "Todas las pólizas de reemplazo deben ser notificadas a la aseguradora:", options: ["Existente y nueva", "Solo a la nueva", "Solo al DFS", "No es necesario notificar"], answer: "Existente y nueva" },
    { id: 623, topic: "CFO", question: "El CFO supervisa todas las siguientes divisiones, EXCEPTO:", options: ["División de Agentes y Agencias", "División de Fraude", "División de Pesca y Vida Silvestre", "División de Servicios al Consumidor"], answer: "División de Pesca y Vida Silvestre" },
    { id: 624, topic: "Ética", question: "Coerción se define como:", options: ["Ofrecer un regalo", "Usar fuerza o amenazas para restringir el comercio de seguros", "Mentir en la solicitud", "Subir las primas"], answer: "Usar fuerza o amenazas para restringir el comercio de seguros" },
    { id: 625, topic: "Licencias", question: "¿Cuánto dura el nombramiento de un agente con una aseguradora en Florida?", options: ["1 año", "2 años", "De por vida mientras la licencia esté activa", "Depende del CFO"], answer: "2 años" }
  ],
  7: [
    { id: 701, topic: "Salud Florida", question: "¿Cuál es el periodo de gracia en Florida para una póliza de salud con prima mensual?", options: ["7 días", "10 días", "31 días", "45 días"], answer: "10 días" },
    { id: 702, topic: "Maternidad", question: "En Florida, la estancia mínima obligatoria tras un parto natural es de:", options: ["24 horas", "48 horas", "72 horas", "96 horas"], answer: "48 horas" },
    { id: 703, topic: "Small Group", question: "En Florida, un 'Pequeño Empleador' tiene entre:", options: ["1 y 25 empleados", "1 y 50 empleados", "1 y 100 empleados", "20 y 50 empleados"], answer: "1 y 50 empleados" },
    { id: 704, topic: "LTC Florida", question: "¿Cuál es el periodo de examen libre (Free Look) para LTC en Florida?", options: ["10 días", "20 días", "30 días", "45 días"], answer: "30 días" },
    { id: 705, topic: "Reglas", question: "La cobertura para un recién nacido comienza automáticamente:", options: ["A los 30 días", "Tras el pago de la primera prima", "En el momento del nacimiento", "Tras la notificación al DFS"], answer: "En el momento del nacimiento" },
    { id: 706, topic: "Salud Florida", question: "El periodo de gracia para una póliza de salud con prima semanal es de:", options: ["7 días", "10 días", "31 días", "No tiene"], answer: "7 días" },
    { id: 707, topic: "Small Group", question: "La ley de Continuación de Salud de Florida (Mini-COBRA) aplica a grupos de hasta:", options: ["10 empleados", "20 empleados", "50 empleados", "100 empleados"], answer: "20 empleados" },
    { id: 708, topic: "Diabetes", question: "En Florida, las aseguradoras deben cubrir suministros y equipos para la diabetes si:", options: ["Es diabetes tipo 1 solamente", "Es recetado por un médico", "El paciente es menor de edad", "No es obligatorio"], answer: "Es recetado por un médico" },
    { id: 709, topic: "LTC Florida", question: "En Florida, las pólizas de Cuidados a Largo Plazo (LTC) deben ser:", options: ["Cancelables", "Opcionalmente renovables", "Garantizadas renovables", "Condicionalmente renovables"], answer: "Garantizadas renovables" },
    { id: 710, topic: "Grupo", question: "Bajo la Mini-COBRA de Florida, el periodo máximo de continuación es generalmente de:", options: ["12 meses", "18 meses", "24 meses", "36 meses"], answer: "18 meses" },
    { id: 711, topic: "Salud Florida", question: "Todas las siguientes son coberturas obligatorias en Florida, EXCEPTO:", options: ["Cáncer de mama (mamografías)", "Diabetes", "Cuidado quiropráctico", "Seguro de mascotas"], answer: "Seguro de mascotas" },
    { id: 712, topic: "Maternidad", question: "La ley de Florida prohíbe que las pólizas de salud excluyan la cobertura de:", options: ["Cirugía estética", "Complicaciones del embarazo", "Deportes extremos", "Viajes internacionales"], answer: "Complicaciones del embarazo" },
    { id: 713, topic: "Small Group", question: "Un empleado en un plan de grupo pequeño en Florida es elegible para cobertura si trabaja al menos:", options: ["10 horas/semana", "20 horas/semana", "25 horas/semana", "40 horas/semana"], answer: "25 horas/semana" },
    { id: 714, topic: "Publicidad", question: "Toda la publicidad de seguros en Florida es responsabilidad de:", options: ["El CFO", "La OIR", "La aseguradora que emite la póliza", "El Agente únicamente"], answer: "La aseguradora que emite la póliza" },
    { id: 715, topic: "Reglas", question: "En Florida, una póliza de Medicare Supplement (Medigap) debe tener un periodo de Free Look de:", options: ["10 días", "20 días", "30 días", "45 días"], answer: "30 días" },
    { id: 716, topic: "Diabetes", question: "Las aseguradoras en Florida deben ofrecer cobertura para la educación sobre el automanejo de la diabetes si:", options: ["El asegurado lo pide", "Es recetado por un médico", "La prima es pagada a tiempo", "Solo para planes HMO"], answer: "Es recetado por un médico" },
    { id: 717, topic: "Salud Florida", question: "Todas las siguientes son reglas para la publicidad de seguros en Florida, EXCEPTO:", options: ["No debe ser engañosa", "Debe incluir el nombre de la aseguradora", "Debe ser aprobada por el Agente antes que por la compañía", "No debe exagerar los beneficios"], answer: "Debe ser aprobada por el Agente antes que por la compañía" },
    { id: 718, topic: "LTC Florida", question: "El 'Partnership Program' de LTC en Florida permite proteger activos para calificar para:", options: ["Medicare", "Seguridad Social", "Medicaid", "Seguro de Desempleo"], answer: "Medicaid" },
    { id: 719, topic: "Pequeño Empleador", question: "Al ofrecer planes a un pequeño empleador, la aseguradora debe ofrecer:", options: ["Solo un plan", "Todos sus planes de salud de grupo pequeño", "Solo los planes más caros", "Solo planes HMO"], answer: "Todos sus planes de salud de grupo pequeño" },
    { id: 720, topic: "Maternidad", question: "Si un parto natural requiere una estancia de más de 48 horas, Florida requiere cobertura si:", options: ["Es recomendado por el médico tratante", "El hospital está lleno", "El marido lo solicita", "La prima es alta"], answer: "Es recomendado por el médico tratante" },
    { id: 721, topic: "Mini-COBRA", question: "La notificación de Mini-COBRA en Florida debe enviarse al empleado dentro de los:", options: ["10 días", "14 días", "30 días", "31 días"], answer: "14 días" },
    { id: 722, topic: "Garantías", question: "Florida prohíbe que las pólizas de salud utilicen el término 'Garantizado' si:", options: ["No se puede cancelar", "La aseguradora puede subir primas por clase", "Solo se aplica a la red", "El CFO no ha dado permiso"], answer: "La aseguradora puede subir primas por clase" },
    { id: 723, topic: "Recién Nacidos", question: "La cobertura automática para recién nacidos incluye:", options: ["Solo enfermedades", "Solo accidentes", "Tanto enfermedades como lesiones y cuidado de niños sanos", "Solo hospitalización"], answer: "Tanto enfermedades como lesiones y cuidado de niños sanos" },
    { id: 724, topic: "Divulgación", question: "La guía del comprador de Medicare Supplement debe entregarse:", options: ["Al momento de la aplicación", "Cuando se paga el primer reclamo", "Solo si el cliente la pide", "Un año después de la entrega"], answer: "Al momento de la aplicación" },
    { id: 725, topic: "Salud Florida", question: "El 'Florida Healthy Kids Corporation' proporciona seguro a:", options: ["Personas de 65 años o más", "Niños de familias de medianos ingresos que no califican para Medicaid", "Indigentes únicamente", "Agentes de seguros"], answer: "Niños de familias de medianos ingresos que no califican para Medicaid" }
  ]

};

export const MASTERCLASS_METADATA = {
  '3.1': [
    { start: 1, end: 5, type: 'word', title: '12 PROVISIONES' },
    { start: 10, end: 25, type: 'concept', title: 'REGLA 20-15-90', text: 'Aviso: 20d | Form: 15d | Prueba: 90d.' },
    { start: 30, end: 45, type: 'concept', title: 'PERIODO DE GRACIA', text: '7 días (semanal), 10 días (mensual), 31 días (resto).' },
    { start: 50, end: 65, type: 'trap', title: 'REINCORPORACIÓN', text: 'Accidentes inmediato. Enfermedad: 10 días de espera.' },
    { start: 70, end: 85, type: 'word', title: 'TIME LIMIT' }
  ],
  '2.4': [
    { start: 10, end: 30, type: 'concept', title: 'ADLs (Actividades Diarias)', text: 'Comer, bañarse, vestirse, movilidad, continencia, usar el baño.' },
    { start: 40, end: 60, type: 'trap', title: 'ELIMINATION PERIOD', text: 'Funciona como un deducible de tiempo. A más largo, menor prima.' }
  ],
  '3.2': [
    { start: 30, end: 60, type: 'trap', title: 'CAMBIO OCUPACIÓN', text: 'Más riesgo = menos beneficio. Menos riesgo = reembolso de prima.' },
    { start: 70, end: 90, type: 'concept', title: 'ERROR DE EDAD', text: 'Se ajusta el beneficio a lo que la prima habría comprado.' },
    { start: 100, end: 140, type: 'concept', title: 'RELACIÓN GANANCIAS', text: 'Evita ganar más dinero incapacitado que trabajando.' },
    { start: 150, end: 200, type: 'concept', title: 'RENOVABILIDAD', text: 'No-Cancelable (Mejor) > Garantizada > Condicional > Cancelable.' }
  ],
  '4.1': [
    { start: 45, end: 75, type: 'concept', title: 'PARTE A (HOSPITAL)', text: 'Cubre hospital, enfermería, hospicio y hogar. Deducible por periodo.' },
    { start: 90, end: 120, type: 'concept', title: 'PARTE B (MÉDICO)', text: 'Opcional. Prima mensual. Regla 80/20 tras deducible anual.' },
    { start: 135, end: 165, type: 'concept', title: 'PARTE C (ADVANTAGE)', text: 'Alternativa privada (HMO/PPO) que combina A y B.' },
    { start: 180, end: 210, type: 'concept', title: 'PARTE D (MEDICINAS)', text: 'Opcional. Compañías privadas. Multa de por vida si no se inscribe.' }
  ],
  '4.2': [
    { start: 40, end: 70, type: 'concept', title: 'MEDIGAP (SUPLEMENTOS)', text: 'Cubre el 20% de la Parte B. Free Look: 30 días.' },
    { start: 80, end: 110, type: 'concept', title: 'MEDICAID', text: 'Basado en necesidad económica. Programa Federal + Estado (Florida).' },
    { start: 130, end: 170, type: 'trap', title: 'SEGURO SOCIAL (OASDI)', text: 'Incapacidad total. Espera: 5 meses. Duración: 12 meses.' }
  ],
  '5.1': [
    { start: 20, end: 50, type: 'concept', title: 'INCIDENTES DE PROPIEDAD', text: 'Solo el dueño puede cambiar beneficiarios y asignar la póliza.' },
    { start: 60, end: 100, type: 'concept', title: 'ASIGNACIÓN', text: 'Absoluta (Permanente) vs Colateral (Garantía temporal).' },
    { start: 110, end: 130, type: 'trap', title: 'BENEFICIARIO IRREVOCABLE', text: 'Requiere su permiso escrito para cambios o préstamos.' },
    { start: 140, end: 175, type: 'concept', title: 'RECIÉN NACIDOS', text: 'Cobertura automática 30 días. Notificar al asegurador para continuar.' },
    { start: 185, end: 220, type: 'concept', title: 'HIJOS INCAPACITADOS', text: 'Cobertura continúa tras los 26 años si dependen del padre.' },
    { start: 230, end: 270, type: 'concept', title: 'REGLA DEL CUMPLEAÑOS', text: 'Primario: El padre cuyo cumple ocurre primero en el año.' }
  ],
  '5.2': [
    { start: 30, end: 60, type: 'concept', title: 'REVISIÓN PROSPECTIVA', text: 'Autorización previa antes de tratamientos no urgentes.' },
    { start: 70, end: 100, type: 'concept', title: 'REVISIÓN CONCURRENTE', text: 'Monitoreo de la estancia hospitalaria día a día.' },
    { start: 110, end: 140, type: 'concept', title: 'MANEJO DE CASOS', text: 'Coordinación para situaciones médicas complejas y costosas.' },
    { start: 150, end: 180, type: 'concept', title: 'HSA (AHORRO SALUD)', text: 'Requiere HDHP. Fondos acumulables y deducibles.' },
    { start: 190, end: 220, type: 'trap', title: 'FSA (GASTOS FLEXIBLES)', text: 'Regla de úsalo o piérdelo al final del año.' },
    { start: 230, end: 260, type: 'concept', title: 'HRA (REEMBOLSO)', text: 'Financiada 100% por el empleador.' }
  ]
};
