import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const LoadingSpinner = ({ size = "medium", text = "Loading..." }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const textSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}>
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-200 dark:border-blue-800 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 border-4 border-blue-600 dark:border-blue-400 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Center icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </motion.div>

      <motion.p
        className={`mt-4 text-gray-600 dark:text-gray-400 font-medium ${textSizeClasses[size]}`}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}>
        {text}
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
