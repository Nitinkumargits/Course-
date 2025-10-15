import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPHeroAnimation = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a master timeline for the hero section
    const masterTl = gsap.timeline();

    // Get all elements
    const titleContainer = container.querySelector(".hero-title");
    const description = container.querySelector(".hero-description");
    const buttonsContainer = container.querySelector(".hero-buttons");

    // Set initial states
    gsap.set([titleContainer, description, buttonsContainer], {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    // Animate title with sophisticated effects
    masterTl.to(
      titleContainer,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0.2
    );

    // Animate description with smooth reveal
    masterTl.to(
      description,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      0.6
    );

    // Animate buttons with staggered entrance
    masterTl.to(
      buttonsContainer,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      1.0
    );

    // Add floating animation to the entire hero content
    gsap.to(container, {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Add subtle rotation animation to title
    gsap.to(titleContainer, {
      rotation: 0.5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Add scale pulse to buttons
    const buttons = container.querySelectorAll(".hero-button");
    buttons.forEach((button, index) => {
      gsap.to(button, {
        scale: 1.02,
        duration: 2 + index * 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.3,
      });
    });

    // Add scroll-triggered animations
    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(container, {
          scale: 1.02,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      onLeave: () => {
        gsap.to(container, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });

    // Cleanup function
    return () => {
      masterTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPHeroAnimation;
