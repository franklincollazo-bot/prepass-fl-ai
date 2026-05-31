// v3.0.1 - Final Clean Refactor
import React from 'react';
import Head from 'next/head';
import { COLORS, LOGO_URL, CHAPTERS_DATA, MASTERCLASS_METADATA, QUESTIONS_POOL } from '../lib/courseData';

export default function Dashboard() {
  const [activeModule, setActiveModule] = React.useState(1);
  const [activeSubtopic, setActiveSubtopic] = React.useState(0);
  const [unlockedChapters, setUnlockedChapters] = React.useState([1, 2, 3, 4, 5, 6, 7]);
  const [showExam, setShowExam] = React.useState(false);
  const [examState, setExamState] = React.useState({ questions: [], currentIndex: 0, answers: [], results: null });
  const [isTheaterMode, setIsTheaterMode] = React.useState(false);
  const [virtualTime, setVirtualTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [activeOverlay, setActiveOverlay] = React.useState(null);
  const [chat, setChat] = React.useState([{ role: 'ai', text: '¡Hola! Soy tu tutor de Maná Academy. ¿En qué puedo ayudarte hoy?' }]);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [performanceHistory, setPerformanceHistory] = React.useState([]);

  const videoRef = React.useRef(null);

  // Sync Data & Session
  React.useEffect(() => {
    const lastProgress = localStorage.getItem('mana_last_progress');
    const history = localStorage.getItem('mana_performance');
    
    if (lastProgress) {
      try {
        const { module, subtopic } = JSON.parse(lastProgress);
        if (CHAPTERS_DATA[module] && CHAPTERS_DATA[module].subtopics[subtopic]) {
          setActiveModule(Number(module));
          setActiveSubtopic(Number(subtopic));
        }
      } catch (e) { console.error(e); }
    }

    if (history) {
      try { setPerformanceHistory(JSON.parse(history)); } catch (e) { console.error(e); }
    }

    setMounted(true);

    // Heartbeat for Single Session
    const sessionToken = Math.random().toString(36).substring(7);
    localStorage.setItem('mana_active_session', sessionToken);
    const interval = setInterval(() => {
      if (localStorage.getItem('mana_active_session') !== sessionToken) {
        alert('Sesión abierta en otra ventana.');
        window.location.href = '/';
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Persistence
  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem('mana_last_progress', JSON.stringify({ module: activeModule, subtopic: activeSubtopic }));
    }
  }, [activeModule, activeSubtopic, mounted]);

  // Derived Data
  const currentChapter = CHAPTERS_DATA[activeModule] || CHAPTERS_DATA[1];
  const currentSubtopic = currentChapter.subtopics[activeSubtopic] || currentChapter.subtopics[0];

  // Actions
  const handleModuleChange = (num) => {
    setActiveModule(num);
    setActiveSubtopic(0);
    setShowExam(false);
    setIsPlaying(false);
    setIsTheaterMode(false);
  };

  const handleSubtopicChange = (idx) => {
    setActiveSubtopic(idx);
    setShowExam(false);
    setIsPlaying(false);
    setVirtualTime(0);
  };

  const startExam = () => {
    const questions = QUESTIONS_POOL[activeModule] || [];
    if (questions.length === 0) return alert("Examen no disponible aún.");
    setExamState({
      questions: [...questions].sort(() => Math.random() - 0.5).slice(0, 10),
      currentIndex: 0,
      answers: [],
      results: null
    });
    setShowExam(true);
  };

  const handleAnswer = (answer) => {
    const currentQ = examState.questions[examState.currentIndex];
    const isCorrect = answer === currentQ.answer;
    const newAnswers = [...examState.answers, { question: currentQ.question, answer, correct: isCorrect }];
    
    if (examState.currentIndex < examState.questions.length - 1) {
      setExamState({ ...examState, currentIndex: examState.currentIndex + 1, answers: newAnswers });
    } else {
      const correct = newAnswers.filter(a => a.correct).length;
      const score = Math.round((correct / examState.questions.length) * 100);
      setExamState({ ...examState, results: { score, correct, total: examState.questions.length }, answers: newAnswers });
      const newHistory = [...performanceHistory, { date: new Date().toISOString(), score, module: activeModule }];
      setPerformanceHistory(newHistory);
      localStorage.setItem('mana_performance', JSON.stringify(newHistory));
    }
  };

  const getReadiness = () => {
    if (performanceHistory.length === 0) return { percent: 0, advice: "Toma un examen para medir tu nivel." };
    const avg = performanceHistory.reduce((acc, c) => acc + c.score, 0) / performanceHistory.length;
    return { 
      percent: Math.round(avg), 
      advice: avg >= 85 ? "¡Listo para el Estado!" : "Sigue practicando los Exam Traps." 
    };
  };

  const askTutor = async () => {
    if (!query) return;
    const msg = { role: 'user', text: query };
    setChat([...chat, msg]);
    setLoading(true);
    setQuery('');
    try {
      const res = await fetch('/api/tutor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });
      const data = await res.json();
      setChat(prev => [...prev, { role: 'ai', text: data.reply || 'Duda técnica. ¿Puedes repetir?' }]);
    } catch (e) {
      setChat(prev => [...prev, { role: 'ai', text: 'Error de conexión. Intenta de nuevo.' }]);
    } finally { setLoading(false); }
  };

  const renderOverlay = (overlay) => {
    if (!overlay) return null;
    return (
      <div style={{ 
        background: overlay.type === 'trap' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(255, 255, 255, 0.95)',
        padding: '20px', borderRadius: '15px', border: `2px solid ${COLORS.gold}`, color: overlay.type === 'trap' ? 'white' : COLORS.navy,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)', animation: 'fadeIn 0.3s'
      }}>
        <h4 style={{ margin: 0, fontSize: '18px' }}>{overlay.type === 'trap' ? '⚠️ ' : ''}{overlay.title}</h4>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: '1.4' }}>{overlay.text}</p>
      </div>
    );
  };

  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: COLORS.darkBg, minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Head><title>Dashboard | Maná Academy</title></Head>

      {/* Header */}
      <header style={{ backgroundColor: COLORS.navy, padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `4px solid ${COLORS.gold}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={LOGO_URL} alt="Logo" style={{ height: '40px' }} />
          <div style={{ color: 'white', fontWeight: 'bold' }}>MANÁ ACADEMY <span style={{ color: COLORS.gold }}>| PLATINUM</span></div>
        </div>
        <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={{ backgroundColor: 'transparent', color: COLORS.gold, border: `1px solid ${COLORS.gold}`, padding: '5px 10px', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' }}>REINICIAR APP</button>
      </header>

      {/* Main */}
      <main style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
        
        <section>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <button key={n} onClick={() => handleModuleChange(n)} style={{ 
                padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                backgroundColor: activeModule === n ? COLORS.navy : 'white',
                color: activeModule === n ? COLORS.gold : COLORS.navy,
                fontWeight: 'bold', whiteSpace: 'nowrap'
              }}>Cap. {n}</button>
            ))}
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h1 style={{ margin: 0, color: COLORS.navy }}>{currentChapter.title}</h1>
            <p style={{ color: '#64748b', marginBottom: '30px' }}>{currentChapter.subtitle}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
              {/* Sidebar Lecciones */}
              <div>
                {currentChapter.subtopics.map((s, i) => (
                  <div key={i} onClick={() => handleSubtopicChange(i)} style={{
                    padding: '15px', marginBottom: '10px', borderRadius: '10px', cursor: 'pointer',
                    backgroundColor: activeSubtopic === i ? COLORS.navy : '#f8fafc',
                    color: activeSubtopic === i ? 'white' : COLORS.navy,
                    fontSize: '14px', fontWeight: '600'
                  }}>{s.title}</div>
                ))}
                <button onClick={startExam} style={{ width: '100%', padding: '15px', marginTop: '20px', borderRadius: '10px', border: 'none', backgroundColor: COLORS.gold, color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>INICIAR EXAMEN</button>
              </div>

              {/* Player */}
              <div style={{ position: 'relative' }}>
                {!showExam ? (
                  <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: 'black', borderRadius: '15px', overflow: 'hidden' }}>
                    {currentSubtopic.videoUrl.includes('PLACEHOLDER') ? (
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <div style={{ fontSize: '40px' }}>🎬</div>
                        <p>Próximamente...</p>
                      </div>
                    ) : (
                      <iframe 
                        src={currentSubtopic.videoUrl} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        allow="fullscreen; encrypted-media"
                      />
                    )}
                  </div>
                ) : (
                  <div style={{ minHeight: '400px', border: '1px solid #e2e8f0', borderRadius: '15px' }}>
                    {renderExam()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside>
          <div style={{ backgroundColor: COLORS.navy, color: 'white', padding: '25px', borderRadius: '20px', marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '5px' }}>READINESS</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: COLORS.gold }}>{getReadiness().percent}%</div>
            <p style={{ fontSize: '13px', marginTop: '10px', lineHeight: '1.4' }}>{getReadiness().advice}</p>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', display: 'flex', flexDirection: 'column', height: '500px', border: '1px solid #e2e8f0' }}>
            <div style={{ padding: '15px', borderBottom: '1px solid #e2e8f0', fontWeight: 'bold' }}>Tutor IA Maná</div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '15px' }}>
              {chat.map((m, i) => (
                <div key={i} style={{ marginBottom: '15px', textAlign: m.role === 'user' ? 'right' : 'left' }}>
                  <div style={{ display: 'inline-block', padding: '10px', borderRadius: '10px', fontSize: '13px', backgroundColor: m.role === 'user' ? COLORS.navy : '#f1f5f9', color: m.role === 'user' ? 'white' : COLORS.navy }}>{m.text}</div>
                </div>
              ))}
              {loading && <div style={{ fontSize: '12px', color: '#64748b' }}>Pensando...</div>}
            </div>
            <div style={{ padding: '15px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '10px' }}>
              <input value={query} onChange={e => setQuery(e.target.value)} onKeyPress={e => e.key === 'Enter' && askTutor()} placeholder="Pregunta algo..." style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #e2e8f0' }} />
              <button onClick={askTutor} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: COLORS.gold, color: 'white' }}>↑</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
