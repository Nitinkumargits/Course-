import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPTextReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  stagger = 0.1,
  direction = "up",
  trigger = null,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Simple approach: animate the entire element without text manipulation
    const initialY = direction === "up" ? 50 : -50;
    const finalY = 0;

    gsap.set(textElement, {
      y: initialY,
      opacity: 0,
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || textElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(textElement, {
      y: finalY,
      opacity: 1,
      duration: duration,
      ease: "power2.out",
      delay: delay,
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [delay, duration, stagger, direction, trigger]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPTextReveal;
