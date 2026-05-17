import React from 'react';
import Head from 'next/head';

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

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.navy, 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <style jsx global>{`
        .hero-title {
          font-size: 42px;
          color: ${COLORS.gold};
          margin-bottom: 20px;
          letter-spacing: 1px;
        }
        .hero-subtitle {
          color: ${COLORS.white};
          font-size: 32px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        @media (max-width: 600px) {
          .hero-title {
            font-size: 28px;
          }
          .hero-subtitle {
            font-size: 20px;
          }
          .hero-section {
            padding: 40px 15px !important;
          }
        }
      `}</style>
      <Head>
        <title>PrePass FL AI | Maná Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pasa el examen de seguros de Florida con la metodología de Maná Academy." />
      </Head>

      {/* Hero Section */}
      <section className="hero-section" style={{ 
        padding: '60px 20px', 
        textAlign: 'center', 
        backgroundColor: COLORS.navy,
        borderBottom: `3px solid ${COLORS.gold}`
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img src={LOGO_URL} alt="Maná Academy Logo" style={{ width: '150px', maxWidth: '100%', marginBottom: '20px' }} />
          <h1 className="hero-title">
            PASIÓN POR TU ÉXITO <br/>
            <span className="hero-subtitle">PrePass FL AI (2-40)</span>
          </h1>
          <p style={{ fontSize: '18px', color: COLORS.white, marginBottom: '40px', opacity: 0.8 }}>
            No estudies más, estudia mejor. Destilamos el contenido del examen estatal de Florida para que apruebes a la primera y empieces a producir dinero de inmediato.
          </p>
          
          {/* Welcome Video Embed */}
          <div style={{ 
            maxWidth: '700px', 
            margin: '0 auto 40px auto',
            position: 'relative', 
            paddingTop: '56.25%', /* 16:9 Aspect Ratio */
            backgroundColor: COLORS.black, 
            borderRadius: '12px', 
            overflow: 'hidden',
            border: `2px solid ${COLORS.gold}`,
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <iframe 
              src="https://www.youtube.com/embed/ZYM-WLADuw4"
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

          <a href="/inscripcion" style={{ 
            backgroundColor: COLORS.gold, 
            color: COLORS.black, 
            padding: '16px 32px', 
            borderRadius: '8px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)'
          }}>
            Registrarme e Inscribirme - $49
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="features-grid">
          <div style={{ padding: '40px', backgroundColor: COLORS.white, borderRadius: '16px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: COLORS.navy, fontSize: '24px', marginBottom: '15px' }}>🚀 Eficiencia Total</h3>
            <p style={{ color: COLORS.gray, lineHeight: '1.6' }}>Eliminamos el relleno. Solo lo que el Estado de Florida evalúa para que tu tiempo rinda al máximo.</p>
          </div>
          <div style={{ padding: '40px', backgroundColor: COLORS.white, borderRadius: '16px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: COLORS.navy, fontSize: '24px', marginBottom: '15px' }}>🤖 Tutor IA 24/7</h3>
            <p style={{ color: COLORS.gray, lineHeight: '1.6' }}>Nuestra IA está entrenada con el manual oficial para resolver tus dudas técnicas al instante, sin esperas.</p>
          </div>
          <div style={{ padding: '40px', backgroundColor: COLORS.white, borderRadius: '16px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: COLORS.navy, fontSize: '24px', marginBottom: '15px' }}>🎥 Mentoría con IA</h3>
            <p style={{ color: COLORS.gray, lineHeight: '1.6' }}>Videos dinámicos con avatares de IA que explican los conceptos más complejos de forma sencilla y directa.</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 40px', textAlign: 'center', color: COLORS.gray, fontSize: '14px', backgroundColor: COLORS.white, borderTop: `1px solid ${COLORS.border}` }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '30px', opacity: 0.5, marginBottom: '10px' }} /><br/>
        © 2026 Maná Academy | Una iniciativa de Maná Insurance Advisors
      </footer>
    </div>
  );
}
