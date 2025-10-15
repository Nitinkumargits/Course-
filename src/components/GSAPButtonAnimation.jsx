import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPButtonAnimation = ({
  children,
  className = "",
  delay = 0,
  effect = "slide",
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Set initial state based on effect
    let initialProps = {};
    switch (effect) {
      case "bounce":
        initialProps = {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotation: 5,
        };
        break;
      case "elastic":
        initialProps = {
          y: 30,
          opacity: 0,
          scale: 0.9,
          rotationX: 15,
        };
        break;
      case "scale":
        initialProps = {
          scale: 0,
          opacity: 0,
          rotation: 180,
        };
        break;
      default: // slide
        initialProps = {
          y: 30,
          opacity: 0,
          scale: 0.95,
        };
    }

    gsap.set(button, initialProps);

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: button,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate button entrance
    let animationProps = {};
    switch (effect) {
      case "bounce":
        animationProps = {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "bounce.out",
        };
        break;
      case "elastic":
        animationProps = {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        };
        break;
      case "scale":
        animationProps = {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        };
        break;
      default: // slide
        animationProps = {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        };
    }

    tl.to(button, animationProps, delay);

    // Add continuous floating animation
    gsap.to(button, {
      y: -5,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: delay + 0.5,
    });

    // Add hover effects
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    // Add click animation
    const handleClick = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    };

    button.addEventListener("click", handleClick);

    // Cleanup function
    return () => {
      tl.kill();
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("click", handleClick);
    };
  }, [delay, effect]);

  return (
    <div ref={buttonRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPButtonAnimation;
