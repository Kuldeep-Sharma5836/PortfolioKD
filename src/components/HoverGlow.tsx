import { motion } from "framer-motion";
import { useRef, useState, ReactNode } from "react";

interface HoverGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const HoverGlow = ({ children, className = "", glowColor = "hsl(217 91% 60%)" }: HoverGlowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
      
      {/* Animated glow effect */}
      <motion.div
        className="absolute pointer-events-none opacity-0"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: 100,
          height: 100,
          background: `radial-gradient(circle, ${glowColor}20 0%, transparent 70%)`,
          borderRadius: "50%",
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default HoverGlow;

