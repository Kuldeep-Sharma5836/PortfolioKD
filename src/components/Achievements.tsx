import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Code } from "lucide-react";

const Achievements = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const achievements = [
    {
      icon: Code,
      title: "300+ DSA Problems Solved",
      description:
        "Solved strategic problems on LeetCode, GeeksForGeeks, and Codeforces",
    },
    {
      icon: Trophy,
      title: "3rd Place - Summer Synergy Showcase",
      description: "Excellence in AWS-based solutions",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-[var(--gradient-primary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card border-border card-hover h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
