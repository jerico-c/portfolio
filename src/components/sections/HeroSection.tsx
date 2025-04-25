"use client";

import { useEffect, useState } from "react";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Front-End Developer", "Back-End Developer", "Network Administrator"];

  useEffect(() => {
    setLoaded(true);

    const intervalId = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20" />

      <div
        className={`text-center max-w-3xl mx-auto transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-xl md:text-2xl font-medium mb-2 text-muted-foreground">
          Hello! I'm
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          JERICO CHRISTIANTO
        </h1>

        <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
          <h3 className="text-xl md:text-3xl font-medium text-gradient flex items-center">
            <span className="mr-2">A</span>
            <div className="relative h-10 md:h-12 overflow-hidden">
              {roles.map((role) => (
                <span
                  key={role}
                  className={`absolute inset-0 transition-all duration-700 ${
                    role === roles[currentRole]
                      ? "transform-none opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>
          </h3>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Certified Junior Network Administrator from BNSP with expertise in building web applications and computer networks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link href="#projects">
            <Button size="lg" className="min-w-36">
              View My Projects
            </Button>
          </Link>
          <Link href="https://drive.google.com/file/d/1F490pPuYBuSy0Rm9B_vO2GTmQcX3KuTF/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="min-w-36">
              Download CV
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" aria-label="Scroll Down">
            <ArrowDownIcon className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
