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
  return (
    <div style={{ position: 'absolute', top: '20%', left: '10%', opacity, color: COLORS.gold, fontSize: '80px', fontWeight: 'bold', backgroundColor: 'rgba(10, 27, 51, 0.8)', padding: '20px 40px', borderRadius: '20px', border: `4px solid ${COLORS.gold}`, fontFamily: 'system-ui' }}>
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
  return (
    <div style={{ position: 'absolute', bottom: '15%', left: '10%', right: '10%', opacity, backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '30px', borderRadius: '15px', borderLeft: `12px solid ${COLORS.gold}`, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', fontFamily: 'system-ui' }}>
      <h3 style={{ margin: 0, color: COLORS.navy, fontSize: '42px' }}>{term}</h3>
      <p style={{ margin: '10px 0 0 0', color: '#64748b', fontSize: '26px', lineHeight: '1.4' }}>{definition}</p>
    </div>
  );
};

export const Chapter1_Enhanced: React.FC<{ videoUrl: string; lessonId: string; }> = ({ videoUrl, lessonId }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const getOverlays = () => {
    switch (lessonId) {
      case '1.0':
        return (
          <>
            <Sequence from={2 * fps} durationInFrames={6 * fps}><WordPop text="LA NUEVA ERA" start={2 * fps} duration={6 * fps} /></Sequence>
            <Sequence from={15 * fps} durationInFrames={10 * fps}><KeyConcept term="TIEMPO ES DINERO" definition="PrePass FL AI está diseñado para que apruebes en el menor tiempo posible." start={15 * fps} duration={10 * fps} /></Sequence>
          </>
        );
      case '1.1':
        return (
          <>
            <Sequence from={5 * fps} durationInFrames={7 * fps}><WordPop text="STARR" start={5 * fps} duration={7 * fps} /></Sequence>
            <Sequence from={15 * fps} durationInFrames={20 * fps}><KeyConcept term="GESTIÓN DE RIESGO" definition="Sharing, Transfer, Avoidance, Retention, Reduction." start={15 * fps} duration={20 * fps} /></Sequence>
          </>
        );
      case '1.2':
        return (
          <>
            <Sequence from={5 * fps} durationInFrames={10 * fps}><WordPop text="PODERES" start={5 * fps} duration={10 * fps} /></Sequence>
            <Sequence from={20 * fps} durationInFrames={20 * fps}><KeyConcept term="AUTORIDAD" definition="Expresa, Implícita y Aparente." start={20 * fps} duration={20 * fps} /></Sequence>
          </>
        );
      case '1.6':
        return (
          <>
            <Sequence from={5 * fps} durationInFrames={10 * fps}><WordPop text="ÉTICA" start={5 * fps} duration={10 * fps} /></Sequence>
            <Sequence from={20 * fps} durationInFrames={20 * fps}><KeyConcept term="TWISTING" definition="Reemplazo externo engañoso con el fin de ganar comisión." start={20 * fps} duration={20 * fps} /></Sequence>
          </>
        );
      default: return null;
    }
  };

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.beige }}>
      {videoUrl && <Video src={videoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      {getOverlays()}
      <div style={{ position: 'absolute', bottom: '0', left: '0', height: '12px', width: `${(frame / durationInFrames) * 100}%`, backgroundColor: COLORS.gold }} />
    </AbsoluteFill>
  );
};
