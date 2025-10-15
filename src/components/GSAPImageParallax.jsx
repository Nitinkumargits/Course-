import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPImageParallax = ({
  src,
  alt,
  speed = 0.5,
  scale = 1.1,
  className = "",
  trigger = null,
}) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;
    if (!image || !container) return;

    // Set initial scale
    gsap.set(image, { scale: scale });

    // Create parallax animation
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Parallax movement
    parallaxTl.to(image, {
      y: -speed * 100,
      ease: "none",
      duration: 1,
    });

    // Scale animation on scroll
    const scaleTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    scaleTl.to(image, {
      scale: 1,
      ease: "none",
      duration: 1,
    });

    // Cleanup function
    return () => {
      parallaxTl.kill();
      scaleTl.kill();
    };
  }, [speed, scale, trigger]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ height: "100%", width: "100%" }}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          height: `${100 + (scale - 1) * 100}%`,
          width: `${100 + (scale - 1) * 100}%`,
          objectPosition: "center center",
        }}
      />
    </div>
  );
};

export default GSAPImageParallax;
