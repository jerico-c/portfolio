"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, BookOpenIcon, BrainIcon, ClockIcon } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-foreground font-semibold">Active Electrical Engineering student</span> at Universitas Tidar specializing in Computer Networks and Programming.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I'm passionate about teaching programming and robotics to children, and I'm certified as a Junior Network Administrator by the Badan Nasional Sertifikasi Profesi.
            </p>
            <p className="text-lg text-muted-foreground">
              My goal is to leverage my technical skills in both front-end and back-end development to create impactful, user-friendly applications.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Tabs
              defaultValue="summary"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="summary" className="flex items-center gap-2">
                  <BookOpenIcon className="w-4 h-4" /> Summary
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <CodeIcon className="w-4 h-4" /> Skills
                </TabsTrigger>
                <TabsTrigger value="soft-skills" className="flex items-center gap-2">
                  <BrainIcon className="w-4 h-4" /> Soft Skills
                </TabsTrigger>
                <TabsTrigger value="interests" className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" /> Interests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Universitas Tidar</h4>
                        <p className="text-sm text-muted-foreground">S1 in Electrical Engineering | Aug 2022 - Present</p>
                        <p className="text-sm">GPA: 3.47/4.00</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Coding Camp by DBS Foundation</h4>
                        <p className="text-sm text-muted-foreground">Front-End and Back-End Development | Feb 2025 - Present</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Certification</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Junior Network Administrator (Badan Nasional Sertifikasi Profesi)</li>
                      <li>Dicoding Academy: Web Development, JavaScript, Front-End, DevOps, Git</li>
                      <li>Cisco Networking Academy: Network Technician, Cybersecurity</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Front-End</h4>
                        <ul className="space-y-1 list-disc pl-5 text-muted-foreground">
                          <li>HTML, CSS, JavaScript</li>
                          <li>Angular</li>
                          <li>React</li>
                          <li>Node.js</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Back-End</h4>
                        <ul className="space-y-1 list-disc pl-5 text-muted-foreground">
                          <li>REST API</li>
                          <li>Node.js</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Networking</h4>
                        <ul className="space-y-1 list-disc pl-5 text-muted-foreground">
                          <li>Cisco Packet Tracer</li>
                          <li>Router Configuration</li>
                          <li>Fiber Optics</li>
                          <li>Linux Server Setup</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Other</h4>
                        <ul className="space-y-1 list-disc pl-5 text-muted-foreground">
                          <li>Git</li>
                          <li>DevOps</li>
                          <li>Ubuntu Distro Remastering</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="soft-skills">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Problem-solving</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Critical Thinking</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Detail-oriented</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Time Management</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Communication</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Teamwork</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Adaptability</h4>
                      </div>
                      <div className="p-4 border border-border rounded-lg text-center">
                        <h4 className="font-medium">Leadership</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interests">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Interests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Teaching & Mentoring</h4>
                        <p className="text-muted-foreground">
                          I enjoy teaching programming and robotics concepts to children, helping them discover the joy of technology at an early age.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Networking & Server Management</h4>
                        <p className="text-muted-foreground">
                          I'm passionate about building and optimizing network infrastructure and server environments.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Web Development</h4>
                        <p className="text-muted-foreground">
                          I love creating responsive, user-friendly web applications that solve real-world problems.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Open Source</h4>
                        <p className="text-muted-foreground">
                          I'm interested in contributing to open-source projects and learning from the community.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
