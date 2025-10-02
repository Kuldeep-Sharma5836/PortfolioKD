import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface HoverMicrointeractionProps {
  children: ReactNode;
  type?: "lift" | "glow" | "scale" | "tilt" | "magnetic" | "ripple";
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

const HoverMicrointeraction = ({
  children,
  type = "lift",
  className = "",
  intensity = "medium"
}: HoverMicrointeractionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const intensityConfig = {
    subtle: { scale: 1.02, y: -2, rotateX: 2, shadow: "0 6px 25px rgba(34, 139, 139, 0.2), 0 3px 12px rgba(147, 51, 234, 0.15)" },
    medium: { scale: 1.05, y: -4, rotateX: 5, shadow: "0 10px 35px rgba(34, 139, 139, 0.3), 0 5px 18px rgba(147, 51, 234, 0.2)" },
    strong: { scale: 1.08, y: -8, rotateX: 10, shadow: "0 15px 45px rgba(34, 139, 139, 0.4), 0 8px 25px rgba(147, 51, 234, 0.25), 0 3px 15px rgba(219, 39, 119, 0.15)" }
  };

  const config = intensityConfig[intensity];

  const variants = {
    lift: {
      rest: { y: 0, scale: 1, boxShadow: "0 4px 15px rgba(34, 139, 139, 0.15)" },
      hover: { 
        y: config.y, 
        scale: config.scale, 
        boxShadow: "0 15px 35px rgba(34, 139, 139, 0.35), 0 5px 15px rgba(147, 51, 234, 0.25)",
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }
    },
    glow: {
      rest: { 
        scale: 1, 
        boxShadow: "0 0 0 rgba(34, 139, 139, 0)" 
      },
      hover: { 
        scale: config.scale, 
        boxShadow: "0 0 30px rgba(34, 139, 139, 0.5), 0 0 60px rgba(147, 51, 234, 0.3), 0 0 80px rgba(219, 39, 119, 0.2)",
        transition: { duration: 0.4 }
      }
    },
    scale: {
      rest: { scale: 1 },
      hover: { 
        scale: config.scale,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    tilt: {
      rest: { rotateX: 0, rotateY: 0, scale: 1 },
      hover: { 
        rotateX: config.rotateX, 
        rotateY: 2, 
        scale: config.scale,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    magnetic: {
      rest: { x: 0, y: 0, scale: 1 },
      hover: { 
        scale: config.scale,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    ripple: {
      rest: { scale: 1 },
      hover: { 
        scale: config.scale,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`cursor-pointer ${className}`}
      variants={variants[type]}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {children}
    </motion.div>
  );
};

export default HoverMicrointeraction;