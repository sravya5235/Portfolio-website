import { ArrowUpRight, MoveUpRight, ArrowRightCircle, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from "../components/ContactSection";
import { projectsData } from "../../data/projects";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Sravya Chowdary";
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Header */}
      <header className="w-full px-4 md:px-8 lg:px-16 py-8 flex justify-between items-center gap-4">
        <div className="flex-1" />
        <p className="font-['Inter'] font-light text-black text-xs md:text-sm max-w-[400px] text-right hidden lg:block">
          Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
        </p>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="font-['Inter'] font-medium text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-tight max-w-5xl">
            welcome to my realm of wild projects and awesome creations
          </h1>

          {/* Scroll Indicator */}
          <button 
            onClick={() => document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 flex items-center gap-4 text-black/40 hover:text-black transition-colors group cursor-pointer"
          >
            <div className="w-10 h-16 border-2 border-black/10 rounded-full flex justify-center p-2">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-black/40 rounded-full"
              />
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] font-['DM_Sans']">Scroll to explore</span>
          </button>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16 mb-16"
          >
            {projectsData.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                href={project.href}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col justify-between overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10 w-full">
          <div>
            <p className="font-['Inter'] font-light text-gray-600 text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 tracking-tight">
              where complexity meets clarity
            </p>
            <h3 className="font-['Inter'] font-bold text-black text-5xl md:text-7xl lg:text-[100px] tracking-tighter leading-none">
              Sravyaaa
            </h3>
          </div>

          {/* Social Links & Decorative Arrow Circle */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 md:gap-6">
              <a href="https://github.com/sravya5235" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#455CE9] transition-colors p-2 border border-gray-200 rounded-full">
                <Github size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/sravya-chowdary0505/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#455CE9] transition-colors p-2 border border-gray-200 rounded-full">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
            </div>
            <a href="mailto:sravya5235@gmail.com" className="bg-black hover:bg-[#1a1a1a] rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 transition-colors group shadow-2xl">
              <MoveUpRight className="text-white w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  image: string;
  title: string;
  description?: string;
  techStack?: string[];
  href: string;
  imageClassName?: string;
}

function ProjectCard({ image, title, description, techStack, href, imageClassName = "object-cover" }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-6 group/card">
      <a href={href} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full hover:scale-105 transition-transform duration-500 ${imageClassName}`}
        />
      </a>

      <div className="flex flex-col gap-3 pl-1">
        <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 md:gap-4">
          <ArrowRightCircle strokeWidth={1.5} className="text-black w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform shrink-0 mt-0.5 md:mt-1 cursor-pointer" />
          <span className="font-['Inter'] text-black text-xl md:text-2xl lg:text-3xl font-normal group-hover:text-[#455CE9] transition-colors">{title}</span>
        </a>

        {description && (
          <p className="font-['DM_Sans'] text-gray-600 text-sm md:text-base leading-relaxed pl-9 md:pl-12 pr-4">
            {description}
          </p>
        )}

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pl-9 md:pl-12 mt-2">
            {techStack.map((tech, idx) => (
              <span key={idx} className="font-['IBM_Plex_Mono'] text-xs md:text-sm bg-gray-100 text-[#444] px-3 py-1 rounded-full border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mt-2 pl-9 md:pl-12">
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black font-medium border-b border-black/10 pb-0.5 hover:border-black transition-colors">
            Source Code <ArrowUpRight className="size-4" />
          </a>
          <button className="inline-flex items-center gap-2 text-gray-400 font-medium border-b border-transparent pb-0.5 hover:text-black hover:border-black transition-colors">
            Live Demo <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded uppercase">Soon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
