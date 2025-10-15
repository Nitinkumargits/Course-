import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPAdvancedText = ({
  text,
  className = "",
  delay = 0,
  duration = 1,
  stagger = 0.1,
  direction = "up",
  trigger = null,
  effect = "slide", // slide, bounce, elastic, scale
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Split text into words
    const words = text.split(" ").filter((word) => word.trim() !== "");

    // Clear the element
    textElement.innerHTML = "";

    // Create spans for each word with enhanced styling
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";
      span.style.marginRight = "0.25em";
      span.style.position = "relative";

      const innerSpan = document.createElement("span");
      innerSpan.textContent = word;
      innerSpan.style.display = "inline-block";
      innerSpan.style.position = "relative";
      innerSpan.style.zIndex = "2";

      // Add a background highlight effect
      const highlight = document.createElement("span");
      highlight.style.position = "absolute";
      highlight.style.top = "0";
      highlight.style.left = "0";
      highlight.style.width = "100%";
      highlight.style.height = "100%";
      highlight.style.background =
        "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))";
      highlight.style.borderRadius = "4px";
      highlight.style.zIndex = "1";
      highlight.style.opacity = "0";

      span.appendChild(highlight);
      span.appendChild(innerSpan);
      textElement.appendChild(span);
    });

    // Set initial state based on direction and effect
    const animatedSpans = textElement.querySelectorAll("span span:last-child");
    const highlights = textElement.querySelectorAll("span span:first-child");

    let initialProps = {};
    switch (effect) {
      case "bounce":
        initialProps = {
          y: direction === "up" ? 100 : -100,
          opacity: 0,
          scale: 0.5,
          rotation: direction === "up" ? 10 : -10,
        };
        break;
      case "elastic":
        initialProps = {
          y: direction === "up" ? 80 : -80,
          opacity: 0,
          scale: 0.8,
          rotationX: direction === "up" ? 90 : -90,
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
          y: direction === "up" ? "100%" : "-100%",
          opacity: 0,
          scale: 0.95,
        };
    }

    gsap.set(animatedSpans, initialProps);
    gsap.set(highlights, { scaleX: 0, transformOrigin: "left center" });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || textElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate words with different effects
    let animationProps = {};
    switch (effect) {
      case "bounce":
        animationProps = {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: duration,
          stagger: stagger,
          ease: "bounce.out",
        };
        break;
      case "elastic":
        animationProps = {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: duration,
          stagger: stagger,
          ease: "elastic.out(1, 0.3)",
        };
        break;
      case "scale":
        animationProps = {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: duration,
          stagger: stagger,
          ease: "back.out(1.7)",
        };
        break;
      default: // slide
        animationProps = {
          y: "0%",
          opacity: 1,
          scale: 1,
          duration: duration,
          stagger: stagger,
          ease: "power3.out",
        };
    }

    tl.to(animatedSpans, animationProps, delay);

    // Animate highlights
    tl.to(
      highlights,
      {
        scaleX: 1,
        duration: duration * 0.5,
        stagger: stagger,
        ease: "power2.out",
      },
      delay + duration * 0.3
    );

    // Add hover effects
    animatedSpans.forEach((span, index) => {
      const parentSpan = span.parentElement;
      const highlight = parentSpan.querySelector("span:first-child");

      parentSpan.addEventListener("mouseenter", () => {
        gsap.to(span, {
          scale: 1.1,
          y: -2,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(highlight, {
          opacity: 1,
          duration: 0.3,
        });
      });

      parentSpan.addEventListener("mouseleave", () => {
        gsap.to(span, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(highlight, {
          opacity: 0,
          duration: 0.3,
        });
      });
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [text, delay, duration, stagger, direction, trigger, effect]);

  return <div ref={textRef} className={className}></div>;
};

export default GSAPAdvancedText;
