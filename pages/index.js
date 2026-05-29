import React from 'react';
import Head from 'next/head';
import { COLORS, LOGO_URL } from '../lib/courseData';

export default function LandingPage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.navy, 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflowX: 'hidden'
    }}>
      <style jsx global>{`
        .hero-title { font-size: 56px; font-weight: 900; color: white; line-height: 1.1; margin-bottom: 25px; }
        .hero-accent { color: ${COLORS.gold}; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        .btn-platinum { 
          background: linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%); 
          color: black; padding: 20px 45px; border-radius: 50px; font-size: 20px; 
          font-weight: 800; text-decoration: none; display: inline-block; 
          box-shadow: 0 10px 25px rgba(197, 160, 89, 0.4); transition: all 0.3s ease;
          letter-spacing: 1px;
        }
        .btn-platinum:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(197, 160, 89, 0.5); }
        @media (max-width: 768px) { .hero-title { font-size: 36px; } }
      `}</style>
      <Head>
        <title>PrePass FL AI | Maná Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pasa el examen de seguros de Florida con la metodología de Maná Academy." />
      </Head>

      {/* Hero Section */}
      <section style={{ 
        padding: '100px 20px', textAlign: 'center', backgroundColor: COLORS.navy,
        backgroundImage: 'radial-gradient(circle at top, #1a2a44 0%, #0A1B33 100%)',
        borderBottom: `5px solid ${COLORS.gold}`, position: 'relative', overflow: 'hidden'
      }}>
        {/* Background elements */}
        <div style={{ position: 'absolute', top: -50, right: -50, width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.05)', filter: 'blur(50px)' }}></div>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <img src={LOGO_URL} alt="Logo" style={{ width: '180px', marginBottom: '40px' }} />
          <h1 className="hero-title">
            TU LICENCIA DE SEGUROS <br/>
            EN <span className="hero-accent">TIEMPO RÉCORD</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'white', marginBottom: '50px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 50px auto', lineHeight: '1.6' }}>
            La primera plataforma con <strong>Ingeniería de Protección</strong>. Masterclass interactivas con IA que garantizan tu aprobado en el examen estatal 2-40 de Florida.
          </p>
          
          <div style={{ maxWidth: '850px', margin: '0 auto 60px auto', position: 'relative' }}>
             <div style={{ 
               position: 'absolute', top: '15%', right: '5%', zIndex: 10,
               background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
               padding: '15px 25px', borderRadius: '15px', border: `1px solid ${COLORS.gold}`,
               boxShadow: '0 10px 30px rgba(0,0,0,0.3)', color: 'white', textAlign: 'left',
               animation: 'float 4s ease-in-out infinite'
             }}>
                <div style={{ fontSize: '10px', color: COLORS.gold, fontWeight: 'bold', marginBottom: '5px' }}>✨ IA MASTERCLASS</div>
                <div style={{ fontWeight: 'bold' }}>Regla 20-15-90</div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>Identificada automáticamente.</div>
             </div>
             
             <div style={{ padding: '4px', background: `linear-gradient(135deg, ${COLORS.gold}, transparent)`, borderRadius: '24px' }}>
               <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '20px', overflow: 'hidden', backgroundColor: 'black', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                <iframe 
                  src="https://app.heygen.com/embeds/976a82841af9490a93ff0a9f9a6f1383"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="fullscreen; encrypted-media; picture-in-picture"
                />
               </div>
             </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <a href="/inscripcion" className="btn-platinum">INICIAR MI ENTRENAMIENTO — $49</a>
            <p style={{ color: 'white', fontSize: '12px', opacity: 0.6 }}>Acceso inmediato a los 10 módulos y simulador final.</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="features-grid">
          <div style={{ padding: '40px', background: 'white', borderRadius: '24px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>🧠</div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: COLORS.navy }}>Neuro-Aprendizaje AI</h3>
            <p style={{ color: COLORS.gray, lineHeight: '1.7' }}>
              Nuestras Masterclass con Frank Avatar detectan los puntos clave y te los muestran en pantalla justo cuando los necesitas. No tomas notas, absorbes el conocimiento.
            </p>
          </div>
          <div style={{ padding: '40px', background: 'white', borderRadius: '24px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>⚖️</div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: COLORS.navy }}>Readiness Estatal</h3>
            <p style={{ color: COLORS.gray, lineHeight: '1.7' }}>
              El simulador analiza tus fallos y te dice exactamente cuándo estás listo para el examen oficial de Florida. Cero incertidumbre, 100% confianza.
            </p>
          </div>
          <div style={{ padding: '40px', background: 'white', borderRadius: '24px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>💰</div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: COLORS.navy }}>Inversión Rentable</h3>
            <p style={{ color: COLORS.gray, lineHeight: '1.7' }}>
              Por solo $49 obtienes la metodología que ha ayudado a cientos de agentes a certificarse en menos de 10 días. El tiempo es dinero, empieza hoy.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '80px 40px', textAlign: 'center', backgroundColor: 'white', borderTop: `1px solid ${COLORS.border}` }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '40px', marginBottom: '30px' }} />
        <p style={{ color: COLORS.gray, maxWidth: '600px', margin: '0 auto 30px auto', fontSize: '14px', lineHeight: '1.6' }}>
          PrePass FL AI es una plataforma de Maná Academy diseñada para la excelencia profesional en el sector de seguros de Florida.
        </p>
        <div style={{ fontSize: '12px', fontWeight: 'bold', color: COLORS.navy }}>© 2026 MANÁ INSURANCE ADVISORS. TODOS LOS DERECHOS RESERVADOS.</div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
