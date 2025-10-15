import ProjectSlider from '../components/ProjectSlider';

const projectsData = [
  { title: "Interactive Gallery", image: "/images/proj1.png", github: "https://github.com/gb24404156-boop/Interactive-Gallery", demo: "#" },
  { title: "UI 컴포넌트 콜렉션", image: "/images/proj2.png", github: "https://github.com/gb24404156-boop/STYLE-CARD", demo: "#" },
  { title: "Generative Lyrics Video", image: "/images/proj3.png", github: "https://github.com/gb24404156-boop/Lyrics-Video", demo: "#" },
];

export default function Projects() {
  return (
    <main className="pt-32 sm:pt-40 md:pt-48 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>
      <ProjectSlider projects={projectsData} />
    </main>
  );
}
