import { Composition } from 'remotion';
import { IntroLesson } from './IntroLesson';
import { Chapter2Lesson } from './Chapter2Lesson';
import { Lesson1_6_Enhanced } from './Lesson1_6_Enhanced';
import { Chapter2_Enhanced } from './Chapter2_Enhanced';
import { Chapter1_Enhanced } from './Chapter1_Enhanced';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Chapter1-Enhanced"
        component={Chapter1_Enhanced}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          lessonId: "1.0",
          videoUrl: "", 
        }}
      />
      <Composition
        id="Chapter2-Enhanced"
        component={Chapter2_Enhanced}
        durationInFrames={3600} // 2 minutos
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          lessonId: "2.1",
          videoUrl: "", // Proporcionar mp4
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
