import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const certifications = [
    {
      title: "Java Programming",
      issuer: "Apna College",
    },
    {
      title: "Introduction to AWS",
      issuer: "Technical Guftgu",
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB Community",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
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
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border card-hover h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-primary/10 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
