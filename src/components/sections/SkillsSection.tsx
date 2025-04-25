"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const techSkills = {
  frontend: [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
  ],
  backend: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", logo: "https://img.icons8.com/color/96/api-settings.png" }
  ],
  networking: [
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Cisco", logo: "https://img.icons8.com/color/96/cisco.png" },
    { name: "Server", logo: "https://img.icons8.com/fluency/96/server.png" },
    { name: "Fiber Optics", logo: "https://img.icons8.com/fluency/96/fiber-optic-cable.png" }
  ],
  other: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "DevOps", logo: "https://img.icons8.com/fluency/96/devops.png" }
  ]
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading text-center mb-4">My Tech Stack</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="frontend">Front-End</TabsTrigger>
                <TabsTrigger value="backend">Back-End</TabsTrigger>
                <TabsTrigger value="networking">Networking</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(techSkills).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <Card className="border-primary/10">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                      {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center justify-center">
                          <div className="w-16 h-16 mb-3">
                            <img
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-16 h-16 mb-4">
                    <img
                      src="https://img.icons8.com/fluency/96/certificate.png"
                      alt="Certification logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-center mb-2">Junior Network Administrator</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Badan Nasional Sertifikasi Profesi (BNSP)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-16 h-16 mb-4">
                    <img
                      src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/dicoding-logo-full.png"
                      alt="Dicoding logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-center mb-2">Web Development</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Dicoding Academy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-16 h-16 mb-4">
                    <img
                      src="https://img.icons8.com/color/96/cisco.png"
                      alt="Cisco logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-center mb-2">Network Technician</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Cisco Networking Academy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
