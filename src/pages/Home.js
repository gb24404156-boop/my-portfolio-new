import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        안녕하세요, 프론트엔드 신입개발자 / 웹퍼블리셔 <br />
        취업준비중인 김규범입니다.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 max-w-xl"
      >
        HTML, CSS, JavaScript 기반의 웹 퍼블리싱부터 React 기반의 인터랙티브 UI까지 구현합니다.
      </motion.p>
    </section>
  );
}

export default Hero;
