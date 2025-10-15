// Hero.jsx 파일 수정
import { motion } from 'framer-motion';

function Hero() {
  return (
    // ⭐ 수정: 높이를 h-[130vh]로 대폭 늘려 하단 흰색 영역을 완전히 덮고,
    // 음수 마진을 mt-[-15rem]로 더 올려 콘텐츠의 위치를 조정합니다.
    <section className="h-[130vh] bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center text-center px-4 pt-20 mt-[-15rem]">
      
      {/* 제목 부분 (마진 유지) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        <motion.p className="mb-10">프론트엔드 / 웹퍼플리셔</motion.p>
        <motion.p className="mb-10">신입개발자</motion.p>
        
        {/* 김규범과 아래 문구 사이 간격 유지 */}
        <motion.p className="mb-8">김규범</motion.p>
      </motion.div>

      {/* 설명 부분 (스타일 유지) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 max-w-xl whitespace-nowrap flex justify-center"
      >
        HTML, CSS, JavaScript 기반의 웹 퍼블리싱부터 React 기반의 인터랙티브 UI까지&nbsp;&nbsp;&nbsp;구현합니다.
      </motion.p>
      
    </section>
  );
}

export default Hero;