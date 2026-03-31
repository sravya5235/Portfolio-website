import { ArrowUpRight, MoveUpRight, ArrowRightCircle, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import imgFrame15 from "../../assets/Gemini_Generated_Image_mwp8bimwp8bimwp8.png";
import { ContactSection } from "../components/ContactSection";
import { projectsData } from "../../data/projects";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Sravya Chowdary";
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden">
        <img
          src={imgFrame15}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Header */}
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-8 flex justify-between items-center gap-4">
          <div className="flex-1" />
          <p className="font-['Inter'] font-light text-white text-xs md:text-sm max-w-[400px] text-right hidden lg:block">
            Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
          </p>
        </div>

        {/* Hero Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 mb-20"
        >
          <h1 className="font-['Inter'] font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Creative Developer
            <br />& Designer
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 right-8 md:right-16 z-10">
          <button 
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 md:p-6 transition-all duration-300 group cursor-pointer border border-white/10"
          >
            <ArrowUpRight className="text-white/40 group-hover:text-white group-hover:rotate-45 w-12 h-12 md:w-16 md:h-16 transition-all duration-300" />
            <span className="sr-only">Scroll to About</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="bg-white py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <div>
              <p className="font-['DM_Sans'] font-medium text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
                Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I'm always learning and exploring new ideas.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <p className="font-['DM_Sans'] font-light text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
                The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.
              </p>

              <Link to="/skills" className="inline-flex items-center gap-3 group w-fit">
                <span className="font-['DM_Sans'] text-[#1A1A1E] text-lg sm:text-xl md:text-2xl lg:text-3xl">More about me</span>
                <div className="bg-[#0D0D12] rounded-full p-2 group-hover:scale-110 transition-transform shadow-sm">
                  <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 border-y border-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
            <h2 className="font-['Inter'] font-medium text-[#1A1A1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Impressive Works
            </h2>

            <p className="font-['DM_Sans'] font-light text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
              HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
            </p>
          </div>

          {/* Projects Grid */}
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

          {/* Explore Button */}
          <div className="flex justify-center">
            <a
              href="https://github.com/sravya5235"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#aeaeae] rounded-full px-8 py-3 flex items-center gap-3 hover:bg-black hover:text-white transition-colors group"
            >
              <div className="w-2.5 h-2.5 bg-black rounded-full group-hover:bg-white transition-colors" />
              <span className="font-['Inter'] text-xl">Explore more</span>
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#FAFAFB] py-16 md:py-24 px-4 md:px-8 lg:px-16 border-t border-gray-100 flex flex-col justify-between overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10 w-full">
          <div>
            <p className="font-['Inter'] font-light text-gray-400 text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 tracking-tight">
              where complexity meets clarity
            </p>
            <h3 className="font-['Inter'] font-bold text-[#1A1A1E] text-5xl md:text-7xl lg:text-[100px] tracking-tighter leading-none">
              Sravyaaa
            </h3>
          </div>

          {/* Social Links & Decorative Arrow Circle */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 md:gap-6">
              <a href="https://github.com/sravya5235" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1E] hover:text-[#455CE9] transition-colors p-2 border border-gray-200 rounded-full">
                <Github size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/sravya-chowdary0505/" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1E] hover:text-[#455CE9] transition-colors p-2 border border-gray-200 rounded-full">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
            </div>
            <a href="mailto:sravya5235@gmail.com" className="bg-[#0D0D12] hover:bg-[#1A1A20] rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 transition-colors group shadow-xl">
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
          <ArrowRightCircle strokeWidth={1.5} className="text-[#1A1A1E] w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform shrink-0 mt-0.5 md:mt-1 cursor-pointer" />
          <span className="font-['Inter'] text-[#1A1A1E] text-xl md:text-2xl lg:text-3xl font-normal group-hover:text-[#455CE9] transition-colors">{title}</span>
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
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1A1A1E] font-medium border-b border-black/10 pb-0.5 hover:border-black transition-colors">
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
