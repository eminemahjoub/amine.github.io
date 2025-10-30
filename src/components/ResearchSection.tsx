import { FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { research } from "@/data/portfolio";

export const ResearchSection = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Published":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "In Review":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "Ongoing":
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Review":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Ongoing":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Research & <span className="text-gradient">Publications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Contributing to cutting-edge research in AI and smart systems
            </p>
          </div>

          <div className="space-y-6">
            {research.map((item, index) => (
              <Card
                key={item.id}
                className="p-6 bg-card card-glow border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(item.status)}
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted">
                          {item.year}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              PhD Focus: <span className="font-semibold text-foreground">Influential Factors in Real Estate Pricing - A Quantitative Analysis</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
