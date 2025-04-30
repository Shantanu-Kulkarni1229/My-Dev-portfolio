import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  const projects = [
    {
      id: 1,
      title: "Hawk",
      description: "OEM vulnerability detection tool using intelligent web scraping and Python automation.",
      tags: ["Python", "BeautifulSoup", "Flask", "Requests", "MongoDB"],
      image: "/projects/hawk.jpg",
      githubLink: "https://github.com/shantanu/hawk-vulnerability-tool",
      linkedinPost: "https://linkedin.com/posts/shantanu_hawk-cybersecurity-activity-321",
      liveLink: "https://hawkscanner.live"
    },
    {
      id: 2,
      title: "RecycleIT",
      description: "Eco-conscious marketplace for recycling and exchanging old electronics responsibly.",
      tags: ["React", "Firebase", "Firestore", "Tailwind CSS"],
      image: "/projects/recycleit.jpg",
      githubLink: "https://github.com/shantanu/recycleit",
      linkedinPost: "https://linkedin.com/posts/shantanu_recycleit-sustainability-activity-987",
      liveLink: "https://recycleit.org"
    },
    {
      id: 3,
      title: "SnapLend",
      description: "A peer-to-peer digital lending platform for quick and secure personal loans.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/projects/snaplend.jpg",
      githubLink: "https://github.com/shantanu/snaplend",
      linkedinPost: "https://linkedin.com/posts/shantanu_snaplend-fintech-activity-654",
      liveLink: "https://snaplend.app"
    },
    {
      id: 4,
      title: "ChatVerse",
      description: "A real-time chat app with group chats, user authentication, and a sleek UI design.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
      image: "/projects/chatverse.jpg",
      githubLink: "https://github.com/shantanu/chatverse",
      linkedinPost: "https://linkedin.com/posts/shantanu_chatverse-chatapp-activity-123",
      liveLink: "https://chatverse.live"
    },
    {
      id: 5,
      title: "MeetVerse",
      description: "A smooth and scalable video calling platform with screen sharing and messaging support.",
      tags: ["React", "WebRTC", "Node.js", "Socket.IO", "Tailwind CSS"],
      image: "/projects/meetverse.jpg",
      githubLink: "https://github.com/shantanu/meetverse",
      linkedinPost: "https://linkedin.com/posts/shantanu_meetverse-videoapp-activity-456",
      liveLink: "https://meetverse.live"
    },
    {
      id: 6,
      title: "WriteVerse",
      description: "A collaborative markdown editor with real-time sync and minimal distraction design.",
      tags: ["React", "Firebase", "Quill.js", "Tailwind CSS"],
      image: "/projects/writeverse.jpg",
      githubLink: "https://github.com/shantanu/writeverse",
      linkedinPost: "https://linkedin.com/posts/shantanu_writeverse-editor-activity-789",
      liveLink: "https://writeverse.dev"
    },
    {
      id: 7,
      title: "VidTube",
      description: "A YouTube-inspired video streaming platform with search, categorization, and light/dark mode.",
      tags: ["React", "RapidAPI", "Material UI", "React Router"],
      image: "/projects/vidtube.jpg",
      githubLink: "https://github.com/shantanu/vidtube",
      linkedinPost: "https://linkedin.com/posts/shantanu_vidtube-videostreaming-activity-741",
      liveLink: "https://vidtube.tv"
    },
    {
      id: 8,
      title: "MovieExplorer",
      description: "A movie search web app with live data from TMDB API and responsive UI.",
      tags: ["React", "TMDB API", "Tailwind CSS", "Axios"],
      image: "/projects/movieexplorer.jpg",
      githubLink: "https://github.com/shantanu/movieexplorer",
      linkedinPost: "https://linkedin.com/posts/shantanu_movieexplorer-react-activity-852",
      liveLink: "https://movieexplorer.io"
    },
    {
      id: 9,
      title: "CurrentBuzz",
      description: "A news aggregator that fetches trending topics and stories from various sources in real time.",
      tags: ["React", "News API", "Tailwind CSS", "Context API"],
      image: "/projects/currentbuzz.jpg",
      githubLink: "https://github.com/shantanu/currentbuzz",
      linkedinPost: "https://linkedin.com/posts/shantanu_currentbuzz-newsapp-activity-963",
      liveLink: "https://currentbuzz.today"
    }
  ];
  

  // Tag color mapping for visual variety
  const tagColors = {
    "React": "from-blue-400 to-blue-600",
    "TypeScript": "from-blue-500 to-blue-700",
    "Three.js": "from-purple-400 to-purple-600",
    "Tailwind CSS": "from-sky-400 to-sky-600",
    "Next.js": "from-black to-gray-700",
    "Node.js": "from-green-400 to-green-600",
    "MongoDB": "from-green-500 to-green-700",
    "Chart.js": "from-yellow-400 to-yellow-600",
    "Python": "from-blue-600 to-blue-800",
    "FastAPI": "from-teal-400 to-teal-600",
    "OpenAI": "from-emerald-400 to-emerald-600",
    "React Native": "from-cyan-400 to-cyan-600",
    "Firebase": "from-orange-400 to-orange-600",
    "Redux": "from-purple-500 to-purple-700",
    "D3.js": "from-amber-400 to-amber-600",
    "Solidity": "from-gray-500 to-gray-700",
    "Web3.js": "from-indigo-400 to-indigo-600",
    "Hardhat": "from-yellow-500 to-yellow-700",
    "NestJS": "from-red-400 to-red-600",
    "PostgreSQL": "from-blue-600 to-blue-800",
    "GraphQL": "from-pink-400 to-pink-600",
  
    // NEW TAG COLORS
    "Socket.IO": "from-gray-400 to-gray-600",
    "JWT": "from-yellow-600 to-yellow-800",
    "Quill.js": "from-violet-400 to-violet-600",
    "RapidAPI": "from-indigo-500 to-indigo-700",
    "Material UI": "from-indigo-400 to-indigo-600",
    "Axios": "from-blue-300 to-blue-500",
    "TMDB API": "from-teal-500 to-teal-700",
    "Context API": "from-green-300 to-green-500",
    "Requests": "from-red-400 to-red-600",
    "BeautifulSoup": "from-lime-400 to-lime-600",
    "Flask": "from-gray-600 to-gray-800"
  };
  

  const getTagColor = (tag: string) => {
    return tagColors[tag as keyof typeof tagColors] || "from-gray-400 to-gray-600";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, type: "spring", stiffness: 100 }
    }
  };

  const titleLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 }
    })
  };

  const titleText = "My Projects";
  
  // Effects for project cards
  const cardBackgroundVariants = {
    initial: { backgroundPosition: "0% 0%" },
    hover: { 
      backgroundPosition: "100% 100%",
      transition: { duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  };

  return (
    <div className={`min-h-screen py-24 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'} transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        {/* Section Header with enhanced animations */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="flex justify-center mb-4">
            {titleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleLetterVariants}
                initial="hidden"
                animate="visible"
                className={`text-5xl md:text-6xl font-extrabold ${
                  letter === "P" 
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent" 
                    : darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            className="relative h-2 w-40 mx-auto overflow-hidden rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"
              animate={{ 
                x: ["0%", "100%", "0%"],
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
          </motion.div>
        </motion.div>

        {/* Projects Grid with enhanced effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.03 }}
              className={`rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200/50'
              } transition-all duration-500`}
            >
              {/* Project Image with animation */}
              <div className="relative h-52 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{
                    filter: "brightness(1.1) contrast(1.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.div>
                <motion.div 
                  className={`absolute inset-0 ${
                    darkMode 
                      ? 'bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent' 
                      : 'bg-gradient-to-t from-white via-gray-50/80 to-transparent'
                  }`}
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Project badges */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  #{project.id}
                </motion.div>
              </div>

              {/* Project Content with enhanced styling */}
              <div className="p-6">
                <motion.h3 
                  className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{
                    background: "linear-gradient(to right, #a855f7, #3b82f6)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className={`mb-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Tags with colorful gradients */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index}
                      className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getTagColor(tag)} text-white font-medium shadow-sm`}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Links with improved animations */}
                <motion.div 
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-700 text-white hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      } transition-colors duration-300`}
                    >
                      <FiGithub className="text-lg" />
                    </motion.a>
                    <motion.a
                      href={project.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' 
                          : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                      } transition-colors duration-300`}
                    >
                      <FaLinkedin className="text-lg" />
                    </motion.a>
                  </div>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      initial: { backgroundPosition: "0% 0%" },
                      hover: { 
                        backgroundPosition: "100% 100%",
                        transition: { 
                          duration: 3, 
                          ease: "linear", 
                          repeat: Infinity, 
                          repeatType: "reverse" as const 
                        }
                      }
                    }}
                    initial="initial"
                    animate="hover"
                    className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium
                      bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 text-white
                      shadow-lg shadow-purple-500/20 transition-all duration-300`}
                  >
                    <span>Visit</span> <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                </motion.div>
              </div>
              
              {/* Decorative corner effect */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 opacity-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.8, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-tr-xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced GitHub Corner */}
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-0 right-0"
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className={`w-20 h-20 ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
              : 'bg-gradient-to-br from-gray-100 to-gray-200'
          } rounded-bl-3xl flex items-center justify-center shadow-lg border-b border-l ${
            darkMode ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <motion.div
              animate={{ 
                rotateZ: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
            >
              <FaGithub className={`text-3xl ${
                darkMode 
                  ? 'text-gradient bg-gradient-to-r from-purple-400 to-blue-500' 
                  : 'text-gradient bg-gradient-to-r from-purple-600 to-blue-700'
              }`} />
            </motion.div>
          </div>
        </motion.a>
        
        {/* Adding a floating "Scroll for more" indicator */}
        <motion.div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: false }}
        >
          <motion.div
            className={`px-6 py-3 rounded-full ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-800 border border-gray-200'
            } shadow-xl flex items-center gap-2 font-medium`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll for more projects</span>
            <motion.svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <path
                fill={darkMode ? "#fff" : "#333"}
                d="M8 12.5a.5.5 0 0 1-.4-.2l-4-5a.5.5 0 1 1 .8-.6L8 11.3l3.6-4.6a.5.5 0 1 1 .8.6l-4 5a.5.5 0 0 1-.4.2z"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;