import { Composition } from 'remotion';
import { IntroLesson } from './IntroLesson';
import { Chapter2Lesson } from './Chapter2Lesson';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="IntroLesson"
        component={IntroLesson}
        durationInFrames={5400} // 3 minutos aprox
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoUrl: "/videos/heygen_intro.mp4",
          bg: "#F5E6CC",
        }}
      />
      <Composition
        id="Chapter2-1"
        component={Chapter2Lesson}
        durationInFrames={5400} // 3 minutos aprox
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          chapter: "Capítulo 2",
          title: "Gastos Médicos Mayores",
          bg: "#F5E6CC",
        }}
      />
    </>
  );
};
