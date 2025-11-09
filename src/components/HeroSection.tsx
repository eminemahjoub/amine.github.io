import { ArrowDown, Github, Linkedin, Mail, Rocket, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-lg text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              {personalInfo.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              asChild
            >
              <a href="/cv.pdf" download="Amine_Mahjoub_CV.pdf">
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.mastodon}
              target="_blank"
              rel="me noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Share2 className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.launchpad}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Rocket className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
