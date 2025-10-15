import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''} bg-white text-black`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold tracking-tight">My Portfolio</h1>
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/projects" className="hover:text-blue-500 transition">Projects</Link>
          <Link to="/skills" className="hover:text-blue-500 transition">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </nav>
        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-8 py-4 space-y-4 text-lg font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="block">Projects</Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="block">Skills</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
