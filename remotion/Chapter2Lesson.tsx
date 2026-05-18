import { AbsoluteFill, Series, Audio, Video } from 'remotion';
import { DynamicTitle, KeyTerm } from './Components';
import React from 'react';

export const Chapter2Lesson: React.FC<{
  chapter: string;
  title: string;
  bg: string;
}> = ({ chapter, title, bg }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: bg }}>
      <Series>
        {/* Intro Section: 0s - 10s */}
        <Series.Sequence durationInFrames={300}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontSize: '40px', color: '#0A1B33', marginBottom: '20px' }}>{chapter}</div>
            <DynamicTitle text={title} />
          </div>
        </Series.Sequence>

        {/* Core Concept: 10s - 40s */}
        <Series.Sequence durationInFrames={900}>
          <div style={{ padding: '100px' }}>
            <KeyTerm 
              term="Deducible" 
              definition="La cantidad fija que el asegurado debe pagar de su bolsillo antes de que la aseguradora empiece a cubrir los gastos." 
            />
          </div>
        </Series.Sequence>

        {/* Add more sequences as the script evolves */}
      </Series>
    </AbsoluteFill>
  );
};
