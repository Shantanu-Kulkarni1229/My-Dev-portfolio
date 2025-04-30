import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiCode, HiOutlineDesktopComputer, HiLightBulb, HiOutlineCloud } from 'react-icons/hi';

const Home = ({ darkMode }: { darkMode: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const homeRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (homeRef.current) {
        const { left, top } = homeRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top
        });
      }
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const domains = [
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'App Developer',
    'AI Enthuciast',
    '6x Hackathons & Ideathons Winner',
    'CSE Graduate'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: [0, 0.3, 0],
      transition: { duration: 3, ease: 'easeInOut', repeat: Infinity }
    }
  };

  // Colors that work well in both dark and light themes
  const accentColors = {
    primary: darkMode ? 'from-teal-400 to-indigo-500' : 'from-teal-500 to-indigo-600',
    secondary: darkMode ? 'from-amber-300 to-rose-400' : 'from-amber-400 to-rose-500',
    tertiary: darkMode ? 'from-emerald-400 to-sky-400' : 'from-emerald-500 to-sky-500'
  };

  const fadeInUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7, ease: 'easeOut' }
    })
  };

  return (
    <div 
      ref={homeRef}
      className={`relative p-6 md:p-10 min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500 overflow-hidden`}
    >
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract geometric shapes for unique look */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            initial={{ 
              rotate: Math.random() * 180,
              scale: 0.8,
              opacity: 0
            }}
            animate={{ 
              rotate: Math.random() * 360,
              scale: [0.8, 1.2, 0.8],
              opacity: [0, 0.07, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className={`absolute ${
              i % 5 === 0 ? 'w-96 h-96 rounded-3xl bg-gradient-to-br ' + accentColors.primary : 
              i % 4 === 0 ? 'w-80 h-80 rounded-full bg-gradient-to-r ' + accentColors.secondary : 
              i % 3 === 0 ? 'w-64 h-64 rotate-45 bg-gradient-to-tl ' + accentColors.tertiary :
              i % 2 === 0 ? 'w-72 h-72 rounded-tr-full rounded-bl-full bg-gradient-to-br ' + accentColors.primary :
              'w-60 h-60 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r ' + accentColors.secondary
            } blur-3xl -z-10`}
          />
        ))}
        
        {/* Floating bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0.5,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0.5, Math.random() * 0.5 + 0.8, 0.5],
              opacity: [0, 0.08, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-96 h-96 bg-teal-500' : 
              i % 2 === 0 ? 'w-64 h-64 bg-indigo-400' : 
              'w-80 h-80 bg-amber-400'
            } blur-3xl -z-10`}
          />
        ))}
      </div>

      {/* Interactive mouse follower glow */}
      <motion.div 
        className="pointer-events-none absolute w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Subtle dot grid background */}
      <div 
        className={`absolute inset-0 ${darkMode ? 'opacity-5' : 'opacity-10'}`} 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#888' : '#333'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Main content container */}
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left side - main hero content */}
          <div className="md:col-span-3 text-left">
            {/* Animated greeting */}
            <motion.div variants={itemVariants} className="overflow-hidden">
              <motion.div className="relative">
                <motion.h1 
                  className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  Hello, I'm{' '}
                  <motion.span 
                    className="inline-block relative"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 0.3 
                      } 
                    }}
                  >
                    <span className={`bg-gradient-to-r ${accentColors.primary} bg-clip-text text-transparent`}>
                      Shantanu Kulkarni 
                    </span>
                    <motion.span 
                      className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-lg blur-sm"
                      variants={glowVariants}
                    />
                  </motion.span>
                </motion.h1>
              </motion.div>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div 
              variants={itemVariants}
              className={`relative text-2xl md:text-3xl font-medium mb-8 h-12 md:h-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Typewriter
                  options={{
                    strings: domains,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    cursor: '|'
                  }}
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-2 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.05, 0],
                  transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
                }}
              >
                <div className={`w-full h-full bg-gradient-to-r ${accentColors.primary} rounded-md blur-md`} />
              </motion.div>
            </motion.div>

            {/* Bio with refined animations */}
            <motion.div variants={containerVariants} className="mb-10 space-y-5">
              {[
                "I specialize in building dynamic web experiences, intuitive dashboards, and solving complex problems with efficient code and design",
                "With a strong foundation in Web Development, App Development , UIUX Designing , Artificial Intellegience , Data Strcutures & Data analysis, I bring ideas to life through technology.",
                "I lead projects, collaborate in teams, and constantly explore the latest trends to deliver impactful digital solutions.",
                "From crafting seamless UIs to analyzing deep datasets, my journey is about creating, learning, and evolving in the tech world."
                
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  className="overflow-hidden relative"
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <motion.p 
                    className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} relative z-10`}
                  >
                    {text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons with enhanced animations */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: darkMode ? '0 0 15px rgba(13, 148, 136, 0.5)' : '0 0 20px rgba(13, 148, 136, 0.3)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-3 rounded-lg font-medium text-lg relative overflow-hidden ${
                  darkMode 
                    ? 'bg-gradient-to-r from-teal-600 to-indigo-600 text-white' 
                    : 'bg-gradient-to-r from-teal-500 to-indigo-500 text-white'
                } shadow-lg`}
              >
                <span className="relative z-10">Let's Build Something</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-600 opacity-0"
                  whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                />
                <motion.span 
                  className="absolute -inset-1 rounded-lg opacity-0 bg-gradient-to-r from-teal-500/50 to-indigo-500/50 blur-md"
                  whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: darkMode ? '0 0 15px rgba(75, 85, 99, 0.5)' : '0 0 20px rgba(75, 85, 99, 0.2)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-3 rounded-lg font-medium text-lg flex items-center justify-center gap-2 relative overflow-hidden ${
                  darkMode 
                    ? 'bg-gray-800 text-white border border-gray-700' 
                    : 'bg-white text-gray-800 border border-gray-200'
                } shadow-lg`}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -3, transition: { repeat: Infinity, repeatType: 'reverse', duration: 0.6 } }}
                >
                  <FaFileDownload />
                </motion.span>
                <span>View Resume</span>
                <motion.span 
                  className={`absolute inset-0 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} opacity-0`}
                  whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                />
              </motion.a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { icon: <FaGithub size={20} />, label: "GitHub", href: "#" },
                { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "#" }
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ 
                    y: -3, 
                    scale: 1.1,
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-200 hover:text-white border border-gray-700' 
                      : 'bg-white text-gray-700 hover:text-gray-900 border border-gray-200'
                  } shadow-sm text-sm font-medium transition-colors`}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Statistics and highlight card */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className={`rounded-2xl p-6 ${
                darkMode 
                  ? 'bg-gray-800/60 border border-gray-700' 
                  : 'bg-white/80 border border-gray-200'
              } backdrop-blur-lg shadow-xl`}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.h3 
                className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                What I Bring to the Table
              </motion.h3>

              {/* Key expertise areas */}
              <div className="space-y-4">
                {[
                  { 
                    icon: <HiCode className={`text-2xl ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />, 
                    title: "Full-Stack Expertise", 
                    description: "Building robust frontends and scalable backends with clean, modular code." 
                  },
                  { 
                    icon: <HiOutlineDesktopComputer className={`text-2xl ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} />, 
                    title: "Smart UI/UX", 
                    description: "Designing interactive, user-centric interfaces with smooth transitions and accessibility in mind." 
                  },
                  { 
                    icon: <HiLightBulb className={`text-2xl ${darkMode ? 'text-amber-400' : 'text-amber-500'}`} />, 
                    title: "AI & Data-Driven Thinking", 
                    description: "Applying ML, DS, and visualization tools to craft intelligent, data-backed solutions." 
                  },
                  { 
                    icon: <HiOutlineCloud className={`text-2xl ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />, 
                    title: "Tech Leadership & Innovation", 
                    description: "Leading teams, executing projects, and adopting next-gen tools like 3JS, Hono, and Prisma." 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.15) }}
                  >
                    <div className={`p-2 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.title}</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div 
                className="mt-6 pt-6 border-t border-dashed grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {[
                  { value: "1+", label: "Years Experience" },
                  { value: "10+", label: "Projects Completed" },
                  { value: "5+", label: "Happy Clients" },
                  { value: "5+", label: "Technologies Mastered" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 + (index * 0.1) }}
                  >
                    <h5 className={`text-xl font-bold ${
                      darkMode ? 'text-gradient bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent' : 
                      'text-gradient bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent'
                    }`}>{stat.value}</h5>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech stack icons */}
        <motion.div
          className="mt-14 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p 
            className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            TECHNOLOGIES I WORK WITH
          </motion.p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Flutter', 'Figma','Python'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + (index * 0.1), duration: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.1,
                  boxShadow: darkMode ? '0 4px 12px rgba(13, 148, 136, 0.15)' : '0 4px 12px rgba(13, a48, 136, 0.1)',
                  transition: { duration: 0.2 } 
                }}
                className={`px-4 py-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                    : 'bg-white text-gray-700 border border-gray-200'
                } shadow-sm text-sm font-medium`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="mt-10 text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
        >
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex flex-col items-center`}>
            <motion.span
              animate={{
                opacity: [0.7, 1, 0.7],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              Scroll to explore my work
            </motion.span>
            <motion.div 
              className={`w-6 h-10 rounded-full border-2 ${
                darkMode ? 'border-gray-500' : 'border-gray-400'
              } mt-2 flex justify-center p-1`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.7 }}
            >
              <motion.div 
                className={`w-1.5 h-2 rounded-full ${
                  darkMode ? 'bg-gray-400' : 'bg-gray-600'
                }`}
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
            <motion.div
              className={`h-10 w-px ${darkMode ? 'bg-gray-600' : 'bg-gray-400'} mt-2`}
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;