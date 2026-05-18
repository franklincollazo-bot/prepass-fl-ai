import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';

export const DynamicTitle: React.FC<{
  text: string;
  color?: string;
}> = ({ text, color = "#C5A059" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const translateY = interpolate(frame, [0, 15], [20, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      opacity,
      transform: `translateY(${translateY}px)`,
      fontSize: '80px',
      fontWeight: 'bold',
      color,
      fontFamily: 'system-ui',
      textShadow: '0 4px 10px rgba(0,0,0,0.2)',
      marginBottom: '40px'
    }}>
      {text}
    </div>
  );
};

export const KeyTerm: React.FC<{
  term: string;
  definition: string;
}> = ({ term, definition }) => {
  const frame = useCurrentFrame();
  
  const width = interpolate(frame, [30, 45], [0, 600], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      position: 'absolute',
      left: '100px',
      top: '300px',
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      width: `${width}px`,
      borderLeft: '10px solid #C5A059',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <div style={{ padding: '30px', minWidth: '600px' }}>
        <h3 style={{ margin: 0, color: '#0A1B33', fontSize: '40px' }}>{term}</h3>
        <p style={{ margin: '10px 0 0 0', color: '#64748b', fontSize: '24px' }}>{definition}</p>
      </div>
    </div>
  );
};
