import React from 'react';
import Head from 'next/head';

const COLORS = {
  black: '#000000',
  darkBg: '#F5E6CC', // Beige más cálido y definido
  navy: '#0A1B33',
  gold: '#C5A059',
  goldDark: '#9A7B2C',
  white: '#FFFFFF',
  gray: '#64748b',
  border: '#D9CBB0' // Borde cálido para el beige
};

const LOGO_URL = "https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png";

export default function Inscripcion() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    statusLegal: 'Ciudadano',
    fuente: 'Referido',
    fuenteDetalle: '',
    yaReclutado: 'No'
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    localStorage.setItem('userRegistration', JSON.stringify(formData));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: COLORS.darkBg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.navy, fontFamily: 'system-ui' }}>
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: COLORS.white, borderRadius: '16px', border: `1px solid ${COLORS.border}`, boxShadow: '0 10px 40px rgba(0,0,0,0.05)', maxWidth: '500px' }}>
          <img src={LOGO_URL} style={{ width: '80px', marginBottom: '20px' }} />
          <h2 style={{ color: COLORS.navy, fontSize: '28px', marginBottom: '15px' }}>¡Registro Recibido!</h2>
          <p style={{ lineHeight: '1.6' }}>Gracias <strong>{formData.nombre}</strong>. Nos pondremos en contacto contigo pronto para completar tu inscripción.</p>
          <button onClick={() => window.location.href = '/'} style={{ marginTop: '25px', backgroundColor: COLORS.navy, color: COLORS.white, padding: '12px 24px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Volver al Inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: COLORS.darkBg, color: COLORS.navy, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '60px' }}>
      <Head>
        <title>Inscripción | Maná Academy</title>
      </Head>

      <nav style={{ padding: '25px', textAlign: 'center', backgroundColor: COLORS.navy, borderBottom: `3px solid ${COLORS.gold}` }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '60px' }} />
      </nav>

      <main style={{ maxWidth: '650px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: COLORS.white, padding: '50px', borderRadius: '20px', border: `1px solid ${COLORS.border}`, boxShadow: '0 15px 50px rgba(0,0,0,0.05)' }}>
          <h1 style={{ color: COLORS.navy, textAlign: 'center', marginBottom: '10px', fontSize: '32px' }}>Formulario de Inscripción</h1>
          <p style={{ textAlign: 'center', color: COLORS.gray, marginBottom: '40px', fontSize: '15px' }}>Completa tus datos para iniciar el proceso de certificación.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            {/* Nombre y Apellido */}
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>Nombre y Apellido</label>
              <input 
                required
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez" 
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px' }}
              />
            </div>

            {/* Teléfono y Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>Teléfono</label>
                <input 
                  required
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="305-000-0000" 
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com" 
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px' }}
                />
              </div>
            </div>

            {/* Dirección */}
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>Dirección Completa</label>
              <input 
                required
                type="text" 
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle, Ciudad, FL, Zip Code" 
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px' }}
              />
            </div>

            {/* Estatus Legal */}
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>Estatus Legal</label>
              <select 
                name="statusLegal"
                value={formData.statusLegal}
                onChange={handleChange}
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px' }}
              >
                <option value="Ciudadano">Ciudadano</option>
                <option value="Residente">Residente</option>
                <option value="Permiso de Trabajo">Permiso de Trabajo</option>
              </select>
            </div>

            {/* Fuente */}
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>¿Cómo te enteraste del curso?</label>
              <select 
                name="fuente"
                value={formData.fuente}
                onChange={handleChange}
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px', marginBottom: '15px' }}
              >
                <option value="Referido">Referido</option>
                <option value="Maná Insurance Advisors">Maná Insurance Advisors</option>
                <option value="Otra agencia">Otra agencia</option>
                <option value="Otra persona">Otra persona</option>
              </select>

              {(formData.fuente === 'Otra agencia' || formData.fuente === 'Otra persona') && (
                <input 
                  required
                  type="text" 
                  name="fuenteDetalle"
                  value={formData.fuenteDetalle}
                  onChange={handleChange}
                  placeholder={formData.fuente === 'Otra agencia' ? "Nombre de la agencia" : "Nombre y Apellido de la persona"} 
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fcfcfc', color: COLORS.navy, fontSize: '15px' }}
                />
              )}
            </div>

            {/* Ya Reclutado */}
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: COLORS.navy }}>¿Ya estás siendo reclutado por alguna agencia de seguros?</label>
              <div style={{ display: 'flex', gap: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="yaReclutado" 
                    value="Si" 
                    checked={formData.yaReclutado === 'Si'} 
                    onChange={handleChange}
                    style={{ accentColor: COLORS.navy }}
                  /> Si
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="yaReclutado" 
                    value="No" 
                    checked={formData.yaReclutado === 'No'} 
                    onChange={handleChange}
                    style={{ accentColor: COLORS.navy }}
                  /> No
                </label>
              </div>
            </div>

            <button type="submit" style={{ marginTop: '15px', backgroundColor: COLORS.gold, color: COLORS.black, padding: '18px', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)' }}>
              Enviar Información
            </button>

          </form>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: COLORS.gray, fontSize: '14px' }}>
        © 2026 Maná Academy | Tu éxito es nuestra misión.
      </footer>

      <style jsx>{`
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197, 160, 89, 0.5) !important;
        }
      `}</style>
    </div>
  );
}
