import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
        {/* Navbar with theme controls */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        {/* Main content with all routes */}
        <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/skills" element={<Skills darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/achievements" element={<Achievements darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;