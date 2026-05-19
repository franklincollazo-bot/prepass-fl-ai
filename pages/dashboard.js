// v2.1.0 - Stable Video Engine
import React from 'react';
import Head from 'next/head';

const COLORS = {
  black: '#000000',
  darkBg: '#F5E6CC', 
  navy: '#0A1B33',
  gold: '#C5A059',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#64748b',
  border: '#D9CBB0'
};

const LOGO_URL = "https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png";

const CHAPTERS_DATA = {
  1: {
    title: "Capítulo 1: Introducción y Conceptos Básicos",
    subtitle: "Mentalidad de Éxito y el Negocio de los Seguros",
    manual: "/Modulo1_Manual_Completo.html",
    guia: "/Modulo1_Guia_Estudio.html",
    subtopics: [
      {
        title: "1.0 Introducción: La Nueva Era de Seguros",
        videoUrl: "https://app.heygen.com/embeds/976a82841af9490a93ff0a9f9a6f1383",
        summary: "Bienvenido a Maná Academy. Descubre por qué PrePass FLAI es la herramienta definitiva para obtener tu licencia en tiempo récord."
      },
      {
        title: "1.1 Conceptos de Seguro y Riesgo (STARR)",
        videoUrl: "https://app.heygen.com/embeds/cf8b4c9ddeda4705ad5e3b0e26c7217c",
        summary: "Aprende a identificar los riesgos y cómo las aseguradoras los gestionan a través del acrónimo STARR."
      },
      {
        title: "1.2 El Agente: Poderes y Autoridad",
        videoUrl: "https://app.heygen.com/embeds/816ae97e0ee845f8973190d466a39ba6",
        summary: "Domina los conceptos de Autoridad Expresa, Implícita y Aparente del agente de seguros."
      },
      {
        title: "1.3 Elementos Legales (ALCAL)",
        videoUrl: "https://app.heygen.com/embeds/01b891eff6c44b83b9ac98d514418cc5",
        summary: "Acuerdo, Consideración, Partes Competentes y Propósito Legal."
      },
      {
        title: "1.4 Características del Contrato",
        videoUrl: "https://app.heygen.com/embeds/3284d46ca0e64e86a5aa8c84cb9660b8",
        summary: "Adhesión, Aleatorio, Unilateral y Condicional. Por qué las ambigüedades favorecen al cliente."
      },
      {
        title: "1.5 Suscripción: MIB y Ley FCRA",
        videoUrl: "https://app.heygen.com/embeds/3c5c55a1cb434dce8caff51c35e8d1fe",
        summary: "Cómo las aseguradoras investigan el riesgo médico y de crédito legalmente."
      },
      {
        title: "1.6 Ética y Leyes: Masterclass v2",
        videoUrl: "https://app.heygen.com/embeds/c7198b0a9b614a1c9e317e8e9fc16c83",
        summary: "Versión mejorada con IA: Domina las prácticas que el examinador pone a prueba con enfoque en ética profesional."
      }
    ]
  },
  2: {
    title: "Capítulo 2: Tipos de Pólizas",
    subtitle: "Incapacidad, Gastos Médicos y Planes Grupales",
    manual: "/Modulo2_Manual_Completo.html",
    guia: "/Modulo2_Guia_Estudio.html",
    subtopics: [
      {
        title: "2.1 El Seguro de Incapacidad (Income Replacement)",
        videoUrl: "https://app.heygen.com/embeds/97e8d8caddaf43cd915ec2e81d9a3db8",
        summary: "Aprende a proteger el activo más importante: tu capacidad de generar ingresos. Conceptos clave: Own Occ vs Any Occ."
      },
      {
        title: "2.2 Gastos Médicos: Básicos vs Mayores",
        videoUrl: "https://app.heygen.com/embeds/PLACEHOLDER_2_2",
        summary: "Análisis de deducibles, coseguro y el límite de stop-loss."
      },
      {
        title: "2.3 HMO y PPO: Cuidado Administrado",
        videoUrl: "https://app.heygen.com/embeds/PLACEHOLDER_2_3",
        summary: "Cómo funcionan las redes, el rol del Gatekeeper y el pago por capitación."
      },
      {
        title: "2.4 Seguros Grupales y COBRA",
        videoUrl: "https://app.heygen.com/embeds/PLACEHOLDER_2_4",
        summary: "Reglas de elegibilidad, conversión y la ley COBRA para la continuidad de cobertura."
      }
    ]
  },
  3: {
    title: "Capítulo 3: Provisiones y Cláusulas",
    subtitle: "Reglas Obligatorias y Derechos del Asegurado",
    manual: "/Modulo3_Manual_Completo.html",
    guia: "/Modulo3_Guia_Estudio.html",
    subtopics: [
      {
        title: "3.1 Provisiones Obligatorias NAIC",
        videoUrl: "https://app.heygen.com/embeds/PLACEHOLDER_3_1",
        summary: "Período de gracia, reincorporación y los límites de tiempo para reclamos."
      },
      {
        title: "3.2 Derechos de Renovabilidad",
        videoUrl: "https://app.heygen.com/embeds/PLACEHOLDER_3_2",
        summary: "Diferencias entre pólizas No Cancelables, Garantizadas y Opcionales."
      }
    ]
  }
};

export default function Dashboard() {
  const [activeModule, setActiveModule] = React.useState(1);
  const [activeSubtopic, setActiveSubtopic] = React.useState(0);
  const [showExam, setShowExam] = React.useState(false);
  const [unlockedChapters, setUnlockedChapters] = React.useState([1, 2]);
  const [chat, setChat] = React.useState([
    { role: 'ai', text: '¡Hola! Soy tu tutor de Maná Academy. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [dynamicText, setDynamicText] = React.useState(null);
  const [examState, setExamState] = React.useState({ questions: [], currentIndex: 0, answers: [], results: null });
  const [performanceHistory, setPerformanceHistory] = React.useState([]);
  const [errorRadar, setErrorRadar] = React.useState({});
  const [showSurvey, setShowSurvey] = React.useState(false);
  const [surveyStep, setSurveyStep] = React.useState(0);
  const [surveyResponses, setSurveyResponses] = React.useState({});
  const [userReg, setUserReg] = React.useState(null);
  const videoRef = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedHistory = localStorage.getItem('performanceHistory');
    if (savedHistory) setPerformanceHistory(JSON.parse(savedHistory));
    const savedRadar = localStorage.getItem('errorRadar');
    if (savedRadar) setErrorRadar(JSON.parse(savedRadar));
    const savedReg = localStorage.getItem('userRegistration');
    if (savedReg) setUserReg(JSON.parse(savedReg));
  }, []);

  const startExam = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/questions?chapterId=${activeModule}`);
      const data = await res.json();
      setExamState({ questions: data, currentIndex: 0, answers: [], results: null });
      setShowExam(true);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleAnswer = (option) => {
    const currentQ = examState.questions[examState.currentIndex];
    const newAnswers = [...examState.answers, option];
    
    // Track errors for the Radar
    if (option !== currentQ.answer) {
      const newRadar = { ...errorRadar };
      newRadar[currentQ.topic] = (newRadar[currentQ.topic] || 0) + 1;
      setErrorRadar(newRadar);
      localStorage.setItem('errorRadar', JSON.stringify(newRadar));
    }

    if (examState.currentIndex < examState.questions.length - 1) {
      setExamState({ ...examState, currentIndex: examState.currentIndex + 1, answers: newAnswers });
    } else {
      // Finish Exam
      let score = 0;
      examState.questions.forEach((q, i) => {
        if (q.answer === newAnswers[i]) score++;
      });
      const finalScore = (score / examState.questions.length) * 100;
      const resultEntry = { date: new Date().toISOString(), chapter: activeModule, score: finalScore };
      const newHistory = [...performanceHistory, resultEntry];
      setPerformanceHistory(newHistory);
      localStorage.setItem('performanceHistory', JSON.stringify(newHistory));
      setExamState({ ...examState, answers: newAnswers, results: { score: finalScore, correct: score, total: examState.questions.length } });
      
      if (finalScore >= 80 && !unlockedChapters.includes(activeModule + 1)) {
        setUnlockedChapters([...unlockedChapters, activeModule + 1]);
        setShowSurvey(true);
      }
    }
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Recibido:", surveyResponses);
    setShowSurvey(false);
    setSurveyStep(0);
    // In a real app, send to API here
  };

  const getReadinessInfo = () => {
    if (performanceHistory.length === 0) return { percent: 0, advice: "Aún no has tomado exámenes. ¡Comienza uno para medir tu nivel!", status: "N/A" };
    
    const avgScore = performanceHistory.reduce((acc, curr) => acc + curr.score, 0) / performanceHistory.length;
    let advice = "";
    let status = "";
    
    if (avgScore >= 85) {
      advice = "¡Dominio Total! Estás listo para el examen estatal. Tu consistencia es clave.";
      status = "LISTO";
    } else if (avgScore >= 70) {
      advice = "Buen camino. Revisa las preguntas falladas en el Capítulo " + activeModule + " para llegar al 90%.";
      status = "CERCA";
    } else {
      advice = "Necesitas reforzar fundamentos. Lee el Manual Maestro y enfócate en los 'Exam Traps'.";
      status = "EN PROCESO";
    }
    
    return { percent: Math.round(avgScore), advice, status };
  };

  const readiness = getReadinessInfo();

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    if (activeModule === 1 && activeSubtopic === 0) {
      if (time > 2 && time < 10) setDynamicText("EL TIEMPO ES DINERO");
      else if (time > 25 && time < 35) setDynamicText("EFICIENCIA AI");
      else if (time > 45 && time < 55) setDynamicText("STARR");
      else if (time > 80 && time < 95) setDynamicText("DOBLE ALEATORIEDAD");
      else setDynamicText(null);
    } else {
      setDynamicText(null);
    }
  };

  const askTutor = async () => {
    if (!query) return;
    const userMessage = { role: 'user', text: query };
    setChat([...chat, userMessage]);
    setLoading(true);
    const currentQuery = query;
    setQuery('');

    try {
      const response = await fetch('/api/tutor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentQuery })
      });

      const data = await response.json();
      
      if (data.reply) {
        setChat(prev => [...prev, { role: 'ai', text: data.reply }]);
      } else {
        throw new Error(data.error || 'Error en la respuesta del tutor');
      }
    } catch (err) {
      console.error("Tutor Error:", err);
      setChat(prev => [...prev, { 
        role: 'ai', 
        text: "Entiendo tu duda sobre " + currentQuery + ". Según el manual, este concepto es fundamental para el examen de Florida. ¿Podrías ser más específico para ayudarte mejor?" 
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  const currentChapter = CHAPTERS_DATA[activeModule];

  return (
    <div className="dashboard-container" style={{ backgroundColor: COLORS.darkBg, color: COLORS.navy, minHeight: '100vh', fontFamily: 'system-ui' }}>
      <Head>
        <title>Dashboard | Maná Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <nav className="nav-bar" style={{ padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.navy, borderBottom: `3px solid ${COLORS.gold}` }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '50px' }} />
        <div className="nav-title" style={{ color: COLORS.white, fontWeight: 'bold' }}>MANÁ ACADEMY | PREPASS FL AI</div>
      </nav>

      <main className="main-layout" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '20px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <section className="left-section" style={{ flex: '1 1 700px', minWidth: '0' }}>
          <div className="chapter-selector" style={{ display: 'flex', gap: '10px', marginBottom: '25px', overflowX: 'auto', paddingBottom: '10px', width: '100%' }}>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <button 
                key={num}
                onClick={() => { setActiveModule(num); setActiveSubtopic(0); setShowExam(false); }}
                style={{
                  padding: '12px 20px',
                  backgroundColor: activeModule === num ? COLORS.gold : (unlockedChapters.includes(num) ? COLORS.white : '#e2e8f0'),
                  color: activeModule === num ? COLORS.black : COLORS.navy,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: unlockedChapters.includes(num) ? 'pointer' : 'not-allowed',
                  opacity: unlockedChapters.includes(num) ? 1 : 0.6
                }}
              >
                Cap. {num}
              </button>
            ))}
          </div>

          <div className="chapter-main-card" style={{ backgroundColor: COLORS.white, padding: '30px', borderRadius: '15px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h1 className="chapter-title" style={{ margin: '0 0 10px 0', color: COLORS.navy }}>{currentChapter?.title}</h1>
            <p className="chapter-subtitle" style={{ color: COLORS.gray, marginBottom: '30px' }}>{currentChapter?.subtitle}</p>

            <div className="chapter-content-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', width: '100%' }}>
              <div className="subtopics-list" style={{ flex: '0 0 280px', minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentChapter?.subtopics.map((sub, i) => (
                  <div 
                    key={i}
                    onClick={() => { setActiveSubtopic(i); setShowExam(false); }}
                    style={{
                      padding: '15px',
                      backgroundColor: activeSubtopic === i ? COLORS.navy : '#f8fafc',
                      color: activeSubtopic === i ? COLORS.white : COLORS.navy,
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: `1px solid ${activeSubtopic === i ? COLORS.navy : COLORS.border}`
                    }}
                  >
                    {sub.title}
                  </div>
                ))}

                <div style={{ marginTop: '20px', borderTop: `1px solid ${COLORS.border}`, paddingTop: '20px' }}>
                  <h4 style={{ fontSize: '12px', color: COLORS.gray, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Material de Apoyo</h4>
                  <a 
                    href={currentChapter?.manual} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px',
                      backgroundColor: '#fff',
                      color: COLORS.navy,
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      border: `1px solid ${COLORS.border}`,
                      marginBottom: '10px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                    }}
                  >
                    📖 MANUAL MAESTRO (PDF)
                  </a>
                  <a 
                    href={currentChapter?.guia} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px',
                      backgroundColor: '#fff',
                      color: COLORS.navy,
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                    }}
                  >
                    💡 25 PREGUNTAS CLAVE
                  </a>
                </div>

                <div 
                  onClick={showExam ? () => setShowExam(false) : startExam}
                  style={{
                    padding: '15px',
                    backgroundColor: showExam ? '#ef4444' : COLORS.gold,
                    color: showExam ? COLORS.white : COLORS.black,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: '20px',
                    border: showExam ? 'none' : `1px solid ${COLORS.goldDark}`,
                    transition: 'all 0.3s'
                  }}
                >
                  {loading ? 'CARGANDO...' : showExam ? '✕ CERRAR EXAMEN' : '📝 INICIAR EXAMEN DE CAPÍTULO'}
                </div>
              </div>

              <div className="video-player-wrapper" style={{ flex: '1 1 400px', minWidth: '0' }}>
                {!showExam ? (
                  <div className="video-container" style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: COLORS.black, borderRadius: '12px', overflow: 'hidden' }}>
                    {dynamicText && (
                      <div style={{ position: 'absolute', top: '10%', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ color: COLORS.gold, fontSize: '32px', fontWeight: 'bold', backgroundColor: 'rgba(10, 27, 51, 0.8)', padding: '10px 30px', borderRadius: '50px', border: `2px solid ${COLORS.gold}`, animation: 'fadeInUp 0.5s' }}>
                          {dynamicText}
                        </div>
                      </div>
                    )}
                    {currentChapter?.subtopics[activeSubtopic].videoUrl.includes('PLACEHOLDER') ? (
                      <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        background: 'linear-gradient(135deg, #0A1B33 0%, #1a2a44 100%)', 
                        borderRadius: '12px' 
                      }}>
                        <div style={{ color: COLORS.gold, fontSize: '2.5rem', marginBottom: '1.5rem' }}>✨</div>
                        <h3 style={{ color: COLORS.white, margin: 0, fontSize: '1.4rem' }}>Clase en Producción Maestra</h3>
                        <p style={{ color: COLORS.gold, opacity: 0.9, fontSize: '1rem', marginTop: '10px' }}>El Avatar Frank está preparando esta lección magistral.</p>
                      </div>
                    ) : currentChapter?.subtopics[activeSubtopic].videoUrl.includes('heygen.com') ? (
                      <iframe 
                        key={currentChapter?.subtopics[activeSubtopic].videoUrl}
                        src={currentChapter?.subtopics[activeSubtopic].videoUrl}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        allow="fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video 
                        ref={videoRef}
                        onTimeUpdate={handleTimeUpdate}
                        src={currentChapter?.subtopics[activeSubtopic].videoUrl}
                        controls 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      />
                    )}
                  </div>
                ) : (
                  <div className="exam-container" style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '12px', border: `1px solid ${COLORS.border}`, minHeight: '400px' }}>
                    {!examState.results ? (
                      <>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                           <span style={{ fontWeight: 'bold', color: COLORS.navy }}>Pregunta {examState.currentIndex + 1} de {examState.questions.length}</span>
                           <button 
                             onClick={() => setShowExam(false)}
                             style={{ background: 'none', border: 'none', color: COLORS.gray, cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                           >
                             ✕ CANCELAR EXAMEN
                           </button>
                         </div>
                        <h2 style={{ fontSize: '20px', marginBottom: '30px' }}>{examState.questions[examState.currentIndex]?.question}</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {examState.questions[examState.currentIndex]?.options.map((opt, i) => (
                            <button 
                              key={i}
                              onClick={() => handleAnswer(opt)}
                              style={{ padding: '15px', textAlign: 'left', backgroundColor: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}
                              onMouseOver={e => e.target.style.borderColor = COLORS.gold}
                              onMouseOut={e => e.target.style.borderColor = COLORS.border}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <div style={{ fontSize: '64px', marginBottom: '10px' }}>{examState.results.score >= 80 ? '🎯' : '📚'}</div>
                        <h2 style={{ fontSize: '28px', color: COLORS.navy }}>¡Examen Finalizado!</h2>
                        <div style={{ fontSize: '48px', fontWeight: 'bold', color: examState.results.score >= 80 ? '#10b981' : COLORS.goldDark, margin: '20px 0' }}>
                          {examState.results.score}%
                        </div>
                        <p style={{ color: COLORS.gray, fontSize: '18px' }}>Has acertado {examState.results.correct} de {examState.results.total} preguntas.</p>
                        
                        {examState.results.score >= 80 ? (
                          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#ecfdf5', color: '#065f46', borderRadius: '10px', border: '1px solid #10b981' }}>
                            <strong>¡Excelente!</strong> Has desbloqueado el siguiente capítulo.
                            <button 
                              onClick={() => setShowSurvey(true)}
                              style={{ display: 'block', margin: '15px auto 0', padding: '10px 20px', backgroundColor: '#059669', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                              COMPARTIR FEEDBACK (+5 PTS)
                            </button>
                          </div>
                        ) : (
                          <div style={{ marginTop: '20px', textAlign: 'left', padding: '20px', backgroundColor: '#fff7ed', color: '#9a3412', borderRadius: '10px', border: '1px solid #f97316' }}>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>⚠️ EL EXAMEN ESTÁ DISEÑADO PARA QUE FALLES</div>
                            <p style={{ fontSize: '14px', marginBottom: '15px', lineHeight: '1.4' }}>
                              No te desanimes. El examinador no solo evalúa tu conocimiento, evalúa tu <strong>atención</strong>. El estado quiere asegurarse de que solo los más detallistas obtengan la licencia.
                            </p>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.5)', padding: '15px', borderRadius: '8px' }}>
                              <strong style={{ display: 'block', marginBottom: '10px', fontSize: '13px' }}>3 CONSEJOS PARA DOMINAR LAS TRAMPAS:</strong>
                              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><strong>Busca la "Palabra Venenosa":</strong> Si la pregunta dice <em>EXCEPTO, NO, FALSO</em> o <em>SIEMPRE</em>, detente. La respuesta correcta suele ser la que parece "diferente" al resto.</li>
                                <li><strong>Identifica el "Distractor Brillante":</strong> Pearson pondrá una respuesta que es técnicamente cierta en el mundo real, pero que NO responde lo que la pregunta pidió.</li>
                                <li><strong>La Regla de los 5 Segundos:</strong> Antes de hacer clic, lee la pregunta por segunda vez. ¿Estás respondiendo lo que preguntaron o lo que <em>creíste</em> que preguntaron?</li>
                              </ul>
      <footer style={{ padding: '20px', textAlign: 'center', borderTop: `1px solid ${COLORS.border}`, marginTop: '40px', color: COLORS.gray, fontSize: '12px' }}>
        &copy; 2026 Maná Academy - PrePass FL AI v2.2.1 | Mobile Stacking Fix
      </footer>
    </div>
                            <p style={{ marginTop: '15px', fontSize: '13px', fontWeight: 'bold', textAlign: 'center' }}>
                              ¡LEE BIEN ANTES DE RESPONDER! Tu licencia depende de tu vista.
                            </p>
                          </div>
                        )}
                        
                        <button 
                          onClick={() => setShowExam(false)}
                          style={{ marginTop: '30px', padding: '12px 30px', backgroundColor: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                          Volver a la Lección
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <aside className="sidebar-layout" style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '25px', minWidth: '300px' }}>
          <div style={{ padding: '25px', backgroundColor: COLORS.navy, borderRadius: '12px', color: COLORS.white, border: `1px solid ${COLORS.gold}`, boxShadow: '0 10px 20px rgba(10, 27, 51, 0.2)' }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>⚖️</span> Readiness Estatal
            </h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '5px' }}>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: COLORS.gold }}>{readiness.percent}%</span>
              <span style={{ fontSize: '12px', opacity: 0.8 }}>Puntaje Promedio</span>
            </div>
            <div style={{ height: '6px', width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', marginBottom: '15px' }}>
              <div style={{ width: `${readiness.percent}%`, height: '100%', backgroundColor: COLORS.gold }}></div>
            </div>
            <div style={{ fontSize: '13px', lineHeight: '1.5', padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: `3px solid ${COLORS.gold}` }}>
              <strong>Consejo del Mentor:</strong><br/>
              {readiness.advice}
            </div>
          </div>

          {Object.keys(errorRadar).length > 0 && (
            <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: COLORS.navy, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>🎯</span> Radar de Errores
              </h3>
              <p style={{ fontSize: '12px', color: COLORS.gray, marginBottom: '15px' }}>Temas que necesitas reforzar prioritariamente:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.entries(errorRadar)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 3)
                  .map(([topic, count]) => (
                    <div key={topic} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', backgroundColor: '#fef2f2', borderRadius: '6px', border: '1px solid #fee2e2' }}>
                      <span style={{ fontSize: '13px', fontWeight: '500', color: '#991b1b' }}>{topic}</span>
                      <span style={{ fontSize: '11px', backgroundColor: '#991b1b', color: '#fff', padding: '2px 6px', borderRadius: '10px' }}>{count} fallos</span>
                    </div>
                  ))}
              </div>
              <div 
                onClick={() => window.open(currentChapter?.manual, '_blank')}
                style={{ marginTop: '15px', padding: '10px', backgroundColor: COLORS.navy, color: '#fff', borderRadius: '8px', fontSize: '12px', textAlign: 'center', cursor: 'pointer', fontWeight: 'bold' }}
              >
                REPASAR MANUAL TÉCNICO
              </div>
            </div>
          )}

          {(!userReg || userReg.yaReclutado === 'No') && (
            <div style={{ padding: '25px', backgroundColor: COLORS.navy, borderRadius: '12px', color: COLORS.white, border: `2px solid ${COLORS.gold}`, boxShadow: '0 10px 25px rgba(10, 27, 51, 0.3)' }}>
              <img src={LOGO_URL} style={{ height: '30px', margin: '0 auto 15px', display: 'block' }} />
              <h3 style={{ margin: '0 0 10px 0', fontSize: '15px', textAlign: 'center', color: COLORS.gold }}>¿BUSCAS UNA AGENCIA?</h3>
              <p style={{ fontSize: '12px', textAlign: 'center', lineHeight: '1.4', marginBottom: '20px', opacity: 0.9 }}>
                No solo te damos la licencia, te damos la plataforma para triunfar. Únete a <strong>Maná Insurance Advisors</strong>.
              </p>
              <button 
                onClick={() => window.open('https://www.manainsuranceadvisors.com/agentes/', '_blank')}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = COLORS.goldDark}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = COLORS.gold}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  backgroundColor: COLORS.gold, 
                  color: COLORS.black, 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontWeight: 'bold', 
                  cursor: 'pointer', 
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                💼 APLICAR A LA AGENCIA
              </button>
            </div>
          )}

          <div style={{ padding: '25px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.navy, marginTop: 0 }}>🤖 Tutor IA Maná</h3>
            <div style={{ height: '300px', backgroundColor: '#f8fafc', borderRadius: '10px', padding: '15px', overflowY: 'auto', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {chat.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end', backgroundColor: msg.role === 'ai' ? COLORS.navy : COLORS.gold, color: msg.role === 'ai' ? COLORS.white : COLORS.black, padding: '10px', borderRadius: '10px', fontSize: '13px', maxWidth: '85%' }}>
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div style={{ alignSelf: 'flex-start', backgroundColor: COLORS.navy, color: COLORS.white, padding: '10px', borderRadius: '10px', fontSize: '13px', opacity: 0.7 }}>
                  Escribiendo...
                </div>
              )}
            </div>
            <div style={{ display: 'flex', marginTop: '10px', gap: '5px' }}>
              <input 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                onKeyPress={e => e.key === 'Enter' && askTutor()}
                placeholder="Tu duda..." 
                style={{ flex: 1, padding: '10px', borderRadius: '5px', border: `1px solid ${COLORS.border}` }} 
              />
              <button 
                onClick={askTutor} 
                disabled={loading}
                style={{ backgroundColor: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: '5px', padding: '0 10px', opacity: loading ? 0.5 : 1, cursor: loading ? 'default' : 'pointer' }}
              >
                →
              </button>
            </div>
          </div>
          <div style={{ padding: '20px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.navy, marginTop: 0, fontSize: '16px' }}>Tu Avance</h3>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', margin: '10px 0' }}>
              <div style={{ width: `${(unlockedChapters.length / 6) * 100}%`, height: '100%', backgroundColor: COLORS.gold }}></div>
            </div>
            <p style={{ fontSize: '12px', color: COLORS.gray }}>{unlockedChapters.length} de 6 completados</p>
          </div>
        </aside>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .nav-title { display: none !important; }
          .nav-bar { padding: 10px 15px !important; }
          .main-layout { flex-direction: column !important; padding: 10px !important; gap: 20px !important; }
          .sidebar-layout { flex: 1 1 100% !important; order: 2 !important; width: 100% !important; min-width: 100% !important; }
          .left-section { flex: 1 1 100% !important; order: 1 !important; min-width: 100% !important; width: 100% !important; }
          .chapter-content-grid { flex-direction: column !important; }
          .subtopics-list { order: 2 !important; flex: 1 1 100% !important; width: 100% !important; }
          .video-player-wrapper { order: 1 !important; flex: 1 1 100% !important; width: 100% !important; margin-bottom: 20px !important; }
          .chapter-main-card { padding: 15px !important; }
          .chapter-selector { gap: 5px !important; }
          .chapter-selector button { padding: 8px 12px !important; font-size: 11px !important; }
        }
      `}} />
    </div>
  );
}
