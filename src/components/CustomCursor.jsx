import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target &&
        typeof target.matches === "function" &&
        target.matches('button, a, [data-cursor="pointer"]')
      ) {
        setIsHovering(true);
        setCursorText(target.dataset.cursorText || "");
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (
        target &&
        typeof target.matches === "function" &&
        target.matches('button, a, [data-cursor="pointer"]')
      ) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isClicking ? 2 : isHovering ? 0.5 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 bg-black text-white px-3 py-1 rounded-full text-sm font-medium pointer-events-none z-[9999] whitespace-nowrap"
          style={{
            x: springX + 20,
            y: springY - 10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}>
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
