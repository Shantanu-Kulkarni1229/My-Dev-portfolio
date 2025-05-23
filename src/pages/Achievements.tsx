import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTrophy, FaChalkboardTeacher, FaLightbulb, FaChevronLeft, FaChevronRight, FaGithub, FaCertificate, FaMedal, FaCode, FaUsers } from 'react-icons/fa';
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
      linkedinPost: "https://www.linkedin.com/posts/shantanu-kulkarni1229_ideation2-teampravartak-projecthawk-activity-7320830024666759168-h0sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZYDY0Ba-qYRrnDrDN5QtXTVLaA0bkpGvA",
      images: [
        "assests/images/Achievements  Section/Ideation Mumbai/1.jpg",
        "assests/images/Achievements  Section/Ideation Mumbai/2.jpg",
        "assests/images/Achievements  Section/Ideation Mumbai/3.jpg",
      ],
      stats: [
        { label: "Teams", value: "400+" },
        { label: "Level", value: "National" },
        { label: "Prize", value: "₹1,00,000" }
      ]
    },
    {
      id: 2,
      title: "1st Prize Spark MKD Institute Of Technlogy 2025",
      type: "Hackathon",
      description: "Won 1st Prize at Spark 2025, a national-level competition with 150+ teams. Our AI-powered solution stood out and bagged us a cash prize of ₹51,000.",
      date: "2025",
      icon: <FaTrophy className="text-2xl" />,
      linkedinPost: "https://www.linkedin.com/posts/shantanu-kulkarni1229_ideation2-teampravartak-projecthawk-activity-7320830024666759168-h0sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZYDY0Ba-qYRrnDrDN5QtXTVLaA0bkpGvA",
      images: [
        "assests/images/Achievements  Section/MKD Spark/1.jpg",
        "assests/images/Achievements  Section/MKD Spark/2.jpg",
        "assests/images/Achievements  Section/MKD Spark/3.jpg",
      ],
      stats: [
        { label: "Teams", value: "150+" },
        { label: "Level", value: "National" },
        { label: "Prize", value: "₹51,000" }
      ]
    },
    {
      id: 3,
    title: "2nd Prize DIPEX Computational Intelligence",
    type: "Project Competition",
    description: "Awarded 2nd Prize in the Computational Intelligence category at DIPEX. Competed among 2000+ state-level teams and received a cash prize of ₹5,000.",
    date: "2024",
    icon: <FaTrophy className="text-2xl" />,
      linkedinPost: "https://www.linkedin.com/posts/shantanu-kulkarni1229_ideation2-teampravartak-projecthawk-activity-7320830024666759168-h0sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZYDY0Ba-qYRrnDrDN5QtXTVLaA0bkpGvA",
      images: [
        "assests/images/Achievements  Section/Dipex 2025/1.jpg",
        "assests/images/Achievements  Section/Dipex 2025/2.jpg",
        "assests/images/Achievements  Section/Dipex 2025/3.jpg",
      ],
      stats: [
        { label: "Teams", value: "2000+" },
        { label: "Level", value: "State" },
        { label: "Prize", value: "₹5,000" }
      ]
    },
    {
      id: 4,
      title: "2nd Prize India Innovates",
      type: "Innovation Challenge",
      description: "Won 2nd Prize at the India Innovates national-level event competing with 50+ teams. Recognized for our innovative problem-solving and awarded ₹7,500 cash prize.",
      date: "2024",
      icon: <FaTrophy className="text-2xl" />,
      linkedinPost: "https://www.linkedin.com/posts/shantanu-kulkarni1229_ideation2-teampravartak-projecthawk-activity-7320830024666759168-h0sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZYDY0Ba-qYRrnDrDN5QtXTVLaA0bkpGvA",
      images: [
        "assests/images/Achievements  Section/India Innovates/1.jpg",
        "assests/images/Achievements  Section/India Innovates/2.jpg",
        "assests/images/Achievements  Section/India Innovates/3.jpg",
      ],
      stats: [
        { label: "Teams", value: "50+" },
        { label: "Level", value: "National" },
        { label: "Prize", value: "₹7,500" }
      ]
    },
    {
      id: 5,
    title: "3rd Runner-up Hack The Gap",
    type: "Hackathon",
    description: "Secured 3rd Runner-up position at Hack The Gap among 100+ teams. Our creative tech solution earned a cash prize of ₹2,000.",
    date: "2024",
    icon: <FaTrophy className="text-2xl" />,
      linkedinPost: "https://www.linkedin.com/posts/shantanu-kulkarni1229_ideation2-teampravartak-projecthawk-activity-7320830024666759168-h0sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZYDY0Ba-qYRrnDrDN5QtXTVLaA0bkpGvA",
      images: [
        "assests/images/Achievements  Section/India Innovates/1.jpg",
        "assests/images/Achievements  Section/India Innovates/2.jpg",
        "assests/images/Achievements  Section/India Innovates/3.jpg",
      ],
      stats: [
        { label: "Teams", value: "100+" },
        { label: "Level", value: "National" },
        { label: "Prize", value: "₹2,000" }
      ]
    },
    {
      id: 6,
      title: "1st Prize Techlegion 2025",
      type: "Hackathon",
      description: "Won 1st Prize at Techlegion 2025, a College-level competition with 50+ teams. Our AI-powered solution stood out and bagged us a cash prize of ₹2500.",
      date: "2025",
      icon: <FaTrophy className="text-2xl" />,
      linkedinPost: "https://www.linkedin.com/posts/shantanu-kulkarni1229_ideation2-teampravartak-projecthawk-activity-7320830024666759168-h0sb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZYDY0Ba-qYRrnDrDN5QtXTVLaA0bkpGvA",
      images: [
        "assests/images/Achievements  Section/MKD Spark/1.jpg",
        "assests/images/Achievements  Section/MKD Spark/2.jpg",
        "assests/images/Achievements  Section/MKD Spark/3.jpg",
      ],
      stats: [
        { label: "Teams", value: "50+" },
        { label: "Level", value: "College" },
        { label: "Prize", value: "₹2500" }
      ]
    },
    
    
    {
      id:13 ,
      title: "How AI Can Help Police - Maharashtra State Police",
      type: "Guest Session",
      description: "Conducted a special session for Chhatrapati Sambhajinagar Rural Police on 'How AI Can Be Useful for Law Enforcement', covering surveillance systems, predictive policing, and real-time alert mechanisms.",
      date: "Feb 2025",
      icon: <FaCode className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_webassembly-conference-speaker-activity-123456789",
      images: [
        "/achievements/conference1.jpg",
        "/achievements/conference2.jpg",
        "/achievements/conference3.jpg"
      ],
      stats: [
        { label: "Attendees", value: "100+ Police Officials" },
        { label: "Duration", value: "2 Hrs" },
        { label: "Topic", value: "AI For Police" }
      ]
    },
    {
      id:14 ,
      title: "Career Session for High School Students",
      type: "Guest Session",
      description: "Delivered an educational session to 10th–12th grade students on 'Computer Science and AI as Your Future'. Discussed real-world applications, career paths, and skills needed to enter the field.",
      date: "sep 2024",
      icon: <FaCode className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_webassembly-conference-speaker-activity-123456789",
      images: [
        "assests/images/Achievements  Section/BSGM AI Session/1.jpg",
        "assests/images/Achievements  Section/BSGM AI Session/2.jpg",
        "assests/images/Achievements  Section/BSGM AI Session/3.jpg",
      ],
      stats: [
        { label: "Students", value: "10th–12th Grade" },
        { label: "Duration", value: "2 Hrs" },
        { label: "Focus", value: "Career in AI/CS" }
      ]
    },
    {
      id: 15,
      title: "Technical Lead - Coding Ninjas Campus Club",
      type: "Leadership",
      description:
        "Appointed as Technical Lead of the Coding Ninjas Campus Club at our institution. Led various workshops, coding events, and mentorship initiatives to enhance peer learning and competitive coding culture.",
      date: "2024",
      icon: <FaUsers className="text-2xl" />,
      linkedinPost: "https://linkedin.com/posts/yourprofile_codingninjas-clublead-activity-123456789",
      images: ["/achievements/codingninjas-lead.jpg"],
      stats: [
        { label: "Events Conducted", value: "10+" },
        { label: "Participants Impacted", value: "500+" }
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