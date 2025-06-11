import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJava, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs, SiGraphql, SiDjango, SiFastapi, SiPostgresql, SiMongodb, SiSupabase, SiFirebase, SiKubernetes, SiTensorflow, SiPytorch, SiHuggingface, SiSolidity, SiGit, SiRedis, SiRust, SiSharp, SiAngular, SiVuedotjs, SiJest, SiCypress, SiGatsby, SiElasticsearch, SiJenkins, SiTeamcity, SiCss3, SiHtml5, SiJavascript, SiSwift, SiFlutter, SiKotlin, SiRedux, SiStorybook, SiDeno, SiSass, SiWebpack, SiRabbitmq, SiTerraform, SiAmazon, SiGooglecloud,  SiDebian } from 'react-icons/si';
import { TbBrandThreejs, TbBrandTorchain, TbApi, TbBrandVscode, TbBrandGolang, TbBrandWebflow } from 'react-icons/tb';
import { RiComputerLine, RiRobot2Line, RiCodeLine, RiDatabase2Line, RiSettings5Line, RiCloudLine, RiBrainLine, RiTestTubeLine, RiLayoutGridLine } from 'react-icons/ri';
import { FiActivity, FiAirplay, FiBox, FiCpu, FiHardDrive, FiLayers, FiLifeBuoy, FiMonitor, FiPackage, FiServer } from 'react-icons/fi';

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Start animation when component mounts
    setAnimate(true);
    
    // Set up periodic animation transitions
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100);
    }, 30000);
    
    return () => clearInterval(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <RiComputerLine className="text-2xl" />,
      description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and libraries.",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-cyan-500", proficiency: 90 },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800 dark:text-white", proficiency: 85 },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", proficiency: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400", proficiency: 95 },
        { name: "Web Components", icon: <TbBrandThreejs />, color: "text-emerald-500", proficiency: 80 },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-600", proficiency: 85 },
        //{ name: "Angular", icon: <SiAngular />, color: "text-red-500", proficiency: 75 },
        //{ name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-500", proficiency: 70 },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-600", proficiency: 95 },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500", proficiency: 90 },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500", proficiency: 95 },
        { name: "Sass", icon: <SiSass />, color: "text-pink-500", proficiency: 85 },
        //{ name: "Storybook", icon: <SiStorybook />, color: "text-pink-600", proficiency: 80 },
        //{ name: "Gatsby", icon: <SiGatsby />, color: "text-purple-600", proficiency: 75 },
        { name: "Three.js", icon: <TbBrandThreejs />, color: "text-black dark:text-white", proficiency: 70 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-2xl" />,
      description: "Building scalable, efficient, and secure server-side applications with various technologies.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600", proficiency: 90 },
        { name: "Express", icon: <SiExpress />, color: "text-gray-400", proficiency: 90 },
        { name: "NestJS", icon: <SiNestjs />, color: "text-red-600", proficiency: 85 },
        //{ name: "GraphQL", icon: <SiGraphql />, color: "text-pink-600", proficiency: 80 },
        { name: "Python", icon: <FaPython />, color: "text-blue-400", proficiency: 85 },
        //{ name: "Django", icon: <SiDjango />, color: "text-green-800 dark:text-green-500", proficiency: 75 },
        { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-500", proficiency: 80 },
        { name: "Java", icon: <FaJava />, color: "text-red-500", proficiency: 70 },
        //{ name: "Go", icon: <TbBrandGolang />, color: "text-blue-500", proficiency: 65 },
        //{ name: "C#", icon: <SiSharp />, color: "text-purple-700", proficiency: 60 },
        //{ name: "Rust", icon: <SiRust />, color: "text-orange-700", proficiency: 50 },
        //{ name: "Deno", icon: <SiDeno />, color: "text-black dark:text-white", proficiency: 60 },
      ]
    },
    {
      title: "Database & Storage",
      icon: <RiDatabase2Line className="text-2xl" />,
      description: "Designing and implementing efficient database solutions for various application requirements.",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700", proficiency: 90 },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", proficiency: 85 },
        { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-500", proficiency: 80 },
        { name: "Firebase", icon: <SiFirebase />, color: "text-amber-500", proficiency: 85 },
        //{ name: "Redis", icon: <SiRedis />, color: "text-red-500", proficiency: 75 },
        //{ name: "Elasticsearch", icon: <SiElasticsearch />, color: "text-yellow-500", proficiency: 70 },
        //{ name: "RabbitMQ", icon: <SiRabbitmq />, color: "text-orange-500", proficiency: 65 },
        //{ name: "Kafka", icon: <SiKafka />, color: "text-black dark:text-white", proficiency: 60 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <RiCloudLine className="text-2xl" />,
      description: "Implementing CI/CD pipelines and managing cloud infrastructure for optimal application deployment.",
      skills: [
        //{ name: "Docker", icon: <FaDocker />, color: "text-blue-500", proficiency: 85 },
        //{ name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-600", proficiency: 75 },
        { name: "AWS", icon: <FaAws />, color: "text-amber-600", proficiency: 80 },
        { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-red-500", proficiency: 70 },
        //{ name: "Azure", icon: <SiMicrosoft />, color: "text-blue-500", proficiency: 65 },
        //{ name: "Jenkins", icon: <SiJenkins />, color: "text-red-600", proficiency: 70 },
        //{ name: "TeamCity", icon: <SiTeamcity />, color: "text-green-500", proficiency: 65 },
        //{ name: "Terraform", icon: <SiTerraform />, color: "text-purple-600", proficiency: 70 },
        //{ name: "Linux", icon: <SiDebian />, color: "text-orange-500", proficiency: 80 },
      ]
    },
    // {
    //   title: "AI & Machine Learning",
    //   icon: <RiBrainLine className="text-2xl" />,
    //   description: "Implementing machine learning models and AI solutions for various applications.",
    //   skills: [
    //     { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500", proficiency: 75 },
    //     { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500", proficiency: 70 },
    //     //{ name: "Hugging Face", icon: <SiHuggingface />, color: "text-yellow-500", proficiency: 75 },
    //     { name: "Computer Vision", icon: <RiRobot2Line />, color: "text-purple-500", proficiency: 65 },
    //     { name: "NLP", icon: <RiBrainLine />, color: "text-green-500", proficiency: 70 },
    //     { name: "Prompt Engineering", icon: <RiCodeLine />, color: "text-indigo-500", proficiency: 85 },
    //   ]
    // },
    {
      title: "Software Engineering",
      icon: <RiSettings5Line className="text-2xl" />,
      description: "Applying best practices and methodologies for building robust, maintainable software systems.",
      skills: [
        { name: "System Design", icon: <FiLayers />, color: "text-purple-500", proficiency: 85 },
        { name: "Microservices", icon: <FiBox />, color: "text-blue-500", proficiency: 80 },
        { name: "API Design", icon: <TbApi />, color: "text-green-500", proficiency: 90 },
        { name: "Testing", icon: <RiTestTubeLine />, color: "text-red-500", proficiency: 85 },
        { name: "Jest", icon: <SiJest />, color: "text-red-600", proficiency: 80 },
        //{ name: "Cypress", icon: <SiCypress />, color: "text-gray-800 dark:text-gray-200", proficiency: 75 },
        { name: "Security", icon: <FiLifeBuoy />, color: "text-yellow-500", proficiency: 75 },
        { name: "Performance", icon: <FiActivity />, color: "text-cyan-500", proficiency: 80 },
        { name: "Git", icon: <SiGit />, color: "text-orange-600", proficiency: 90 },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-800 dark:text-gray-200", proficiency: 90 },
        //{ name: "Agile", icon: <FiMonitor />, color: "text-indigo-500", proficiency: 85 },
      ]
    },
    {
      title: "Mobile Development",
      icon: <FiCpu className="text-2xl" />,
      description: "Developing cross-platform and native mobile applications for iOS and Android.",
      skills: [
        //{ name: "React Native", icon: <FaReact />, color: "text-blue-500", proficiency: 80 },
        { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400", proficiency: 65 },
        //{ name: "Swift", icon: <SiSwift />, color: "text-orange-500", proficiency: 60 },
        //{ name: "Kotlin", icon: <SiKotlin />, color: "text-purple-500", proficiency: 65 },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <RiLayoutGridLine className="text-2xl" />,
      description: "Creating intuitive and aesthetically pleasing user interfaces and experiences.",
      skills: [
        { name: "Figma", icon: <FaFigma />, color: "text-purple-500", proficiency: 75 },
        { name: "Web Design", icon: <TbBrandWebflow />, color: "text-blue-500", proficiency: 80 },
        { name: "Responsive Design", icon: <FiAirplay />, color: "text-green-500", proficiency: 85 },
        { name: "Accessibility", icon: <FiPackage />, color: "text-amber-500", proficiency: 75 },
        { name: "Visual Design", icon: <FiServer />, color: "text-pink-500", proficiency: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const skillIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200 } },
    hover: { 
      scale: 1.2, 
      rotate: 10, 
      transition: { duration: 0.3 },
      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
    }
  };

  const cardVariants = {
    normal: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03, 
      y: -8,
      boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({ 
      width: `${i}%`, 
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" } 
    })
  };

  // Skill cloud animation
  const floatingIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 1, 0],
      opacity: [0, 0.6, 0.6, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  const tabs = [
    { name: "All Skills", icon: <FiLayers /> },
    { name: "Frontend", icon: <RiComputerLine /> },
    { name: "Backend", icon: <FaNodeJs /> },
    { name: "Database", icon: <RiDatabase2Line /> },
    { name: "DevOps", icon: <RiCloudLine /> },
    { name: "AI/ML", icon: <RiBrainLine /> }
  ];

  const filteredCategories = activeTab === 0 
    ? skillCategories 
    : skillCategories.filter((_, index) => index === activeTab - 1);

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500 relative overflow-hidden`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient background */}
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${darkMode ? 'from-purple-800 via-blue-900 to-gray-900' : 'from-purple-200 via-blue-200 to-gray-100'} transition-colors duration-500`}></div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 ${darkMode ? 'opacity-5' : 'opacity-10'}`}>
          <div className="absolute inset-0" style={{ 
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px), 
                              linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}></div>
        </div>
        
        {/* Floating icons */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const icons = [
              <FaReact className="text-cyan-500" />,
              <SiTypescript className="text-blue-600" />,
              <FaPython className="text-blue-400" />,
              <SiTensorflow className="text-orange-500" />,
              <SiSolidity className="text-gray-600 dark:text-gray-300" />,
              <SiPostgresql className="text-blue-700" />,
              <SiNextdotjs className={`${darkMode ? 'text-white' : 'text-black'}`} />,
              <SiGraphql className="text-pink-600" />,
              <SiTailwindcss className="text-cyan-400" />,
              <FaNodeJs className="text-green-600" />,
              <FaDocker className="text-blue-500" />,
              <SiKubernetes className="text-blue-600" />,
              <SiMongodb className="text-green-500" />,
              <SiRedis className="text-red-500" />,
              <SiJavascript className="text-yellow-500" />
            ];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  animate: { 
                    scale: [0, 1, 1, 0],
                    opacity: [0, 0.6, 0.6, 0],
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      ease: "easeInOut"
                    }
                  }
                }}
                initial="hidden"
                animate="animate"
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`
                }}
              >
                {randomIcon}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with animated title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            My <motion.span 
              className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Technical Skills
            </motion.span>
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            A comprehensive showcase of my technical expertise across various domains of software development, system architecture, and emerging technologies.
          </motion.p>
          <motion.div 
            className={`w-20 h-1 mx-auto mt-6 ${darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-blue-400'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </motion.div>

        {/* Skill category tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === idx 
                  ? `${darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'} shadow-lg`
                  : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with enhanced animations */}
        <motion.div 
  className={`grid ${activeTab === 0 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-4xl mx-auto'} gap-8`}
  variants={containerVariants}
  initial="hidden"
  animate={animate ? "visible" : "hidden"}
  key={activeTab} // Re-render animation when tab changes
>
  {filteredCategories.map((category, index) => (
    <motion.div 
      key={index}
      variants={itemVariants}
      custom={index}
      whileHover="hover"
      initial="normal"
// Remove duplicate variants prop since it's already defined above
      onHoverStart={() => setHoveredCategory(index)}
      onHoverEnd={() => setHoveredCategory(null)}
      className={`rounded-xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 border-2 ${
        hoveredCategory === index 
          ? `${darkMode ? 'border-purple-500' : 'border-purple-400'}`
          : `${darkMode ? 'border-gray-700' : 'border-gray-100'}`
      }`}
    >
              {/* Card decoration - top accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${index % 3 === 0 ? 'from-purple-500 to-blue-500' : index % 3 === 1 ? 'from-blue-500 to-cyan-400' : 'from-indigo-500 to-purple-500'}`}></div>
              
              {/* Category Header */}
              <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center gap-4`}>
                <motion.div 
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm ${
                    hoveredCategory === index 
                      ? `${darkMode ? 'bg-purple-600' : 'bg-purple-500'} text-white`
                      : ''
                  }`}
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <motion.p 
                    className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredCategory === index ? 1 : 0, 
                      height: hoveredCategory === index ? 'auto' : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.description}
                  </motion.p>
                </div>
              </div>
              
              {/* Skills List with proficiency bars */}
              <div className="p-6">
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillIconVariants}
                      whileHover="hover"
                      className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 cursor-default relative overflow-hidden group`}
                    >
                      {/* Skill proficiency indicator (appears on hover) */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 h-1 ${skill.color.replace('text-', 'bg-')}`}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={skill.proficiency}
                        viewport={{ once: true }}
                      />
                      
                      <div className={`text-3xl mb-2 ${skill.color} relative z-10`}>
                        {skill.icon}
                      </div>
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} relative z-10`}>
                        {skill.name}
                      </span>
                      
                      {/* Proficiency tooltip (appears on hover) */}
                      <motion.div 
                        className={`absolute top-0 right-0 px-2 py-1 text-xs ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {skill.proficiency}%
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Card footer with animated border */}
              <motion.div 
                className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} relative overflow-hidden`}
                initial={{ opacity: 0.5 }}
              >
                <motion.div 
                  className={`h-full bg-gradient-to-r ${index % 3 === 0 ? 'from-purple-500 to-blue-500' : index % 3 === 1 ? 'from-blue-500 to-cyan-400' : 'from-indigo-500 to-purple-500'}`}
                  initial={{ x: "-100%" }}
                  animate={{ 
                    x: hoveredCategory === index ? "0%" : "-100%" 
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with additional info */}
        <motion.div 
          className={`mt-16 p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-lg">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Continuously Expanding My Skills
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Technology evolves rapidly, and I make it a priority to stay current with emerging trends and tools. 
                I regularly dedicate time to learning new technologies and deepening my understanding of existing ones.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Currently exploring: Rust, WebAssembly, and advanced cloud-native architectures.
              </p>
            </div>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  30+
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Technologies
                </div>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  1+
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Years Experience
                </div>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Commitment
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;