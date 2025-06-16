
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#1A1F2C] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-tech-dark-purple dark:text-white">
              Jerico<span className="text-tech-purple">.dev</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Front-End & Back-End Developer | Certified Junior Network Administrator
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/jerico-c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-300 hover:text-tech-purple dark:hover:text-tech-purple transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:jericochristianto@gmail.com"
                aria-label="Email"
                className="text-gray-600 dark:text-gray-300 hover:text-tech-purple dark:hover:text-tech-purple transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jerico-christianto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-300 hover:text-tech-purple dark:hover:text-tech-purple transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="flex space-x-4 mb-6">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-tech-purple dark:hover:text-tech-purple transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-tech-purple dark:hover:text-tech-purple transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-tech-purple dark:hover:text-tech-purple transition-colors text-sm"
              >
                Contact
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1F490pPuYBuSy0Rm9B_vO2GTmQcX3KuTF/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-tech-purple text-white rounded-md hover:bg-tech-secondary-purple transition-colors text-sm font-medium"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Jerico Christianto.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
