import React, { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();

  // Create smooth spring animation for scroll
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress for different effects
  const scale = useTransform(smoothScrollY, [0, 1], [1, 0.8]);
  const opacity = useTransform(
    smoothScrollY,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.8, 0.6]
  );

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Custom easing function for scroll
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    // Override default scroll behavior
    let isScrolling = false;
    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();
      isScrolling = true;

      const delta = e.deltaY;
      const scrollAmount = delta * 0.5;

      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    // Add wheel event listener for smoother scrolling
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}>
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
