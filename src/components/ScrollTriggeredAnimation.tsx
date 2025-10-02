import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollTriggeredAnimationProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "rotate" | "parallax" | "stagger";
  className?: string;
  threshold?: number;
  offset?: ["start 0.8", "start 0.2"];
}

const ScrollTriggeredAnimation = ({
  children,
  animation = "fadeUp",
  className = "",
  threshold = 0.1,
  offset = ["start 0.8", "start 0.2"]
}: ScrollTriggeredAnimationProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getAnimationProps = () => {
    switch (animation) {
      case "fadeUp":
        return {
          y: useTransform(smoothProgress, [0, 1], [50, 0]),
          opacity: useTransform(smoothProgress, [0, 1], [0, 1])
        };
      
      case "fadeLeft":
        return {
          x: useTransform(smoothProgress, [0, 1], [-50, 0]),
          opacity: useTransform(smoothProgress, [0, 1], [0, 1])
        };
      
      case "fadeRight":
        return {
          x: useTransform(smoothProgress, [0, 1], [50, 0]),
          opacity: useTransform(smoothProgress, [0, 1], [0, 1])
        };
      
      case "scale":
        return {
          scale: useTransform(smoothProgress, [0, 1], [0.8, 1]),
          opacity: useTransform(smoothProgress, [0, 1], [0, 1])
        };
      
      case "rotate":
        return {
          rotateY: useTransform(smoothProgress, [0, 1], [45, 0]),
          opacity: useTransform(smoothProgress, [0, 1], [0, 1])
        };
      
      case "parallax":
        return {
          y: useTransform(smoothProgress, [0, 1], [0, -50]),
          opacity: useTransform(smoothProgress, [0, 1], [0.5, 1])
        };
      
      default:
        return {
          y: useTransform(smoothProgress, [0, 1], [50, 0]),
          opacity: useTransform(smoothProgress, [0, 1], [0, 1])
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <div ref={ref} className={className}>
      <motion.div style={animationProps}>
        {children}
      </motion.div>
    </div>
  );
};

// Scroll progress indicator
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform-origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Scroll-triggered counter
export const ScrollCounter = ({ 
  end, 
  duration = 2, 
  className = "" 
}: { 
  end: number; 
  duration?: number; 
  className?: string; 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const count = useTransform(scrollYProgress, [0, 1], [0, end]);
  const rounded = useTransform(count, (value) => Math.round(value));

  return (
    <div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </div>
  );
};

export default ScrollTriggeredAnimation;