import React from 'react';

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
        videoUrl: "/videos/heygen_intro.mp4",
        summary: "Bienvenido a Maná Academy. Descubre por qué PrePass FLAI es la herramienta definitiva para obtener tu licencia en tiempo récord."
      },
      {
        title: "1.1 Conceptos de Seguro y Riesgo (STARR)",
        videoUrl: "https://app.heygen.com/embeds/e913a649171f49b183492ed4876b6d80",
        summary: "Aprende a identificar los riesgos y cómo las aseguradoras los gestionan a través del acrónimo STARR."
      },
      {
        title: "1.2 Elementos Legales del Contrato (ALCAL)",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_1_2_PLACEHOLDER",
        summary: "Acuerdo, Consideración, Partes Competentes y Propósito Legal."
      },
      {
        title: "1.3 Características: Adhesión y Aleatorio",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_1_3_PLACEHOLDER",
        summary: "Por qué las ambigüedades favorecen al asegurado y el carácter desigual de los contratos."
      },
      {
        title: "1.4 Suscripción: El MIB y la Ley FCRA",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_1_4_PLACEHOLDER",
        summary: "Cómo las aseguradoras investigan el riesgo médico y de crédito."
      },
      {
        title: "1.5 Ética y Leyes: Twisting vs Churning",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_1_5_PLACEHOLDER",
        summary: "Protege tu licencia evitando prácticas desleales y cumpliendo los periodos de Free Look."
      }
    ]
  },
  2: {
    title: "Capítulo 2: Tipos de Pólizas de Salud",
    subtitle: "HMO, PPO, Disability y Programas de Gobierno",
    manual: "/Modulo2_Manual_Completo.html",
    guia: "/Modulo2_Guia_Estudio.html",
    subtopics: [
      {
        title: "2.1 Gastos Médicos Mayores (Major Medical)",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_2_1_PLACEHOLDER",
        summary: "Deducibles, Coseguro (80/20) y el Stop-Loss."
      },
      {
        title: "2.2 El Club del HMO vs La Libertad del PPO",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_2_2_PLACEHOLDER",
        summary: "Gatekeeper (PCP) en el HMO y la flexibilidad de la red en el PPO."
      },
      {
        title: "2.3 Seguro de Incapacidad (Disability)",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_2_3_PLACEHOLDER",
        summary: "Protección del ingreso, Períodos de Eliminación y Beneficio."
      },
      {
        title: "2.4 Medicare y Medicaid",
        videoUrl: "https://app.heygen.com/embeds/VIDEO_2_4_PLACEHOLDER",
        summary: "Las 4 partes de Medicare y el soporte estatal de Medicaid."
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
  const videoRef = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedHistory = localStorage.getItem('performanceHistory');
    if (savedHistory) setPerformanceHistory(JSON.parse(savedHistory));
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
    const newAnswers = [...examState.answers, option];
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
      }
    }
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
    setChat([...chat, { role: 'user', text: query }]);
    setLoading(true);
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'ai', text: "Entiendo tu duda sobre " + query + ". Según el manual, este concepto es fundamental para el examen de Florida." }]);
      setLoading(false);
      setQuery('');
    }, 1500);
  };

  if (!mounted) return null;

  const currentChapter = CHAPTERS_DATA[activeModule];

  return (
    <div className="dashboard-container" style={{ backgroundColor: COLORS.darkBg, color: COLORS.navy, minHeight: '100vh', fontFamily: 'system-ui' }}>
      <nav style={{ padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.navy, borderBottom: `3px solid ${COLORS.gold}` }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '50px' }} />
        <div style={{ color: COLORS.white, fontWeight: 'bold' }}>MANÁ ACADEMY | PREPASS FL AI</div>
      </nav>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px', padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
        <section>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
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

          <div style={{ backgroundColor: COLORS.white, padding: '30px', borderRadius: '15px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h1 style={{ margin: '0 0 10px 0', color: COLORS.navy }}>{currentChapter?.title}</h1>
            <p style={{ color: COLORS.gray, marginBottom: '30px' }}>{currentChapter?.subtitle}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '25px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                  onClick={startExam}
                  style={{
                    padding: '15px',
                    backgroundColor: showExam ? COLORS.goldDark : COLORS.gold,
                    color: COLORS.black,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: '20px',
                    border: `1px solid ${COLORS.goldDark}`
                  }}
                >
                  {loading ? 'CARGANDO...' : '📝 EXAMEN DE CAPÍTULO'}
                </div>
              </div>

              <div>
                {!showExam ? (
                  <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: COLORS.black, borderRadius: '12px', overflow: 'hidden' }}>
                    {dynamicText && (
                      <div style={{ position: 'absolute', top: '10%', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ color: COLORS.gold, fontSize: '32px', fontWeight: 'bold', backgroundColor: 'rgba(10, 27, 51, 0.8)', padding: '10px 30px', borderRadius: '50px', border: `2px solid ${COLORS.gold}`, animation: 'fadeInUp 0.5s' }}>
                          {dynamicText}
                        </div>
                      </div>
                    )}
                    <video 
                      ref={videoRef}
                      onTimeUpdate={handleTimeUpdate}
                      src={currentChapter?.subtopics[activeSubtopic].videoUrl}
                      controls 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                  </div>
                ) : (
                  <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '12px', border: `1px solid ${COLORS.border}`, minHeight: '400px' }}>
                    {!examState.results ? (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <span style={{ fontWeight: 'bold', color: COLORS.navy }}>Pregunta {examState.currentIndex + 1} de {examState.questions.length}</span>
                          <span style={{ color: COLORS.goldDark, fontWeight: 'bold' }}>CAPÍTULO {activeModule}</span>
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
                          </div>
                        ) : (
                          <div style={{ marginTop: '20px', textAlign: 'left', padding: '20px', backgroundColor: '#fff7ed', color: '#9a3412', borderRadius: '10px', border: '1px solid #f97316' }}>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>⚠️ EL EXAMEN ESTÁ DISEÑADO PARA QUE FALLES</div>
                            <p style={{ fontSize: '14px', marginBottom: '15px', lineHeight: '1.4' }}>
                              No te desanimes. Pearson VUE no solo evalúa tu conocimiento, evalúa tu <strong>atención</strong>. El estado quiere asegurarse de que solo los más detallistas obtengan la licencia.
                            </p>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.5)', padding: '15px', borderRadius: '8px' }}>
                              <strong style={{ display: 'block', marginBottom: '10px', fontSize: '13px' }}>3 CONSEJOS PARA DOMINAR LAS TRAMPAS:</strong>
                              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><strong>Busca la "Palabra Venenosa":</strong> Si la pregunta dice <em>EXCEPTO, NO, FALSO</em> o <em>SIEMPRE</em>, detente. La respuesta correcta suele ser la que parece "diferente" al resto.</li>
                                <li><strong>Identifica el "Distractor Brillante":</strong> Pearson pondrá una respuesta que es técnicamente cierta en el mundo real, pero que NO responde lo que la pregunta pidió.</li>
                                <li><strong>La Regla de los 5 Segundos:</strong> Antes de hacer clic, lee la pregunta por segunda vez. ¿Estás respondiendo lo que preguntaron o lo que <em>creíste</em> que preguntaron?</li>
                              </ul>
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

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
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

          <div style={{ padding: '25px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.navy, marginTop: 0 }}>🤖 Tutor IA Maná</h3>
            <div style={{ height: '300px', backgroundColor: '#f8fafc', borderRadius: '10px', padding: '15px', overflowY: 'auto', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {chat.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end', backgroundColor: msg.role === 'ai' ? COLORS.navy : COLORS.gold, color: msg.role === 'ai' ? COLORS.white : COLORS.black, padding: '10px', borderRadius: '10px', fontSize: '13px', maxWidth: '85%' }}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', marginTop: '10px', gap: '5px' }}>
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tu duda..." style={{ flex: 1, padding: '10px', borderRadius: '5px', border: `1px solid ${COLORS.border}` }} />
              <button onClick={askTutor} style={{ backgroundColor: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: '5px', padding: '0 10px' }}>→</button>
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

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
