import React from 'react';

const COLORS = {
  black: '#000000',
  darkBg: '#121212',
  gold: '#D4AF37',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#64748b',
  border: '#334155'
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('module1');

  return (
    <div style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.white, 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      {/* Navbar */}
      <nav style={{ 
        padding: '20px 40px', 
        borderBottom: `1px solid ${COLORS.goldDark}`, 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.black
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.gold }}>
          MANÁ ACADEMY <span style={{ color: COLORS.white, fontSize: '14px', fontWeight: 'normal' }}>| PrePass FL AI</span>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', color: COLORS.white, cursor: 'pointer' }}>Inicio</button>
          <button style={{ background: 'none', border: 'none', color: COLORS.white, cursor: 'pointer' }}>Mi Perfil</button>
          <button style={{ backgroundColor: COLORS.gold, color: COLORS.black, padding: '8px 16px', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>Salir</button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
        
        {/* Course Area */}
        <section>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: COLORS.gold }}>Módulo 1: Fundamentos y Procesos de Campo</h2>
            <p style={{ color: COLORS.gray }}>Florida Health Insurance (2-40/2-15)</p>
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
              src="https://app.heygen.com/embed/f919507ba9224f7295740dc50dd18fa0"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="font-presentation"
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Concepto 1 */}
              <div style={{ padding: '20px', backgroundColor: COLORS.darkBg, borderRadius: '8px', border: `1px solid ${COLORS.border}` }}>
                <h3 style={{ color: COLORS.gold, marginTop: 0 }}>📋 El Contrato en Simple</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Olvídate de tecnicismos. Para el examen solo importa que el contrato tiene <strong>4 partes</strong>:
                </p>
                <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
                  <li><strong>Acuerdo:</strong> Alguien pide (cliente) y alguien da (empresa).</li>
                  <li><strong>Consideración:</strong> El cliente paga la prima, la empresa promete pagar el reclamo.</li>
                  <li><strong>Capacidad:</strong> Tienes que estar sano mentalmente y ser mayor de edad.</li>
                  <li><strong>Legal:</strong> No puedes asegurar algo para hacer trampa.</li>
                </ul>
              </div>

              {/* Concepto 2 */}
              <div style={{ padding: '20px', backgroundColor: COLORS.darkBg, borderRadius: '8px', border: `1px solid ${COLORS.border}` }}>
                <h3 style={{ color: COLORS.gold, marginTop: 0 }}>⚖️ Reglas del Juego</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Lo que el estado te va a preguntar sobre el tipo de contrato:
                </p>
                <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
                  <li><strong>Adhesión:</strong> La empresa pone las reglas. El cliente acepta o no.</li>
                  <li><strong>Aleatorio:</strong> El intercambio de dinero no es igual (pagas poco, recibes mucho).</li>
                  <li><strong>Unilateral:</strong> Solo la aseguradora está obligada por ley a cumplir su promesa.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '20px', backgroundColor: COLORS.gold, color: COLORS.black, borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>💡 REGLA DE ORO DE FRANKLIN</h4>
              <p style={{ margin: 0, fontWeight: '600' }}>
                Si el cliente no pagó al principio, <strong>antes de darle la póliza</strong>, tiene que firmar que sigue sano (Declaración de Buena Salud). ¡No hay más vueltas!
              </p>
            </div>

            {/* Sección de Bonos de Valor */}
            <div style={{ 
              marginTop: '30px', 
              padding: '20px', 
              backgroundColor: 'rgba(212, 175, 55, 0.1)', 
              borderRadius: '12px', 
              border: `2px dashed ${COLORS.gold}`,
              textAlign: 'center'
            }}>
              <h3 style={{ color: COLORS.gold, margin: '0 0 10px 0', fontSize: '20px' }}>🎁 BONOS EXCLUSIVOS INCLUIDOS</h3>
              <p style={{ fontSize: '14px', marginBottom: '20px', color: COLORS.white }}>
                Como valor agregado a tu curso, te entregamos estos materiales descargables en cada capítulo:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <a href="/Modulo1_Manual_Completo.html" target="_blank" style={{ 
                  padding: '12px', 
                  backgroundColor: COLORS.gold, 
                  color: COLORS.black, 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  borderRadius: '6px',
                  fontSize: '13px'
                }}>
                  📄 Material del Curso (PDF)
                </a>
                <a href="/Modulo1_Guia_Estudio.html" target="_blank" style={{ 
                  padding: '12px', 
                  backgroundColor: COLORS.white, 
                  color: COLORS.black, 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  borderRadius: '6px',
                  fontSize: '13px'
                }}>
                  🎯 Las 25 Preguntas Frecuentes
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
            <div style={{ height: '200px', backgroundColor: COLORS.darkBg, borderRadius: '8px', padding: '10px', fontSize: '13px', overflowY: 'auto', border: `1px solid ${COLORS.border}` }}>
              <p style={{ color: COLORS.gold }}><strong>Tutor:</strong> ¡Hola! Estoy listo para ayudarte con el Módulo 1. ¿Sabes qué es un contrato Unilateral?</p>
            </div>
            <input 
              type="text" 
              placeholder="Escribe tu duda aquí..." 
              style={{ width: '100%', marginTop: '10px', padding: '10px', borderRadius: '4px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
            />
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
    </div>
  );
}
