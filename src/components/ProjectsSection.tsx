
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaServer, FaUbuntu, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
     {
      title: "Eatzi",
      category: "web",
      description: "Become the Project Lead and Full Stack Developer for this Capstone Project. This project is a web based recipe recommendation using Machine Learning and image classification",
      technologies: ["JavaScript", "React", "Tailwind CSS", "RESTful API"],
      image: "image/eatzi.png",
      demoLink: "https://eatzi.netlify.app/",
      codeLink: "https://github.com/jerico-c/eatzi",
      icon: <FaGlobe className="text-tech-purple text-2xl" />,
    },
    {
      title: "Storia",
      category: "web",
      description: "An web app for story sharing. User can upload photo and point a spesific location on a map",
      technologies: ["JavaScript", "Tailwind CSS", "RESTful API"],
      image: "image/StoriaWide.png",
      demoLink: "https://jerico-storia.netlify.app/",
      codeLink: "https://github.com/jerico-c/storia",
      icon: <FaGlobe className="text-tech-purple text-2xl" />,
    },
    {
      title: "Linux Server Setup",
      category: "server",
      description: "Built a Linux-based server with file sharing, web hosting, and database capabilities.",
      technologies: ["Linux", "Apache", "MySQL", "Shell Scripting"],
      image: "image/linux-server.png", 
      demoLink: "#",
      codeLink: "https://github.com/jerico-c/linux-server",
      icon: <FaServer className="text-tech-purple text-2xl" />,
    },
    {
      title: "NoteThink a Notes App",
      category: "web",
      description: "Created a notes app website that connected to Dicoding Notes API using RESTful API.",
      technologies: ["JavaScript", "CSS", "RESTful API"],
      image: "image/notethink.png",
      demoLink: "#",
      codeLink: "https://github.com/jerico-c/NoteThink-notes-app",
      icon: <FaGlobe className="text-tech-purple text-2xl" />,
    },
    {
      title: "Portfolio Website",
      category: "web",
      description: "Created a personal portfolio website using modern frontend technologies.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "image/portfolio.png",
      demoLink: "#",
      codeLink: "https://github.com/jerico-c/NoteThink-notes-app",
      icon: <FaGlobe className="text-tech-purple text-2xl" />,
    },
    {
      title: "uDesign Ubuntu Distro Remastering",
      category: "os",
      description: "Modified components in Ubuntu Distro to create a custom Linux distribution for designer with specialized tools such as InkScape, GIMP, Figma, Photoflare, Karbon, LibreOffice, etc and custom theme.",
      technologies: ["Ubuntu", "Bash", "Linux", "Package Management", "Cubic"],
      image: "image/distro.png",
      demoLink: "#",
      codeLink: "https://github.com/jerico-c/uDesign-Remastering-Ubuntu",
      icon: <FaUbuntu className="text-tech-purple text-2xl" />,
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "server", label: "Server Setup" },
    { id: "os", label: "OS Customization" },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#1A1F2C]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title section-title-dark">Projects</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-tech-purple text-white"
                  : "bg-tech-soft-gray dark:bg-gray-800 text-tech-dark-purple dark:text-white hover:bg-tech-purple/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-[#222] rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-tech-soft-blue/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex space-x-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 hover:bg-white text-tech-purple p-2 rounded-full transition-colors"
                          aria-label="View demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 hover:bg-white text-tech-purple p-2 rounded-full transition-colors"
                          aria-label="View code"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-grow p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-tech-soft-blue flex-shrink-0">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-tech-dark-purple dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-tech-charcoal dark:text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-1 text-xs font-medium bg-tech-soft-gray dark:bg-gray-800 text-tech-purple dark:text-tech-light-purple rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
