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

export default function Inscripcion() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    statusLegal: 'Ciudadano',
    fuente: 'Referido',
    fuenteDetalle: ''
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí se integraría con Supabase o un API de email
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: COLORS.darkBg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.white, fontFamily: 'system-ui' }}>
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: COLORS.black, borderRadius: '12px', border: `2px solid ${COLORS.gold}`, maxWidth: '500px' }}>
          <img src={LOGO_URL} style={{ width: '80px', marginBottom: '20px' }} />
          <h2 style={{ color: COLORS.gold }}>¡Registro Recibido!</h2>
          <p>Gracias <strong>{formData.nombre}</strong>. Nos pondremos en contacto contigo pronto para completar tu inscripción.</p>
          <button onClick={() => window.location.href = '/'} style={{ marginTop: '20px', backgroundColor: COLORS.gold, color: COLORS.black, padding: '10px 20px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Volver al Inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: COLORS.darkBg, color: COLORS.white, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '50px' }}>
      <Head>
        <title>Inscripción | Maná Academy</title>
      </Head>

      <nav style={{ padding: '20px', textAlign: 'center', backgroundColor: '#000000', borderBottom: `2px solid ${COLORS.gold}` }}>
        <img src={LOGO_URL} alt="Logo" style={{ height: '60px' }} />
      </nav>

      <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: COLORS.black, padding: '40px', borderRadius: '12px', border: `1px solid ${COLORS.goldDark}`, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <h1 style={{ color: COLORS.gold, textAlign: 'center', marginBottom: '10px' }}>Formulario de Inscripción</h1>
          <p style={{ textAlign: 'center', color: COLORS.gray, marginBottom: '30px', fontSize: '14px' }}>Completa tus datos para iniciar el proceso de certificación.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Nombre y Apellido */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: COLORS.gold }}>Nombre y Apellido</label>
              <input 
                required
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez" 
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white, outline: 'none' }}
              />
            </div>

            {/* Teléfono y Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: COLORS.gold }}>Teléfono</label>
                <input 
                  required
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="305-000-0000" 
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: COLORS.gold }}>Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com" 
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
                />
              </div>
            </div>

            {/* Dirección */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: COLORS.gold }}>Dirección Completa</label>
              <input 
                required
                type="text" 
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle, Ciudad, FL, Zip Code" 
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
              />
            </div>

            {/* Estatus Legal */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: COLORS.gold }}>Estatus Legal</label>
              <select 
                name="statusLegal"
                value={formData.statusLegal}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
              >
                <option value="Ciudadano">Ciudadano</option>
                <option value="Residente">Residente</option>
                <option value="Permiso de Trabajo">Permiso de Trabajo</option>
              </select>
            </div>

            {/* Fuente */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: COLORS.gold }}>¿Cómo te enteraste del curso?</label>
              <select 
                name="fuente"
                value={formData.fuente}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white, marginBottom: '10px' }}
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
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.darkBg, color: COLORS.white }}
                />
              )}
            </div>

            <button type="submit" style={{ marginTop: '10px', backgroundColor: COLORS.gold, color: COLORS.black, padding: '16px', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'background 0.3s' }}>
              Enviar Información
            </button>

          </form>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', color: COLORS.gray, fontSize: '12px' }}>
        © 2026 Maná Academy | Tu éxito es nuestra misión.
      </footer>

      <style jsx>{`
        button:hover {
          background-color: ${COLORS.goldDark} !important;
        }
      `}</style>
    </div>
  );
}
