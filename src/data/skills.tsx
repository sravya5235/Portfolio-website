import { 
  Github, 
  Linkedin, 
  Mail, 
  Zap,
  Globe,
  Database,
  Cloud,
  Terminal,
  Code2,
  Server,
  Layers,
  Smartphone,
  GitBranch,
  Figma,
  TestTube,
  Wand2,
  Cpu,
  MonitorPlay
} from 'lucide-react';

// Custom simple icon for palette
export function PaletteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  className?: string;
  icons?: React.ReactNode[];
  tags?: string[];
}

export const skillsData: SkillItem[] = [
  {
    id: "frontend",
    title: "Front-End Development",
    description: "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
    className: "lg:col-span-2",
    icons: [
      <span key="h5" className="text-[#E34F26] font-bold text-lg">H5</span>,
      <span key="js" className="text-[#F7DF1E] font-bold text-lg">JS</span>,
      <span key="ts" className="text-[#3178C6] font-bold text-lg">TS</span>,
      <Globe key="globe" className="text-[#61DAFB] size-6" />,
      <MonitorPlay key="monitor" className="text-purple-400 size-6" />
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    description: "Proficient in problem-solving and applying languages to implement efficient data structures and algorithms.",
    icons: [
      <span key="py" className="text-[#3776AB] font-bold text-lg">Py</span>,
      <span key="cpp" className="text-[#00599C] font-bold text-lg">C++</span>,
      <Terminal key="terminal" className="text-gray-300 size-6" />
    ]
  },
  {
    id: "backend",
    title: "Back-End Development",
    description: "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    icons: [
      <Server key="server" className="text-[#339933] size-6" />,
      <span key="exp" className="text-white font-bold text-sm">EXP</span>,
      <span key="dj" className="text-[#092E20] font-bold text-sm">DJ</span>
    ]
  },
  {
    id: "styling",
    title: "Styling & Design",
    description: "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
    icons: [
      <span key="c3" className="text-[#1572B6] font-bold text-lg">C3</span>,
      <span key="tw" className="text-[#38B2AC] font-bold text-lg">TW</span>,
      <PaletteIcon key="palette" />,
      <Layers key="layers" className="text-pink-400 size-6" />
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
    icons: [
      <Database key="db" className="text-[#4479A1] size-6" />,
      <span key="mdb" className="text-[#47A248] font-bold text-sm">MDB</span>,
      <Cloud key="cloud" className="text-[#FFCA28] size-6" />
    ]
  },
  {
    id: "core-cs",
    title: "Core Computer Science Concepts",
    description: "Demonstrating a strong foundation in core computer science principles, including problem-solving and system design.",
    className: "lg:col-span-2",
    tags: [
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "System Design",
      "DSA"
    ],
    icons: [<Cpu key="cpu" className="text-white size-6" />]
  },
  {
    id: "web-animations",
    title: "Web Animations",
    description: "Creating seamless animations and transitions to enhance user engagement and interactivity.",
    icons: [
      <Wand2 key="wand" className="text-[#FF4154] size-6" />,
      <span key="gsap" className="text-green-400 font-bold text-sm">GSAP</span>
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Creating cross-platform mobile apps with sleek designs and robust functionality.",
    icons: [
      <Smartphone key="smartphone" className="text-[#61DAFB] size-6" />
    ]
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    description: "Experienced in deploying and managing applications using modern cloud platforms and tools.",
    icons: [
      <span key="docker" className="text-[#2496ED] font-bold text-xs">DOCKER</span>,
      <Cloud key="aws" className="text-[#FF9900] size-6" />,
      <span key="vercel" className="text-white font-bold text-xs">VERCEL</span>
    ]
  },
  {
    id: "version-control",
    title: "Version Control & Collaboration",
    description: "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
    icons: [
      <Github key="github" className="text-white size-6" />,
      <GitBranch key="gitbranch" className="text-[#F05032] size-6" />
    ]
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    className: "lg:col-span-1",
    icons: [
      <Figma key="figma" className="text-[#F24E1E] size-6" />
    ],
    tags: ["Prototyping", "Wireframing"]
  },
  {
    id: "testing",
    title: "Testing & Debugging",
    description: "Ensuring code quality and reliability through rigorous testing and debugging processes.",
    icons: [
      <TestTube key="testtube" className="text-[#C21325] size-6" />
    ]
  },
  {
    id: "personal-dev",
    title: "Personal Development",
    description: "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
    className: "md:col-span-2 lg:col-span-3",
    tags: [
      "Time Management",
      "Problem Solving",
      "Communication",
      "Leadership"
    ]
  }
];
