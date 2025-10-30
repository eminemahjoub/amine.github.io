import { Users, GraduationCap, Satellite, Code, Video, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  users: Users,
  "graduation-cap": GraduationCap,
  satellite: Satellite,
  code: Code,
  video: Video,
  award: Award,
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Leadership, research, and community impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {experience.map((item, index) => {
                const Icon = iconMap[item.icon] || Code;
                return (
                  <div
                    key={item.id}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                    <Card className="p-6 bg-card card-glow border-primary/20 md:ml-16">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>

                        <div className="flex-grow space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <div>
                              <h3 className="text-xl font-bold">{item.title}</h3>
                              <p className="text-muted-foreground">
                                {item.organization}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary border-primary/20"
                              >
                                {item.type}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>

                          <p className="text-xs text-muted-foreground font-medium">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
