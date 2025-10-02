import { motion } from "framer-motion";
import HoverMicrointeraction from "./HoverMicrointeraction";
import ParallaxScroll from "./ParallaxScroll";
import AdvancedTextAnimation from "./AdvancedTextAnimation";
import SkeletonLoader from "./SkeletonLoader";
import ScrollTriggeredAnimation, { ScrollCounter } from "./ScrollTriggeredAnimation";
import AnimatedLogo from "./AnimatedLogo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Heart, Zap, Sparkles } from "lucide-react";

const AnimationShowcase = () => {
  return (
    <div className="py-20 px-4 space-y-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Logo Animation */}
        <section className="text-center space-y-8">
          <AdvancedTextAnimation type="gradient" className="text-3xl font-bold">
            Animation Showcase
          </AdvancedTextAnimation>
          <AnimatedLogo text="KS" size="xl" />
        </section>

        {/* Hover Microinteractions */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Hover Microinteractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HoverMicrointeraction type="lift" intensity="medium">
              <Card className="p-6 text-center cosmic-glow">
                <Star className="h-12 w-12 mx-auto mb-4" style={{ color: "#40e0d0" }} />
                <h4 className="font-semibold mb-2 aurora-text">Lift Effect</h4>
                <p className="text-sm text-muted-foreground">Hover to see aurora lift animation</p>
              </Card>
            </HoverMicrointeraction>

            <HoverMicrointeraction type="glow" intensity="strong">
              <Card className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4" style={{ color: "#ec4899" }} />
                <h4 className="font-semibold mb-2 aurora-text">Aurora Glow</h4>
                <p className="text-sm text-muted-foreground">Hover to see magical glow animation</p>
              </Card>
            </HoverMicrointeraction>

            <HoverMicrointeraction type="tilt" intensity="medium">
              <Card className="p-6 text-center aurora-border">
                <Zap className="h-12 w-12 mx-auto mb-4" style={{ color: "#f59e0b" }} />
                <h4 className="font-semibold mb-2 aurora-text">Cosmic Tilt</h4>
                <p className="text-sm text-muted-foreground">Hover to see 3D tilt animation</p>
              </Card>
            </HoverMicrointeraction>
          </div>
        </section>

        {/* Text Animations */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Text Animations</h3>
          <div className="space-y-6">
            <AdvancedTextAnimation type="reveal" className="text-xl">
              This text reveals word by word with smooth animation
            </AdvancedTextAnimation>
            
            <AdvancedTextAnimation type="bounce" className="text-xl" delay={0.5}>
              This text bounces in with spring physics
            </AdvancedTextAnimation>
            
            <AdvancedTextAnimation type="wave" className="text-xl" delay={1}>
              This text waves in with rotation effects
            </AdvancedTextAnimation>
            
            <AdvancedTextAnimation type="gradient" className="text-2xl font-bold" delay={1.5}>
              This text has animated gradient colors
            </AdvancedTextAnimation>
          </div>
        </section>

        {/* Parallax Effects */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Parallax Scrolling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ParallaxScroll speed={0.3} direction="up">
              <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Sparkles className="h-16 w-16 mb-4 text-blue-500" />
                <h4 className="text-xl font-semibold mb-2">Slow Parallax</h4>
                <p>This card moves slowly as you scroll</p>
              </Card>
            </ParallaxScroll>

            <ParallaxScroll speed={0.8} direction="down">
              <Card className="p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20">
                <Sparkles className="h-16 w-16 mb-4 text-green-500" />
                <h4 className="text-xl font-semibold mb-2">Fast Parallax</h4>
                <p>This card moves faster in opposite direction</p>
              </Card>
            </ParallaxScroll>
          </div>
        </section>

        {/* Scroll Triggered Animations */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Scroll Triggered Animations</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScrollTriggeredAnimation animation="fadeUp">
              <Card className="p-6 text-center">
                <h4 className="text-2xl font-bold text-primary mb-2">Fade Up</h4>
                <p>Fades and slides up</p>
              </Card>
            </ScrollTriggeredAnimation>

            <ScrollTriggeredAnimation animation="scale">
              <Card className="p-6 text-center">
                <h4 className="text-2xl font-bold text-purple-500 mb-2">Scale</h4>
                <p>Scales into view</p>
              </Card>
            </ScrollTriggeredAnimation>

            <ScrollTriggeredAnimation animation="rotate">
              <Card className="p-6 text-center">
                <h4 className="text-2xl font-bold text-green-500 mb-2">Rotate</h4>
                <p>Rotates into view</p>
              </Card>
            </ScrollTriggeredAnimation>

            <ScrollTriggeredAnimation animation="fadeLeft">
              <Card className="p-6 text-center">
                <h4 className="text-2xl font-bold text-orange-500 mb-2">Slide Left</h4>
                <p>Slides from left</p>
              </Card>
            </ScrollTriggeredAnimation>
          </div>
        </section>

        {/* Animated Counter */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Animated Counter</h3>
          <div className="text-center">
            <ScrollCounter 
              end={1000} 
              className="text-6xl font-bold text-gradient"
            />
            <p className="text-lg text-muted-foreground mt-2">Projects Completed</p>
          </div>
        </section>

        {/* Button Animations */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Enhanced Buttons</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <HoverMicrointeraction type="lift" intensity="strong">
              <Button className="pulse-glow-effect">Glowing Button</Button>
            </HoverMicrointeraction>
            
            <HoverMicrointeraction type="magnetic" intensity="medium">
              <Button variant="outline">Magnetic Button</Button>
            </HoverMicrointeraction>
            
            <HoverMicrointeraction type="scale" intensity="strong">
              <Button variant="secondary">Scaling Button</Button>
            </HoverMicrointeraction>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AnimationShowcase;