import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RevealAnimation = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    upLeft: { x: distance, y: distance },
    upRight: { x: -distance, y: distance },
    downLeft: { x: distance, y: -distance },
    downRight: { x: -distance, y: -distance },
  };

  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...initial,
        scale: 0.95,
        rotateX: direction.includes("up")
          ? 15
          : direction.includes("down")
          ? -15
          : 0,
        rotateY: direction.includes("left")
          ? 15
          : direction.includes("right")
          ? -15
          : 0,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
            }
          : {
              opacity: 0,
              ...initial,
              scale: 0.95,
              rotateX: direction.includes("up")
                ? 15
                : direction.includes("down")
                ? -15
                : 0,
              rotateY: direction.includes("left")
                ? 15
                : direction.includes("right")
                ? -15
                : 0,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
