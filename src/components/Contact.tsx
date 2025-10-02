import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Linkedin, Github, Phone } from "lucide-react";
import HoverMicrointeraction from "./HoverMicrointeraction";
import AdvancedTextAnimation from "./AdvancedTextAnimation";
import ParallaxScroll from "./ParallaxScroll";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[var(--gradient-primary)]">
      <div className="max-w-4xl mx-auto">
        <ParallaxScroll speed={0.3} className="text-center mb-16">
          <AdvancedTextAnimation type="gradient" className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </AdvancedTextAnimation>
          <AdvancedTextAnimation type="reveal" className="text-muted-foreground text-lg" delay={0.3}>
            Let's discuss your next project
          </AdvancedTextAnimation>
        </ParallaxScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:panditkuldeep2019@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    panditkuldeep2019@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a
                    href="tel:+917900391944"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +91 7900391944
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <HoverMicrointeraction type="glow" intensity="medium">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow-effect"
                    onClick={() =>
                      (window.location.href = "mailto:panditkuldeep2019@gmail.com")
                    }
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </HoverMicrointeraction>

                <HoverMicrointeraction type="scale" intensity="medium">
                  <Button
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    variant="outline"
                    onClick={() => window.open("https://wa.me/917900391944", "_blank")}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </HoverMicrointeraction>
              </div>

              <div className="flex gap-4 justify-center pt-6 border-t border-border">
                <a
                  href="https://www.linkedin.com/in/kuldeep-sharma-b83394229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="http://github.com/kuldeep-Sharma5836/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
