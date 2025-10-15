import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroSplit.css';

export default function HeroSplit() {
  const leftRef = useRef(null);
  const [typingIndex, setTypingIndex] = useState(0);

  const tagline = "안녕하세요, 프론트엔드 신입개발자 지원바라는 김규범입니다";

  // 타이핑 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setTypingIndex(prev => (prev < tagline.length ? prev + 1 : prev));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // 마우스/터치에 따라 left width 변경
  const handleMove = e => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    if (leftRef.current) {
      leftRef.current.style.width = `${(clientX / window.innerWidth) * 100}%`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <section className="side">
      <div id="left-side" ref={leftRef}>
        <h1 className="title fancy">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {tagline.slice(0, typingIndex)}
          </motion.span>
        </h1>
      </div>
      <div id="right-side">
        <h1 className="title fancy">
          HTML, CSS, JavaScript부터 React까지 구현합니다
        </h1>
      </div>
    </section>
  );
}
