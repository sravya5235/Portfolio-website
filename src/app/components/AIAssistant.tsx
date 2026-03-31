import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, RotateCcw, Bot, Sparkles, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CREATIVE_PROMPT, RECRUITER_PROMPT } from '../../data/ai-context';
import { skillsData } from '../../data/skills';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

// Custom "S" Anagram Icon Component
const SAnagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M70 25C70 25 65 20 50 20C35 20 30 25 30 35C30 45 40 50 50 50C60 50 70 55 70 65C70 75 65 80 50 80C35 80 30 75 30 75"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
  </svg>
);

const TypewriterMarkdown = ({ text, speed = 10 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <div className="prose prose-invert prose-xs max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {displayedText}
      </ReactMarkdown>
    </div>
  );
};

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SkillChart = ({ category }: { category: string }) => {
  // Map our skillsData categories for visualization
  const categories = ['AI & ML', 'Full Stack', 'Cloud & DevOps', 'Databases', 'UI/UX'];
  
  const data = categories.map(cat => ({
    subject: cat,
    A: skillsData.some(s => s.tags?.includes(cat)) ? 90 + Math.random() * 10 : 70 + Math.random() * 20,
    fullMark: 100
  }));

  return (
    <div className="w-full h-48 mt-2 bg-black/40 rounded-xl border border-white/10 p-2 shadow-inner">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#ffffff22" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff66', fontSize: 9 }} />
          <Radar
            name="Sravya"
            dataKey="A"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.5}
            animationDuration={1500}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CTAViewer = ({ type }: { type: string }) => {
  return (
    <div className="w-full mt-3 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Sparkles size={16} className="text-blue-400" />
        </div>
        <h4 className="text-white font-semibold text-sm">Professional Connect</h4>
      </div>
      <p className="text-xs text-gray-400 mb-4 font-light leading-relaxed">
        Sravya is currently open to innovative collaborations & AI/ML opportunities. Give her a shout!
      </p>
      <div className="grid grid-cols-2 gap-2">
        <a 
          href="mailto:sravya5235@gmail.com"
          className="flex items-center justify-center gap-2 py-2 px-3 bg-white text-black rounded-xl text-[10px] font-bold hover:bg-gray-100 transition-all active:scale-95"
        >
          Send Email
        </a>
        <a 
          href="https://github.com/sravya5235"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-3 bg-white/10 text-white rounded-xl text-[10px] font-bold hover:bg-white/20 border border-white/5 transition-all active:scale-95"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

const DroneRadar = () => {
  const blips = [
    { id: 1, x: '30%', y: '40%', delay: 0 },
    { id: 2, x: '70%', y: '60%', delay: 1 },
    { id: 3, x: '50%', y: '20%', delay: 0.5 },
  ];

  return (
    <div className="w-full aspect-square max-w-[200px] mx-auto mt-3 relative bg-black/60 rounded-full border border-blue-500/30 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.2)]">
      {/* Scanning Beam */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 origin-center bg-gradient-to-r from-blue-500/20 to-transparent z-10"
        style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}
      />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 border border-blue-500/10 rounded-full" />
      <div className="absolute inset-0 border-[0.5px] border-blue-500/5 rounded-full scale-75" />
      <div className="absolute inset-0 border-[0.5px] border-blue-500/5 rounded-full scale-50" />
      <div className="absolute h-full w-[0.5px] bg-blue-500/10 left-1/2 -translate-x-1/2" />
      <div className="absolute w-full h-[0.5px] bg-blue-500/10 top-1/2 -translate-y-1/2" />

      {/* Target Blips */}
      {blips.map(blip => (
        <motion.div
          key={blip.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: blip.delay,
            repeatDelay: 2
          }}
          className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] z-20"
          style={{ left: blip.x, top: blip.y }}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-tighter text-blue-400/60 font-bold">
        YOLO_SCAN_ACTIVE
      </div>
    </div>
  );
};

const MatrixOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] pointer-events-none"
    />
  );
};

export function AIAssistant() {
  const initialMessages: Message[] = [
    { role: 'assistant', content: "Hey! I'm Sravya's digital assistant. Want to know about her innovative projects or tech stack? Ask away!" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [persona, setPersona] = useState<'creative' | 'recruiter'>('creative');
  const [activeEffect, setActiveEffect] = useState<'none' | 'matrix' | 'glitch'>('none');
  const [currentStatus, setCurrentStatus] = useState("Online");
  const [narratedIds, setNarratedIds] = useState<Set<string>>(new Set());
  const [suggestion, setSuggestion] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);

  const creativeQuestions = [
    "Show me the Drone Radar",
    "What's your wild side?",
    "Tell me about your logic",
    "What else can you do?"
  ];

  const recruiterQuestions = [
    "Summarize Technical ROI",
    "Can I see her Resume?",
    "Availability & Contact",
    "Professional Proficiencies"
  ];

  useEffect(() => {
    setSuggestedQuestions(persona === 'creative' ? creativeQuestions : recruiterQuestions);
  }, [persona]);

  const keywords = ['yolo drone', 'vitalsgraph', 'skills', 'contact', 'hire', 'resume', 'cv', 'projects', 'about'];

  const handleInputChange = (val: string) => {
    setInput(val);
    if (!val) {
      setSuggestion('');
      return;
    }
    const match = keywords.find((k: string) => k.startsWith(val.toLowerCase()) && k !== val.toLowerCase());
    setSuggestion(match ? val + match.slice(val.length) : '');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && suggestion) {
      e.preventDefault();
      setInput(suggestion);
      setSuggestion('');
    }
  };
  useEffect(() => {
    const handleNarration = (e: any) => {
      const { id, message } = e.detail;
      if (narratedIds.has(id)) return;

      setNarratedIds(prev => new Set(prev).add(id));
      setMessages(prev => [...prev, { role: 'assistant', content: message }]);
      if (!isOpen) setIsOpen(true);
    };

    window.addEventListener('sravya_narrate', handleNarration);
    return () => window.removeEventListener('sravya_narrate', handleNarration);
  }, [narratedIds, isOpen]);

  const statuses = [
    "Scanning Sravya's Innovations...",
    "Analyzing Drone Sensor Data...",
    "Optimizing Prompt Vectors...",
    "Querying VitalsGraph Brain...",
    "Decompressing Creative Logic...",
    "Structuring Skill Matrices...",
    "Sourcing Career Intel..."
  ];

  // Live Brain Status: Cycle through statuses during loading
  useEffect(() => {
    if (!isLoading) {
      setCurrentStatus("Online");
      return;
    }
    
    let i = 0;
    const interval = setInterval(() => {
      setCurrentStatus(statuses[i % statuses.length]);
      i++;
    }, 2000);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Persistence: Load history on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('sravya_portfolio_chat');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error('Failed to parse chat history', e);
      }
    }
  }, []);

  // Persistence: Save history whenever messages change
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('sravya_portfolio_chat', JSON.stringify(messages));
    }
  }, [messages]);

  // Ambient Theme Syncing
  useEffect(() => {
    const root = document.documentElement;
    if (persona === 'recruiter') {
      root.style.setProperty('--primary', '#10b981'); // Emerald
      root.style.setProperty('--ring', '#10b981');
    } else {
      root.style.setProperty('--primary', '#455ce9'); // Creative Blue
      root.style.setProperty('--ring', '#455ce9');
    }
  }, [persona]);

  const resetChat = () => {
    setMessages(initialMessages);
    localStorage.removeItem('sravya_portfolio_chat');
    setInput('');
    setIsLoading(false);
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Command Interception
    const cmd = input.trim().toLowerCase();
    if (cmd === '/matrix') {
      setActiveEffect('matrix');
      setInput('');
      return;
    }
    if (cmd === '/reset') {
      setActiveEffect('none');
      setInput('');
      return;
    }
    if (cmd === '/glitch') {
      setActiveEffect('glitch');
      setTimeout(() => setActiveEffect('none'), 2000);
      setInput('');
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const systemMessage = { 
      role: 'system', 
      content: `${persona === 'creative' ? CREATIVE_PROMPT : RECRUITER_PROMPT}\n\nCURRENT CONTEXT: The user is currently viewing the page: ${location.pathname}. Feel free to reference this naturally in your response if relevant.` 
    };

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [systemMessage, ...newMessages] 
        }),
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      const assistantMessage = data.choices?.[0]?.message?.content || "Sorry, I hit a snag. Ask me again!";
      
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "My systems are a bit glitchy right now. Try again in a sec!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChipClick = (question: string) => {
    setInput(question);
    // Use a small timeout to ensure the state update is processed
    setTimeout(() => {
      handleSend();
    }, 0);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-[9999] w-14 h-14 md:w-16 md:h-16 bg-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white/40 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-8 h-8 md:w-10 md:h-10 text-white"
            >
              <SAnagramIcon />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing Aura */}
        <div className="absolute inset-0 rounded-full bg-white/5 animate-ping pointer-events-none" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.8, x: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-44 md:bottom-24 right-4 md:right-6 z-[9999] w-[calc(100vw-32px)] sm:w-[400px] h-[450px] md:h-[500px] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-['Inter']"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm tracking-tight">Sravya's Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5 min-h-[14px]">
                    <span className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-green-500'} transition-colors`} />
                    <span className={`text-[10px] uppercase tracking-widest font-medium ${isLoading ? 'text-blue-300' : 'text-gray-400'}`}>
                      {currentStatus}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => setPersona(persona === 'creative' ? 'recruiter' : 'creative')}
                  className="flex items-center gap-3 p-1 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:border-white/20 transition-all select-none"
                >
                  <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-tighter uppercase transition-all ${persona === 'creative' ? 'bg-white text-black' : 'text-gray-500'}`}>
                    Creative
                  </div>
                  <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-tighter uppercase transition-all ${persona === 'recruiter' ? 'bg-white text-black' : 'text-gray-500'}`}>
                    Recruiter
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={resetChat}
                  title="Reset Chat"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <RotateCcw size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 shrink-0 mt-1">
                      <Bot size={14} className="text-white/70" />
                    </div>
                  )}
                    <div 
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-white text-black font-medium rounded-tr-none' 
                          : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <>
                          {idx === messages.length - 1 ? (
                            <TypewriterMarkdown text={msg.content.replace(/\[SHOW_CHART:.*?\]/g, '')} />
                          ) : (
                            <div className="prose prose-invert prose-xs max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {msg.content.replace(/\[SHOW_CHART:.*?\]/g, '')}
                              </ReactMarkdown>
                            </div>
                          )}
                          {msg.content.includes('[SHOW_CHART:') && (
                            <SkillChart category={msg.content.match(/\[SHOW_CHART:(.*?)\]/)?.[1] || 'ALL'} />
                          )}
                          {msg.content.includes('[SHOW_CTA:') && (
                            <CTAViewer type={msg.content.match(/\[SHOW_CTA:(.*?)\]/)?.[1] || 'CONTACT'} />
                          )}
                          {msg.content.includes('[SHOW_WIDGET:DRONE]') && (
                            <DroneRadar />
                          )}
                        </>
                      ) : (
                        msg.content
                      )}
                    </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                      <User size={14} className="text-black" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
                    <Bot size={14} className="text-white/70" />
                  </div>
                  <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5">
                    <Loader2 size={16} className="text-white/50 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Question Chips */}
            {!isLoading && (
              <div className="px-4 py-2 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                {suggestedQuestions.map((q, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleChipClick(q)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-[11px] text-gray-400 hover:text-white transition-all"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <form 
              onSubmit={handleSend}
              className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-2"
            >
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                />
                {suggestion && (
                  <div className="absolute inset-0 px-4 py-3 pr-12 text-sm text-white/20 pointer-events-none whitespace-pre">
                    {suggestion}
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1.5 p-1.5 bg-white text-black rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-all active:scale-90"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Effects Area */}
      <AnimatePresence>
        {activeEffect === 'matrix' && <MatrixOverlay />}
        {activeEffect === 'glitch' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0, 0.4, 0] }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-white pointer-events-none mix-blend-overlay"
          />
        )}
      </AnimatePresence>
    </>
  );
}
