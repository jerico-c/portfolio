
import { motion } from "framer-motion";
import { FaBriefcase, FaChalkboardTeacher, FaServer, FaLaptopCode } from "react-icons/fa";

const ExperienceSection = () => {
  const experienceItems = [
    {
      company: "Google Cloud and Dicoding",
      role: "Google Cloud Arcade Facilitator",
      period: "Jul 2025 - Present",
      description:
        "This fully-funded scholarship from Google Cloud offers a unique, gamified learning journey. It is designed to empower Indonesia's digital talent to build and master in-demand skills in cloud computing and artificial intelligence.",
      achievements: [
        "Guide and validate the completion of Google Cloud hands-on labs for participants, ensuring a deep understanding of technical concepts.",
      ],
      icon: <FaChalkboardTeacher className="text-tech-purple text-xl" />,
      image: "/image/arcade.jpeg",
    },
    {
      company: "CROG International Magelang",
      role: "Teaching Staff",
      period: "Aug 2024 - Present",
      description:
        "Teaching programming and robotics concepts to children aged 5-13.",
      achievements: [
        "Developed interactive learning methods that improved student comprehension by 70%",
        "Implemented hands-on projects to reinforce programming concepts",
        "Provided guidance on robotics assembly and programming",
      ],
      icon: <FaChalkboardTeacher className="text-tech-purple text-xl" />,
      image: "/image/CROG-International-2.jpeg",
    },
    {
      company: "Universitas Tidar",
      role: "Teaching Assistant (Programming Practicum)",
      period: "Jan 2025 - Present",
      description:
        "Guiding students in experiments, reviewing reports, and providing feedback.",
      achievements: [
        "Guided 20 students in C++ programming",
        "Evaluated and provided feedback for 160 lab reports (8 lab reports for each student)",
        "Developed supplementary materials that reduced common student errors by 75%",
      ],
      icon: <FaLaptopCode className="text-tech-purple text-xl" />,
      image: "image/teaching-assistant-programming-1.jpeg",
    },
    {
      company: "Universitas Tidar",
      role: "Teaching Assistant (Computer Networks Practicum)",
      period: "Aug 2024 - Dec 2024",
      description:
        "Assisting students with Cisco Packet Tracer, router configuration, and fiber optics.",
      achievements: [
        "Demonstrated network setup and configuration using Cisco equipment",
        "Assisted 18 students in completing network simulation projects with Cisco Packet Tracer and lab exercises",
        "Troubleshot network connectivity issues in real-time",
      ],
      icon: <FaServer className="text-tech-purple text-xl" />,
      image: "image/teaching-assistant-computer-network.jpeg",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#1A1F2C]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title section-title-dark">Work Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {experienceItems.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="bg-white dark:bg-[#222] rounded-xl shadow-sm group-hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 h-60 md:h-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.company} - ${item.role}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-soft-blue flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tech-dark-purple dark:text-white">
                          {item.role}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <span className="font-medium text-tech-purple dark:text-tech-light-purple">{item.company}</span>
                          <span className="hidden sm:inline text-tech-charcoal dark:text-gray-400">•</span>
                          <span className="text-tech-charcoal dark:text-gray-400">{item.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-tech-charcoal dark:text-gray-300 mb-4">{item.description}</p>

                    <div className="mt-4">
                      <h4 className="font-semibold text-tech-secondary-purple dark:text-tech-light-purple mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-tech-purple dark:text-tech-light-purple mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="text-tech-charcoal dark:text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
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

export default ExperienceSection;
