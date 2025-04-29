import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaUserPlus } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodingninjas, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';
import { HiSparkles, HiCursorClick, HiOutlineMail, HiLightBulb, HiChartBar, HiCode } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('message');
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
    subject: '',
    company: ''
  });
  const [formErrors, setFormErrors] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [scheduleMeeting, setScheduleMeeting] = useState(false);
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [showInteractiveHint, setShowInteractiveHint] = useState(true);

  // Mouse follower effect
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Form validation
  useEffect(() => {
    const validateForm = () => {
      let valid = true;
      const errors = {
        user_name: '',
        user_email: '',
        message: ''
      };

      if (!formValues.user_name.trim()) {
        errors.user_name = 'Name is required';
        valid = false;
      }

      if (!formValues.user_email.trim()) {
        errors.user_email = 'Email is required';
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.user_email)) {
        errors.user_email = 'Please enter a valid email';
        valid = false;
      }

      if (!formValues.message.trim()) {
        errors.message = 'Message is required';
        valid = false;
      }

      setFormErrors(errors);
      setIsFormValid(valid);
    };

    validateForm();
  }, [formValues]);

  // Hide interactive hint after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInteractiveHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Interactive hint animation
  const hintVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      opacity: 0.8,
      background: darkMode ? 
        "linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4))" : 
        "linear-gradient(135deg, rgba(168, 85, 247, 0.6), rgba(59, 130, 246, 0.6))"
    },
    text: {
      height: 48,
      width: 48,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      opacity: 0.6,
      background: darkMode ? 
        "linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.4))" : 
        "linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6))"
    }
  };

  const enterButton = () => setCursorVariant("button");
  const enterText = () => setCursorVariant("text");
  const leaveButton = () => setCursorVariant("default");

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  // Email sending functionality
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      toast.error('Please fill all required fields correctly', {
        position: "top-center",
        theme: darkMode ? "dark" : "light",
      });
      return;
    }
    
    setLoading(true);

    const templateParams = {
      ...formValues,
      meeting_requested: scheduleMeeting ? 'Yes' : 'No',
      meeting_date: meetingDate,
      meeting_time: meetingTime
    };

    emailjs.send(
      'service_hq21oob',
      'template_to81y53',
      templateParams,
      'ppJRnOB33Kwk1otpQ'
    )
    .then((result) => {
      setShowSuccessMessage(true);
      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkMode ? "dark" : "light",
      });
      
      // Send auto-reply
      emailjs.send(
        'service_hq21oob',
        'template_autoreply',
        {
          to_email: formValues.user_email,
          to_name: formValues.user_name
        },
        'ppJRnOB33Kwk1otpQ'
      );
      
      // Reset form
      setFormValues({
        user_name: '',
        user_email: '',
        message: '',
        subject: '',
        company: ''
      });
      setScheduleMeeting(false);
      setMeetingDate('');
      setMeetingTime('');
    }, (error) => {
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkMode ? "dark" : "light",
      });
    })
    .finally(() => {
      setLoading(false);
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: darkMode ? 
        "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)" : 
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    hover: { 
      rotate: [0, 10, -10, 0],
      scale: 1.2,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  const gradientText = {
    background: darkMode ? 
      "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)" : 
      "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block"
  };

  const orbVariants = {
    animate: {
      x: [0, 100, -100, 0],
      y: [0, -50, 50, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const tabVariants = {
    inactive: { y: 0, opacity: 0.7 },
    active: { 
      y: -3, 
      opacity: 1,
      textShadow: "0 0 8px rgba(168, 85, 247, 0.8)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  const floatingIconVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      rotate: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    })
  };

  const successMessageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500 overflow-hidden relative`}>
      {/* Custom cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full z-50 pointer-events-none hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />
      
      {/* Interactive hint */}
      <AnimatePresence>
        {showInteractiveHint && (
          <motion.div
            className="fixed bottom-10 right-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl shadow-xl z-40 flex items-center gap-3 max-w-xs"
            variants={hintVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <HiCursorClick className="text-2xl animate-pulse" />
            <p className="text-sm">Hover over elements to see special effects and interactions!</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className={`absolute -top-20 -right-20 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} blur-3xl opacity-20`}
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-200'} blur-3xl opacity-20`}
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full ${darkMode ? 'bg-pink-900' : 'bg-pink-200'} blur-3xl opacity-10`}
          variants={orbVariants}
          animate="animate"
        />
        <motion.div 
          className={`absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full ${darkMode ? 'bg-indigo-900' : 'bg-indigo-200'} blur-3xl opacity-10`}
          animate={{ 
            x: [0, -50, 50, 0], 
            y: [0, 70, -40, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
        />
        
        {/* Particle effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'bg-white' : 'bg-gray-800'} opacity-20`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, Math.random() * 2, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative mb-3"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={enterButton}
            onMouseLeave={leaveButton}
          >
            {/* Animated sparkle ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <div className={`w-full h-full rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-300/30'} blur-md`} />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1, opacity: 0, rotate: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0, 0.7, 0],
                rotate: [0, 180]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className={`w-full h-full rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-300/30'} blur-md`} />
            </motion.div>
            
            <motion.h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} relative z-10 tracking-tight`}
              whileHover={{ scale: 1.02 }}
            >
              Let's <span style={gradientText}>Connect</span>
            </motion.h2>
          </motion.div>
          
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onMouseEnter={enterText}
            onMouseLeave={leaveButton}
          >
            Have a project in mind or just want to say hello? I'd love to hear from you and explore how we can collaborate on something amazing together!
          </motion.p>
          
          <motion.div 
            className={`w-24 h-1 mx-auto ${darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-blue-400'} rounded-full`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[HiSparkles, HiOutlineMail, HiLightBulb, HiChartBar, HiCode].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                opacity: 0.1
              }}
              custom={i}
              variants={floatingIconVariants}
              animate="animate"
            >
              <Icon 
                className={`text-4xl ${darkMode ? 'text-white' : 'text-gray-800'}`} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/90'} shadow-xl backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
              whileHover={cardHoverVariants.hover}
            >
              <motion.h3 
                className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}
                variants={itemVariants}
              >
                <span>Connect with Me</span>
                
                <motion.span 
                  className="ml-2"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <HiSparkles className={`${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
                </motion.span>
              </motion.h3>
              
              {/* Profile Card */}
              <motion.div 
                className="mb-8 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/60' : 'bg-gray-200/60'} backdrop-blur-sm flex flex-col sm:flex-row items-center gap-6 border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                >
                  <motion.div 
                    className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: '#3b82f6',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">SK</span>
                    </div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  <div className="text-center sm:text-left">
                    <motion.h4 
                      className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Shantanu Kulkarni
                    </motion.h4>
                    <motion.p 
                      className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}
                    >
                      Web Developer & UI Designer
                    </motion.p>
                    <motion.div 
                      className="flex justify-center sm:justify-start gap-2 mt-2"
                    >
                      <motion.span 
                        className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        React
                      </motion.span>
                      <motion.span 
                        className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        TypeScript
                      </motion.span>
                      <motion.span 
                        className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-teal-900/50 text-teal-300' : 'bg-teal-100 text-teal-700'}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        Tailwind
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Animated gradient border */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-75 blur-sm"
                  animate={{ 
                    background: [
                      'linear-gradient(90deg, rgba(124,58,237,0.7) 0%, rgba(37,99,235,0.7) 100%)',
                      'linear-gradient(180deg, rgba(124,58,237,0.7) 0%, rgba(37,99,235,0.7) 100%)',
                      'linear-gradient(270deg, rgba(124,58,237,0.7) 0%, rgba(37,99,235,0.7) 100%)',
                      'linear-gradient(0deg, rgba(124,58,237,0.7) 0%, rgba(37,99,235,0.7) 100%)',
                      'linear-gradient(90deg, rgba(124,58,237,0.7) 0%, rgba(37,99,235,0.7) 100%)'
                    ]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ zIndex: -1 }}
                />
              </motion.div>
              
              {/* Social Media Links */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-2 flex items-center`}>
                  <FaUserPlus className="mr-2 text-purple-500" />
                  <span>Social Profiles</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, x: 0, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={iconVariants.hover}
                    >
                      <FaLinkedin className="text-blue-600 text-xl relative z-10" />
                      <motion.div 
                        className="absolute inset-0 bg-blue-500/30 rounded-full blur-md" 
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, x: 0, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={iconVariants.hover}
                    >
                                          <FaGithub className="text-gray-800 dark:text-white text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-gray-500/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: 0, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <motion.div 
                    className="relative"
                    whileHover={iconVariants.hover}
                  >
                    <FaInstagram className="text-pink-600 text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-pink-500/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>Instagram</span>
                </motion.a>
                
                <motion.a
                  href="https://leetcode.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: 0, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <motion.div 
                    className="relative"
                    whileHover={iconVariants.hover}
                  >
                    <SiLeetcode className="text-yellow-500 text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-yellow-500/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>LeetCode</span>
                </motion.a>
              </div>
            </motion.div>
            
            {/* Contact Details */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-2 flex items-center`}>
                <FaEnvelope className="mr-2 text-purple-500" />
                <span>Contact Info</span>
              </h4>
              <div className="space-y-4">
                <motion.div 
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80' : 'bg-gray-100/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} text-purple-500`}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <a 
                      href="mailto:your.email@example.com" 
                      className={`font-medium ${darkMode ? 'text-white hover:text-purple-300' : 'text-gray-800 hover:text-purple-600'}`}
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    >
                      your.email@example.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80' : 'bg-gray-100/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} text-blue-500`}>
                    <FaPhone />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className={`font-medium ${darkMode ? 'text-white hover:text-blue-300' : 'text-gray-800 hover:text-blue-600'}`}
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80' : 'bg-gray-100/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} text-green-500`}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>WhatsApp</p>
                    <a 
                      href="https://wa.me/1234567890" 
                      className={`font-medium ${darkMode ? 'text-white hover:text-green-300' : 'text-gray-800 hover:text-green-600'}`}
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80' : 'bg-gray-100/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-red-900/30' : 'bg-red-100'} text-red-500`}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      San Francisco, CA
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Coding Profiles */}
            <motion.div variants={itemVariants}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-2 flex items-center`}>
                <HiCode className="mr-2 text-purple-500" />
                <span>Coding Profiles</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://codeforces.com/profile/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: 0, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <motion.div 
                    className="relative"
                    whileHover={iconVariants.hover}
                  >
                    <SiCodeforces className="text-red-500 text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-red-500/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>Codeforces</span>
                </motion.a>
                
                <motion.a
                  href="https://codingninjas.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: 0, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <motion.div 
                    className="relative"
                    whileHover={iconVariants.hover}
                  >
                    <SiCodingninjas className="text-orange-500 text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-orange-500/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>CodingNinjas</span>
                </motion.a>
                
                <motion.a
                  href="https://hackerrank.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: 0, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <motion.div 
                    className="relative"
                    whileHover={iconVariants.hover}
                  >
                    <SiHackerrank className="text-green-500 text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-green-500/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>HackerRank</span>
                </motion.a>
                
                <motion.a
                  href="https://geeksforgeeks.org/user/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: 0, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/90' : 'bg-gray-100/80 hover:bg-gray-200/90'} transition-colors backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <motion.div 
                    className="relative"
                    whileHover={iconVariants.hover}
                  >
                    <SiGeeksforgeeks className="text-green-600 text-xl relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-green-600/30 rounded-full blur-md" 
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>GeeksforGeeks</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="lg:w-1/2"
          variants={itemVariants}
        >
          <motion.div 
            className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/90'} shadow-xl backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
            whileHover={cardHoverVariants.hover}
          >
            {/* Form Tabs */}
            <motion.div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
              <motion.button
                className={`px-4 py-2 font-medium relative ${activeTab === 'message' ? (darkMode ? 'text-purple-400' : 'text-purple-600') : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}
                onClick={() => setActiveTab('message')}
                variants={tabVariants}
                animate={activeTab === 'message' ? 'active' : 'inactive'}
                whileHover={activeTab !== 'message' ? { opacity: 1 } : {}}
              >
                Send Message
                {activeTab === 'message' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                    layoutId="tabIndicator"
                  />
                )}
              </motion.button>
              
              <motion.button
                className={`px-4 py-2 font-medium relative ${activeTab === 'meeting' ? (darkMode ? 'text-blue-400' : 'text-blue-600') : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}
                onClick={() => setActiveTab('meeting')}
                variants={tabVariants}
                animate={activeTab === 'meeting' ? 'active' : 'inactive'}
                whileHover={activeTab !== 'meeting' ? { opacity: 1 } : {}}
              >
                Schedule Meeting
                {activeTab === 'meeting' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="tabIndicator"
                  />
                )}
              </motion.button>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeTab === 'message' ? (
                <motion.form
                  ref={form}
                  onSubmit={sendEmail}
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="messageForm"
                >
                  <div className="space-y-4">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="user_name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.input
                          type="text"
                          id="user_name"
                          name="user_name"
                          value={formValues.user_name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200 ${formErrors.user_name ? 'border-red-500' : ''}`}
                          placeholder="John Doe"
                          onMouseEnter={enterText}
                          onMouseLeave={leaveButton}
                        />
                        {formErrors.user_name && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {formErrors.user_name}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="user_email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.input
                          type="email"
                          id="user_email"
                          name="user_email"
                          value={formValues.user_email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200 ${formErrors.user_email ? 'border-red-500' : ''}`}
                          placeholder="john@example.com"
                          onMouseEnter={enterText}
                          onMouseLeave={leaveButton}
                        />
                        {formErrors.user_email && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {formErrors.user_email}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Subject
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                        placeholder="Regarding Project Collaboration"
                        onMouseEnter={enterText}
                        onMouseLeave={leaveButton}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="company" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Company (Optional)
                      </label>
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formValues.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                        placeholder="Your Company Name"
                        onMouseEnter={enterText}
                        onMouseLeave={leaveButton}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.textarea
                          id="message"
                          name="message"
                          value={formValues.message}
                          onChange={handleInputChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200 ${formErrors.message ? 'border-red-500' : ''}`}
                          placeholder="Tell me about your project..."
                          onMouseEnter={enterText}
                          onMouseLeave={leaveButton}
                        />
                        {formErrors.message && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {formErrors.message}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center">
                      <motion.input
                        type="checkbox"
                        id="scheduleMeeting"
                        checked={scheduleMeeting}
                        onChange={(e) => setScheduleMeeting(e.target.checked)}
                        className={`w-4 h-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} text-purple-600 focus:ring-purple-500`}
                      />
                      <label htmlFor="scheduleMeeting" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        I'd like to schedule a meeting
                      </label>
                    </motion.div>

                    {scheduleMeeting && (
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div variants={itemVariants}>
                          <label htmlFor="meetingDate" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                            <FaCalendarAlt className="mr-2 text-purple-500" />
                            <span>Meeting Date</span>
                          </label>
                          <motion.input
                            type="date"
                            id="meetingDate"
                            value={meetingDate}
                            onChange={(e) => setMeetingDate(e.target.value)}
                            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                            onMouseEnter={enterText}
                            onMouseLeave={leaveButton}
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <label htmlFor="meetingTime" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                            <FaCalendarAlt className="mr-2 text-blue-500" />
                            <span>Meeting Time</span>
                          </label>
                          <motion.input
                            type="time"
                            id="meetingTime"
                            value={meetingTime}
                            onChange={(e) => setMeetingTime(e.target.value)}
                            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                            onMouseEnter={enterText}
                            onMouseLeave={leaveButton}
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    <motion.div variants={itemVariants} className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={loading || !isFormValid}
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${!isFormValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'}`}
                        variants={buttonVariants}
                        whileHover={isFormValid ? "hover" : {}}
                        whileTap={isFormValid ? "tap" : {}}
                        onMouseEnter={enterButton}
                        onMouseLeave={leaveButton}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <HiOutlineMail className="mr-2 text-lg" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="meetingForm"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="text-center py-4">
                    <motion.div 
                      className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} mb-4`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <FaCalendarAlt className="text-3xl text-purple-500" />
                    </motion.div>
                    <motion.h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Schedule a Meeting
                    </motion.h3>
                    <motion.p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                      Book a time that works for you and I'll get back to you with confirmation details.
                    </motion.p>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="meetingName" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      type="text"
                      id="meetingName"
                      name="user_name"
                      value={formValues.user_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200 ${formErrors.user_name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    />
                    {formErrors.user_name && (
                      <motion.p 
                        className="text-red-500 text-xs mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {formErrors.user_name}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="meetingEmail" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      type="email"
                      id="meetingEmail"
                      name="user_email"
                      value={formValues.user_email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200 ${formErrors.user_email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com"
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    />
                    {formErrors.user_email && (
                      <motion.p 
                        className="text-red-500 text-xs mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {formErrors.user_email}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="meetingSubject" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Meeting Subject
                    </label>
                    <motion.input
                      type="text"
                      id="meetingSubject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                      placeholder="Project Discussion"
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="meetingDateSelect" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                      <FaCalendarAlt className="mr-2 text-purple-500" />
                      <span>Preferred Date <span className="text-red-500">*</span></span>
                    </label>
                    <motion.input
                      type="date"
                      id="meetingDateSelect"
                      value={meetingDate}
                      onChange={(e) => setMeetingDate(e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                      min={new Date().toISOString().split('T')[0]}
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="meetingTimeSelect" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                      <FaCalendarAlt className="mr-2 text-blue-500" />
                      <span>Preferred Time <span className="text-red-500">*</span></span>
                    </label>
                    <motion.input
                      type="time"
                      id="meetingTimeSelect"
                      value={meetingTime}
                      onChange={(e) => setMeetingTime(e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="meetingNotes" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Additional Notes
                    </label>
                    <motion.textarea
                      id="meetingNotes"
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-400'} focus:ring-2 ${darkMode ? 'focus:ring-purple-900/50' : 'focus:ring-purple-200'} transition-all duration-200`}
                      placeholder="Any specific topics you'd like to discuss?"
                      onMouseEnter={enterText}
                      onMouseLeave={leaveButton}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button
                      type="button"
                      onClick={sendEmail}
                      disabled={loading || !isFormValid || !meetingDate || !meetingTime}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${!isFormValid || !meetingDate || !meetingTime ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'}`}
                      variants={buttonVariants}
                      whileHover={isFormValid && meetingDate && meetingTime ? "hover" : {}}
                      whileTap={isFormValid && meetingDate && meetingTime ? "tap" : {}}
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveButton}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <FaCalendarAlt className="mr-2" />
                          Schedule Meeting
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-xl shadow-xl z-50 flex items-center gap-3"
            variants={successMessageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 0.6,
                repeat: 2,
                repeatType: "reverse"
              }}
            >
              <HiLightBulb className="text-2xl" />
            </motion.div>
            <div>
              <p className="font-semibold">Thank you for reaching out!</p>
              <p className="text-sm">I'll get back to you soon. Check your email for confirmation.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notifications */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
    </div>
  );
};


export default Contact;