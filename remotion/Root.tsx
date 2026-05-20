import { Composition } from 'remotion';
import { IntroLesson } from './IntroLesson';
import { Chapter2Lesson } from './Chapter2Lesson';
import { Lesson1_6_Enhanced } from './Lesson1_6_Enhanced';

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
      <Composition
        id="Lesson1-6"
        component={Lesson1_6_Enhanced}
        durationInFrames={3600} // 2 minutos
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoUrl: "https://app.heygen.com/embeds/4f78d27571724087b35f7714ce9c97ae", // URL Temporal
        }}
      />
    </>
  );
};
