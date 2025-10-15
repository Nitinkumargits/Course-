import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPWordAnimation = ({
  text,
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

    // Split text into words
    const words = text.split(" ").filter((word) => word.trim() !== "");

    // Clear the element
    textElement.innerHTML = "";

    // Create spans for each word
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";
      span.style.marginRight = "0.25em";

      const innerSpan = document.createElement("span");
      innerSpan.textContent = word;
      innerSpan.style.display = "inline-block";

      span.appendChild(innerSpan);
      textElement.appendChild(span);
    });

    // Set initial state based on direction
    const initialY = direction === "up" ? "100%" : "-100%";
    const finalY = "0%";

    const animatedSpans = textElement.querySelectorAll("span span");

    gsap.set(animatedSpans, {
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

    tl.to(animatedSpans, {
      y: finalY,
      opacity: 1,
      duration: duration,
      stagger: stagger,
      ease: "power2.out",
      delay: delay,
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [text, delay, duration, stagger, direction, trigger]);

  return <div ref={textRef} className={className}></div>;
};

export default GSAPWordAnimation;
