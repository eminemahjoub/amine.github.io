import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsApp = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Projects ({projects.length})</h2>
      <div className="grid md:grid-cols-2 gap-4 overflow-y-auto max-h-[500px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              {project.featured && (
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            {project.longDescription && (
              <p className="text-gray-400 text-xs mb-4">{project.longDescription}</p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#3d2b2e] text-orange-400 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm"
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

