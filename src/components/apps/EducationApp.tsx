import { education } from "@/data/portfolio";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const EducationApp = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
      <div className="space-y-4 overflow-y-auto max-h-[500px]">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-orange-400 font-semibold">{edu.institution}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded ${
                  edu.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-orange-500/20 text-orange-400"
                }`}
              >
                {edu.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{edu.period}</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

