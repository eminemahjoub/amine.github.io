import { Card } from "@/components/ui/card";
import { skills } from "@/data/portfolio";

export const SkillsSection = () => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Proficient across the full technology stack
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <div
                key={category}
                className="animate-fade-in-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground/90">
                  {category}
                </h3>
                <div className="grid gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <Card
                        key={skill.name}
                        className="p-4 bg-card border-primary/20 hover:border-primary/40 transition-all"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
