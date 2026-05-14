import React from 'react';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Head>
        <title>PrePass FL AI | Tu Licencia de Seguros en Florida</title>
        <meta name="description" content="Pasa el examen de seguros de Florida a la primera con Inteligencia Artificial." />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          PrePass FL AI
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-blue-400 transition">Funciones</a>
          <a href="#curriculum" className="hover:text-blue-400 transition">Contenido</a>
          <a href="#pricing" className="hover:text-blue-400 transition">Precio</a>
        </div>
        <a href="#pricing" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full font-bold transition shadow-lg shadow-blue-500/20">
          Empezar Ahora
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Revolución Educativa con IA
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Pasa el Examen de Seguros <br/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              a la Primera.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Únete a la academia más avanzada de Florida. Prepárate en 5 idiomas con un tutor de IA disponible 24/7. Diseñado para agentes reales por <strong>Maná Insurance Advisors</strong>.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#pricing" className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-lg transition shadow-xl shadow-blue-600/30">
              Obtener Acceso por $49
            </a>
            <p className="text-slate-500 text-sm flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              Incluye sesión 1-a-1 con Franklin Collazo
            </p>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Tutoría IA 24/7</h3>
              <p className="text-slate-400">Pregúntale cualquier cosa a nuestra IA. Entrenada con los manuales oficiales de Florida DFS 2026.</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5a18.022 18.022 0 01-3.827-5.802M11 15a11.338 11.338 0 01-3.347-1.608M12 20V5m-9 6h8m7-1c1.933 0 3.5 1.567 3.5 3.5S19.933 17 18 17s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">5 Idiomas</h3>
              <p className="text-slate-400">Estudia en Español, Inglés, Kreyòl, Português o Français. Sin barreras lingüísticas.</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Simulador Real</h3>
              <p className="text-slate-400">Exámenes de práctica que se adaptan a tus debilidades para asegurar tu aprobado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Un Solo Pago. Acceso Ilimitado.</h2>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-1 rounded-[40px] shadow-2xl shadow-blue-600/20">
            <div className="bg-slate-900 rounded-[36px] p-12">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Plan de Éxito Total</span>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-6xl font-extrabold">$49</span>
                <span className="text-slate-400 ml-2">pago único</span>
              </div>
              <ul className="my-10 space-y-4 text-left max-w-xs mx-auto">
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Curso Pre-Licencia Completo</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Tutor de IA Personalizado</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Sesión Coaching 1-a-1</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> 5 Idiomas Incluidos</li>
              </ul>
              <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-xl transition shadow-lg shadow-blue-600/30">
                Inscribirme Ahora
              </button>
              <p className="mt-6 text-slate-500 text-sm">
                Seguro y Protegido por Stripe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 PrePass FL AI. Una iniciativa de Maná Insurance Advisors Corp.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://manainsuranceadvisors.com" className="hover:text-white">Maná Insurance</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
