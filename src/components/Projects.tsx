import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cloud, Home, Wallet } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import HoverGlow from "./HoverGlow";
import RotatingIcon from "./RotatingIcon";
import HoverMicrointeraction from "./HoverMicrointeraction";
import ScrollTriggeredAnimation from "./ScrollTriggeredAnimation";
import AdvancedTextAnimation from "./AdvancedTextAnimation";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      icon: Cloud,
      title: "AWS & Cloud Computing",
      description: [
        "Developed and deployed an AWS-based Auto Scaling and Load Balancing system, optimizing performance and ensuring high availability",
        "Configured an Elastic Load Balancer (ELB) with Auto Scaling, improving fault tolerance and resource utilization",
        "Tested and validated the cloud infrastructure, ensuring scalability and reliability under varying workloads",
        "Leveraged AWS services such as EC2, S3, and IAM to build secure and scalable cloud solutions",
      ],
    },
    {
      icon: Home,
      title: "Real Estate Website",
      description: [
        "Developing a full-stack real estate platform using the MERN stack (MongoDB, Express.js, React, Node.js) to facilitate seamless property listings and transactions",
        "Implemented user authentication and role-based access control (RBAC) for secure property management",
        "Designed a responsive UI with React and Material-UI, enhancing user experience and engagement",
        "Integrated Google Maps API for property location tracking, improving search functionality",
        "Optimized backend performance with Node.js and MongoDB indexing, ensuring fast data retrieval",
      ],
    },
    {
      icon: Wallet,
      title: "Expense Tracking Application",
      description: [
        "Built a full-stack expense tracking application enabling users to easily manage and categorize daily income and expenses",
        "Implemented secure authentication and role-based authorization to ensure data privacy and role-specific access control",
        "Integrated interactive charts and reports for analyzing spending patterns, helping users improve budgeting and savings",
        "Utilized MongoDB database for efficient data management and fast retrieval of large datasets",
        "Developed a practical solution addressing real-world financial management challenges with a user-friendly interface",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[var(--gradient-primary)]">
      <div className="max-w-6xl mx-auto">
        <ScrollTriggeredAnimation animation="fadeUp" className="text-center mb-16">
          <AdvancedTextAnimation type="gradient" className="text-4xl md:text-5xl font-bold mb-4">
            Projects
          </AdvancedTextAnimation>
          <AdvancedTextAnimation type="reveal" className="text-muted-foreground text-lg" delay={0.3}>
            Building solutions that make a difference
          </AdvancedTextAnimation>
        </ScrollTriggeredAnimation>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ScrollTriggeredAnimation key={index} animation="scale" className="w-full">
              <HoverMicrointeraction type="glow" intensity="medium" className="rounded-xl">
                <Card className="p-8 bg-card border-border hover-lift glass-effect relative overflow-hidden">
                    {/* Background gradient animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10 flex items-start gap-4 mb-6">
                      <RotatingIcon className="p-3 rounded-lg bg-primary/10 flex-shrink-0 gradient-border glow-pulse" speed={3}>
                        <project.icon className="h-6 w-6 text-primary" />
                      </RotatingIcon>
                      <h3 className="text-2xl font-bold text-foreground text-glow">{project.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 ml-16 relative z-10">
                      {project.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="text-muted-foreground flex hover:text-foreground transition-all duration-300 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span 
                            className="text-accent mr-2 group-hover:text-primary transition-colors"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                          >•</motion.span>
                          <span className="group-hover:font-medium transition-all">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </HoverMicrointeraction>
              </ScrollTriggeredAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
