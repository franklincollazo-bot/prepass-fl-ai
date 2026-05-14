import React from 'react';
import Head from 'next/head';

const COLORS = {
  black: '#000000',
  darkBg: '#121212',
  gold: '#D4AF37',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#64748b',
  border: '#334155'
};

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundColor: COLORS.darkBg, 
      color: COLORS.white, 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <Head>
        <title>PrePass FL AI | Maná Academy</title>
        <meta name="description" content="Pasa el examen de seguros de Florida con la metodología de Maná Academy." />
      </Head>

      {/* Hero Section */}
      <section style={{ 
        padding: '80px 20px', 
        textAlign: 'center', 
        backgroundColor: COLORS.black,
        borderBottom: `1px solid ${COLORS.goldDark}`
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', color: COLORS.gold, marginBottom: '20px' }}>
            MANÁ ACADEMY <br/>
            <span style={{ color: COLORS.white }}>PrePass FL AI</span>
          </h1>
          <p style={{ fontSize: '20px', color: COLORS.gray, marginBottom: '40px' }}>
            No estudies más, estudia mejor. Destilamos el contenido del examen estatal de Florida para que apruebes a la primera y empieces a producir dinero de inmediato.
          </p>
          <a href="/dashboard" style={{ 
            backgroundColor: COLORS.gold, 
            color: COLORS.black, 
            padding: '18px 36px', 
            borderRadius: '8px', 
            fontSize: '20px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Entrar a la Academia - $49
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
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
