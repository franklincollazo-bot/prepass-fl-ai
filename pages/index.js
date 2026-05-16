import React from 'react';
import Head from 'next/head';

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

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.white, 
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
        backgroundColor: '#000000',
        borderBottom: `2px solid ${COLORS.gold}`
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img src={LOGO_URL} alt="Maná Academy Logo" style={{ width: '150px', maxWidth: '100%', marginBottom: '20px' }} />
          <h1 className="hero-title">
            PASIÓN POR TU ÉXITO <br/>
            <span className="hero-subtitle">PrePass FL AI (2-40)</span>
          </h1>
          <p style={{ fontSize: '18px', color: COLORS.gray, marginBottom: '40px' }}>
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
            border: `1px solid ${COLORS.goldDark}`
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
            display: 'inline-block'
          }}>
            Registrarme e Inscribirme - $49
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="features-grid">
          <div style={{ padding: '30px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.gold }}>🚀 Eficiencia Total</h3>
            <p style={{ color: COLORS.gray }}>Eliminamos el relleno. Solo lo que el Estado de Florida evalúa.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.gold }}>🤖 Tutor IA 24/7</h3>
            <p style={{ color: COLORS.gray }}>Nuestra IA está entrenada con el manual oficial para resolver tus dudas al instante.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: COLORS.black, borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
            <h3 style={{ color: COLORS.gold }}>🎥 Mentoría con IA</h3>
            <p style={{ color: COLORS.gray }}>Videos dinámicos que explican lo complejo de forma sencilla.</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: COLORS.gray, fontSize: '14px' }}>
        © 2026 Maná Academy | Una iniciativa de Maná Insurance Advisors
      </footer>
    </div>
  );
}
