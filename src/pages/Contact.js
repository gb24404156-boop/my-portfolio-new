// Contact.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  'projects/images/미리보기1.jpg',
  'projects/images/미리보기2.jpg',
  'projects/images/미리보기3.jpg',
  'projects/images/미리보기4.jpg',
  'projects/images/미리보기5.jpg',
  'projects/images/미리보기6.jpg',
  'projects/images/미리보기7.jpg',
  'projects/images/미리보기8.jpg',

];

function Contact() {
  const [introIndex, setIntroIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const introText = "프론트엔드 개발 신입, 새로운 기술 배우는 건 좋아하고 즐기는 타입! 관심 있으면 연락 주세요 😉";

  // 타이핑 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setIntroIndex(prev => (prev < introText.length ? prev + 1 : prev));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-32 sm:pt-40 md:pt-48 px-6 bg-gray-50 dark:bg-gray-900">
      {/* Intro */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Contact
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
        {introText.slice(0, introIndex)}
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        {/* 연락처 카드 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul className="space-y-3 text-gray-800 dark:text-gray-200 text-base md:text-lg">
            <li>📧 이메일: <a href="mailto:gb6502@naver.com" className="text-blue-600 hover:underline">gb6502@naver.com</a></li>
            <li>📞 전화번호: <a href="tel:010-2440-4156" className="text-blue-600 hover:underline">010-2440-4156</a></li>
            <li>💻 GitHub: <a href="https://github.com/gb24404156-boop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gb24404156-boop</a></li>
            <li>🔗 LinkedIn: <a href="#" target="_blank" className="text-blue-600 hover:underline">추후 추가 예정</a></li>
          </ul>
        </div>

        {/* 기술 스택 박스 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-wrap gap-3 justify-center">
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-wrap gap-3 justify-center">
  {['HTML','CSS','JavaScript','React','jQuery','After Effects'].map((tech, i) => (
    <span 
      key={i} 
      className="bg-yellow-300 text-black px-2 py-1 rounded text-base font-medium shadow-sm inline-block"
    >
      {tech}
    </span>
  ))}
</div>

        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {/* Contact CTA */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Let's Collaborate!</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">프로젝트나 협업 아이디어가 있다면 언제든 편하게 연락 주세요.</p>
          <button className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition" onClick={() => setModalOpen(true)}>Contact Me</button>
        </div>

        {/* Portfolio Highlights */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Portfolio Highlights</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">React, HTML/CSS, JS 프로젝트 경험과 인터랙션 디자인 사례를 볼 수 있습니다.</p>
         <Link to="/projects" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">
  View Portfolio
</Link>
        </div>

        {/* Follow Me */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Follow Me</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">포트폴리오 프로젝트를 GitHub에서 확인 가능합니다.</p>
          <a href="https://github.com/gb24404156-boop/portfolio" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">GitHub link</a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full relative">
            <span className="absolute top-2 right-3 text-xl cursor-pointer" onClick={() => setModalOpen(false)}>✕</span>
            <div className="text-center mb-4">
              <img src="projects/images/푸들.jpg" alt="프로필사진" className="w-24 h-24 rounded-full mx-auto mb-2"/>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">김규범</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">프론트엔드 신입 개발자 | HTML, CSS, JS, React 경험</p>
            </div>
            <div className="relative">
              <img src={slides[currentSlide]} alt="프로젝트" className="w-full h-64 md:h-80 object-cover rounded mb-4"/>
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition" onClick={() => setCurrentSlide((currentSlide-1+slides.length)%slides.length)}>◀</button>
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition" onClick={() => setCurrentSlide((currentSlide+1)%slides.length)}>▶</button>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">GitHub Projects</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-base md:text-lg">
                <li><a href="https://github.com/gb24404156-boop/Interactive-Gallery" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Interactive Data Visualization Gallery</a></li>
                <li><a href="https://github.com/gb24404156-boop/STYLE-CARD" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UI 컴포넌트 콜렉션</a></li>
                <li><a href="https://github.com/gb24404156-boop/Lyrics-Video" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Generative Lyrics Video</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;
