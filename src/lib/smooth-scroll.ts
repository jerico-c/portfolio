"use client";

import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Store lenis instance in ref
    lenisRef.current = lenis;

    // Create a RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Update ScrollTrigger when lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    // Set up GSAP ticker with lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // Function to scroll to an element
  const scrollTo = (target: string | HTMLElement) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -100,
        duration: 1.5,
      });
    }
  };

  return { scrollTo };
}

// Export Lenis instance for use in animations
export function getLenis() {
  return window.__lenis;
}
