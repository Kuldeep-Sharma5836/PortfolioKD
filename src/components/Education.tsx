import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 px-4">
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
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 bg-card border-border card-hover h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
                  <p className="text-accent font-medium mb-2">Computer Science</p>
                  <p className="text-muted-foreground mb-2">GLA University, Mathura</p>
                  <p className="text-sm text-muted-foreground">Aug 2022 – Current</p>
                  <p className="text-primary font-semibold mt-3">CGPA: 7.89</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 bg-card border-border card-hover h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
                  <p className="text-muted-foreground mb-2">RV Public School, Agra</p>
                  <p className="text-sm text-muted-foreground">April 2020 – April 2021</p>
                  <p className="text-primary font-semibold mt-3">Score: 87.8%</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
