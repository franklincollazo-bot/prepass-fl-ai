// v3.0.2 - Premium Masterclass Platform (Complete Re-integration)
import React from 'react';
import Head from 'next/head';
import { COLORS, LOGO_URL, CHAPTERS_DATA, MASTERCLASS_METADATA, QUESTIONS_POOL } from '../lib/courseData';

export default function Dashboard() {
  const [activeModule, setActiveModule] = React.useState(1);
  const [activeSubtopic, setActiveSubtopic] = React.useState(0);
  const [unlockedChapters, setUnlockedChapters] = React.useState([1, 2, 3, 4, 5, 6, 7]);
  const [showExam, setShowExam] = React.useState(false);
  const [examState, setExamState] = React.useState({ questions: [], currentIndex: 0, answers: [], results: null });
  const [isEnhanced, setIsEnhanced] = React.useState(true);
  const [isTheaterMode, setIsTheaterMode] = React.useState(false);
  const [virtualTime, setVirtualTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [activeOverlay, setActiveOverlay] = React.useState(null);
  const [chat, setChat] = React.useState([{ role: 'ai', text: '¡Hola! Soy tu tutor de Maná Academy. ¿En qué puedo ayudarte hoy?' }]);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [performanceHistory, setPerformanceHistory] = React.useState([]);
  const [isSessionLocked, setIsSessionLocked] = React.useState(false);

  const videoRef = React.useRef(null);

  // Auto-Resume Progress & Single Session Lock
  React.useEffect(() => {
    const lastProgress = localStorage.getItem('mana_last_progress');
    const history = localStorage.getItem('mana_performance');

    if (lastProgress) {
      try {
        const { module, subtopic } = JSON.parse(lastProgress);
        // Validar que el módulo y subtema existan en la nueva estructura de 7 capítulos
        if (CHAPTERS_DATA[module] && CHAPTERS_DATA[module].subtopics[subtopic]) {
          setActiveModule(Number(module));
          setActiveSubtopic(Number(subtopic));
          console.log(`[Resume] Restaurado: Cap ${module}, Lección ${subtopic}`);
        } else {
          setActiveModule(1);
          setActiveSubtopic(0);
          console.log(`[Resume] Reset: El progreso anterior no es compatible con la estructura de 7 capítulos.`);
        }
      } catch (e) {
        console.error("Error al restaurar progreso:", e);
      }
    }

    if (history) {
      try {
        setPerformanceHistory(JSON.parse(history));
      } catch (e) {
        console.error("Error al restaurar historial:", e);
      }
    }

    setMounted(true);

    // Single Session Lock (Heartbeat)
    const sessionToken = Math.random().toString(36).substring(7);
    localStorage.setItem('mana_active_session', sessionToken);

    const heartbeat = setInterval(() => {
      const activeToken = localStorage.getItem('mana_active_session');
      if (activeToken && activeToken !== sessionToken) {
        setIsSessionLocked(true);
      }
    }, 5000);

    return () => clearInterval(heartbeat);
  }, []);

  // Save Progress Persistence
  React.useEffect(() => {
    if (mounted) {
      console.log(`[Sync] Guardando progreso: Cap ${activeModule}, Lección ${activeSubtopic}`);
      localStorage.setItem('mana_last_progress', JSON.stringify({ module: activeModule, subtopic: activeSubtopic }));
    }
  }, [activeModule, activeSubtopic, mounted]);

  // Virtual Sync Loop (Overlay Simulation)
  React.useEffect(() => {
    let interval;
    if (isPlaying && isEnhanced) {
      interval = setInterval(() => {
        setVirtualTime(prev => {
          const newTime = prev + 1;
          const lessonTitle = CHAPTERS_DATA[activeModule]?.subtopics[activeSubtopic]?.title;
          const lessonId = lessonTitle?.split(' ')[0];
          const metadata = MASTERCLASS_METADATA[lessonId];
          
          if (metadata) {
            const active = metadata.find(m => newTime >= m.start && newTime <= m.end);
            setActiveOverlay(active || null);
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isEnhanced, activeModule, activeSubtopic]);

  // Derived Data (Safe Range Checking)
  const currentChapter = CHAPTERS_DATA[activeModule] || CHAPTERS_DATA[1];
  const currentSubtopic = currentChapter.subtopics[activeSubtopic] || currentChapter.subtopics[0];

  // Handlers
  const handleModuleChange = (num) => {
    if (!unlockedChapters.includes(num)) return;
    setActiveModule(num);
    setActiveSubtopic(0);
    setShowExam(false);
    setIsPlaying(false);
    setIsTheaterMode(false);
    setVirtualTime(0);
    setActiveOverlay(null);
  };

  const handleSubtopicChange = (index) => {
    if (!currentChapter.subtopics[index]) return;
    setActiveSubtopic(index);
    setShowExam(false);
    setIsPlaying(false);
    setIsTheaterMode(false);
    setVirtualTime(0);
    setActiveOverlay(null);
  };

  const toggleTheaterMode = () => setIsTheaterMode(!isTheaterMode);
  const togglePlay = () => setIsPlaying(!isPlaying);

  const getReadinessInfo = () => {
    if (performanceHistory.length === 0) return { percent: 0, advice: "Aún no has tomado exámenes. ¡Comienza uno para medir tu nivel!", status: "PENDIENTE" };
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

  const startExam = () => {
    const questions = QUESTIONS_POOL[activeModule] || [];
    if (questions.length === 0) {
      alert("Próximamente: Examen para este capítulo.");
      return;
    }
    setExamState({
      questions: [...questions].sort(() => Math.random() - 0.5).slice(0, 10),
      currentIndex: 0,
      answers: [],
      results: null
    });
    setShowExam(true);
  };

  const handleAnswer = (option) => {
    const currentQ = examState.questions[examState.currentIndex];
    const newAnswers = [...examState.answers, { questionId: currentQ.id, selected: option, correct: option === currentQ.answer }];
    
    if (examState.currentIndex < examState.questions.length - 1) {
      setExamState({ ...examState, currentIndex: examState.currentIndex + 1, answers: newAnswers });
    } else {
      const correctCount = newAnswers.filter(a => a.correct).length;
      const score = Math.round((correctCount / examState.questions.length) * 100);
      const results = { score, correct: correctCount, total: examState.questions.length };
      setExamState({ ...examState, results });
      
      const newHistory = [...performanceHistory, { date: new Date().toISOString(), score, module: activeModule }];
      setPerformanceHistory(newHistory);
      localStorage.setItem('mana_performance', JSON.stringify(newHistory));
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

  const renderOverlay = (overlay) => {
    if (!overlay) return null;
    if (overlay.type === 'word') {
      return (
        <div style={{ backgroundColor: 'rgba(10, 27, 51, 0.95)', padding: '20px', borderRadius: '15px', border: `3px solid ${COLORS.gold}`, textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <h2 style={{ color: COLORS.gold, margin: 0, fontSize: '32px' }}>{overlay.title}</h2>
        </div>
      );
    }
    if (overlay.type === 'concept') {
      return (
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', borderLeft: `8px solid ${COLORS.gold}`, boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          <h4 style={{ margin: 0, color: COLORS.navy, fontSize: '20px' }}>{overlay.title}</h4>
          <p style={{ margin: '10px 0 0 0', color: COLORS.gray, fontSize: '15px', lineHeight: '1.4' }}>{overlay.text}</p>
        </div>
      );
    }
    if (overlay.type === 'trap') {
      return (
        <div style={{ backgroundColor: '#fee2e2', padding: '20px', borderRadius: '15px', border: '3px solid #ef4444', boxShadow: '0 10px 40px rgba(239, 68, 68, 0.4)' }}>
          <h4 style={{ margin: 0, color: '#991b1b', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>⚠️ EXAM TRAP</h4>
          <p style={{ margin: '10px 0', color: '#b91c1c', fontSize: '16px', fontWeight: 'bold' }}>{overlay.title}</p>
          <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '8px', color: COLORS.navy, fontSize: '13px' }}>{overlay.text}</div>
        </div>
      );
    }
    return null;
  };

  const renderExam = () => {
    if (examState.results) {
       return (
         <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>{examState.results.score >= 80 ? '🎯' : '📚'}</div>
            <h2 style={{ fontSize: '32px', color: COLORS.navy }}>Resultado: {examState.results.score}%</h2>
            <p style={{ color: COLORS.gray, fontSize: '18px' }}>Has acertado {examState.results.correct} de {examState.results.total} preguntas.</p>
            <button onClick={() => setShowExam(false)} className="exam-btn platinum">VOLVER A LA CLASE</button>
         </div>
       );
    }
    const currentQ = examState.questions[examState.currentIndex];
    if (!currentQ) return <div style={{ padding: '40px', textAlign: 'center' }}>Cargando preguntas...</div>;

    return (
      <div style={{ padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
           <span style={{ fontWeight: 'bold', color: COLORS.navy }}>Pregunta {examState.currentIndex + 1} de {examState.questions.length}</span>
           <button onClick={() => setShowExam(false)} style={{ background: 'none', border: 'none', color: COLORS.gray, cursor: 'pointer', fontSize: '12px' }}>✕ CANCELAR</button>
        </div>
        <h2 style={{ marginBottom: '30px', fontSize: '22px' }}>{currentQ.question}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {currentQ.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)} className="option-btn">{opt}</button>
          ))}
        </div>
      </div>
    );
  };

  // Theater/Cinema Mode Layout Block
  React.useEffect(() => {
    if (isTheaterMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isTheaterMode]);

  if (!mounted) return null;

  // Session Lock Screen
  if (isSessionLocked) {
    return (
      <div style={{ height: '100vh', backgroundColor: COLORS.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
        <div style={{ padding: '40px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: `1px solid ${COLORS.gold}`, maxWidth: '400px' }}>
          <h1 style={{ color: COLORS.gold }}>⚠️ SESIÓN BLOQUEADA</h1>
          <p>Se ha detectado otra sesión activa con esta cuenta.</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>PrePass FL AI permite una sola sesión activa para proteger la integridad del curso.</p>
          <button onClick={() => window.location.reload()} className="exam-btn platinum">REINTENTAR</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.navy, 
      minHeight: '100vh', 
      fontFamily: 'system-ui',
      position: 'relative',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      <Head>
        <title>Dashboard | Maná Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>

      {/* --- PREMIUM NAVBAR --- */}
      <nav className="navbar-plat">
         <div className="navbar-brand">
            <img src={LOGO_URL} alt="Maná Insurance Logo" className="navbar-logo" />
            <div className="navbar-titles">
               <div className="navbar-main-title">MANÁ ACADEMY</div>
               <div className="navbar-subtitle">PREPASS FL AI | PLATINUM</div>
            </div>
         </div>
         <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="plat-control-btn reset-btn">
           REINICIAR APP
         </button>
      </nav>

      {/* --- DASHBOARD CONTENT --- */}
      <main className="dashboard-main">
        <section className="main-content">
          
          {/* --- LEFT HAND: LESSONS & INTERACTIVE PLAYER --- */}
          <div className="left-column">
             
             {/* --- CHAPTER SELECTOR --- */}
             <div className="chapter-selector">
               {unlockedChapters.map(num => (
                 <button 
                   key={num}
                   onClick={() => handleModuleChange(num)}
                   style={{
                     padding: '12px 24px',
                     borderRadius: '12px',
                     border: 'none',
                     backgroundColor: activeModule === num ? COLORS.navy : '#fff',
                     color: activeModule === num ? COLORS.gold : COLORS.navy,
                     fontWeight: 'bold',
                     cursor: 'pointer',
                     boxShadow: activeModule === num ? '0 8px 15px rgba(10,27,51,0.2)' : '0 4px 10px rgba(0,0,0,0.02)',
                     transition: 'all 0.2s',
                     whiteSpace: 'nowrap'
                   }}
                 >
                   Cap. {num}
                 </button>
               ))}
             </div>

             <div className="course-card">
               <div className="course-header">
                 <div>
                   <h1 className="chapter-title">{currentChapter?.title}</h1>
                   <p className="chapter-subtitle">{currentChapter?.subtitle}</p>
                 </div>
                 <div className="status-badge">
                    <span style={{ fontSize: '12px', color: COLORS.navy, fontWeight: 'bold' }}>ESTADO: </span>
                    <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 'bold' }}>✓ COMPLETADO 70%</span>
                 </div>
               </div>

               <div className="layout-grid">
                 
                 {/* --- SUBTOPICS & SUPPORT --- */}
                 <div className="subtopics-list">
                   {currentChapter?.subtopics.map((sub, i) => (
                     <div 
                       key={i}
                       onClick={() => handleSubtopicChange(i)}
                       style={{
                         padding: '18px',
                         backgroundColor: activeSubtopic === i ? COLORS.navy : '#f8fafc',
                         color: activeSubtopic === i ? COLORS.white : COLORS.navy,
                         borderRadius: '14px',
                         cursor: 'pointer',
                         fontSize: '14px',
                         fontWeight: '600',
                         border: `1px solid ${activeSubtopic === i ? COLORS.navy : COLORS.border}`,
                         transition: 'all 0.3s ease',
                         display: 'flex',
                         alignItems: 'center',
                         gap: '12px'
                       }}
                     >
                       <span style={{ 
                         width: '24px', height: '24px', borderRadius: '50%', 
                         backgroundColor: activeSubtopic === i ? COLORS.gold : COLORS.border,
                         color: activeSubtopic === i ? COLORS.black : COLORS.white,
                         display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'
                       }}>{i + 1}</span>
                       {sub.title}
                     </div>
                   ))}

                   <div style={{ marginTop: '25px', borderTop: `2px dashed ${COLORS.border}`, paddingTop: '25px' }}>
                     <h4 style={{ fontSize: '11px', color: COLORS.gray, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Material de Apoyo Platinum</h4>
                     <a href={currentChapter?.manual} target="_blank" rel="noreferrer" className="support-btn-plat">
                        <span style={{ fontSize: '18px' }}>📖</span> 
                        <div>
                          <div style={{ fontWeight: 'bold' }}>MANUAL MAESTRO</div>
                          <div style={{ fontSize: '10px', opacity: 0.7 }}>Lectura Completa (HTML)</div>
                        </div>
                     </a>
                     <a href={currentChapter?.guia} target="_blank" rel="noreferrer" className="support-btn-plat">
                        <span style={{ fontSize: '18px' }}>💡</span>
                        <div>
                          <div style={{ fontWeight: 'bold' }}>25 PREGUNTAS CLAVE</div>
                          <div style={{ fontSize: '10px', opacity: 0.7 }}>Guía de Estudio Rápido</div>
                        </div>
                     </a>
                   </div>

                   <button onClick={showExam ? () => setShowExam(false) : startExam} className="exam-btn platinum">
                     {showExam ? '🔙 VOLVER A LA CLASE' : '📝 INICIAR EXAMEN DE CAPÍTULO'}
                   </button>
                 </div>

                 {/* --- PLAYER / EXAM --- */}
                 <div className="main-display">
                   {!showExam ? (
                     <div style={{ position: 'relative', width: '100%', maxWidth: '100%', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', border: `3px solid ${COLORS.navy}`, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                       <div style={{ paddingTop: '56.25%' }}></div>
                       
                       {/* Masterclass Toolbar */}
                       <div style={{ 
                         position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, 
                         padding: '20px', display: 'flex', justifyContent: 'space-between',
                         background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)'
                       }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                           <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                           <span style={{ color: COLORS.white, fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px' }}>VIRTUAL SYNC ACTIVE</span>
                         </div>
                         
                         <div style={{ display: 'flex', gap: '12px' }}>
                           <button onClick={togglePlay} className="plat-control-btn">
                             {isPlaying ? '⏸️ PAUSAR' : '▶️ PLAY MASTERCLASS'}
                           </button>
                           <button onClick={toggleTheaterMode} className="plat-control-btn" style={{ backgroundColor: COLORS.gold, color: COLORS.black }}>
                             🔳 MODO CINE
                           </button>
                         </div>
                       </div>

                       {/* Video Player */}
                       {currentSubtopic?.videoUrl?.includes('PLACEHOLDER') ? (
                         <div className="placeholder-screen">
                             <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎬</div>
                             <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>Lección en Producción</h3>
                             <p style={{ opacity: 0.7 }}>Franklin está finalizando este contenido de alta calidad.</p>
                             <div style={{ marginTop: '20px', padding: '10px 20px', border: `1px solid ${COLORS.gold}`, borderRadius: '30px', fontSize: '12px', color: COLORS.gold }}>DISPONIBLE PRÓXIMAMENTE</div>
                         </div>
                       ) : (
                         <iframe 
                           key={currentSubtopic?.videoUrl}
                           src={currentSubtopic?.videoUrl}
                           style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                           allow="fullscreen; encrypted-media; picture-in-picture"
                         />
                       )}

                       {/* Interactive Overlays */}
                       {activeOverlay && (
                         <div style={{
                           position: 'absolute', top: '18%', right: '5%', width: '320px', zIndex: 500,
                           pointerEvents: 'none',
                           animation: 'fadeInRight 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                         }}>
                           {renderOverlay(activeOverlay)}
                         </div>
                       )}
                     </div>
                   ) : (
                     <div className="exam-view" style={{ backgroundColor: 'white', borderRadius: '20px', minHeight: '500px', border: `1px solid ${COLORS.border}` }}>
                       {renderExam()}
                     </div>
                   )}
                 </div>

               </div>
             </div>
          </div>

           {/* --- RIGHT HAND SIDEBAR: TRACKING & AI TUTOR --- */}
           <aside className="sidebar-plat">
               <div className="sidebar-card-plat">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                     <h3 style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>READINESS ESTATAL</h3>
                     <span style={{ fontSize: '20px' }}>⚖️</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '5px' }}>
                     <span className="readiness-score-plat">{readiness.percent}%</span>
                     <span style={{ fontSize: '12px', opacity: 0.8 }}>Puntaje Promedio</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', margin: '15px 0' }}>
                     <div style={{ width: `${readiness.percent}%`, height: '100%', backgroundColor: COLORS.gold, boxShadow: `0 0 15px ${COLORS.gold}` }}></div>
                  </div>
                  <div className="mentor-box-plat">
                     <strong>Consejo del Mentor:</strong><br/>
                     {readiness.advice}
                  </div>
               </div>

              <div className="tutor-card-plat">
                 <div style={{ padding: '20px', borderBottom: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🤖</span>
                    <div>
                       <h3 style={{ margin: 0, fontSize: '16px', color: COLORS.navy }}>Tutor IA Maná</h3>
                       <div style={{ fontSize: '10px', color: '#10b981', fontWeight: 'bold' }}>● EN LÍNEA</div>
                    </div>
                 </div>
                 <div className="chat-box-plat">
                   {chat.map((msg, i) => (
                     <div key={i} className={`msg-plat ${msg.role}`}>
                        {msg.role === 'ai' && <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '4px', opacity: 0.5 }}>MANÁ AI</div>}
                        {msg.text}
                     </div>
                   ))}
                   {loading && <div className="msg-plat ai">Escribiendo...</div>}
                 </div>
                 <div className="chat-input-plat">
                   <input 
                     value={query} 
                     onChange={e => setQuery(e.target.value)} 
                     placeholder="¿Qué duda tienes sobre Florida?" 
                     onKeyPress={e => e.key === 'Enter' && askTutor()} 
                   />
                   <button onClick={askTutor}>PREGUNTAR</button>
                 </div>
              </div>

               <div className="join-agency-card">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${COLORS.gold}` }}>
                     <img src={LOGO_URL} alt="Maná Logo" style={{ width: '80%', height: 'auto' }} />
                  </div>
                  <div>
                     <div style={{ fontWeight: 'bold', fontSize: '14px' }}>¿BUSCAS UNA AGENCIA?</div>
                     <div style={{ fontSize: '11px', opacity: 0.8 }}>Únete a Maná Insurance Advisors</div>
                  </div>
               </div>
          </aside>

        </section>
      </main>

      {/* --- PLATINUM CLASS STYLING --- */}
      <style jsx>{`
        .navbar-plat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: ${COLORS.navy};
          border-bottom: 4px solid ${COLORS.gold};
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .navbar-brand { display: flex; align-items: center; gap: 15px; }
        .navbar-logo { height: 50px; }
        .navbar-main-title { color: #fff; font-weight: 900; font-size: 18px; letter-spacing: 1px; }
        .navbar-subtitle { color: ${COLORS.gold}; font-size: 11px; font-weight: bold; letter-spacing: 2px; }
        .reset-btn { border-color: ${COLORS.gold}; color: ${COLORS.gold}; }

        .dashboard-main { padding: 40px; max-width: 1400px; margin: 0 auto; width: 100%; box-sizing: border-box; overflow: hidden; }
        .main-content { display: flex; gap: 40px; width: 100%; align-items: flex-start; max-width: 100%; }
        .left-column { flex: 1; min-width: 0; max-width: 100%; }
        .chapter-selector { display: flex; gap: 10px; margin-bottom: 25px; overflow-x: auto; padding-bottom: 10px; width: 100%; max-width: 100%; white-space: nowrap; }
        
        .course-card { 
          background-color: ${COLORS.white}; 
          border-radius: 20px; 
          padding: 35px; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
          border: 1px solid ${COLORS.border || '#e2e8f0'}; 
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .course-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; gap: 20px; }
        .chapter-title { margin: 0 0 8px 0; color: ${COLORS.navy}; font-size: 32px; font-weight: 800; line-height: 1.2; }
        .chapter-subtitle { color: ${COLORS.gray}; margin: 0; font-size: 18px; }
        .status-badge { background-color: #f0f4f8; padding: 10px 20px; border-radius: 30px; border: 1px solid ${COLORS.border || '#e2e8f0'}; white-space: nowrap; }

        .layout-grid { display: grid; grid-template-columns: 300px 1fr; gap: 40px; width: 100%; }
        .subtopics-list { display: flex; flex-direction: column; gap: 12px; min-width: 0; }

        .support-btn-plat { 
          display: flex; 
          align-items: center; 
          gap: 15px; 
          padding: 15px; 
          background: #fff; 
          border: 1px solid ${COLORS.border || '#e2e8f0'}; 
          border-radius: 12px; 
          margin-bottom: 12px; 
          text-decoration: none; 
          color: ${COLORS.navy}; 
          transition: all 0.3s ease; 
        }
        .support-btn-plat:hover { border-color: ${COLORS.gold}; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        
        .exam-btn.platinum { 
          width: 100%; 
          margin-top: 25px; 
          padding: 18px; 
          background: linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%); 
          color: ${COLORS.black}; 
          border: none; 
          border-radius: 12px; 
          font-weight: 800; 
          cursor: pointer; 
          letter-spacing: 1px;
          box-shadow: 0 10px 20px rgba(154, 123, 44, 0.3);
          transition: all 0.3s ease;
        }
        .exam-btn.platinum:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(154, 123, 44, 0.4); }

        .plat-control-btn { 
          background: rgba(0,0,0,0.7); 
          backdrop-filter: blur(5px);
          color: white; 
          border: 1px solid ${COLORS.gold}; 
          padding: 10px 20px; 
          border-radius: 30px; 
          font-size: 11px; 
          font-weight: 800; 
          cursor: pointer; 
          transition: all 0.2s;
        }
        .plat-control-btn:hover { transform: scale(1.05); }

        .option-btn {
          padding: 20px; 
          text-align: left; 
          border-radius: 12px; 
          border: 1px solid ${COLORS.border || '#e2e8f0'}; 
          background-color: white; 
          cursor: pointer; 
          transition: all 0.2s;
          font-weight: 500;
          color: ${COLORS.navy};
        }
        .option-btn:hover { border-color: ${COLORS.gold}; background-color: #fffaf0; }

        .placeholder-screen { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: ${COLORS.navy}; color: white; text-align: center; padding: 40px; }
        
        .sidebar-plat { flex: 0 0 380px; width: 380px; max-width: 100%; min-width: 0; }
        .sidebar-card-plat { 
          padding: 30px; 
          background: linear-gradient(135deg, ${COLORS.navy} 0%, #1a2a44 100%); 
          border-radius: 20px; 
          color: white; 
          border: 1px solid ${COLORS.gold}; 
          margin-bottom: 30px; 
          box-shadow: 0 15px 35px rgba(10, 27, 51, 0.3);
          box-sizing: border-box;
        }
        .readiness-score-plat { font-size: 56px; font-weight: 900; color: ${COLORS.gold}; text-shadow: 0 0 20px rgba(197, 160, 89, 0.3); margin: 0; }
        .mentor-box-plat {
          font-size: 13px;
          line-height: 1.5;
          padding: 12px;
          background-color: rgba(255,255,255,0.05);
          border-radius: 8px;
          border-left: 3px solid ${COLORS.gold};
          color: white;
          text-align: left;
          margin-top: 10px;
        }

        .tutor-card-plat { 
          background: white; 
          border-radius: 20px; 
          border: 1px solid ${COLORS.border || '#e2e8f0'}; 
          height: 600px; 
          display: flex; 
          flex-direction: column; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }
        .chat-box-plat { flex: 1; overflow-y: auto; padding: 20px; background-color: #f8fafc; }
        .msg-plat { padding: 12px 18px; border-radius: 18px; margin-bottom: 15px; font-size: 14px; max-width: 85%; line-height: 1.5; }
        .msg-plat.user { background: ${COLORS.navy}; color: white; margin-left: auto; border-bottom-right-radius: 4px; }
        .msg-plat.ai { background: white; color: ${COLORS.navy}; margin-right: auto; border-bottom-left-radius: 4px; border: 1px solid ${COLORS.border || '#e2e8f0'}; }
        
        .chat-input-plat { padding: 15px; background: white; border-top: 1px solid ${COLORS.border || '#e2e8f0'}; display: flex; gap: 10px; }
        .chat-input-plat input { flex: 1; padding: 12px 15px; border: 1px solid ${COLORS.border || '#e2e8f0'}; border-radius: 10px; font-size: 13px; outline: none; }
        .chat-input-plat input:focus { border-color: ${COLORS.gold}; }
        .chat-input-plat button { padding: 10px 20px; background: ${COLORS.navy}; color: ${COLORS.gold}; border: none; border-radius: 10px; cursor: pointer; font-weight: 800; font-size: 11px; letter-spacing: 1px; }

        .join-agency-card { 
          margin-top: 20px; padding: 20px; background-color: ${COLORS.navy}; border-radius: 15px; color: white; display: flex; align-items: center; gap: 15px; border: 1px solid ${COLORS.gold}; 
        }

        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 1024px) {
          .navbar-plat { padding: 15px 20px !important; }
          .navbar-logo { height: 35px !important; }
          .navbar-main-title { font-size: 14px !important; }
          .navbar-subtitle { font-size: 9px !important; }

          .main-content { flex-direction: column !important; width: 100% !important; max-width: 100% !important; }
          .left-column { width: 100% !important; max-width: 100% !important; flex: none !important; }
          .course-card { width: 100% !important; max-width: 100% !important; padding: 15px !important; box-sizing: border-box !important; border-radius: 0 !important; }
          .sidebar-plat { flex: none !important; width: 100% !important; max-width: 100% !important; }
          .layout-grid { display: block !important; width: 100% !important; max-width: 100% !important; }
          .main-display { width: 100% !important; max-width: 100% !important; margin-top: 20px; }
          .subtopics-list { width: 100% !important; max-width: 100% !important; margin-bottom: 20px; }
          .dashboard-main { padding: 0 !important; width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
        }

        @media (max-width: 768px) {
          .chapter-title { font-size: 24px; }
          .course-card { padding: 20px; }
          .course-header { flex-direction: column; gap: 15px; }
          .status-badge { align-self: flex-start; }
          .tutor-card-plat { height: 450px; }
        }
      `}</style>

      <style jsx global>{`
        body { margin: 0; background-color: ${COLORS.darkBg}; overflow-x: hidden; max-width: 100vw; }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
