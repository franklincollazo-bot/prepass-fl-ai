import React from 'react';
import Head from 'next/head';

const COLORS = {
  black: '#000000',
  navy: '#0A1B33',
  gold: '#C5A059',
  white: '#FFFFFF',
  gray: '#5B6578'
};

const LOGO_URL = "https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png";

export default function DemoMasterclass() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [virtualTime, setVirtualTime] = React.useState(0);
  const [activeOverlay, setActiveOverlay] = React.useState(null);

  const metadata = [
    { start: 5, end: 15, type: 'word', title: 'OBLIGATORIAS' },
    { start: 20, end: 40, type: 'concept', title: 'REGLA 20-15-90', text: 'Aviso (20d), Formularios (15d), Prueba de Pérdida (90d).' },
    { start: 50, end: 70, type: 'trap', title: 'GRACIA 7-10-31', text: '7d (Semanal), 10d (Mensual), 31d (Resto).' }
  ];

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setVirtualTime(prev => {
          const newTime = prev + 1;
          const active = metadata.find(m => newTime >= m.start && newTime <= m.end);
          setActiveOverlay(active || null);
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div style={{ backgroundColor: COLORS.navy, minHeight: '100vh', color: COLORS.white, fontFamily: 'system-ui', padding: '40px' }}>
      <Head>
        <title>Demo Exclusiva | Maná Academy</title>
      </Head>

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '80px', marginBottom: '20px' }} />
        <h1 style={{ color: COLORS.gold, marginBottom: '10px' }}>MUESTRA DE TECNOLOGÍA EDUCATIVA</h1>
        <p style={{ color: COLORS.white, opacity: 0.8, marginBottom: '40px' }}>
          Visualiza cómo nuestro sistema de <b>Overlays Dinámicos</b> guía al estudiante en los puntos más difíciles del examen estatal de Florida.
        </p>

        <div style={{ 
          position: 'relative', 
          width: '100%', 
          paddingTop: '56.25%', 
          backgroundColor: '#000', 
          borderRadius: '15px', 
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          border: `2px solid ${COLORS.gold}`
        }}>
          {!isPlaying && (
            <div 
              onClick={() => setIsPlaying(true)}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.7)',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                width: '80px', height: '80px', 
                borderRadius: '40px', 
                backgroundColor: COLORS.gold,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                fontSize: '40px', marginBottom: '20px'
              }}>▶</div>
              <h2 style={{ color: COLORS.white }}>CLIC PARA INICIAR DEMO</h2>
            </div>
          )}

          <iframe 
            src="https://app.heygen.com/embeds/659a01deb2d34a97a2cba24c6660b319"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="encrypted-media; picture-in-picture"
          />

          {activeOverlay && (
            <div style={{
              position: 'absolute',
              top: '5%',
              right: '5%',
              zIndex: 1000,
              width: '35%',
              maxWidth: '300px',
              animation: 'fadeIn 0.5s',
              pointerEvents: 'none'
            }}>
              <div style={{
                backgroundColor: activeOverlay.type === 'trap' ? '#fee2e2' : COLORS.white,
                padding: '20px',
                borderRadius: '12px',
                border: `3px solid ${activeOverlay.type === 'trap' ? '#ef4444' : COLORS.gold}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}>
                <h4 style={{ margin: 0, color: COLORS.navy, fontSize: '18px' }}>
                  {activeOverlay.type === 'trap' ? '⚠️ TRAMPA DE EXAMEN' : '💎 CONCEPTO CLAVE'}
                </h4>
                <p style={{ margin: '10px 0', color: COLORS.navy, fontSize: '16px', fontWeight: 'bold' }}>{activeOverlay.title}</p>
                <div style={{ color: COLORS.gray, fontSize: '14px' }}>
                  {activeOverlay.text}
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '20px', border: `1px solid ${COLORS.gold}`, borderRadius: '10px' }}>
            <h3 style={{ color: COLORS.gold }}>Avatar Humano</h3>
            <p style={{ fontSize: '13px' }}>Conexión emocional y autoridad con el estudiante.</p>
          </div>
          <div style={{ padding: '20px', border: `1px solid ${COLORS.gold}`, borderRadius: '10px' }}>
            <h3 style={{ color: COLORS.gold }}>Overlays IA</h3>
            <p style={{ fontSize: '13px' }}>Refuerzo visual automático en conceptos críticos.</p>
          </div>
          <div style={{ padding: '20px', border: `1px solid ${COLORS.gold}`, borderRadius: '10px' }}>
            <h3 style={{ color: COLORS.gold }}>Enfoque Florida</h3>
            <p style={{ fontSize: '13px' }}>Contenido curado para el examen de Pearson VUE.</p>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
