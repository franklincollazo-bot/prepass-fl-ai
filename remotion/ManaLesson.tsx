import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';

export const ManaLesson: React.FC<{
  title: string;
  subtitle: string;
  color: string;
  bg: string;
}> = ({ title, subtitle, color, bg }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: bg, justifyContent: 'center', alignItems: 'center', fontFamily: 'system-ui' }}>
      <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
        <h1 style={{ color: color, fontSize: '100px', marginBottom: '20px' }}>{title}</h1>
        <h2 style={{ color: '#0A1B33', fontSize: '50px', fontWeight: 'normal' }}>{subtitle}</h2>
      </div>
      
      {/* Barra de progreso animada */}
      <div style={{ 
        position: 'absolute', 
        bottom: '100px', 
        height: '10px', 
        width: `${(frame / 150) * 100}%`, 
        backgroundColor: color,
        borderRadius: '5px'
      }} />
    </AbsoluteFill>
  );
};
