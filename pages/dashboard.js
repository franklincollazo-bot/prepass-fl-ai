import React from 'react';

const COLORS = {
  black: '#000000',
  darkBg: '#F8FAFC', // Fondo más claro y fresco
  navy: '#0A1B33',
  gold: '#C5A059',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#64748b',
  border: '#E2E8F0' // Borde sutil
};

const LOGO_URL = "https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png";

export default function Dashboard() {
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [activeModule, setActiveModule] = React.useState(1);
  const [activeSubtopic, setActiveSubtopic] = React.useState(0);
  const [showExam, setShowExam] = React.useState(false);
  const [examQuestions, setExamQuestions] = React.useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [examResult, setExamResult] = React.useState(null);
  const [unlockedChapters, setUnlockedChapters] = React.useState([1]);
  const [chat, setChat] = React.useState([
    { role: 'ai', text: '¡Hola! Soy tu tutor de Maná Academy. ¿En qué puedo ayudarte hoy?' }
  ]);

  const startExam = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/questions?chapterId=${activeModule}`);
      const data = await res.json();
      setExamQuestions(data);
      setShowExam(true);
      setExamResult(null);
      setCurrentQuestionIndex(0);
      setAnswers({});
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    let score = 0;
    examQuestions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    const percentage = (score / examQuestions.length) * 100;
    setExamResult(percentage);
    
    if (percentage >= 80) {
      if (!unlockedChapters.includes(activeModule + 1)) {
        setUnlockedChapters([...unlockedChapters, activeModule + 1]);
      }
    }
  };

  const chapters = {
    1: {
      title: "Capítulo 1: Fundamentos y Ley de Contratos",
      subtitle: "La base legal y técnica del seguro (2-40)",
      manual: "/Capitulo1_Manual_Maestro.html",
      guia: "/Capitulo1_Guia_Estudio.html",
      subtopics: [
        {
          title: "1.1 El Riesgo y su Gestión (STARR)",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI",
          summary: "Aprende la diferencia entre Riesgo Puro y Especulativo, Peligros vs Riesgos, y los métodos STARR para manejar la incertidumbre financiera."
        },
        {
          title: "1.2 Aseguradoras y Ley de Agencia",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI",
          summary: "Stock vs Mutual Companies. Entiende la autoridad Expresa, Implícita y Aparente del agente, y tu responsabilidad fiduciaria."
        },
        {
          title: "1.3 El Contrato Legal (ALCAL)",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI",
          summary: "Los 4 elementos esenciales: Acuerdo (Oferta/Aceptación), Legalidad (Interés Asegurable), Consideración y Capacidad."
        },
        {
          title: "1.4 Características Únicas del Contrato",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI",
          summary: "Dominio de Adhesión, Aleatorio, Unilateral y Condicional. Conceptos que Pearson VUE pregunta en cada examen."
        },
        {
          title: "1.5 Conceptos Avanzados y Protección",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI",
          summary: "Representaciones vs Garantías. El rol del MIB y la ley FCRA en la suscripción de riesgos de salud."
        }
      ]
    },
    2: {
      title: "Capítulo 2: Tipos de Pólizas de Salud",
      subtitle: "HMO, PPO, Disability e Ingresos",
      manual: "/Modulo2_Manual_Completo.html",
      guia: "/Modulo2_Guia_Estudio.html",
      subtopics: [
        {
          title: "2.1 Gastos Médicos Mayores",
          videoUrl: "https://www.youtube.com/embed/j78YXziYc6E",
          summary: "Deducibles, Coseguro (80/20) y Stop-Loss. Cómo proteger al cliente de gastos catastróficos."
        },
        {
          title: "2.2 HMO, PPO y Cuidado Administrado",
          videoUrl: "https://www.youtube.com/embed/j78YXziYc6E",
          summary: "Gatekeepers, Capitación y redes de proveedores. Diferencias críticas para asesorar correctamente."
        }
      ]
    }
  };

  const currentChapter = chapters[activeModule];
  const currentSubtopic = currentChapter.subtopics[activeSubtopic] || currentChapter.subtopics[0];

  const askTutor = async () => {
    if (!query) return;
    setLoading(true);
    setChat(prev => [...prev, { role: 'user', text: query }]);
    const currentQuery = query;
    setQuery('');

    try {
      const res = await fetch('/api/tutor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentQuery })
      });
      const data = await res.json();
      setChat(prev => [...prev, { role: 'ai', text: data.reply }]);
    } catch (e) {
      setChat(prev => [...prev, { role: 'ai', text: 'Error de conexión. Intenta de nuevo.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-container" style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.navy, 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <style jsx global>{`
        .dashboard-main {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 30px;
          padding: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .nav-container {
          padding: 10px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${COLORS.navy};
          border-bottom: 3px solid ${COLORS.gold};
        }
        .course-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 25px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .bonos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .dashboard-main {
            grid-template-columns: 1fr;
            padding: 20px;
          }
          .course-layout {
            grid-template-columns: 1fr;
          }
          .nav-container {
            padding: 10px 20px;
            flex-direction: column;
            gap: 15px;
          }
          .info-grid, .bonos-grid {
            grid-template-columns: 1fr;
          }
          .logo-text {
            font-size: 16px !important;
          }
        }
      `}</style>
      {/* Navbar */}
      <nav className="nav-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={LOGO_URL} alt="Logo" style={{ height: '50px' }} />
          <div className="logo-text" style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.gold, letterSpacing: '1px' }}>
            MANÁ ACADEMY <span style={{ color: COLORS.white, fontSize: '12px', fontWeight: 'normal' }}>| PrePass FL AI</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', color: COLORS.white, cursor: 'pointer' }}>Inicio</button>
          <button style={{ background: 'none', border: 'none', color: COLORS.white, cursor: 'pointer' }}>Mi Perfil</button>
          <button style={{ backgroundColor: COLORS.gold, color: COLORS.black, padding: '8px 16px', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>Salir</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        
        {/* Course Area */}
        <section>
          {/* Selector de Capítulos */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
            {Object.keys(chapters).map((key) => {
              const isUnlocked = unlockedChapters.includes(Number(key));
              const isActive = activeModule === Number(key);
              return (
                <button 
                  key={key}
                  disabled={!isUnlocked}
                  onClick={() => { setActiveModule(Number(key)); setActiveSubtopic(0); setShowExam(false); }}
                  style={{ 
                    flex: 1, 
                    padding: '12px', 
                    backgroundColor: isActive ? COLORS.gold : (isUnlocked ? COLORS.white : '#f1f5f9'), 
                    color: isActive ? COLORS.black : (isUnlocked ? COLORS.navy : COLORS.gray), 
                    border: `1px solid ${isActive ? COLORS.gold : (isUnlocked ? COLORS.gold : '#cbd5e1')}`, 
                    borderRadius: '8px', 
                    cursor: isUnlocked ? 'pointer' : 'not-allowed',
                    fontWeight: 'bold',
                    opacity: isUnlocked ? 1 : 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: isActive ? '0 4px 12px rgba(197, 160, 89, 0.3)' : 'none'
                  }}
                >
                  Capítulo {key} {!isUnlocked && '🔒'}
                </button>
              );
            })}
          </div>

          {!showExam ? (
            <>
              <div style={{ marginBottom: '25px', padding: '20px', backgroundColor: COLORS.white, borderRadius: '12px', borderLeft: `5px solid ${COLORS.gold}`, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h2 style={{ color: COLORS.navy, margin: '0 0 5px 0' }}>{currentChapter.title}</h2>
                <p style={{ color: COLORS.gray, margin: 0, fontSize: '14px' }}>{currentChapter.subtitle}</p>
              </div>

              <div className="course-layout">
                {/* Sidebar de Subtemas */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h4 style={{ color: COLORS.navy, margin: '0 0 10px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Subtemas del Capítulo</h4>
                  {currentChapter.subtopics.map((sub, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSubtopic(index)}
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        backgroundColor: activeSubtopic === index ? COLORS.navy : COLORS.white,
                        color: activeSubtopic === index ? COLORS.white : COLORS.navy,
                        border: `1px solid ${activeSubtopic === index ? COLORS.navy : COLORS.border}`,
                        borderRadius: '8px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontWeight: activeSubtopic === index ? 'bold' : '500',
                        boxShadow: activeSubtopic === index ? '0 4px 10px rgba(10, 27, 51, 0.2)' : 'none'
                      }}
                    >
                      {sub.title}
                    </button>
                  ))}
                  
                  {/* Botón de Examen al final de la lista */}
                  <button
                    onClick={startExam}
                    style={{
                      marginTop: '20px',
                      textAlign: 'center',
                      padding: '15px',
                      backgroundColor: COLORS.gold,
                      color: COLORS.black,
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '15px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    📝 TOMAR EXAMEN DE ESTE CAPÍTULO
                  </button>
                </nav>

                {/* Video y Resumen */}
                <div>
                  <div style={{ 
                    width: '100%', 
                    position: 'relative', 
                    paddingTop: '56.25%', 
                    backgroundColor: COLORS.black, 
                    borderRadius: '12px', 
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}>
                    <iframe 
                      src={currentSubtopic.videoUrl}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ marginTop: '20px', padding: '25px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    <h3 style={{ color: COLORS.navy, margin: '0 0 10px 0' }}>{currentSubtopic.title}</h3>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', margin: 0, color: COLORS.navy }}>{currentSubtopic.summary}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* EXAM UI */
            <div style={{ padding: '30px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: COLORS.navy, margin: 0 }}>Examen de Certificación - Capítulo {activeModule}</h2>
                <button onClick={() => setShowExam(false)} style={{ background: 'none', border: 'none', color: COLORS.gray, cursor: 'pointer', fontSize: '14px' }}>Cerrar examen</button>
              </div>

              {examResult === null ? (
                <>
                  <div style={{ marginBottom: '30px' }}>
                    <p style={{ color: COLORS.gray, fontSize: '14px', marginBottom: '10px' }}>Pregunta {currentQuestionIndex + 1} de {examQuestions.length}</p>
                    <div style={{ height: '6px', width: '100%', backgroundColor: '#f1f5f9', borderRadius: '3px' }}>
                      <div style={{ height: '100%', width: `${((currentQuestionIndex + 1) / examQuestions.length) * 100}%`, backgroundColor: COLORS.gold, borderRadius: '3px' }}></div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '20px', marginBottom: '30px', lineHeight: '1.4', color: COLORS.navy }}>{examQuestions[currentQuestionIndex].question}</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {examQuestions[currentQuestionIndex].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        style={{
                          textAlign: 'left',
                          padding: '20px',
                          borderRadius: '10px',
                          border: `2px solid ${answers[currentQuestionIndex] === option ? COLORS.gold : COLORS.border}`,
                          backgroundColor: answers[currentQuestionIndex] === option ? '#fffbeb' : COLORS.white,
                          color: COLORS.navy,
                          cursor: 'pointer',
                          fontWeight: answers[currentQuestionIndex] === option ? 'bold' : '500',
                          fontSize: '16px',
                          transition: 'all 0.2s'
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!answers[currentQuestionIndex]}
                    onClick={nextQuestion}
                    style={{
                      marginTop: '40px',
                      width: '100%',
                      padding: '18px',
                      backgroundColor: answers[currentQuestionIndex] ? COLORS.navy : '#cbd5e1',
                      color: COLORS.white,
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      cursor: answers[currentQuestionIndex] ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {currentQuestionIndex < examQuestions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Examen'}
                  </button>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '70px', marginBottom: '20px' }}>{examResult >= 80 ? '🎯' : '❌'}</div>
                  <h2 style={{ fontSize: '36px', color: examResult >= 80 ? '#059669' : '#dc2626', margin: '0 0 10px 0' }}>Tu Puntaje: {Math.round(examResult)}%</h2>
                  <p style={{ fontSize: '18px', marginBottom: '30px', color: COLORS.navy, fontWeight: '500' }}>
                    {examResult >= 80 
                      ? '¡Felicidades! Has aprobado el capítulo. El siguiente módulo ha sido desbloqueado.' 
                      : 'No has alcanzado el 80% requerido. Repasa el material y vuelve a intentarlo.'}
                  </p>
                  
                  {/* Revisión de Respuestas */}
                  <div style={{ textAlign: 'left', backgroundColor: '#f8fafc', borderRadius: '12px', padding: '25px', marginBottom: '30px', maxHeight: '400px', overflowY: 'auto', border: `1px solid ${COLORS.border}` }}>
                    <h3 style={{ color: COLORS.navy, marginTop: 0, borderBottom: `2px solid ${COLORS.gold}`, paddingBottom: '10px', fontSize: '18px' }}>Revisión de Respuestas</h3>
                    {examQuestions.map((q, i) => {
                      const isCorrect = answers[i] === q.answer;
                      return (
                        <div key={i} style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: `1px solid ${COLORS.border}` }}>
                          <p style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '8px', color: COLORS.navy }}>{i + 1}. {q.question}</p>
                          <div style={{ fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <div style={{ color: isCorrect ? '#059669' : '#dc2626', fontWeight: '600' }}>
                              <strong>Tu respuesta:</strong> {answers[i] || 'No respondida'} {isCorrect ? '✓' : '✗'}
                            </div>
                            {!isCorrect && (
                              <div style={{ color: '#9a7b2c' }}>
                                <strong>Respuesta correcta:</strong> {q.answer}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button 
                      onClick={startExam}
                      style={{ padding: '15px 35px', backgroundColor: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      Reintentar Examen
                    </button>
                    <button 
                      onClick={() => setShowExam(false)}
                      style={{ padding: '15px 35px', backgroundColor: 'transparent', color: COLORS.navy, border: `2px solid ${COLORS.navy}`, borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      Volver al Capítulo
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sección de Valor: Tiempo es Dinero */}
          <div style={{ marginTop: '40px', padding: '40px', backgroundColor: COLORS.navy, borderRadius: '16px', boxShadow: '0 15px 40px rgba(10, 27, 51, 0.2)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ color: COLORS.gold, fontSize: '32px', margin: '0 0 15px 0' }}>Estudia Menos, Gana Más</h2>
              <p style={{ color: COLORS.white, fontSize: '19px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
                "¡Tu tiempo es oro y nosotros lo sabemos! Atrás quedaron las interminables horas de cansancio en un aula de clases tradicional. Hemos revolucionado el aprendizaje: transformamos días de estudio pesado en videos estratégicos, ágiles y directos al grano. Domina el examen sin rellenos, aprueba a la primera y empieza a generar ingresos de inmediato. ¡El éxito no espera!"
              </p>
            </div>

            {/* Sección de Bonos de Valor */}
            <div style={{ 
              marginTop: '30px', 
              padding: '30px', 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              borderRadius: '12px', 
              border: `1px solid ${COLORS.gold}`,
              textAlign: 'center'
            }}>
              <img src={LOGO_URL} alt="Logo" style={{ width: '60px', marginBottom: '15px' }} />
              <h3 style={{ color: COLORS.gold, margin: '0 0 10px 0', fontSize: '24px', letterSpacing: '1px' }}>RECURSOS DEL CAPÍTULO {activeModule}</h3>
              <p style={{ color: COLORS.white, fontSize: '15px', marginBottom: '25px', opacity: 0.9 }}>Material descargable para tu preparación final.</p>
              
              <div className="bonos-grid">
                <a href={currentChapter.manual} target="_blank" style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '25px', 
                  backgroundColor: COLORS.white, 
                  color: COLORS.navy, 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  borderRadius: '12px',
                  border: `2px solid ${COLORS.gold}`,
                  transition: 'transform 0.2s',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ fontSize: '28px', marginBottom: '8px' }}>📖</span>
                  <span>MANUAL MAESTRO</span>
                  <span style={{ fontSize: '11px', color: COLORS.gray, marginTop: '5px', fontWeight: 'normal' }}>Toda la teoría legal</span>
                </a>
                <a href={currentChapter.guia} target="_blank" style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '25px', 
                  backgroundColor: COLORS.gold, 
                  color: COLORS.black, 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  borderRadius: '12px',
                  border: `2px solid ${COLORS.gold}`,
                  transition: 'transform 0.2s',
                  boxShadow: '0 5px 15px rgba(197, 160, 89, 0.4)'
                }}>
                  <span style={{ fontSize: '28px', marginBottom: '8px' }}>🎯</span>
                  <span>GUÍA DE 50 PREGUNTAS</span>
                  <span style={{ fontSize: '11px', color: COLORS.black, marginTop: '5px', fontWeight: 'normal', opacity: 0.8 }}>Simulador de Examen</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar / AI Tutor */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div style={{ padding: '25px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'sticky', top: '20px' }}>
            <h3 style={{ color: COLORS.navy, marginTop: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🤖</span> Tutor IA Maná
            </h3>
            <p style={{ fontSize: '13px', color: COLORS.gray, marginBottom: '20px' }}>Pregúntame cualquier duda técnica del capítulo.</p>
            <div style={{ height: '400px', backgroundColor: '#f8fafc', borderRadius: '10px', padding: '15px', fontSize: '14px', overflowY: 'auto', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {chat.map((msg, i) => (
                <div key={i} style={{ 
                  alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end', 
                  backgroundColor: msg.role === 'ai' ? COLORS.navy : COLORS.gold, 
                  color: msg.role === 'ai' ? COLORS.white : COLORS.black, 
                  padding: '10px 14px', 
                  borderRadius: '12px', 
                  maxWidth: '90%',
                  fontSize: '13px',
                  lineHeight: '1.4',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}>
                  {msg.text}
                </div>
              ))}
              {loading && <div style={{ color: COLORS.navy, fontSize: '12px', fontWeight: 'bold' }}>El tutor está analizando...</div>}
            </div>
            <div style={{ display: 'flex', marginTop: '15px', gap: '8px' }}>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && askTutor()}
                placeholder="Escribe tu duda..." 
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.white, color: COLORS.navy, fontSize: '14px' }}
              />
              <button onClick={askTutor} style={{ backgroundColor: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: '8px', padding: '0 15px', cursor: 'pointer', fontWeight: 'bold' }}>→</button>
            </div>
          </div>

          <div style={{ padding: '20px', backgroundColor: COLORS.white, borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h3 style={{ color: COLORS.navy, marginTop: 0, fontSize: '16px' }}>Tu Avance Académico</h3>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden', margin: '15px 0' }}>
              <div style={{ width: `${(unlockedChapters.length / 6) * 100}%`, height: '100%', backgroundColor: COLORS.gold, borderRadius: '4px' }}></div>
            </div>
            <p style={{ fontSize: '13px', color: COLORS.gray }}>{unlockedChapters.length} de 6 Capítulos desbloqueados</p>
          </div>
        </aside>
      </main>
      <div style={{ opacity: 0, fontSize: '1px' }}>v.2.0.1 - Fresh Theme: {new Date().toISOString()}</div>
    </div>
  );
}
