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

  const modules = {
    1: {
      title: "Módulo 1: Fundamentos y Procesos de Campo",
      subtitle: "Florida Health Insurance (2-40)",
      videoUrl: "https://www.youtube.com/embed/gqAzJHhPFlI",
      manual: "/Modulo1_Manual_Completo.html",
      guia: "/Modulo1_Guia_Estudio.html",
      pilar1: "📋 El Contrato en Simple",
      pilar1Text: "Olvídate de tecnicismos. Para el examen solo importa que el contrato tiene 4 partes: Acuerdo, Consideración, Capacidad y Legal.",
      pilar2: "⚖️ Reglas del Juego",
      pilar2Text: "Conceptos clave: Adhesión (la empresa manda), Aleatorio (intercambio desigual) y Unilateral (solo la empresa firma promesa legal).",
      reglaOro: "Si el cliente no pagó al principio, antes de darle la póliza, tiene que firmar que sigue sano (Declaración de Buena Salud). ¡No hay más vueltas!"
    },
    2: {
      title: "Módulo 2: Tipos de Pólizas de Salud",
      subtitle: "HMO, PPO, Disability e Ingresos",
      videoUrl: "https://www.youtube.com/embed/j78YXziYc6E", // Placeholder hasta que Franklin pase el nuevo
      manual: "/Modulo2_Manual_Completo.html",
      guia: "/Modulo2_Guia_Estudio.html",
      pilar1: "🏥 HMO vs PPO",
      pilar1Text: "HMO: Red cerrada y Gatekeeper (Médico Primario). PPO: Libertad de elegir médico fuera de la red pagando un poco más.",
      pilar2: "♿ Disability Income",
      pilar2Text: "Paga el sueldo del cliente, no las facturas médicas. El 'Período de Eliminación' es el tiempo que espera el cliente antes de cobrar.",
      reglaOro: "Dato de Examen: La Capitación es el pago fijo mensual que recibe el médico de una HMO, independientemente de cuántas veces lo visite el paciente."
    }
  };

  const currentModule = modules[activeModule];

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
          {/* Selector de Módulos */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
            <button 
              onClick={() => setActiveModule(1)}
              style={{ 
                flex: 1, 
                padding: '12px', 
                backgroundColor: activeModule === 1 ? COLORS.gold : COLORS.black, 
                color: activeModule === 1 ? COLORS.black : COLORS.white, 
                border: `1px solid ${COLORS.gold}`, 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Módulo 1
            </button>
            <button 
              onClick={() => setActiveModule(2)}
              style={{ 
                flex: 1, 
                padding: '12px', 
                backgroundColor: activeModule === 2 ? COLORS.gold : COLORS.black, 
                color: activeModule === 2 ? COLORS.black : COLORS.white, 
                border: `1px solid ${COLORS.gold}`, 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Módulo 2
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: COLORS.gold }}>{currentModule.title}</h2>
            <p style={{ color: COLORS.gray }}>{currentModule.subtitle}</p>
          </div>

          {/* Video Player */}
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
              src={currentModule.videoUrl}
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

          {/* Sección de Valor: Tiempo es Dinero */}
          <div style={{ marginTop: '30px', padding: '30px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.goldDark}` }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ color: COLORS.gold, fontSize: '28px', margin: '0 0 10px 0' }}>Ahorra Tiempo, Gana Dinero</h2>
              <p style={{ color: COLORS.white, fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                "Con este curso no perderás tiempo estudiando lo que no necesitas. En Maná Academy vamos directo a lo que te garantiza el aprobado, porque tu tiempo vale oro y cada día que pasas estudiando sin producir es dinero que dejas de ganar."
              </p>
            </div>

            <div className="info-grid">
              {/* Concepto 1 */}
              <div style={{ padding: '20px', backgroundColor: COLORS.darkBg, borderRadius: '8px', border: `1px solid ${COLORS.border}` }}>
                <h3 style={{ color: COLORS.gold, marginTop: 0 }}>{currentModule.pilar1}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {currentModule.pilar1Text}
                </p>
              </div>

              {/* Concepto 2 */}
              <div style={{ padding: '20px', backgroundColor: COLORS.darkBg, borderRadius: '8px', border: `1px solid ${COLORS.border}` }}>
                <h3 style={{ color: COLORS.gold, marginTop: 0 }}>{currentModule.pilar2}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {currentModule.pilar2Text}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '20px', backgroundColor: COLORS.gold, color: COLORS.black, borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>💡 REGLA DE ORO DE FRANKLIN</h4>
              <p style={{ margin: 0, fontWeight: '600' }}>
                {currentModule.reglaOro}
              </p>
            </div>

            {/* Sección de Bonos de Valor - Rediseñada Institutional */}
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
              <h3 style={{ color: COLORS.gold, margin: '0 0 10px 0', fontSize: '22px', letterSpacing: '1px' }}>MATERIAL DE ALTO RENDIMIENTO</h3>
              <p style={{ fontSize: '15px', marginBottom: '25px', color: COLORS.white }}>
                Descarga las herramientas definitivas para dominar el {activeModule === 1 ? 'Módulo 1' : 'Módulo 2'} y asegurar tu aprobado.
              </p>
              
              <div className="bonos-grid">
                <a href={currentModule.manual} target="_blank" style={{ 
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
                  <span>MANUAL MAESTRO</span>
                  <span style={{ fontSize: '10px', color: COLORS.white, marginTop: '5px' }}>Conceptos y Leyes</span>
                </a>
                <a href={currentModule.guia} target="_blank" style={{ 
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
                  <span>GUÍA DE ESTUDIO</span>
                  <span style={{ fontSize: '10px', color: COLORS.black, marginTop: '5px' }}>Top 25 Preguntas Examen</span>
                </a>
              </div>
              <p style={{ marginTop: '20px', fontSize: '12px', color: COLORS.gray }}>
                Recomendación: Estudia el Manual Maestro primero, luego memoriza la Guía de Estudio.
              </p>
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
