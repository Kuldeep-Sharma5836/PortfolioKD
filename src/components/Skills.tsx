import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";
import HoverGlow from "./HoverGlow";
import SkeletonLoader, { SkeletonCard } from "./SkeletonLoader";
import { useState, useEffect } from "react";
import HoverMicrointeraction from "./HoverMicrointeraction";
import AdvancedTextAnimation from "./AdvancedTextAnimation";

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C"],
    },
    {
      title: "Technologies & Frameworks",
      skills: [
        "Node.js",
        "React.js",
        "Express.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Additional Skills",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "DBMS",
        "Operating System",
        "REST API",
        "Agile/Scrum",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AdvancedTextAnimation type="gradient" className="text-4xl md:text-5xl font-bold mb-4">
            Skills
          </AdvancedTextAnimation>
          <AdvancedTextAnimation type="reveal" className="text-muted-foreground text-lg" delay={0.3}>
            Technologies I work with
          </AdvancedTextAnimation>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} className="h-64" />
            ))}
          </div>
        ) : (

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <HoverGlow className="rounded-xl">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 bg-card border-border hover-lift glass-effect h-full relative overflow-hidden">
                    {/* Background gradient animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 text-accent">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -2,
                              boxShadow: "0 4px 12px hsl(217 91% 60% / 0.3)"
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-secondary text-secondary-foreground hover:bg-primary/20 transition-all duration-300 cursor-pointer hover:text-primary font-medium"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </HoverGlow>
            </ScrollReveal>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
