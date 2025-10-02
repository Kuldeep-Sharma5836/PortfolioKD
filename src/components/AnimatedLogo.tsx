import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedLogoProps {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const AnimatedLogo = ({ text = "KS", size = "md", className = "" }: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12,
        duration: 0.6
      }
    },
  };

  const glowAnimation = {
    textShadow: [
      "0 0 10px #40e0d0, 0 0 20px #40e0d0, 0 0 30px #40e0d0",
      "0 0 15px #a855f7, 0 0 30px #a855f7, 0 0 45px #a855f7",
      "0 0 12px #ec4899, 0 0 25px #ec4899, 0 0 40px #ec4899",
      "0 0 8px #f59e0b, 0 0 20px #f59e0b, 0 0 35px #f59e0b",
      "0 0 10px #40e0d0, 0 0 20px #40e0d0, 0 0 30px #40e0d0"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <motion.div
      className={`font-bold text-gradient cursor-pointer select-none ${sizeClasses[size]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { 
          rotate: { duration: 0.5 },
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }
      }}
    >
      <motion.span
        animate={glowAnimation}
        className="inline-block"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            whileHover={{ 
              y: -2,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
      
      {/* Decorative aurora glow */}
      <motion.div
        className="absolute -inset-3 rounded-xl blur-xl"
        style={{
          background: "linear-gradient(45deg, rgba(64, 224, 208, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3), rgba(245, 158, 11, 0.3))",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.3 }
        }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;