import React from "react";
import { motion } from "framer-motion";

const MorphingShapes = ({ className = "" }) => {
  const shapes = [
    {
      id: 1,
      initialPath: "M0,0 L100,0 L100,100 L0,100 Z",
      morphPath: "M0,0 L100,0 L80,100 L20,100 Z",
      color: "from-blue-400/20 to-purple-400/20",
      position: "top-20 left-10",
      size: "w-64 h-64",
      duration: 8,
    },
    {
      id: 2,
      initialPath: "M50,0 L100,50 L50,100 L0,50 Z",
      morphPath: "M50,0 L100,30 L70,100 L30,70 Z",
      color: "from-purple-400/20 to-pink-400/20",
      position: "top-40 right-10",
      size: "w-48 h-48",
      duration: 6,
    },
    {
      id: 3,
      initialPath: "M0,50 L50,0 L100,50 L50,100 Z",
      morphPath: "M0,30 L30,0 L70,30 L50,70 L20,50 Z",
      color: "from-pink-400/20 to-orange-400/20",
      position: "bottom-20 left-1/4",
      size: "w-56 h-56",
      duration: 10,
    },
    {
      id: 4,
      initialPath: "M25,0 L75,0 L100,50 L75,100 L25,100 L0,50 Z",
      morphPath: "M25,0 L75,0 L100,25 L75,75 L25,75 L0,25 Z",
      color: "from-orange-400/20 to-yellow-400/20",
      position: "top-1/2 right-1/3",
      size: "w-40 h-40",
      duration: 7,
    },
  ];

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.position} ${shape.size}`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <motion.div
            className={`w-full h-full bg-gradient-to-br ${shape.color} rounded-full blur-xl`}
            animate={{
              borderRadius: ["50%", "30%", "50%"],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: shape.duration * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.id * 0.5,
            }}
          />

          {/* SVG morphing shape */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d={shape.initialPath}
              fill={`url(#gradient-${shape.id})`}
              animate={{
                d: [shape.initialPath, shape.morphPath, shape.initialPath],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.id * 0.3,
              }}
            />
            <defs>
              <linearGradient
                id={`gradient-${shape.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      ))}
    </div>
  );
};

export default MorphingShapes;
