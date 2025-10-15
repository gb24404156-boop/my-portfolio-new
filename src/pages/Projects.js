import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Interactive Data Visualization Gallery',
    description:
      '실시간 데이터 시각화가 필요했지만 DOM 업데이트와 API 처리 문제에 직면했습니다. JavaScript와 Chart.js를 활용해 데이터를 실시간으로 처리하고 시각화 기능을 구현했으며, 그 결과 사용자들이 즉시 데이터를 확인할 수 있는 대시보드를 완성했습니다.',
    tech: ['JavaScript', 'Chart.js'],
    link: 'projects/Interactive Data Visualization Gallery.html',
    github: 'https://github.com/gb24404156-boop/Interactive-Gallery',
    image: 'projects/images/미리보기1.jpg',
  },
  {
    title: '모듈형 UI 컴포넌트 갤러리',
    description:
      '디자인 시스템 구축 중 컴포넌트 재사용과 스타일 일관성이 문제였습니다. HTML과 CSS로 모듈화된 UI 컴포넌트를 설계하고 스타일을 관리했으며, 덕분에 전체 UI의 일관성과 재사용성을 확보했습니다.',
    tech: ['HTML', 'CSS'],
    link: 'projects/모듈형 UI 컴포넌트 갤러리.html',
    github: 'https://github.com/gb24404156-boop/STYLE-CARD',
    image: 'projects/images/미리보기9.jpg',
  },
  {
    title: 'Generative Lyrics Video',
    description:
      '반복적인 영상 시퀀스 제작에 시간이 많이 걸리는 문제가 있었습니다. JavaScript로 타이핑 효과와 비디오 시퀀스를 자동화하여 프로젝트 기획부터 구현까지 담당했고, 영상 제작 효율과 완성도를 높였습니다.',
    tech: ['JS', 'Animation'],
    link: 'projects/리릭비디오/리릭비디오.html',
    github: 'https://github.com/gb24404156-boop/Lyrics-Video',
    image: 'projects/images/미리보기5.jpg',
  },
  {
    title: '가상 브랜드 레스토랑 웹사이트',
    description:
      '예약 폼과 메뉴 슬라이더 구현에서 사용자 경험이 복잡할 수 있었습니다. HTML, CSS, JS로 인터랙티브 기능을 개발하고 전반적인 UI/UX를 구성했으며, 사용자 편의성을 높인 웹사이트를 완성했습니다.',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'projects/가상레스토랑/index.html',
    github: 'https://github.com/gb24404156-boop/savory--website',
    image: 'projects/images/미리보기2.jpg',
  },
  {
    title: 'Movie Finder',
    description:
      'API 데이터를 표시할 때 정보 접근이 불편했습니다. TMDb API와 JavaScript를 활용해 카드 클릭 시 상세 정보 모달을 구현했고, 사용자들이 쉽게 영화 정보를 탐색할 수 있게 되었습니다.',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'projects/영화검색/영화검색.html',
    github: 'https://github.com/gb24404156-boop/MovieFind',
    image: 'projects/images/미리보기3.jpg',
  },
  {
    title: 'React 카드 매칭게임',
    description:
      '카드 매칭 게임 구현 과정에서 상태 관리와 UI 동기화가 문제였습니다. React를 활용해 카드 상태 관리 및 게임 로직을 개발했고, 사용자 참여도를 높이는 완전한 게임 경험을 제공했습니다.',
    tech: ['React', 'HTML', 'CSS', 'JS'],
    link: 'projects/react.html',
    github: 'https://github.com/gb24404156-boop/React',
    image: 'projects/images/미리보기6.jpg',
  },
];

function Projects() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const tagline = '최근 작업 또는 학습 결과물을 정리했어요.';

  useEffect(() => {
    AOS.init({ duration: 800 });

    // 타이핑 효과
    const typingTimer = setInterval(() => {
      setTypingIndex(prev => (prev < tagline.length ? prev + 1 : prev));
    }, 30);

    // 커서 깜빡임
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-28 px-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        {tagline.slice(0, typingIndex)}
        <span className={`inline-block ml-1 w-1 h-6 bg-gray-800 dark:bg-white ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition text-sm"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border border-yellow-400 text-yellow-600 rounded hover:bg-yellow-100 transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
