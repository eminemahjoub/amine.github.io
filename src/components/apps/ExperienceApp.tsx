import { experience } from "@/data/portfolio";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const ExperienceApp = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Work Experience</h2>
      <div className="space-y-4 overflow-y-auto max-h-[500px]">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-orange-400 font-semibold">{exp.organization}</p>
              </div>
              <span className="bg-[#3d2b2e] text-orange-400 text-xs px-3 py-1 rounded">
                {exp.type}
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{exp.location}</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

