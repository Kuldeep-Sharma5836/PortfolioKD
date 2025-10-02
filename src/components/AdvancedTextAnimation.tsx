import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AdvancedTextAnimationProps {
  children: string;
  type?: "reveal" | "slide" | "bounce" | "wave" | "morphing" | "gradient";
  delay?: number;
  className?: string;
  staggerDelay?: number;
}

const AdvancedTextAnimation = ({
  children,
  type = "reveal",
  delay = 0,
  className = "",
  staggerDelay = 0.1
}: AdvancedTextAnimationProps) => {
  const text = children;
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const getWordVariants = () => {
    switch (type) {
      case "reveal":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 12 }
          }
        };
      case "slide":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 12 }
          }
        };
      case "bounce":
        return {
          hidden: { opacity: 0, y: -50, scale: 0.3 },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              type: "spring" as const, 
              stiffness: 300, 
              damping: 20,
              bounce: 0.5
            }
          }
        };
      case "wave":
        return {
          hidden: { opacity: 0, y: 20, rotateZ: -10 },
          visible: { 
            opacity: 1, 
            y: 0, 
            rotateZ: 0,
            transition: { 
              type: "spring" as const, 
              stiffness: 200, 
              damping: 15
            }
          }
        };
      case "morphing":
        return {
          hidden: { opacity: 0, scaleX: 0, scaleY: 2 },
          visible: { 
            opacity: 1, 
            scaleX: 1, 
            scaleY: 1,
            transition: { 
              type: "spring" as const, 
              stiffness: 150, 
              damping: 20
            }
          }
        };
      case "gradient":
        return {
          hidden: { 
            opacity: 0, 
            backgroundPosition: "200% 50%"
          },
          visible: { 
            opacity: 1,
            backgroundPosition: "0% 50%",
            transition: { 
              duration: 1.5,
              ease: "easeInOut" as const
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const wordVariants = getWordVariants();

  if (type === "gradient") {
    return (
      <motion.div
        className={`${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-elegant"
          style={{
            backgroundImage: "linear-gradient(45deg, #0a5d61, #5a1e8a, #8b4fa6, #d91755, #0a5d61)",
            backgroundSize: "400% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradient-move 4s ease-in-out infinite",
            fontWeight: 700,
            letterSpacing: "-0.02em"
          }}
        >
          {text}
        </motion.span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AdvancedTextAnimation;