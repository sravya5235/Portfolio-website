import { Link, useLocation } from 'react-router';
import { Home, FolderOpen, Lightbulb, Github, Mail, FileText, ExternalLink, Linkedin, User } from 'lucide-react';
import imgSkuyxzCollectionOpenSea from "../../assets/37dba3980256ea1568959889e8f827371aedb061.png";

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#0D0D12]/90 backdrop-blur-xl rounded-[20px] sm:rounded-[24px] px-2 sm:px-3 md:px-5 py-2 md:py-3 flex gap-1 sm:gap-2 md:gap-3 items-center shadow-2xl border border-white/10 max-w-[95vw] sm:max-w-[90vw] overflow-x-auto ring-1 ring-white/10">
      <Link
        to="/"
        className={`size-[45px] md:size-[50px] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
          isActive('/') ? 'bg-[#E5E5EB] shadow-inner' : 'bg-[#1F1F26] hover:bg-[#2D2D35]'
        }`}
      >
          <Home className={`size-4 sm:size-5 md:size-6 ${isActive('/') ? 'text-black' : 'text-gray-300'}`} />
      </Link>

      <Link
        to="/projects"
        className={`size-[45px] md:size-[50px] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
          isActive('/projects') ? 'bg-[#E5E5EB] shadow-inner' : 'bg-[#1F1F26] hover:bg-[#2D2D35]'
        }`}
      >
          <FolderOpen className={`size-4 sm:size-5 md:size-6 ${isActive('/projects') ? 'text-black' : 'text-gray-300'}`} />
      </Link>

      <Link
        to="/skills"
        className={`size-[45px] md:size-[50px] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
          isActive('/skills') ? 'bg-[#E5E5EB] shadow-inner' : 'bg-[#1F1F26] hover:bg-[#2D2D35]'
        }`}
      >
          <Lightbulb className={`size-4 sm:size-5 md:size-6 ${isActive('/skills') ? 'text-black' : 'text-gray-300'}`} />
      </Link>

      <Link
        to="/about"
        className={`size-[40px] sm:size-[45px] md:size-[50px] rounded-full overflow-hidden flex items-center justify-center transition-all flex-shrink-0 border-2 ${
          isActive('/about') ? 'border-[#E5E5EB]' : 'border-transparent bg-[#1F1F26] hover:opacity-80'
        }`}
      >
        <img src={imgSkuyxzCollectionOpenSea} alt="About Me" className="size-full object-cover" />
      </Link>

      <div className="w-[1px] h-4 sm:h-6 bg-white/10 mx-1 flex-shrink-0" />

      <a
        href="mailto:sravya5235@gmail.com"
        className="size-[45px] md:size-[50px] rounded-full bg-[#1F1F26] hover:bg-[#2D2D35] flex items-center justify-center transition-all flex-shrink-0"
      >
        <Mail className="size-4 sm:size-5 md:size-6 text-gray-400" />
      </a>

      <a
        href="https://github.com/sravya5235"
        target="_blank"
        rel="noopener noreferrer"
        className="size-[45px] md:size-[50px] rounded-full bg-[#1F1F26] hover:bg-[#2D2D35] flex items-center justify-center transition-all flex-shrink-0"
      >
        <Github className="size-4 sm:size-5 md:size-6 text-gray-400" />
      </a>

      <a
        href="https://www.linkedin.com/in/sravya-chowdary0505/"
        target="_blank"
        rel="noopener noreferrer"
        className="size-[45px] md:size-[50px] rounded-full bg-[#1F1F26] hover:bg-[#2D2D35] flex items-center justify-center transition-all flex-shrink-0"
      >
        <Linkedin className="size-4 sm:size-5 md:size-6 text-gray-400" />
      </a>

      <a
        href="/Sravya_Chowdary.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="size-[45px] md:size-[50px] rounded-full bg-[#1F1F26] hover:bg-[#2D2D35] flex items-center justify-center transition-all flex-shrink-0"
      >
        <ExternalLink className="size-4 sm:size-5 md:size-6 text-gray-400" />
      </a>
    </nav>
  );
}