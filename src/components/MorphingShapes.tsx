import { motion } from "framer-motion";

const MorphingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Morphing Circle */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20"
        style={{
          background: "linear-gradient(45deg, hsl(262 83% 58%), hsl(280 100% 70%))",
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "20%", "50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Morphing Square */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 opacity-15"
        style={{
          background: "linear-gradient(45deg, hsl(280 100% 70%), hsl(300 100% 60%))",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
          borderRadius: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Morphing Triangle */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-20 h-20 opacity-10"
        style={{
          background: "linear-gradient(45deg, hsl(300 100% 60%), hsl(262 83% 58%))",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 120, 240, 360],
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default MorphingShapes;

