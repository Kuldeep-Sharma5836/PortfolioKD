import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, MapPin, Code, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import TypewriterText from "./TypewriterText";
import RotatingIcon from "./RotatingIcon";
import WaveAnimation from "./WaveAnimation";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden morphing-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full blur-2xl pulse-glow"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={profileImage}
              alt="Kuldeep Sharma"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl gradient-border"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-accent font-semibold text-lg text-shimmer">Hello, I'm</span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient text-glow"
        >
          Kuldeep Sharma
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          <TypewriterText text="Full Stack Developer" speed={150} delay={1000} />
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Agra, Uttar Pradesh, India</span>
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Specializing in MERN Stack, AWS, and Cloud Computing. Building scalable web applications with modern technologies.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <MagneticButton
            onClick={() => window.location.href = "mailto:panditkuldeep2019@gmail.com"}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift glass-effect"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
          </MagneticButton>
          
          <MagneticButton
            onClick={() => window.open("https://wa.me/917900391944", "_blank")}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift glass-effect"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </MagneticButton>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/kuldeep-sharma-b83394229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="http://github.com/kuldeep-Sharma5836/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
            >
              <Github className="h-6 w-6" />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
      <WaveAnimation />
    </section>
  );
};

export default Hero;
