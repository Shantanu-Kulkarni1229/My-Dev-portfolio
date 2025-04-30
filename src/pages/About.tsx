import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaUserTie, FaAward, FaMedal } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { SiTypescript, SiReact, SiNodedotjs, SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiGit } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const About = ({ darkMode }: { darkMode: boolean }) => {
  // Reference for scroll animations
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth progress for timeline animation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // For progress bar animation at the top
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);
  
  // Timeline data for internships and projects
  const timelineItems = [
    {
      id: 1,
      type: 'internship',
      title: 'Frontend Developer Intern',
      company: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      startDate: 'Jun 2023',
      endDate: 'Present',
      description: 'Developed responsive UIs with React and TypeScript. Implemented features that increased user engagement by 25% and optimized rendering performance by 40%.',
      tags: ['React', 'TypeScript', 'Next.js'],
      icon: <FaBriefcase />,
      color: 'purple'
    },
    {
      id: 2,
      type: 'project',
      title: 'E-commerce Platform',
      company: 'Team Project',
      logo: '/ecommerce-logo.png',
      startDate: 'Mar 2023',
      endDate: 'May 2023',
      description: 'Led a team of 4 developers to build a full-stack e-commerce platform with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      icon: <FaCode />,
      color: 'blue'
    },
    {
      id: 3,
      type: 'internship',
      title: 'Web Development Trainee',
      company: 'Digital Solutions Ltd.',
      logo: '/digital-solutions-logo.png',
      startDate: 'Jan 2023',
      endDate: 'May 2023',
      description: 'Built 10+ client websites using modern web technologies. Reduced page load times by 60% through optimization.',
      tags: ['JavaScript', 'Tailwind CSS', 'Node.js'],
      icon: <FaBriefcase />,
      color: 'green'
    }
  ];

  // Certifications/Achievements section
  const achievements = [
    { 
      id: 1, 
      title: "AWS Certified Developer", 
      issuer: "Amazon Web Services", 
      year: "2023",
      icon: <FaAward className="text-yellow-500" />
    },
    { 
      id: 2, 
      title: "React Advanced Certification", 
      issuer: "Frontend Masters", 
      year: "2022",
      icon: <FaMedal className="text-blue-500" />
    },
    { 
      id: 3, 
      title: "Hackathon Winner", 
      issuer: "TechFest 2023", 
      year: "2023",
      icon: <FaTrophy className="text-purple-500" />
    },
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Innovators Inc.",
      period: "Jun 2023 - Present",
      description: "Developing responsive UIs with React and TypeScript. Collaborating on a SaaS product used by 50k+ users. Implemented new features that increased user engagement by 25% and optimized rendering performance by 40%.",
      icon: <FaCode className="text-xl" />,
      tech: [<SiReact />, <SiTypescript />, <SiNextdotjs />]
    },
    {
      id: 2,
      title: "Web Development Trainee",
      company: "Digital Solutions Ltd.",
      period: "Jan 2023 - May 2023",
      description: "Built 10+ client websites using modern web technologies. Learned agile development methodologies. Reduced page load times by 60% through code optimization and implemented responsive designs that improved mobile user retention by 35%.",
      icon: <FaBriefcase className="text-xl" />,
      tech: [<SiNodedotjs />, <SiJavascript />, <SiTailwindcss />]
    },
    {
      id: 3,
      title: "Computer Science Degree",
      company: "State University",
      period: "2019 - 2023",
      description: "Specialized in Web Technologies. GPA: 3.8/4.0. Lead developer for university hackathon team. Completed capstone project on 'AI-Enhanced User Experience in Web Applications' that received departmental honors.",
      icon: <IoMdSchool className="text-xl" />,
      tech: [<SiReact />, <SiJavascript />, <SiGit />]
    },
    {
      id: 4,
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2021 - 2022",
      description: "Delivered 15+ projects for small businesses. Focused on e-commerce solutions and CMS development. Designed and implemented custom solutions that increased client conversions by an average of 30% and improved site analytics tracking.",
      icon: <FaUserTie className="text-xl" />,
      tech: [<SiReact />, <SiNodedotjs />, <SiMongodb />]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  // Parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20
    });
  };

  // Color mapping for timeline items
  const colorMap = {
    purple: darkMode ? 'bg-purple-900/30 border-purple-500' : 'bg-purple-100 border-purple-400',
    blue: darkMode ? 'bg-blue-900/30 border-blue-500' : 'bg-blue-100 border-blue-400',
    green: darkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-400',
    orange: darkMode ? 'bg-orange-900/30 border-orange-500' : 'bg-orange-100 border-orange-400',
    pink: darkMode ? 'bg-pink-900/30 border-pink-500' : 'bg-pink-100 border-pink-400'
  };

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500 overflow-hidden`}
      onMouseMove={handleMouseMove}
    >
      {/* Progress bar at the top */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 h-1 ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-500' : 'bg-gradient-to-r from-purple-500 to-blue-400'} z-50`}
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header with floating effect */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300 to-blue-300 filter blur-3xl opacity-20"
            style={{ 
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 75, damping: 25 }}
          />
          
          <motion.h2 
            className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            whileHover={{ scale: 1.02 }}
          >
            About <motion.span 
              className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >Me</motion.span>
          </motion.h2>
          
          <motion.div 
            className={`w-24 h-1 mx-auto ${darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-blue-400'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className={`max-w-2xl mx-auto mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transforming ideas into elegant digital solutions with pixel-perfect precision and exceptional user experiences.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Profile Card with 3D hover effect */}
          <motion.div 
            className="lg:w-1/3 perspective"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={`rounded-xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} h-full`}
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                boxShadow: darkMode ? 
                  "0 25px 50px -12px rgba(124, 58, 237, 0.25)" : 
                  "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                />
                
                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                />
                
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t"
                  style={{
                    background: darkMode ? 
                      "linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0) 100%)" : 
                      "linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
                
                {/* Glowing dots pattern */}
                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-purple-400' : 'bg-blue-400'}`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  Shantanu Kumar
                </motion.h3>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className={`h-0.5 mb-4 ${darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-blue-400'}`}
                />
                
                <motion.div 
                  className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.span 
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 ${darkMode ? 'bg-purple-900/50 text-purple-200' : 'bg-purple-100 text-purple-800'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Full Stack
                  </motion.span>
                  <motion.span 
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900/50 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    UI/UX
                  </motion.span>
                </motion.div>
                
                <motion.p 
                  className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-6`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Passionate about creating elegant solutions to complex problems. 3+ years of experience building web applications with modern technologies. Constantly exploring new ways to enhance user experiences and optimize performance.
                </motion.p>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <motion.div 
                    className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <motion.div 
                      className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3, duration: 0.3, type: "spring" }}
                    >
                      15+
                    </motion.div>
                    <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects</div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <motion.div 
                      className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.3, type: "spring" }}
                    >
                      3+
                    </motion.div>
                    <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Years Exp.</div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <motion.div 
                      className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.3, type: "spring" }}
                    >
                      5
                    </motion.div>
                    <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Internships</div>
                  </motion.div>
                </motion.div>
                
                {/* Social Links */}
                <motion.div 
                  className="mt-6 flex justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  {['github', 'linkedin', 'twitter', 'facebook', 'instagram', 'youtube', 'dribbble', 'reddit'].map((social, index) => (
                    <motion.a
                      key={social}
                      href={`#${social}`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 + index * 0.1, duration: 0.3 }}
                    >
                      <i className={`fab fa-${social} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}></i>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            {/* Personal Intro with typing effect */}
            <motion.div 
              className={`mb-12 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: darkMode ? 
                "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)" : 
                "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)" 
              }}
            >
              {/* Background decoration */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 filter blur-xl" />
              
              <motion.h3 
                className={`text-2xl font-bold mb-4 relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className={`inline-block w-2 h-8 mr-3 rounded ${darkMode ? 'bg-purple-500' : 'bg-purple-400'}`}
                  animate={{ height: [32, 16, 32] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                My Journey
              </motion.h3>
              
              <div className={`space-y-4 relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I discovered my passion for web development during my university years when I built my first website. That initial fascination with turning code into interactive experiences set me on a path of continuous learning and creation. What started as curiosity evolved into a commitment to mastering the craft of development.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code while never compromising on user experience. Every project is an opportunity to blend functionality with aesthetics, creating solutions that not only work flawlessly but also engage and delight users.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or mentoring junior developers at local meetups. I'm particularly fascinated by the intersection of AI and web development, exploring how intelligent systems can enhance human-computer interaction in thoughtful and ethical ways.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  My goal is to create digital experiences that are not only functionally robust but also intuitive and accessible. I believe technology should serve people of all abilities and backgrounds, and I'm committed to implementing inclusive design principles in everything I build.
                </motion.p>
              </div>
              
              {/* Animated highlight box */}
              <motion.div 
                className={`mt-6 p-4 rounded-lg border-l-4 ${darkMode ? 
                  'bg-gray-700/50 border-purple-500' : 
                  'bg-gray-50 border-purple-400'}`}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <p className={`italic text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "Every line of code should be written with the user in mind. Technology is most powerful when it's invisible, seamlessly enhancing human experiences."
                </p>
              </motion.div>
            </motion.div>
            
            {/* Timeline Section */}
            

            {/* Experience Section */}
            <motion.div 
              className={`mb-12 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className={`inline-block w-2 h-8 mr-3 rounded ${darkMode ? 'bg-purple-500' : 'bg-purple-400'}`}
                  animate={{ height: [32, 16, 32] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Professional Experience
              </motion.h3>
              
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} border-l-4 ${darkMode ? 'border-purple-500' : 'border-purple-400'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: darkMode ? 
                        "0 10px 25px -5px rgba(124, 58, 237, 0.2)" : 
                        "0 10px 25px -5px rgba(124, 58, 237, 0.2)"
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 text-purple-400' : 'bg-white text-purple-600'}`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {exp.title}
                          </h4>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {exp.period}
                          </div>
                        </div>
                        <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          {exp.company}
                        </div>
                        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>
                        <div className="flex gap-3">
                          {exp.tech.map((Icon, idx) => (
                            <motion.div
                              key={idx}
                              className={`p-2 rounded-full ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-white text-gray-700'}`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {Icon}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Achievements Section */}
           
            
            {/* Work Philosophy Section */}
            <motion.div 
              className={`mt-12 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Background decoration */}
              <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 filter blur-xl" />
              
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Work Philosophy
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "User-Centered Design",
                    description: "I approach each project from the user's perspective, ensuring intuitive experiences that solve real problems.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  },
                  {
                    title: "Continuous Learning",
                    description: "Technology evolves rapidly, and I'm committed to staying at the forefront through constant learning and experimentation.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  },
                  {
                    title: "Code Quality",
                    description: "I write clean, maintainable code that remains robust as projects scale and requirements evolve.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} relative`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: darkMode ? 
                        "0 20px 25px -5px rgba(124, 58, 237, 0.1)" : 
                        "0 20px 25px -5px rgba(79, 70, 229, 0.1)"
                    }}
                  >
                    <motion.div
                      className={`mb-4 p-3 inline-block rounded-lg ${darkMode ? 'bg-gray-600 text-purple-400' : 'bg-white text-purple-600'}`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Contact CTA */}
        <motion.div 
          className={`mt-16 p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center relative overflow-hidden`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          {/* Background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${darkMode ? 'bg-purple-900/10' : 'bg-purple-100/80'}`}
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${i * 10}%`,
                  top: `${50 + i * 5}%`,
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i + 3}
                className={`absolute rounded-full ${darkMode ? 'bg-blue-900/10' : 'bg-blue-100/80'}`}
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  right: `${i * 10}%`,
                  bottom: `${50 + i * 5}%`,
                }}
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h3>
            
            <motion.p 
              className={`max-w-xl mx-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Have a project in mind or interested in exploring potential collaborations? 
              I'm always excited to discuss new opportunities and bring innovative ideas to life.
            </motion.p>
            
            <motion.button
              className={`px-8 py-3 rounded-full font-medium ${
                darkMode ? 
                'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white' : 
                'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
              } transition-all duration-300 shadow-lg`}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(124, 58, 237, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;