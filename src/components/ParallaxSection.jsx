import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, Target, Star } from "lucide-react";

const ParallaxSection = ({
  children,
  className = "",
  backgroundElements = true,
  floatingElements = true,
  intensity = 1,
}) => {
  const { scrollY } = useScroll();

  // Parallax transforms with intensity control
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300 * intensity]);
  const floatingElementsY = useTransform(
    scrollY,
    [0, 800],
    [0, -200 * intensity]
  );
  const contentY = useTransform(scrollY, [0, 500], [0, -150 * intensity]);

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, duration: 4, position: "top-1/4 left-1/4" },
    { Icon: Zap, delay: 1, duration: 3, position: "top-1/3 right-1/3" },
    { Icon: Target, delay: 2, duration: 5, position: "bottom-1/3 left-1/3" },
    { Icon: Star, delay: 0.5, duration: 4.5, position: "top-1/2 right-1/4" },
  ];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      {backgroundElements && (
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1500"></div>
        </motion.div>
      )}

      {/* Floating Elements */}
      {floatingElements && (
        <motion.div
          style={{ y: floatingElementsY }}
          className="absolute inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, delay, duration, position }, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              className={`absolute ${position} text-blue-400 opacity-30`}>
              <Icon size={30 + index * 5} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Content with Parallax */}
      <motion.div style={{ y: contentY }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
