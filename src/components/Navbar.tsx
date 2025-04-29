import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiHome2Line, RiUserLine, RiCodeSSlashLine, RiProjectorLine, RiMedalLine, RiContactsLine } from 'react-icons/ri';

const Navbar = ({ darkMode, toggleTheme }: { darkMode: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();
  const logoRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-10, 10], [5, -5]);
  const rotateY = useTransform(mouseX, [-10, 10], [-5, 5]);
  const [activeLinkIndex, setActiveLinkIndex] = useState(-1);
  
  // Apply theme class to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // Enhanced scroll effect with spring physics
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive logo effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / 5);
        mouseY.set((e.clientY - centerY) / 5);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Nav links with icons
  const navLinks = [
    { name: 'Home', path: '/', icon: <RiHome2Line /> },
    { name: 'About', path: '/about', icon: <RiUserLine /> },
    { name: 'Skills', path: '/skills', icon: <RiCodeSSlashLine /> },
    { name: 'Projects', path: '/projects', icon: <RiProjectorLine /> },
    { name: 'Achievements', path: '/achievements', icon: <RiMedalLine /> },
    { name: 'Contact', path: '/contact', icon: <RiContactsLine /> }
  ];

  // Find active link index
  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.path === location.pathname);
    setActiveLinkIndex(activeIndex);
  }, [location.pathname]);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Logo animation variants
  const logoVariants = {
    rest: { 
      scale: 1,
      background: darkMode 
        ? "linear-gradient(to right, rgb(168, 85, 247), rgb(96, 165, 250), rgb(34, 211, 238))" 
        : "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246), rgb(6, 182, 212))",
      backgroundSize: "100% 100%",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    hover: { 
      scale: 1.05,
      background: darkMode 
        ? "linear-gradient(to right, rgb(168, 85, 247), rgb(96, 165, 250), rgb(34, 211, 238))" 
        : "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246), rgb(6, 182, 212))",
      backgroundSize: "200% 100%",
      backgroundPosition: ["0%", "100%"],
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      transition: { 
        duration: 1.5, 
        ease: "easeInOut", 
        repeat: Infinity, 
        repeatType: "reverse" 
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        boxShadow: scrolled ? (darkMode ? "0 10px 25px -5px rgba(0, 0, 0, 0.5)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)") : "none"
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        mass: 1
      }}
      className={`fixed w-full z-50 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
          : darkMode 
            ? 'bg-gray-900/90 backdrop-blur-sm' 
            : 'bg-white/90 backdrop-blur-sm'
      } transition-all duration-500`}
    >
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo with 3D hover effect */}
          <motion.div
            ref={logoRef}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial="rest"
            whileHover="hover"
            animate={scrolled ? "rest" : "rest"}
            variants={logoVariants}
            className="text-3xl font-bold perspective-1000"
          >
            <Link 
              to="/" 
              className="text-transparent"
            >
              {"<Portfolio/>"}
            </Link>
          </motion.div>

          {/* Desktop Navigation with staggered animations */}
          <motion.div 
            className="hidden md:flex space-x-1 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                variants={itemVariants}
                custom={index}
                onHoverStart={() => setHoveredLink(link.path)}
                onHoverEnd={() => setHoveredLink(null)}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 flex items-center gap-2 ${
                    location.pathname === link.path
                      ? darkMode
                        ? 'text-cyan-400'
                        : 'text-blue-600'
                      : darkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-300`}
                >
                  <motion.span
                    animate={{
                      rotate: hoveredLink === link.path ? [0, 20, -20, 0] : 0,
                      scale: location.pathname === link.path ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.6,
                      repeat: location.pathname === link.path ? Infinity : 0,
                      repeatDelay: 5
                    }}
                  >
                    {link.icon}
                  </motion.span>
                  <span className="font-medium">{link.name}</span>
                  
                  {/* Enhanced hover animation */}
                  <AnimatePresence>
                    {(hoveredLink === link.path || location.pathname === link.path) && (
                      <motion.div
                        layoutId="nav-pill"
                        className={`absolute inset-0 ${
                          darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'
                        } rounded-full -z-10`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: 'spring', bounce: 0.4, duration: 0.4 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
            
            {/* Enhanced Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: darkMode ? -30 : 30 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={`ml-4 p-2 rounded-full ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              } ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } transition-all duration-300`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button with enhanced animations */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } focus:outline-none z-50`}
            whileHover={{ scale: 1.1, rotate: isOpen ? -90 : 0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'open' : 'closed'}
                initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <HiX className="w-8 h-8" />
                ) : (
                  <HiMenuAlt3 className="w-8 h-8" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu with staggered animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scaleY: 0.8, transformOrigin: 'top' }}
              animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
              exit={{ opacity: 0, height: 0, scaleY: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className={`md:hidden overflow-hidden ${
                darkMode ? 'bg-gray-900/95' : 'bg-white/95'
              } backdrop-blur-lg mt-4 rounded-xl shadow-xl border ${
                darkMode ? 'border-gray-800' : 'border-gray-200'
              }`}
            >
              <motion.div 
                className="p-4 space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.03, x: 5 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                        location.pathname === link.path
                          ? darkMode
                            ? 'bg-gray-800 text-cyan-400'
                            : 'bg-gray-200 text-blue-600'
                          : darkMode
                            ? 'text-gray-300 hover:bg-gray-800/70 hover:text-white'
                            : 'text-gray-600 hover:bg-gray-200/70 hover:text-gray-900'
                      } transition-all duration-300`}
                    >
                      <motion.span 
                        className="text-xl"
                        animate={{
                          rotate: location.pathname === link.path ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{ 
                          duration: 0.6,
                          repeat: location.pathname === link.path ? Infinity : 0,
                          repeatDelay: 5
                        }}
                      >
                        {link.icon}
                      </motion.span>
                      <span className="font-medium">{link.name}</span>

                      {/* Add subtle indicator arrow for active link */}
                      {location.pathname === link.path && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="ml-auto"
                        >
                          →
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="flex justify-end pt-4">
                  <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1, rotate: darkMode ? -30 : 30 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full ${
                      darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                    } ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } transition-all duration-300`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={darkMode ? 'dark' : 'light'}
                        initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Page transition indicator */}
      <motion.div 
        className={`h-0.5 w-full absolute bottom-0 left-0 ${
          darkMode ? 'bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400' : 'bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500'
        }`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: scrolled ? 1 : [0, 1, 1, 0],
          opacity: scrolled ? 1 : [0, 1, 1, 0],
        }}
        transition={{ 
          duration: scrolled ? 0.8 : 2,
          ease: "easeInOut",
          repeat: scrolled ? 0 : Infinity,
          repeatDelay: 3
        }}
        style={{ transformOrigin: "0% 50%" }}
      />

      {/* Subtle floating dots background effect for darkmode */}
      {darkMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/20"
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.2
              }}
              animate={{ 
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ 
                duration: 3 + Math.random() * 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;