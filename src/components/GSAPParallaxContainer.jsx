import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPParallaxContainer = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all parallax elements
    const parallaxElements = container.querySelectorAll("[data-parallax]");

    // Create parallax animations for each element
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallax) || 0.5;
      const direction = element.dataset.direction || "down";
      const trigger = element.dataset.trigger || element;

      const movement = direction === "up" ? -speed * 100 : speed * 100;

      gsap.to(element, {
        y: movement,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Create horizontal parallax for specific elements
    const horizontalElements = container.querySelectorAll("[data-parallax-x]");
    horizontalElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallaxX) || 0.3;
      const direction = element.dataset.directionX || "right";

      const movement = direction === "left" ? -speed * 100 : speed * 100;

      gsap.to(element, {
        x: movement,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Create rotation parallax
    const rotationElements = container.querySelectorAll(
      "[data-parallax-rotate]"
    );
    rotationElements.forEach((element) => {
      const rotation = parseFloat(element.dataset.parallaxRotate) || 10;

      gsap.to(element, {
        rotation: rotation,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Create scale parallax
    const scaleElements = container.querySelectorAll("[data-parallax-scale]");
    scaleElements.forEach((element) => {
      const scale = parseFloat(element.dataset.parallaxScale) || 1.2;

      gsap.to(element, {
        scale: scale,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Create opacity parallax
    const opacityElements = container.querySelectorAll(
      "[data-parallax-opacity]"
    );
    opacityElements.forEach((element) => {
      const opacity = parseFloat(element.dataset.parallaxOpacity) || 0.3;

      gsap.to(element, {
        opacity: opacity,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPParallaxContainer;
