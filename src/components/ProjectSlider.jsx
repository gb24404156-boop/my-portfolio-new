// src/components/ProjectSlider.jsx
import { useState } from 'react';

export default function ProjectSlider({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projects[currentSlide];

  return (
    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* 이미지 */}
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-4" />

      {/* 슬라이드 버튼 */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
        onClick={() => setCurrentSlide((currentSlide - 1 + projects.length) % projects.length)}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
        onClick={() => setCurrentSlide((currentSlide + 1) % projects.length)}
      >
        ▶
      </button>

      {/* 프로젝트 정보 */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          {project.github && (
            <li>
              GitHub: <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{project.github}</a>
            </li>
          )}
          {project.demo && project.demo !== "#" && (
            <li>
              Demo: <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{project.demo}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
