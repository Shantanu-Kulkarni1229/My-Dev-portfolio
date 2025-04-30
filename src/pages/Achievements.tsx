import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTrophy, FaChalkboardTeacher, FaLightbulb, FaChevronLeft, FaChevronRight, FaGithub, FaCertificate, FaMedal, FaCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Achievements = ({ darkMode }: { darkMode: boolean }) => {
  const achievements = [
    {
      id: 1,
      title: "3rd Prize Ideation 2.0 Mumbai",
      type: "Ideathon",
      description: "Secured 3rd Prize at Ideation 2.0 held in Mumbai among 400+ teams from across the country. Our innovative idea impressed the judges and won us a cash prize of ₹1,00,000.",
      date: "2024",
      icon: <FaTrophy className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_hackathon-win-ai-healthcare-activity-123456789",
      images: [
        "/achievements/hackathon1.jpg",
        "/achievements/hackathon2.jpg",
        "/achievements/hackathon3.jpg"
      ],
      stats: [
        { label: "Teams", value: "400+" },
        { label: "Level", value: "National" },
        { label: "Prize", value: "₹1,00,000" }
      ]
    },
    {
      id: 2,
      title: "AI Workshop Speaker",
      type: "Session",
      description: "Conducted a 3-day workshop on Practical AI Applications for 150+ participants at TechFest 2023. Covered topics including TensorFlow implementation, real-world case studies, and ethical considerations in AI development. Received a 4.9/5 rating from participants.",
      date: "Aug 2023",
      icon: <FaChalkboardTeacher className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_ai-workshop-machinelearning-activity-123456789",
      images: [
        "/achievements/workshop1.jpg",
        "/achievements/workshop2.jpg"
      ],
      stats: [
        { label: "Participants", value: "150+" },
        { label: "Duration", value: "3 days" },
        { label: "Rating", value: "4.9/5" }
      ]
    },
    {
      id: 3,
      title: "Startup Ideathon Finalist",
      type: "Ideathon",
      description: "Selected among top 10 teams nationwide for our blockchain-based voting system concept at Startup India Challenge. Our solution addressed election transparency issues and was praised by industry experts for its innovative approach to decentralized voting.",
      date: "May 2023",
      icon: <FaLightbulb className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_ideathon-startup-blockchain-activity-123456789",
      images: [
        "/achievements/ideathon1.jpg",
        "/achievements/ideathon2.jpg",
        "/achievements/ideathon3.jpg",
        "/achievements/ideathon4.jpg"
      ],
      stats: [
        { label: "Teams", value: "500+" },
        { label: "Finalists", value: "Top 10" },
        { label: "Funding", value: "$50K" }
      ]
    },
    {
      id: 4,
      title: "Open Source Contributor",
      type: "Contribution",
      description: "Recognized as Top Contributor for React libraries with 50+ merged PRs and 10+ maintained packages. My contributions helped improve performance by 15% in several widely-used components. Also mentored 5 new contributors to the ecosystem.",
      date: "Mar 2023",
      icon: <FaGithub className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_opensource-react-contributor-activity-123456789",
      images: [
        "/achievements/opensource1.jpg",
        "/achievements/opensource2.jpg"
      ],
      stats: [
        { label: "PRs", value: "50+" },
        { label: "Packages", value: "10+" },
        { label: "Performance", value: "15%" }
      ]
    },
    {
      id: 5,
      title: "AWS Certified Developer",
      type: "Certification",
      description: "Earned the AWS Certified Developer - Associate certification demonstrating expertise in developing and maintaining applications on AWS. Covered services like Lambda, API Gateway, DynamoDB, and best practices for cloud-native development.",
      date: "Feb 2023",
      icon: <FaCertificate className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_aws-certified-developer-activity-123456789",
      images: [
        "/achievements/aws1.jpg",
        "/achievements/aws2.jpg"
      ],
      stats: [
        { label: "Exam", value: "DVA-C02" },
        { label: "Score", value: "890/1000" },
        { label: "Validity", value: "3 years" }
      ]
    },
    {
      id: 6,
      title: "Tech Conference Speaker",
      type: "Conference",
      description: "Invited speaker at DevConf 2023 discussing 'The Future of Web Development with WASM'. Presented case studies and benchmarks showing 3-5x performance improvements for compute-heavy applications using WebAssembly.",
      date: "Jan 2023",
      icon: <FaCode className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_webassembly-conference-speaker-activity-123456789",
      images: [
        "/achievements/conference1.jpg",
        "/achievements/conference2.jpg",
        "/achievements/conference3.jpg"
      ],
      stats: [
        { label: "Attendees", value: "300+" },
        { label: "Duration", value: "45 min" },
        { label: "Performance", value: "3-5x" }
      ]
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const AchievementCard = ({ achievement }: { achievement: typeof achievements[0] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1
    });

    const nextImage = () => {
      setCurrentImageIndex(prev => 
        prev === achievement.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex(prev => 
        prev === 0 ? achievement.images.length - 1 : prev - 1
      );
    };

    // Auto rotation effect
    useEffect(() => {
      if (!autoRotate || achievement.images.length <= 1) return;
      
      const interval = setInterval(() => {
        nextImage();
      }, 5000);

      return () => clearInterval(interval);
    }, [autoRotate, currentImageIndex, achievement.images.length]);

    // Touch support for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
      setAutoRotate(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 50) {
        nextImage();
      }

      if (touchStart - touchEnd < -50) {
        prevImage();
      }
    };

    // Keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
      <motion.div 
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover="hover"
        className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 h-full flex flex-col`}
        onMouseEnter={() => setAutoRotate(false)}
        onMouseLeave={() => setAutoRotate(true)}
      >
        {/* Custom Carousel with Touch Support */}
        <div 
          className="h-64 relative overflow-hidden group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: achievement.images.length > 1 ? (currentImageIndex === 0 ? -20 : 20) : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: achievement.images.length > 1 ? (currentImageIndex === achievement.images.length - 1 ? 20 : -20) : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={achievement.images[currentImageIndex]}
                alt={`${achievement.title} ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/80 to-gray-800/30' : 'from-white/80 to-gray-50/30'}`} />
              
              {/* Navigation Arrows - Visible in both themes */}
              {achievement.images.length > 1 && (
                <>
                  <motion.button 
                    onClick={prevImage}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/80 text-white' : 'bg-white/80 hover:bg-gray-100/80 text-gray-800 shadow-md'}`}
                    aria-label="Previous image"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft />
                  </motion.button>
                  <motion.button 
                    onClick={nextImage}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600/80 text-white' : 'bg-white/80 hover:bg-gray-100/80 text-gray-800 shadow-md'}`}
                    aria-label="Next image"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight />
                  </motion.button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Indicators - Visible in both themes */}
          {achievement.images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {achievement.images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${darkMode ? 'bg-gray-400 hover:bg-gray-300' : 'bg-gray-600 hover:bg-gray-700'} ${currentImageIndex === index ? (darkMode ? 'bg-white w-4' : 'bg-gray-900 w-4') : 'opacity-50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <motion.div 
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-2 ${
                  darkMode ? 'bg-gray-700 text-purple-400' : 'bg-gray-200 text-purple-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {achievement.icon}
                {achievement.type}
              </motion.div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {achievement.title}
              </h3>
            </div>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {achievement.date}
            </span>
          </div>

          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex-1`}>
            {achievement.description}
          </p>

          {/* Stats */}
          {achievement.stats && (
            <div className="mb-4">
              <div className="grid grid-cols-3 gap-2">
                {achievement.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className={`p-2 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* LinkedIn Link */}
          <motion.a
            href={achievement.linkedinPost}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, backgroundColor: darkMode ? '#1e40af' : '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg mt-auto ${
              darkMode ? 'bg-gray-700 text-blue-400 hover:bg-blue-900' : 'bg-gray-200 text-blue-600 hover:bg-blue-100'
            } transition-colors shadow-sm`}
          >
            <FaLinkedin /> View Post
          </motion.a>
        </div>
      </motion.div>
    );
  };

  const [filter, setFilter] = useState('all');
  const filteredAchievements = filter === 'all' 
    ? achievements 
    : achievements.filter(a => a.type.toLowerCase() === filter.toLowerCase());

  const filterOptions = [
    { value: 'all', label: 'All', icon: <FaMedal /> },
    { value: 'Hackathon', label: 'Hackathons', icon: <FaTrophy /> },
    { value: 'Session', label: 'Sessions', icon: <FaChalkboardTeacher /> },
    { value: 'Ideathon', label: 'Ideathons', icon: <FaLightbulb /> },
    { value: 'Contribution', label: 'Contributions', icon: <FaGithub /> },
    { value: 'Certification', label: 'Certifications', icon: <FaCertificate /> }
  ];

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`} id="achievements">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            whileHover={{ scale: 1.02 }}
          >
            My <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Highlights of my professional journey, awards, and recognitions that showcase my expertise and contributions.
          </motion.p>
          <motion.div 
            className={`w-20 h-1 mx-auto ${darkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-blue-400'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
                filter === option.value 
                  ? (darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white')
                  : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.icon}
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {filteredAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="fixed bottom-8 right-8 z-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaTrophy className={`text-4xl ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
        </motion.div>

        <motion.div
          className="fixed top-20 left-8 z-10"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <FaLightbulb className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
        </motion.div>

        <motion.div
          className="fixed top-1/3 right-12 z-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FaCertificate className={`text-2xl ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;