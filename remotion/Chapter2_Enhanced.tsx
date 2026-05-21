import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Sequence, Video } from 'remotion';
import React from 'react';

const COLORS = {
  navy: '#0A1B33',
  gold: '#C5A059',
  beige: '#F5E6CC',
};

const WordPop: React.FC<{ text: string; start: number; duration: number }> = ({ text, start, duration }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [start, start + 10, start + duration - 10, start + duration], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const y = interpolate(frame, [start, start + 15], [20, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ 
      position: 'absolute', 
      top: '20%', 
      left: '10%', 
      opacity, 
      transform: `translateY(${y}px)`,
      color: COLORS.gold,
      fontSize: '80px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      backgroundColor: 'rgba(10, 27, 51, 0.8)',
      padding: '20px 40px',
      borderRadius: '20px',
      border: `4px solid ${COLORS.gold}`,
      fontFamily: 'system-ui'
    }}>
      {text}
    </div>
  );
};

const KeyConcept: React.FC<{ term: string; definition: string; start: number; duration: number }> = ({ term, definition, start, duration }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [start, start + 15, start + duration - 15, start + duration], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const slide = interpolate(frame, [start, start + 20], [-100, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      position: 'absolute',
      bottom: '15%',
      left: '10%',
      right: '10%',
      opacity,
      transform: `translateX(${slide}px)`,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '30px',
      borderRadius: '15px',
      borderLeft: `12px solid ${COLORS.gold}`,
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      fontFamily: 'system-ui'
    }}>
      <h3 style={{ margin: 0, color: COLORS.navy, fontSize: '42px' }}>{term}</h3>
      <p style={{ margin: '10px 0 0 0', color: '#64748b', fontSize: '26px', lineHeight: '1.4' }}>{definition}</p>
    </div>
  );
};

const PearsonTrap: React.FC<{ trap: string; solution: string; start: number; duration: number }> = ({ trap, solution, start, duration }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [start, start + 15, start + duration - 15, start + duration], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      position: 'absolute',
      top: '15%',
      right: '5%',
      width: '400px',
      opacity,
      backgroundColor: '#fee2e2',
      padding: '25px',
      borderRadius: '20px',
      border: '4px solid #ef4444',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui'
    }}>
      <h4 style={{ margin: 0, color: '#991b1b', fontSize: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        ⚠️ TRAMPA PEARSON
      </h4>
      <p style={{ margin: '10px 0', color: '#b91c1c', fontSize: '22px', fontWeight: 'bold' }}>{trap}</p>
      <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', color: COLORS.navy, fontSize: '20px' }}>
        <strong>Solución:</strong> {solution}
      </div>
    </div>
  );
};

export const Chapter2_Enhanced: React.FC<{
  videoUrl: string;
  lessonId: string;
}> = ({ videoUrl, lessonId }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const getOverlays = () => {
    switch (lessonId) {
      case '2.1':
        return (
          <>
            <Sequence from={2 * fps} durationInFrames={4 * fps}>
              <WordPop text="INCAPACIDAD" start={2 * fps} duration={4 * fps} />
            </Sequence>
            <Sequence from={15 * fps} durationInFrames={10 * fps}>
              <KeyConcept 
                term="Own Occupation" 
                definition="Incapacidad para realizar TU profesión. La póliza paga aunque trabajes en otra cosa." 
                start={15 * fps} 
                duration={10 * fps} 
              />
            </Sequence>
            <Sequence from={35 * fps} durationInFrames={10 * fps}>
              <PearsonTrap 
                trap="Any Occupation vs Own Occ" 
                solution="Any Occupation es la más restrictiva. Busca siempre pólizas de Own Occ." 
                start={35 * fps} 
                duration={10 * fps} 
              />
            </Sequence>
            <Sequence from={55 * fps} durationInFrames={8 * fps}>
              <WordPop text="TIME DEDUCTIBLE" start={55 * fps} duration={8 * fps} />
            </Sequence>
          </>
        );
      case '2.4':
        return (
          <>
            <Sequence from={2 * fps} durationInFrames={4 * fps}>
              <WordPop text="SEGURO GRUPAL" start={2 * fps} duration={4 * fps} />
            </Sequence>
            <Sequence from={20 * fps} durationInFrames={10 * fps}>
              <KeyConcept 
                term="Ley COBRA" 
                definition="Continuidad por 18 meses tras despido. Debes pagar el 102% de la prima." 
                start={20 * fps} 
                duration={10 * fps} 
              />
            </Sequence>
            <Sequence from={40 * fps} durationInFrames={10 * fps}>
              <PearsonTrap 
                trap="¿Quién paga COBRA?" 
                solution="El EMPLEADO paga la prima completa + 2% de administración. El patrono NO paga." 
                start={40 * fps} 
                duration={10 * fps} 
              />
            </Sequence>
            <Sequence from={60 * fps} durationInFrames={6 * fps}>
              <WordPop text="CONVERSIÓN 31 DÍAS" start={60 * fps} duration={6 * fps} />
            </Sequence>
          </>
        );
      case '2.3':
        return (
          <>
            <Sequence from={2 * fps} durationInFrames={4 * fps}>
              <WordPop text="HMO VS PPO" start={2 * fps} duration={4 * fps} />
            </Sequence>
            <Sequence from={15 * fps} durationInFrames={12 * fps}>
              <KeyConcept 
                term="HMO (Cerrada)" 
                definition="Requiere Gatekeeper. Menos costo, menos flexibilidad. Solo dentro de la red." 
                start={15 * fps} 
                duration={12 * fps} 
              />
            </Sequence>
            <Sequence from={40 * fps} durationInFrames={12 * fps}>
              <KeyConcept 
                term="PPO (Abierta)" 
                definition="Más flexibilidad. Puedes ir fuera de la red (pagando más). No Gatekeeper." 
                start={40 * fps} 
                duration={12 * fps} 
              />
            </Sequence>
            <Sequence from={65 * fps} durationInFrames={10 * fps}>
              <PearsonTrap 
                trap="¿Cuál requiere Gatekeeper?" 
                solution="HMO SIEMPRE requiere Gatekeeper. PPO NO requiere referido." 
                start={65 * fps} 
                duration={10 * fps} 
              />
            </Sequence>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.beige }}>
      {videoUrl && <Video src={videoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      
      {getOverlays()}

      {/* Marca de Agua */}
      <div style={{ position: 'absolute', top: '40px', right: '40px', opacity: 0.8 }}>
        <img src="https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png" style={{ height: '60px' }} />
      </div>

      {/* Barra de Progreso */}
      <div style={{ 
        position: 'absolute', 
        bottom: '0', 
        left: '0', 
        height: '12px', 
        width: `${(frame / durationInFrames) * 100}%`, 
        backgroundColor: COLORS.gold 
      }} />
    </AbsoluteFill>
  );
};
