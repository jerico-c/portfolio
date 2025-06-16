
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        {/* Background gradient - adaptive to dark/light mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted to-background opacity-70"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-tech-purple dark:text-tech-light-purple font-medium"
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-dark-purple dark:text-white"
            >
              Hi, I'm{" "}
              <span className="gradient-text font-extrabold">
                Jerico Christianto
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl md:text-2xl text-tech-secondary-purple dark:text-tech-light-purple font-semibold h-14"
            >
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  1000,
                  "Back-End Developer",
                  1000,
                  "Network Administrator",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-tech-charcoal dark:text-gray-300 max-w-xl"
            >
              Fullstack Developer | Certified Junior Network Administrator from BNSP
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex space-x-4 mt-4"
            >
              <a
                href="https://github.com/jerico-c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-tech-dark-purple dark:text-tech-light-purple hover:text-tech-purple dark:hover:text-tech-purple transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:jericochristianto@gmail.com"
                aria-label="Email"
                className="text-tech-dark-purple dark:text-tech-light-purple hover:text-tech-purple dark:hover:text-tech-purple transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jerico-christianto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-tech-dark-purple dark:text-tech-light-purple hover:text-tech-purple dark:hover:text-tech-purple transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <a
                href="#projects"
                className="btn-primary dark:bg-tech-light-purple dark:hover:bg-tech-purple flex items-center justify-center space-x-2"
              >
                <span>View My Projects</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1F490pPuYBuSy0Rm9B_vO2GTmQcX3KuTF/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline dark:border-tech-light-purple dark:text-tech-light-purple dark:hover:bg-tech-light-purple/10 flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <FaDownload size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="w-80 h-80 bg-tech-purple/10 dark:bg-tech-light-purple/10 rounded-full flex items-center justify-center animate-pulse-slow">
              <div className="w-72 h-72 bg-tech-purple/20 dark:bg-tech-light-purple/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white dark:bg-gray-900 rounded-full overflow-hidden border-4 border-tech-purple/30 dark:border-tech-light-purple/30 shadow-lg">
                  <img
                    src="image/profpic.png"
                    alt="Jerico Christianto"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-soft-blue dark:bg-tech-dark-purple/50 rounded-lg shadow-md rotate-12 flex items-center justify-center animate-float">
              <span className="text-3xl">💻</span>
            </div>

            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-tech-soft-green dark:bg-tech-dark-purple/50 rounded-lg shadow-md -rotate-12 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-3xl">🌐</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-tech-purple dark:text-tech-light-purple animate-bounce"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
