import React from 'react';

const COLORS = {
  black: '#000000',
  darkBg: '#0A1B33',
  gold: '#C5A059',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#94a3b8',
  border: '#1e293b'
};

const LOGO_URL = "https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png";

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('module1');
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [activeModule, setActiveModule] = React.useState(1);
  const [activeSubtopic, setActiveSubtopic] = React.useState(0);
  const [chat, setChat] = React.useState([
    { role: 'ai', text: '¡Hola! Soy tu tutor de Maná Academy. ¿En qué puedo ayudarte hoy?' }
  ]);

  const chapters = {
    1: {
      title: "Capítulo 1: Fundamentos y Ley de Contratos",
      subtitle: "La base legal y técnica del seguro (2-40)",
      manual: "/Capitulo1_Manual_Maestro.html",
      guia: "/Capitulo1_Guia_Estudio.html",
      subtopics: [
        {
          title: "1.1 El Riesgo y su Gestión (STARR)",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI", // Placeholder
          summary: "Aprende la diferencia entre Riesgo Puro y Especulativo, Peligros vs Riesgos, y los métodos STARR para manejar la incertidumbre financiera."
        },
        {
          title: "1.2 Aseguradoras y Ley de Agencia",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI", // Placeholder
          summary: "Stock vs Mutual Companies. Entiende la autoridad Expresa, Implícita y Aparente del agente, y tu responsabilidad fiduciaria."
        },
        {
          title: "1.3 El Contrato Legal (ALCAL)",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI", // Placeholder
          summary: "Los 4 elementos esenciales: Acuerdo (Oferta/Aceptación), Legalidad (Interés Asegurable), Consideración y Capacidad."
        },
        {
          title: "1.4 Características Únicas del Contrato",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI", // Placeholder
          summary: "Dominio de Adhesión, Aleatorio, Unilateral y Condicional. Conceptos que Pearson VUE pregunta en cada examen."
        },
        {
          title: "1.5 Conceptos Avanzados y Protección",
          videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI", // Placeholder
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
    const newChat = [...chat, { role: 'user', text: query }];
    setChat(newChat);
    setQuery('');

    try {
      const res = await fetch('/api/tutor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, language: 'es' })
      });
      const data = await res.json();
      setChat([...newChat, { role: 'ai', text: data.reply || 'Lo siento, no pude procesar tu consulta ahora.' }]);
    } catch (err) {
      setChat([...newChat, { role: 'ai', text: 'Error de conexión con el tutor.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-container" style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.white, 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <style jsx global>{`
        .dashboard-main {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 30px;
          padding: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .nav-container {
          padding: 10px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #000000;
          border-bottom: 2px solid ${COLORS.gold};
        }
        .course-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 20px;
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
        @media (max-width: 900px) {
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
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {Object.keys(chapters).map((key) => (
              <button 
                key={key}
                onClick={() => { setActiveModule(Number(key)); setActiveSubtopic(0); }}
                style={{ 
                  flex: 1, 
                  padding: '12px', 
                  backgroundColor: activeModule === Number(key) ? COLORS.gold : COLORS.black, 
                  color: activeModule === Number(key) ? COLORS.black : COLORS.white, 
                  border: `1px solid ${COLORS.gold}`, 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Capítulo {key}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: '25px', padding: '20px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.goldDark}` }}>
            <h2 style={{ color: COLORS.gold, margin: '0 0 5px 0' }}>{currentChapter.title}</h2>
            <p style={{ color: COLORS.gray, margin: 0 }}>{currentChapter.subtitle}</p>
          </div>

          <div className="course-layout" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '20px' }}>
            {/* Sidebar de Subtemas */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ color: COLORS.gold, margin: '0 0 10px 0', fontSize: '14px' }}>SUBTEMAS DEL CAPÍTULO</h4>
              {currentChapter.subtopics.map((sub, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSubtopic(index)}
                  style={{
                    textAlign: 'left',
                    padding: '10px',
                    backgroundColor: activeSubtopic === index ? COLORS.gold : 'transparent',
                    color: activeSubtopic === index ? COLORS.black : COLORS.white,
                    border: `1px solid ${COLORS.gold}`,
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    fontWeight: activeSubtopic === index ? 'bold' : 'normal'
                  }}
                >
                  {sub.title}
                </button>
              ))}
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
                border: `1px solid ${COLORS.goldDark}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
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
              <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#000', borderRadius: '8px', borderLeft: `4px solid ${COLORS.gold}` }}>
                <h3 style={{ color: COLORS.gold, margin: '0 0 10px 0' }}>{currentSubtopic.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{currentSubtopic.summary}</p>
              </div>
            </div>
          </div>

          {/* Sección de Valor: Tiempo es Dinero */}
          <div style={{ marginTop: '30px', padding: '30px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.goldDark}` }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ color: COLORS.gold, fontSize: '28px', margin: '0 0 10px 0' }}>Estudia Menos, Gana Más</h2>
              <p style={{ color: COLORS.white, fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                "No te enviamos a leer un manual de 500 páginas. Hemos destilado las 3 horas de clase de Franklin en videos precisos por subtema. Tu tiempo es dinero; aprueba rápido y empieza a vender."
              </p>
            </div>

            {/* Sección de Bonos de Valor */}
            <div style={{ 
              marginTop: '30px', 
              padding: '25px', 
              backgroundColor: '#000000', 
              borderRadius: '12px', 
              border: `2px solid ${COLORS.gold}`,
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(197, 160, 89, 0.2)'
            }}>
              <img src={LOGO_URL} alt="Logo" style={{ width: '60px', marginBottom: '10px' }} />
              <h3 style={{ color: COLORS.gold, margin: '0 0 10px 0', fontSize: '22px', letterSpacing: '1px' }}>RECURSOS DEL CAPÍTULO {activeModule}</h3>
              
              <div className="bonos-grid">
                <a href={currentChapter.manual} target="_blank" style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px', 
                  backgroundColor: COLORS.darkBg, 
                  color: COLORS.gold, 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  borderRadius: '8px',
                  border: `1px solid ${COLORS.gold}`,
                  transition: 'transform 0.2s'
                }}>
                  <span style={{ fontSize: '24px', marginBottom: '5px' }}>📖</span>
                  <span>MANUAL MAESTRO EXHAUSTIVO</span>
                  <span style={{ fontSize: '10px', color: COLORS.white, marginTop: '5px' }}>Toda la teoría legal</span>
                </a>
                <a href={currentChapter.guia} target="_blank" style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px', 
                  backgroundColor: COLORS.gold, 
                  color: COLORS.black, 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  borderRadius: '8px',
                  border: `1px solid ${COLORS.gold}`,
                  transition: 'transform 0.2s'
                }}>
                  <span style={{ fontSize: '24px', marginBottom: '5px' }}>🎯</span>
                  <span>GUÍA DE 50 PREGUNTAS</span>
                  <span style={{ fontSize: '10px', color: COLORS.black, marginTop: '5px' }}>Simulador de Examen</span>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Sidebar / AI Tutor */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.goldDark}` }}>
            <h3 style={{ color: COLORS.gold, marginTop: 0 }}>🤖 Tutor IA Maná</h3>
            <p style={{ fontSize: '14px', color: COLORS.gray }}>¿Tienes dudas sobre este capítulo? Pregúntame.</p>
            <div style={{ height: '300px', backgroundColor: COLORS.darkBg, borderRadius: '8px', padding: '10px', fontSize: '13px', overflowY: 'auto', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {chat.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end', backgroundColor: msg.role === 'ai' ? COLORS.black : COLORS.gold, color: msg.role === 'ai' ? COLORS.white : COLORS.black, padding: '8px 12px', borderRadius: '8px', maxWidth: '85%' }}>
                  {msg.text}
                </div>
              ))}
              {loading && <div style={{ color: COLORS.gold, fontSize: '12px' }}>Pensando...</div>}
            </div>
            <div style={{ display: 'flex', marginTop: '10px', gap: '5px' }}>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && askTutor()}
                placeholder="Escribe tu duda..." 
                style={{ flex: 1, padding: '10px', borderRadius: '4px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
              />
              <button onClick={askTutor} style={{ backgroundColor: COLORS.gold, border: 'none', borderRadius: '4px', padding: '0 15px', cursor: 'pointer', fontWeight: 'bold' }}>→</button>
            </div>
          </div>

          <div style={{ padding: '20px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.white, marginTop: 0 }}>📊 Tu Progreso</h3>
            <div style={{ height: '10px', width: '100%', backgroundColor: COLORS.border, borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: '15%', height: '100%', backgroundColor: COLORS.gold }}></div>
            </div>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>15% completado</p>
          </div>
        </aside>
      </main>
      <div style={{ opacity: 0, fontSize: '1px' }}>v.1.0.3 - Force Sync: {new Date().toISOString()}</div>
    </div>
  );
}
