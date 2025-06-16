
import { motion } from "framer-motion";
import { FaUsers, FaBullhorn, FaTrophy } from "react-icons/fa";

const OrganizationalSection = () => {
  const organizations = [
    {
      name: "UKMK Universitas Tidar",
      role: "Public Relations Staff",
      period: "Mar 2023 - Feb 2024",
      achievements: [
        "Represented the organization at regional events",
        "Coordinated communication materials for university activities",
        "Primary delegate for 4 inter-university cooperation events",
      ],
      icon: <FaBullhorn className="text-tech-purple text-xl" />,
      image: "image/public-relation-UKMK.jpeg",
    },
    {
      name: "JKS Foreg Tengah 2023",
      role: "Lead Organizer",
      period: "2023",
      achievements: [
        "Led team of 48 students across 9 divisions for a regional university forum",
        "Coordinated cooperation forum for 11 universities in Central Java-DIY region",
        "Successfully managed event budget and sponsorships",
      ],
      icon: <FaUsers className="text-tech-purple text-xl" />,
      image: "image/lead-organizer-1.jpeg",
    },
  ];

  return (
    <section id="organizations" className="py-20 bg-tech-soft-gray/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Organizational Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-[#1A1F2C] rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800 dark:text-white">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-xl overflow-hidden bg-tech-soft-blue/10">
                      <img
                        src={org.image}
                        alt={org.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-soft-blue flex-shrink-0">
                        {org.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tech-dark-purple dark:text-white">
                          {org.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <span className="font-medium text-tech-purple dark:text-tech-light-purple">
                            {org.role}
                          </span>
                          <span className="hidden sm:inline text-tech-charcoal dark:text-gray-300">•</span>
                          <span className="text-tech-charcoal dark:text-gray-300">{org.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-tech-secondary-purple mb-2 flex items-center dark:text-tech-light-purple">
                        <FaTrophy className="mr-2 text-tech-purple dark:text-tech-light-purple" />
                        <span>Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {org.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-tech-purple text-lg mt-0.5 dark:text-tech-light-purple">•</span>
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

export default OrganizationalSection;
