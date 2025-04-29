import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaRegCopyright, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiHeartFill, RiSparkling2Fill, RiMailSendLine } from 'react-icons/ri';
import { TbBrandTypescript, TbBrandReact, TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const currentYear = new Date().getFullYear();
  const controls = useAnimation();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Enhanced floating bubble animation variants
  const bubbleVariants = {
    initial: { y: 0, opacity: 0.2, scale: 1 },
    animate: (i: number) => ({
      y: [0, -15 - i * 5, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  // Stagger animation for footer sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  // Mouse trailer effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: '#github' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#linkedin' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#twitter' }
  ];

  // Footer navigation links
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  // Tech stack
  const techStack = [
    { name: 'TypeScript', icon: <TbBrandTypescript />, color: darkMode ? 'text-blue-400' : 'text-blue-600' },
    { name: 'React', icon: <TbBrandReact />, color: darkMode ? 'text-cyan-400' : 'text-cyan-600' },
    { name: 'Next.js', icon: <TbBrandNextjs />, color: darkMode ? 'text-white' : 'text-black' },
    { name: 'Tailwind', icon: <TbBrandTailwind />, color: darkMode ? 'text-teal-400' : 'text-teal-600' }
  ];

  return (
    <footer className={`relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} transition-colors duration-500 py-12`}>
      {/* Enhanced floating tech bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-8 h-8' : i % 3 === 0 ? 'w-6 h-6' : i % 2 === 0 ? 'w-4 h-4' : 'w-3 h-3'
            } ${
              darkMode 
                ? i % 4 === 0 ? 'bg-purple-500/15' : i % 3 === 0 ? 'bg-blue-500/15' : i % 2 === 0 ? 'bg-cyan-400/15' : 'bg-indigo-300/15'
                : i % 4 === 0 ? 'bg-purple-500/10' : i % 3 === 0 ? 'bg-blue-500/10' : i % 2 === 0 ? 'bg-cyan-400/10' : 'bg-indigo-300/10'
            } blur-sm`}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div 
        className={`absolute inset-0 opacity-30 ${
          darkMode ? 'bg-gradient-to-t from-purple-900/20 to-transparent' : 'bg-gradient-to-t from-blue-100/30 to-transparent'
        }`}
      />

      {/* Main footer content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          {/* Enhanced logo with animated particles */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="relative mb-8 group"
          >
            <motion.div
              className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {"<Portfolio/>"}
              </span>
            </motion.div>
            
            {/* Animated particles around logo on hover */}
            <AnimatePresence>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    x: [0, (i % 2 === 0 ? 1 : -1) * (10 + i * 5)],
                    y: [0, (i % 3 === 0 ? -1 : 1) * (10 + i * 3)]
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 0.5,
                    delay: i * 0.2 
                  }}
                  className={`absolute left-1/2 top-1/2 w-1 h-1 rounded-full ${
                    i % 3 === 0 ? 'bg-purple-500' : i % 2 === 0 ? 'bg-blue-500' : 'bg-cyan-400'
                  } group-hover:opacity-100 opacity-0 transition-opacity duration-300`}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced copyright with heartbeat */}
          <motion.div 
            variants={itemVariants}
            className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-8`}
            whileHover={{ scale: 1.05 }}
          >
            <FaRegCopyright className="mr-1" />
            <span>{currentYear} All rights reserved</span>
            <motion.span 
              className="mx-2 flex"
              animate={{ 
                scale: [1, 1.3, 1], 
                rotate: [0, 0, 10, -10, 0],
                color: darkMode 
                  ? ['#c084fc', '#93c5fd', '#67e8f9', '#c084fc'] 
                  : ['#a855f7', '#3b82f6', '#06b6d4', '#a855f7']
              }}
              transition={{ 
                scale: { duration: 1.2, repeat: Infinity },
                rotate: { duration: 2, repeat: Infinity, delay: 0.6 },
                color: { duration: 3, repeat: Infinity }
              }}
            >
              <RiHeartFill />
            </motion.span>
            <span>Made with passion</span>
            <motion.span
              animate={{ 
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              className="ml-2 text-yellow-400"
            >
              <RiSparkling2Fill />
            </motion.span>
          </motion.div>

          {/* Tech stack with enhanced animations */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ 
                  y: -5, 
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors duration-300`}
              >
                <motion.span
                  animate={{ 
                    rotate: hoveredTech === tech.name ? [0, 15, -15, 0] : 0,
                    scale: hoveredTech === tech.name ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className={`text-xl ${tech.color}`}
                >
                  {tech.icon}
                </motion.span>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tech.name}
                </span>
                
                {/* Animated tooltip/badge */}
                <AnimatePresence>
                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -30, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded ${
                        darkMode ? 'bg-gray-700' : 'bg-white'
                      } text-xs ${darkMode ? 'text-white' : 'text-gray-800'} whitespace-nowrap shadow-lg`}
                    >
                      {index === 0 ? 'Type Safe!' : 
                       index === 1 ? 'Component Based!' : 
                       index === 2 ? 'Full Stack!' : 'Utility First!'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced creative divider */}
          <motion.div 
            variants={itemVariants}
            className="relative w-48 h-px mb-8 overflow-hidden"
          >
            <motion.div
              className={`absolute inset-0 ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400' 
                  : 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500'
              }`}
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
              viewport={{ once: false }}
            />
          </motion.div>

          {/* Enhanced footer navigation */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ 
                  y: -3, 
                  color: darkMode 
                    ? ['#f3f4f6', '#93c5fd', '#f3f4f6'][Math.floor(Math.random() * 3)] 
                    : ['#111827', '#1d4ed8', '#111827'][Math.floor(Math.random() * 3)]
                }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium relative overflow-hidden ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                } transition-colors duration-300`}
                custom={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                {item}
                <motion.span
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    darkMode 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Social media section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-10"
          >
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.name}
                href={social.url}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.7 + index * 0.1
                }}
                className={`text-xl ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-300`}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="#contact"
              className={`px-8 py-3 rounded-full text-sm font-medium ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-700 to-blue-600 text-white' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
              } shadow-lg flex items-center gap-3 relative overflow-hidden group`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple effect background on hover */}
              <motion.div 
                className={`absolute inset-0 ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-500'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{ 
                  originX: "50%",
                  originY: "50%"
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 10, opacity: 0.5 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Content */}
              <span className="relative z-10">Let's Create Something Amazing</span>
              <motion.span 
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <RiMailSendLine />
              </motion.span>
              
              {/* Pulsing effect */}
              <motion.span
                className="absolute inset-0 rounded-full opacity-0"
                animate={{
                  boxShadow: darkMode 
                    ? ['0 0 0 0 rgba(124, 58, 237, 0)', '0 0 0 10px rgba(124, 58, 237, 0.3)', '0 0 0 20px rgba(124, 58, 237, 0)']
                    : ['0 0 0 0 rgba(99, 102, 241, 0)', '0 0 0 10px rgba(99, 102, 241, 0.3)', '0 0 0 20px rgba(99, 102, 241, 0)'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeOut'
                }}
              />
            </motion.a>
          </motion.div>
          
          {/* Bottom text */}
          <motion.p 
            variants={itemVariants}
            className={`mt-8 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-center`}
          >
            Designed and developed with attention to detail
          </motion.p>
        </motion.div>
      </div>
      
      {/* Mouse trailer effect (only visible in dark mode) */}
      {darkMode && (
        <motion.div
          className="fixed w-20 h-20 rounded-full opacity-20 pointer-events-none hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 blur-xl"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            x: { duration: 0.1, ease: "easeOut" },
            y: { duration: 0.1, ease: "easeOut" },
            scale: { duration: 3, repeat: Infinity },
            opacity: { duration: 4, repeat: Infinity }
          }}
        />
      )}
    </footer>
  );
};

export default Footer;