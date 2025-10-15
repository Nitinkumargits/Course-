import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPParallax = ({
  children,
  speed = 0.5,
  direction = "down",
  className = "",
  trigger = null,
  start = "top bottom",
  end = "bottom top",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create parallax animation
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start: start,
        end: end,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Calculate movement based on direction and speed
    const movement = direction === "up" ? -speed * 100 : speed * 100;

    parallaxTl.to(element, {
      y: movement,
      ease: "none",
      duration: 1,
    });

    // Cleanup function
    return () => {
      parallaxTl.kill();
    };
  }, [speed, direction, trigger, start, end]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPParallax;
