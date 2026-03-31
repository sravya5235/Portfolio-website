import { Github, Linkedin, MoveUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';

export default function SkillsPage() {
  useEffect(() => {
    document.title = "Skills | Sravya Chowdary";
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen w-full pb-32 overflow-hidden text-white font-['Inter'] selection:bg-white/20">
      {/* Top Navigation Bar */}
      <nav className="w-full px-4 md:px-8 lg:px-16 py-6 flex justify-between items-center relative z-20">
        <div className="flex-1" />
        <p className="font-light text-gray-400 text-xs md:text-sm max-w-[400px] text-right hidden lg:block tracking-wide">
          Focused on bridging the gap between innovative AI research and intuitive user experiences.
        </p>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-semibold leading-tight mb-6 tracking-tight">
            Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Technologies</span>
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A curated selection of technical proficiencies, frameworks, and core competencies driving my development process.
          </p>

          {/* Scroll Indicator */}
          <button 
            onClick={() => document.getElementById('skills-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex flex-col items-center gap-3 text-white/30 hover:text-white/70 transition-colors cursor-pointer"
          >
            <div className="w-8 h-12 border border-white/20 rounded-full flex justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-white/40 rounded-full"
              />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Explore skills</span>
          </button>
        </motion.div>
        
        {/* Soft atmospheric glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white rounded-full blur-[200px] opacity-[0.02] pointer-events-none" />
      </section>

      {/* Glassmorphism Dashboard Grid */}
      <section id="skills-dashboard" className="py-4 px-4 md:px-8 lg:px-16 relative z-10">
          {/* Staggered Grid Container */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-[auto]"
          >
            {skillsData.map((skill) => (
              <GlassCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
                className={skill.className}
                icons={skill.icons}
                tags={skill.tags}
              />
            ))}
          </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center relative z-10">
        {/* Soft glow behind cta */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />

        <p className="text-[#A1A1AA] text-sm uppercase tracking-[0.2em] font-medium mb-5">
          Open to opportunities
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-10">
          Got a project in mind?
        </h2>

        <a
          href="mailto:sravya5235@gmail.com"
          className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 backdrop-blur-xl text-white font-medium text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.04)] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
        >
          <span>Let&apos;s Talk</span>
          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <MoveUpRight className="w-4 h-4 text-black" strokeWidth={2} />
          </span>
        </a>
      </section>

      {/* Global Footer (Format matches HomePage but adapted for Dark Theme) */}
      <footer className="mt-32 py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col justify-between overflow-hidden relative border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10 w-full">
          <div>
            <p className="font-['Inter'] font-light text-[#A1A1AA] text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 tracking-tight">
              where complexity meets clarity
            </p>
            <h3 className="font-['Inter'] font-bold text-white text-5xl md:text-7xl lg:text-[100px] tracking-tighter leading-none">
              Sravyaaa
            </h3>
          </div>

          {/* Social Links & Decorative Arrow Circle */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 md:gap-6">
              <a href="https://github.com/sravya5235" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10">
                <Github size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/sravya-chowdary0505/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
            </div>
            <a href="mailto:sravya5235@gmail.com" className="bg-white hover:bg-gray-200 rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 transition-colors group shadow-xl">
              <MoveUpRight className="text-[#000000] w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


function GlassCard({
  title,
  description,
  icons,
  tags,
  className = ""
}: {
  title: string;
  description: string;
  icons?: React.ReactNode[];
  tags?: string[];
  className?: string;
}) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className={`bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-[20px] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:border-white/20 transition-all duration-300 flex flex-col group relative overflow-hidden ${className}`}
    >
      
      {/* Subtle ambient glow in the top corner of each card */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none"></div>

      {/* Icons Row */}
      {icons && icons.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-8">
          {icons.map((icon, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:border-white/20 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(255,255,255,0.02)] relative z-10"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      )}

      {/* Title & Desc */}
      <div className="relative z-10 mt-auto">
        <h3 className="font-semibold text-white text-[17px] mb-3 tracking-wide">
          {title}
        </h3>
        <p className="font-normal text-[#A1A1AA] text-[14px] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[12px] text-gray-300 font-medium whitespace-nowrap group-hover:bg-white/10 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
