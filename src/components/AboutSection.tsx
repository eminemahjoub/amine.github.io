import { MapPin, GraduationCap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolio";
import profileImg from "@/amine mahjoub image.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate engineer bridging AI, IoT, and R&D
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden card-glow">
                  <img
                    src={profileImg}
                    alt="Amine Mahjoub"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg leading-relaxed text-foreground/80">
                {personalInfo.bio}
              </p>

              <div className="space-y-4">
                <Card className="p-4 bg-card/50 border-primary/20">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card/50 border-primary/20">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{personalInfo.education}</p>
                      <p className="text-sm text-muted-foreground">
                        {personalInfo.university}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card/50 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Interests</p>
                      <p className="text-sm text-muted-foreground">
                        AI, Blockchain, Web Development, R&D
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
