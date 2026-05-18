import { AbsoluteFill, Series, Video, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { DynamicTitle, KeyTerm } from './Components';
import React from 'react';

export const IntroLesson: React.FC<{
  videoUrl: string;
  bg: string;
}> = ({ videoUrl, bg }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  return (
    <AbsoluteFill style={{ backgroundColor: bg }}>
      {/* El video del Avatar HeyGen de fondo */}
      {videoUrl && <Video src={videoUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      
      <Series>
        {/* HOOK: 0s - 20s */}
        <Series.Sequence durationInFrames={600}>
          <div style={{ position: 'absolute', top: '100px', width: '100%', textAlign: 'center' }}>
            <DynamicTitle text="EL TIEMPO ES DINERO" />
          </div>
        </Series.Sequence>

        {/* CORE: 20s - 140s */}
        <Series.Sequence durationInFrames={3600} offset={600}>
          <div style={{ padding: '50px' }}>
            {/* Estos términos aparecerán en momentos específicos del audio */}
            <Series>
              <Series.Sequence durationInFrames={600}>
                <KeyTerm 
                  term="Eficiencia AI" 
                  definition="Destilamos 500 páginas en conceptos quirúrgicos." 
                />
              </Series.Sequence>
              <Series.Sequence durationInFrames={600} offset={300}>
                <KeyTerm 
                  term="STARR" 
                  definition="Sharing, Transfer, Avoidance, Retention, Reduction." 
                />
              </Series.Sequence>
              <Series.Sequence durationInFrames={600} offset={600}>
                <KeyTerm 
                  term="Doble Aleatoriedad" 
                  definition="Entrenamiento real para vencer a Pearson VUE." 
                />
              </Series.Sequence>
            </Series>
          </div>
        </Series.Sequence>

        {/* OUTRO: 140s - 160s */}
        <Series.Sequence durationInFrames={600} offset={4200}>
          <div style={{ position: 'absolute', bottom: '150px', width: '100%', textAlign: 'center' }}>
            <DynamicTitle text="VAMOS POR ESA LICENCIA" color="#C5A059" />
          </div>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
