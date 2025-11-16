
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const EducationSection = () => {
  const educationItems = [
    {
      institution: "Universitas Tidar",
      degree: "S1 in Electrical Engineering",
      period: "Aug 2022 - Present",
      description: "",
      focus: "Concentration: Computer Systems and Information",
      courses: [
        "Algorithms and Programming",
        "Data Communication",
        "Computer Networks",
        "Advanced Computer Networks",
      ],
      icon: <FaGraduationCap className="text-tech-purple text-xl" />,
    },
    {
      institution: "Coding Camp by DBS Foundation",
      degree: "Front-End and Back-End Development",
      period: "Feb 2025 - Jul 2025",
      description: "Intensive training in web development technologies",
      focus: "Focus: HTML, CSS, JavaScript, API Integration",
      courses: [],
      icon: <FaLaptopCode className="text-tech-purple text-xl" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-tech-soft-gray/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="mb-12 last:mb-0"
            >
              <div className="relative">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>

                  <div className="bg-white dark:bg-[#1A1F2C] rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 ml-2 dark:text-white">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-soft-blue flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tech-dark-purple dark:text-white">
                          {item.institution}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-tech-charcoal dark:text-gray-300">
                          <span className="font-medium text-tech-purple dark:text-tech-light-purple">{item.degree}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-0 md:ml-16">
                      <p className="text-tech-dark-purple font-medium dark:text-white">{item.description}</p>
                      <p className="text-tech-charcoal mt-1 dark:text-gray-300">{item.focus}</p>
                      
                      {item.courses.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-tech-secondary-purple mb-2 dark:text-tech-light-purple">
                            Relevant Courses
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.courses.map((course) => (
                              <li
                                key={course}
                                className="flex items-center space-x-2"
                              >
                                <span className="w-2 h-2 bg-tech-purple rounded-full"></span>
                                <span className="text-tech-charcoal dark:text-gray-300 text-sm">{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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

export default EducationSection;
