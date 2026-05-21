import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Sequence, Video, Audio } from 'remotion';
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

export const Lesson1_6_Enhanced: React.FC<{
  videoUrl: string;
}> = ({ videoUrl }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.beige }}>
      <Video src={videoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      
      {/* Overlays Dinámicos - Ajustar segundos a frames (segundos * fps) */}
      <Sequence from={2 * fps} durationInFrames={3 * fps}>
        <WordPop text="ÉTICA Y LEYES" start={2 * fps} duration={3 * fps} />
      </Sequence>

      <Sequence from={15 * fps} durationInFrames={4 * fps}>
        <WordPop text="TWISTING" start={15 * fps} duration={4 * fps} />
      </Sequence>

      <Sequence from={25 * fps} durationInFrames={4 * fps}>
        <WordPop text="CHURNING" start={25 * fps} duration={4 * fps} />
      </Sequence>

      <Sequence from={35 * fps} durationInFrames={4 * fps}>
        <WordPop text="SLIDING" start={35 * fps} duration={4 * fps} />
      </Sequence>

      <Sequence from={45 * fps} durationInFrames={4 * fps}>
        <WordPop text="REBATING" start={45 * fps} duration={4 * fps} />
      </Sequence>

      <Sequence from={55 * fps} durationInFrames={4 * fps}>
        <WordPop text="COERCIÓN" start={55 * fps} duration={4 * fps} />
      </Sequence>

      {/* Marca de Agua Maná */}
      <div style={{ position: 'absolute', top: '40px', right: '40px', opacity: 0.8 }}>
        <img src="https://sc01.alicdn.com/kf/Af5c3d3a85ba44d069606268e530cafc8D.png" style={{ height: '60px' }} />
      </div>

      {/* Barra de Progreso Minimalista */}
      <div style={{ 
        position: 'absolute', 
        bottom: '0', 
        left: '0', 
        height: '10px', 
        width: `${(frame / (120 * fps)) * 100}%`, // Asumiendo 2 mins
        backgroundColor: COLORS.gold 
      }} />
    </AbsoluteFill>
  );
};
