import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  type?: "text" | "card" | "avatar" | "button" | "image" | "list";
  className?: string;
  count?: number;
  animated?: boolean;
}

const SkeletonLoader = ({
  type = "text",
  className = "",
  count = 1,
  animated = true
}: SkeletonLoaderProps) => {
  const pulseAnimation = animated ? {
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  const shimmerAnimation = animated ? {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  } : {};

  const getSkeletonElement = () => {
    switch (type) {
      case "text":
        return (
          <motion.div
            className={`h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse ${className}`}
            style={{ backgroundSize: "200% 100%" }}
            animate={animated ? pulseAnimation : {}}
          />
        );
      
      case "card":
        return (
          <motion.div
            className={`border rounded-lg p-4 bg-white shadow-sm ${className}`}
            animate={animated ? pulseAnimation : {}}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
            </div>
          </motion.div>
        );
      
      case "avatar":
        return (
          <motion.div
            className={`w-12 h-12 bg-gray-200 rounded-full animate-pulse ${className}`}
            animate={animated ? pulseAnimation : {}}
          />
        );
      
      case "button":
        return (
          <motion.div
            className={`h-10 w-24 bg-gray-200 rounded animate-pulse ${className}`}
            animate={animated ? pulseAnimation : {}}
          />
        );
      
      case "image":
        return (
          <motion.div
            className={`w-full h-48 bg-gray-200 rounded animate-pulse ${className}`}
            animate={animated ? pulseAnimation : {}}
          />
        );
      
      case "list":
        return (
          <motion.div
            className={`space-y-3 ${className}`}
            animate={animated ? pulseAnimation : {}}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
                </div>
              </div>
            ))}
          </motion.div>
        );
      
      default:
        return (
          <motion.div
            className={`h-4 bg-gray-200 rounded animate-pulse ${className}`}
            animate={animated ? pulseAnimation : {}}
          />
        );
    }
  };

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {getSkeletonElement()}
        </div>
      ))}
    </div>
  );
};

// Specialized skeleton components
export const SkeletonText = ({ lines = 3, className = "" }: { lines?: number; className?: string }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <motion.div
        key={index}
        className={`h-4 bg-gray-200 rounded animate-pulse ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1
          }
        }}
      />
    ))}
  </div>
);

export const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`border rounded-lg p-6 bg-white shadow-sm ${className}`}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="h-5 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
      </div>
    </div>
    <SkeletonText lines={4} />
  </motion.div>
);

export default SkeletonLoader;