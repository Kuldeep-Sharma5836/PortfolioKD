import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  offset?: string[];
}

const ParallaxScroll = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
  offset = ["start end", "end start"]
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string]
  });

  // Create smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getTransformValue = () => {
    const moveDistance = speed * 100;
    
    switch (direction) {
      case "up":
        return useTransform(smoothProgress, [0, 1], [0, -moveDistance]);
      case "down":
        return useTransform(smoothProgress, [0, 1], [0, moveDistance]);
      case "left":
        return useTransform(smoothProgress, [0, 1], [0, -moveDistance]);
      case "right":
        return useTransform(smoothProgress, [0, 1], [0, moveDistance]);
      default:
        return useTransform(smoothProgress, [0, 1], [0, -moveDistance]);
    }
  };

  const transform = getTransformValue();
  
  const motionStyle = direction === "left" || direction === "right" 
    ? { x: transform }
    : { y: transform };

  return (
    <div ref={ref} className={className}>
      <motion.div style={motionStyle}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxScroll;