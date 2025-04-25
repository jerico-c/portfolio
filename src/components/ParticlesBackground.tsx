"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme() || { resolvedTheme: "dark" };

  useEffect(() => {
    setIsMounted(true);

    const loadParticles = async () => {
      try {
        // Use dynamic import for the particles.js library
        const particlesJS = (await import('particles.js')).default;

        // Configure particles with appropriate colors based on theme
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: resolvedTheme === "dark" ? "#ffffff" : "#000000"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
            },
            opacity: {
              value: 0.2,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
              opacity: 0.1,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.3
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      } catch (error) {
        console.error("Failed to load particles:", error);
      }
    };

    if (isMounted) {
      loadParticles();
    }

    return () => {
      // Clean up particles if needed
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach((dom) => dom.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }
    };
  }, [isMounted, resolvedTheme]);

  // Only render the container on the client
  if (!isMounted) return null;

  return (
    <div
      id="particles-js"
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
