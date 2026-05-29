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
        videoUrl: "PLACEHOLDER_6_1",
        summary: "Autoridades reguladoras y sus poderes en Florida."
      },
      {
        id: "6.2",
        title: "6.2 Licenciamiento y Prácticas Prohibidas",
        videoUrl: "PLACEHOLDER_6_2",
        summary: "Requisitos de licencia, Ética, Twisting y Churning."
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
        summary: "Reglas de Florida para maternidad, diabetes y recién nacidos."
      },
      {
        id: "7.2",
        title: "7.2 Publicidad, LTC y Small Group en Florida",
        videoUrl: "PLACEHOLDER_7_2",
        summary: "Normas de divulgación y reglas para pequeñas empresas."
      }
    ]
  }
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
