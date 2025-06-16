
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "Problem-solving"},
    { name: "Critical Thinking"},
    { name: "Detail-oriented"},
    { name: "Time Management"},
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#1A1F2C]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title section-title-dark">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-tr from-tech-purple/10 to-tech-soft-gray/30 dark:bg-background/80 p-6 rounded-2xl shadow-sm">
              <div className="prose max-w-none">
                <p className="text-lg text-primary-dark dark:text-white">
                  Specialized in Front-end and Back-end Development and Computer Networks. 
                  I've been certified as a Junior Network Administrator 
                  by the Badan Nasional Sertifikasi Profesi.
                </p>
                <p className="text-lg mt-4 text-secondary-dark dark:text-gray-300">
                  My academic journey has equipped me with strong technical skills in web development 
                  and network administration. I'm passionate about building robust, user-friendly web 
                  applications and setting up secure, efficient network infrastructures.
                </p>
                <p className="text-lg mt-4 text-secondary-dark dark:text-gray-300">
                  Currently, I'm expanding my knowledge through the Coding Camp by DBS Foundation, 
                  focusing on Front-End and Back-End Development.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-tech-dark-purple dark:text-white">Technical Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="tech-tag">HTML/CSS</div>
                  <div className="tech-tag">JavaScript</div>
                  <div className="tech-tag">React</div>
                  <div className="tech-tag">Angular</div>
                  <div className="tech-tag">Node.js</div>
                  <div className="tech-tag">REST APIs</div>
                  <div className="tech-tag">Cisco Networking</div>
                  <div className="tech-tag">Linux</div>
                  <div className="tech-tag">Cybersecurity</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-[#222] rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-tech-dark-purple dark:text-white">Key Skills</h3>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between mb-1">
                    <span className="font-medium text-tech-dark-purple dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-tech-dark-purple dark:text-white">
                  Fullstack Developer & Computer Network Administrator
                </h3>
                <div className="relative p-5 bg-tech-soft-blue/30 dark:bg-[#2A2A35] rounded-lg border border-tech-purple/10">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    
                    <div>
                      <p className="text-tech-charcoal dark:text-gray-300">
                        I specialize in full-stack web development using modern frameworks 
                        and technologies. Additionally, I have expertise in computer network 
                        administration, including configuration, security implementation, and 
                        troubleshooting of network infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
