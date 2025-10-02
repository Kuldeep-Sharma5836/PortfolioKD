import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RotatingIconProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "clockwise" | "counterclockwise";
}

const RotatingIcon = ({ 
  children, 
  className = "", 
  speed = 2, 
  direction = "clockwise" 
}: RotatingIconProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: direction === "clockwise" ? 360 : -360,
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RotatingIcon;

