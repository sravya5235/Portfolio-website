import { Link } from 'react-router';
import { Home, MoveLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="bg-[#000000] min-h-screen w-full flex flex-col items-center justify-center text-white font-['Inter'] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-400">
          Oops! This page doesn't exist.
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-12 text-lg">
          It looks like you found a glitch in the realm. Let's get you back to where the creative magic happens.
        </p>

        <Link 
          to="/" 
          className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-xl"
        >
          <MoveLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Decorative floating icon */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 opacity-10 hidden lg:block"
      >
        <Home size={120} />
      </motion.div>
    </div>
  );
}
