// ProfileSkills.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineEvents = [
  { title: 'HTML, CSS, JavaScript 기반 반응형 웹 제작 및 UI 구현', period: '2025.08 ~ 2025.10' },
  { title: 'Premiere Pro와 After Effects로 영상 편집 및 모션 그래픽 기초', period: '2025.07 ~ 2025.08' },
  { title: 'Photoshop과 Illustrator를 활용한 UI/UX 시각 디자인 연습', period: '2025.06 ~ 2025.07' },
];

const skillsData = [
  {
    category: 'Frontend',
    list: [
      { title: 'HTML5', desc: '시멘틱 태그와 구조적 마크업 작성 경험', level: 90 },
      { title: 'CSS3', desc: 'Flex/Grid 기반 레이아웃과 반응형 웹 구현', level: 85 },
      { title: 'JavaScript', desc: 'DOM 조작, 이벤트 처리, 비동기 통신 경험', level: 80 },
      { title: 'React', desc: '컴포넌트 기반 UI 및 상태 관리 경험', level: 50 },
      { title: 'Next.js', desc: 'React 기반 프레임워크, SSR/SSG 지원 및 SEO 최적화 경험', level: 50 },
    ],
  },
  {
    category: 'Backend & Database',
    list: [
      { title: 'Node.js', desc: 'Express 서버 경험', level: 30 },
      { title: 'Python', desc: '간단한 자동화 스크립트 경험', level: 30 },
      { title: 'MySQL', desc: '기초 CRUD 경험', level: 0 },
    ],
  },
  {
    category: 'Design Tools',
    list: [
      { title: 'Photoshop', desc: '이미지 편집 및 디자인 경험', level: 20 },
      { title: 'Illustrator', desc: '벡터 디자인 및 로고 제작 경험', level: 20 },
      { title: 'PremierePro', desc: '영상 편집 경험', level: 65 },
      { title: 'AfterEffects', desc: '모션 그래픽 경험', level: 60 },
    ],
  },
  {
    category: 'Soft Skills',
    list: [
      { title: 'Adaptability', desc: '새로운 환경과 도구에 적응 경험', level: 70 },
      { title: 'Teamwork', desc: '팀 프로젝트에서 협업 경험', level: 30 },
      { title: 'Problem Solving', desc: '문제 분석과 해결 경험', level: 75 },
    ],
  },
];

const videoSkills = ['PremierePro', 'AfterEffects'];

function ProfileSkills() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSkill, setModalSkill] = useState(null);
  const [progress, setProgress] = useState(0);

  const tagline = '사용자 경험을 고민하며 반응형 웹과 UI를 구현하는 프론트엔드 개발자';

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
    const timer = setInterval(() => {
      setTypingIndex((prev) => (prev < tagline.length ? prev + 1 : prev));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const openModal = (skill) => {
    setModalSkill(skill);
    setProgress(0);
    setModalOpen(true);
    setTimeout(() => setProgress(skill.level), 100);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSkill(null);
    setProgress(0);
  };

  // ⭐ ESC 키로 닫기 기능 추가
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && closeModal();
    if (modalOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalOpen]);

  return (
    <main className="pt-32 sm:pt-40 md:pt-28 px-6 bg-gray-50 dark:bg-gray-900">
      {/* Profile + Tagline */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-center md:text-left">
        <div className="relative w-36 h-36 md:w-40 md:h-40">
          <img src="projects/images/프로필사진1.jpg" alt="프로필" className="w-full h-full object-cover rounded-xl" />
          <img
            src="projects/images/프로필사진2.jpg"
            alt="hover 프로필"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 hover:opacity-100 transition"
          />
        </div>
        <p className="text-gray-700 dark:text-gray-300 max-w-md overflow-hidden text-lg leading-relaxed">
          {tagline.slice(0, typingIndex)}
        </p>
      </section>

      {/* Timeline + Skills */}
      <section className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="flex-1 relative mb-12 md:mb-0">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full rounded" />
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6 w-full md:w-1/2 ${
                i % 2 === 0 ? 'left-0' : 'left-1/2'
              } transition transform hover:-translate-y-1 hover:scale-105`}
            >
              <h3 className="text-yellow-400 font-semibold text-lg mb-1">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.period}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex-1 flex flex-col gap-4">
          {skillsData.map((category, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-center text-yellow-400 text-xl font-bold mb-3">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.list.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1 rounded-lg cursor-pointer text-black hover:scale-105 transition ${
                      videoSkills.includes(skill.title)
                        ? 'bg-pink-300 hover:bg-pink-400'
                        : 'bg-yellow-200 hover:bg-yellow-400'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(skill);
                    }}
                  >
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Modal (ESC / 배경 클릭 닫기 + 박스 사이즈 조정) */}
      {modalOpen && modalSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl relative shadow-lg transition-all duration-300 transform scale-100 hover:scale-105"
            style={{
              width: '85%',
              maxWidth: videoSkills.includes(modalSkill.title) ? '480px' : '520px', // ⭐ 영상은 살짝 작게
            }}
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않게
          >
            <button className="absolute top-2 right-3 text-xl font-bold" onClick={closeModal}>
              ✕
            </button>
            <h4 className="text-yellow-400 text-xl font-bold mb-2">{modalSkill.title}</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{modalSkill.desc}</p>

            {videoSkills.includes(modalSkill.title) && (
              <video
                src={`/videos/${
                  modalSkill.title === 'PremierePro'
                    ? 'billboard_top1_2010_2021'
                    : '헬로우모션그래픽'
                }.mp4`}
                controls
                className="w-full rounded mb-3"
              />
            )}

            <div className="w-full bg-gray-300 rounded h-4">
              <div
                className="bg-yellow-400 h-4 rounded transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">{progress}%</span>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProfileSkills;
