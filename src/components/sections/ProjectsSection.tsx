"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Linux Server Setup",
    description: "Built a Linux-based server for web hosting and network applications.",
    category: "networking",
    technologies: ["Linux", "Apache", "Nginx", "MySQL", "SSH"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop",
    github: "https://github.com",
    demo: ""
  },
  {
    id: "2",
    title: "Personal Portfolio",
    description: "Responsive portfolio website built with React and Next.js.",
    category: "web",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: "3",
    title: "Ubuntu Distro Remastering",
    description: "Modified components in Ubuntu Distro to create a customized version.",
    category: "other",
    technologies: ["Ubuntu", "Bash", "Linux"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop",
    github: "https://github.com",
    demo: ""
  },
  {
    id: "4",
    title: "E-commerce API",
    description: "RESTful API for e-commerce platform with authentication and product management.",
    category: "web",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=2500&auto=format&fit=crop",
    github: "https://github.com",
    demo: ""
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading text-center mb-4">My Work</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my projects and technical explorations
        </p>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full bg-muted"
                />
              </AspectRatio>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="mt-2 line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 flex items-center gap-2">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <GithubIcon className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                )}
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <ExternalLinkIcon className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
