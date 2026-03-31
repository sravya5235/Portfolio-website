import { GraduationCap, Award, BookOpen, User, ArrowUpRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Sravya Chowdary";
  }, []);

  return (
    <div className="bg-[#FAFAFB] min-h-screen w-full pb-32">
      {/* Header */}
      <header className="w-full px-4 md:px-8 lg:px-16 py-8 flex justify-between items-center gap-4">
        <div className="flex-1" />
        <p className="font-['Inter'] font-light text-[#1A1A1E] text-xs md:text-sm max-w-[400px] text-right hidden lg:block">
          Creative Developer and Designer, focused on innovative solutions and academic excellence in Computer Science.
        </p>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="font-['Inter'] font-medium text-[#1A1A1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8">
            Behind the code
          </h1>
          <p className="font-['DM_Sans'] text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed font-light mb-12">
            I'm a passionate Computer Science student and creative developer who loves bridging the gap between technical complexity and intuitive design. 
            When I'm not coding, I'm usually exploring new research in AI or deep-diving into the latest design trends.
          </p>

          {/* Scroll Indicator */}
          <button 
            onClick={() => document.getElementById('about-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-4 text-black/30 hover:text-black/70 transition-colors group cursor-pointer"
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

      {/* Main Content Sections - Sequential Format */}
      <section id="about-content" className="px-4 md:px-8 lg:px-16">
          {/* Scroll Animations Wrapper */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="max-w-4xl mx-auto space-y-24 md:space-y-32"
          >
            {/* Experience Section */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <Briefcase className="size-8 text-[#455CE9]" />
                <h2 className="font-['Inter'] text-3xl font-medium text-[#1A1A1E]">Experience</h2>
              </div>
              
              <div className="space-y-8">
                <div className="group border-l-2 border-gray-100 pl-8 relative ml-2">
                  <div className="absolute -left-2 top-0 size-4 bg-white border-2 border-[#455CE9] rounded-full shadow-sm" />
                  <span className="text-[#455CE9] font-medium text-sm md:text-base mb-2 inline-block uppercase tracking-wider">Nov 2024 — Present</span>
                  <h3 className="text-2xl md:text-3xl font-['Inter'] font-medium text-[#1A1A1E] mb-1">Content and Social Media Lead</h3>
                  <p className="text-gray-400 text-lg md:text-xl mb-4">GDG on Campus — BVRIT Narsapur, Telangana</p>
                  <div className="space-y-4 text-gray-500 text-lg leading-relaxed font-light">
                    <p>Managed content creation and social media strategy for the student developer community by designing promotional content, curating technical posts, and increasing engagement across platforms.</p>
                    <p>Promoted workshops, hackathons, and tech talks on web, cloud, and AI, documented events through posts and reels, and strengthened outreach by collaborating with the GDG network to highlight real-world project initiatives.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workshops & Technical Events Section */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <Award className="size-8 text-[#455CE9]" />
                <h2 className="font-['Inter'] text-3xl font-medium text-[#1A1A1E]">Workshops & Events</h2>
              </div>
              
              <div className="bg-white border border-gray-100 p-8 rounded-3xl group hover:border-[#455CE9]/20 transition-all shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#455CE9] text-sm font-semibold mb-2 block tracking-widest uppercase font-['IBM_Plex_Mono']">GDG InnovateX 2025</span>
                    <h3 className="text-2xl md:text-3xl font-['Inter'] font-medium text-[#1A1A1E]">Flagship Hackathon Coordinator</h3>
                  </div>
                  <span className="text-gray-300 text-sm font-medium uppercase font-['IBM_Plex_Mono']">2025</span>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 font-light">
                  Organized and coordinated a large-scale on-campus hackathon focused on innovation and problem-solving. Managed end-to-end execution including registrations, team formation, and evaluations via Hack2Skill, ensuring smooth workflows for participants and selecting top finalists.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#FAFAFB] text-gray-400 rounded-full text-sm border border-gray-50">Hack2Skill</span>
                  <span className="px-3 py-1 bg-[#FAFAFB] text-gray-400 rounded-full text-sm border border-gray-50">Event Operations</span>
                  <span className="px-3 py-1 bg-[#FAFAFB] text-gray-400 rounded-full text-sm border border-gray-50">Technical Management</span>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <GraduationCap className="size-8 text-[#455CE9]" />
                <h2 className="font-['Inter'] text-3xl font-medium text-[#1A1A1E]">Education</h2>
              </div>
              
              <div className="space-y-12">
                <div className="group border-l-2 border-gray-100 pl-8 relative ml-2">
                  <div className="absolute -left-2 top-0 size-4 bg-white border-2 border-[#455CE9] rounded-full shadow-sm" />
                  <span className="text-[#455CE9] font-medium text-sm md:text-base mb-2 inline-block uppercase tracking-wider">2023 — 2027</span>
                  <h3 className="text-2xl md:text-3xl font-['Inter'] font-medium text-[#1A1A1E] mb-1">Bachelor of Technology (B. Tech)</h3>
                  <p className="text-gray-400 text-lg md:text-xl">B V Raju Institute of Technology, Narsapur, Medak, Telangana</p>
                  <div className="mt-4">
                    <span className="px-4 py-1.5 bg-white text-[#455CE9] font-medium rounded-full text-sm border border-gray-100 shadow-sm">CGPA: 8.45 / 10</span>
                  </div>
                </div>

                <div className="group border-l-2 border-gray-100 pl-8 relative ml-2">
                  <div className="absolute -left-2 top-0 size-4 bg-white border-2 border-gray-200 rounded-full group-hover:border-[#455CE9] transition-colors" />
                  <span className="text-gray-300 font-medium text-sm md:text-base mb-2 inline-block uppercase tracking-wider">2021 — 2023</span>
                  <h3 className="text-2xl md:text-3xl font-['Inter'] font-medium text-[#1A1A1E] mb-1">Board of Intermediate Education</h3>
                  <p className="text-gray-400 text-lg md:text-xl">Vinjee Junior College, Telangana, India</p>
                  <div className="mt-4">
                    <span className="px-4 py-1.5 bg-white text-gray-400 rounded-full text-sm border border-gray-100 shadow-sm">Score: 971 / 1000</span>
                  </div>
                </div>

                <div className="group border-l-2 border-gray-100 pl-8 relative ml-2">
                  <div className="absolute -left-2 top-0 size-4 bg-white border-2 border-gray-200 rounded-full group-hover:border-[#455CE9] transition-colors" />
                  <span className="text-gray-300 font-medium text-sm md:text-base mb-2 inline-block uppercase tracking-wider">Completed in 2021</span>
                  <h3 className="text-2xl md:text-3xl font-['Inter'] font-medium text-[#1A1A1E] mb-1">Schooling (SSC)</h3>
                  <p className="text-gray-400 text-lg md:text-xl">Sanghamitra School, Nizampet, Telangana, India</p>
                  <div className="mt-4">
                    <span className="px-4 py-1.5 bg-white text-gray-400 rounded-full text-sm border border-gray-100 shadow-sm">Score: 480 / 500</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements & Certifications Section */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <Award className="size-8 text-[#455CE9]" />
                <h2 className="font-['Inter'] text-3xl font-medium text-[#1A1A1E]">Achievements & Certifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Winners: R&D Showcase", subtitle: "1st Prize, CSE Dept (Smart Drone Surveillance)", color: "text-[#455CE9]" },
                  { title: "NPTEL: Soft Skills", subtitle: "October 2025 Certified" },
                  { title: "NPTEL: Programming in Java", subtitle: "May 2025 Certified" },
                  { title: "NPTEL: Joy of Computing using Python", subtitle: "April 2024 Certified" },
                  { title: "CISCO Networking Academy", subtitle: "CPA: Programming Essentials in C++ (Jan 2025)" },
                  { title: "Deloitte: Data Analytics", subtitle: "Job Simulation Completed (June 2025)" },
                  { title: "Deloitte: Technology Simulation", subtitle: "Job Simulation Completed (July 2025)" }
                ].map((cert, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-gray-100 hover:border-[#455CE9]/20 bg-white shadow-sm transition-all">
                    <h4 className={`text-xl font-['Inter'] font-medium mb-1 ${cert.color || "text-[#1A1A1E]"}`}>{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.subtitle}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Publications Section */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <BookOpen className="size-8 text-[#455CE9]" />
                <h2 className="font-['Inter'] text-3xl font-medium text-[#1A1A1E]">Publications</h2>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-[40px] group border border-gray-100 hover:border-[#455CE9]/20 transition-all shadow-sm">
                <span className="text-[#455CE9] text-sm font-semibold mb-3 block tracking-widest uppercase font-['IBM_Plex_Mono']">ICIRCA 2025 — IEEE Xplore</span>
                <h4 className="text-2xl md:text-4xl font-['Inter'] font-medium text-[#1A1A1E] mb-6 leading-tight">
                  YOLO-Powered Deep Learning Framework for Smart Drone Surveillance in Emergency Rescue Operation
                </h4>
                <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-light">
                  Authored and presented at the 6th International Conference on Inventive Research in Computing Applications. Officially accepted and published in IEEE Xplore, spanning Computer Science, Engineering, and Environmental Science.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a 
                    href="https://doi.org/10.1109/ICIRCA65293.2025.11089883" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#0D0D12] text-white px-8 py-4 rounded-full font-medium hover:bg-[#455CE9] transition-all flex items-center gap-2 group/btn shadow-lg"
                  >
                    View Paper <ArrowUpRight className="size-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
          </motion.div>
          </motion.div>
      </section>

      {/* Final Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 font-['DM_Sans'] text-lg mb-8 uppercase tracking-widest">Always Learning</p>
          <h2 className="font-['Inter'] text-4xl md:text-6xl text-[#1A1A1E] font-medium mb-12 leading-tight tracking-tight">
            Interested in collaborating or 
            <br className="hidden md:block" /> 
            viewing my research?
          </h2>
          <a href="mailto:sravya5235@gmail.com" className="bg-[#455CE9] text-white px-12 py-5 rounded-full text-xl hover:scale-105 transition-transform inline-block shadow-lg">
            Let's talk
          </a>
        </div>
      </section>
    </div>
  );
}
