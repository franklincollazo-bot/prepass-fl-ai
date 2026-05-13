import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          PrePass FL AI
        </h1>
        <div className="flex space-x-4">
          <select className="bg-slate-800 border-none rounded-lg px-3 py-1 text-sm outline-none">
            <option>Español</option>
            <option>English</option>
            <option>Creole</option>
            <option>Português</option>
            <option>Français</option>
          </select>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">FC</div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Progress */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Módulo 4: Leyes y Regulaciones de Florida</h2>
            <p className="text-slate-400 mb-6">Aprende sobre las normativas específicas del DFS y la protección al consumidor en el estado.</p>
            
            {/* Video Section */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6 relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center pl-1 shadow-lg shadow-blue-500/50">
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <img src="https://img.youtube.com/vi/U_yeSVvszxw/maxresdefault.jpg" alt="Video cover" className="w-full h-full object-cover opacity-60" />
            </div>

            <div className="flex justify-between items-center">
              <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition">Anterior</button>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition">Siguiente Lección</button>
            </div>
          </div>

          {/* Flashcards / Summary Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-900 to-slate-800 p-6 rounded-2xl border border-indigo-500/30">
              <span className="text-xs font-bold text-indigo-400 uppercase">Flashcard del día</span>
              <h3 className="text-lg mt-2">¿Qué es el COBRA en Florida?</h3>
              <p className="text-slate-400 text-sm mt-2 italic">Toca para ver la respuesta entrenada por IA...</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-lg">Tu Probabilidad de Pasar</h3>
              <div className="mt-4 flex items-end space-x-2">
                <span className="text-4xl font-bold text-green-400">88%</span>
                <span className="text-slate-400 text-sm pb-1">¡Casi listo!</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
                <div className="bg-green-400 h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor Sidebar */}
        <div className="bg-slate-800 rounded-2xl shadow-xl flex flex-col h-[700px] border border-blue-500/20">
          <div className="p-4 border-b border-slate-700 flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="font-bold">Tutor IA Online</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="bg-slate-700 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-sm max-w-[90%]">
              ¡Hola Franklin! He visto que has tenido dudas con el capítulo de Deductibles. ¿Quieres que te explique la diferencia entre un Deductible de Florida y uno estándar?
            </div>
            <div className="bg-blue-600 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm self-end ml-auto max-w-[90%]">
              Sí, por favor. Explícalo en Español y Portugués.
            </div>
          </div>
          <div className="p-4 bg-slate-900/50">
            <input 
              type="text" 
              placeholder="Pregúntale cualquier cosa al examen..." 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
