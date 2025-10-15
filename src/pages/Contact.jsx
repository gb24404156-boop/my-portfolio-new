import { useEffect, useState } from 'react';
import ProjectSlider from '../components/ProjectSlider';

const projectsData = [
  { title: "Interactive Gallery", image: "/images/proj1.png", github: "https://github.com/gb24404156-boop/Interactive-Gallery", demo: "#" },
  { title: "UI 컴포넌트 콜렉션", image: "/images/proj2.png", github: "https://github.com/gb24404156-boop/STYLE-CARD", demo: "#" },
  { title: "Generative Lyrics Video", image: "/images/proj3.png", github: "https://github.com/gb24404156-boop/Lyrics-Video", demo: "#" },
];

export default function Contact() {
  const [introIndex, setIntroIndex] = useState(0);

  const introText = "프론트엔드 개발 신입, 새로운 기술 배우는 건 좋아하고 즐기는 타입! 관심 있으면 연락 주세요 😉";

  useEffect(() => {
    const timer = setInterval(() => {
      setIntroIndex(prev => (prev < introText.length ? prev + 1 : prev));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-32 sm:pt-40 md:pt-48 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">Contact</h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-12">{introText.slice(0, introIndex)}</p>

      {/* 스킬 태그 */}
      <div className="flex flex-wrap gap-2 justify-center mb-16">
        {['HTML','CSS','JavaScript','React','jQuery','After Effects'].map((tech, i) => (
          <span key={i} className="bg-yellow-300 text-black px-3 py-1 rounded text-sm">{tech}</span>
        ))}
      </div>

      {/* 프로젝트 미리보기 */}
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Project Preview</h3>
      <ProjectSlider projects={projectsData} />
    </main>
  );
}
