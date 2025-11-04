import { useState } from "react";
import { personalInfo, experience, education, projects, research, skills, certifications, awards, publications, community } from "@/data/portfolio";
import profileImg from "@/amine mahjoub image.png";
import { Github, Linkedin, Facebook, FileText, Globe, Shield, Briefcase, GraduationCap, Award, X, Calendar, MapPin, ExternalLink } from "lucide-react";

export const PortfolioBrowser = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  return (
    <div className="w-full h-full flex flex-col bg-[#1a1a1a]">
      {/* Browser Address Bar */}
      <div className="h-10 bg-[#2d2d2d] border-b border-gray-700 flex items-center px-4 gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-[#1a1a1a] rounded-lg px-3 py-1 text-xs text-gray-400 flex items-center gap-2 ml-4">
          <Globe className="w-3 h-3" />
          <span>https://www.aminemahjoub.tech</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex items-start gap-8 mb-12">
            <img
              src={profileImg}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-lg object-cover border-2 border-orange-500/50 shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{personalInfo.name}</h1>
              <p className="text-orange-400 text-xl mb-6">{personalInfo.title}</p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Twitter
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Blog
                </a>
                <a
                  href={personalInfo.social.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  Credly
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Content Cards - Folder Style */}
          <div className="space-y-4">
            {/* AI & Intelligent Systems Research */}
            <div 
              className="bg-[#2d2d2d]/80 backdrop-blur-sm rounded-lg p-5 border-l-4 border-orange-500 hover:border-orange-400 hover:bg-[#3d3d3d]/80 transition-all cursor-pointer shadow-lg"
              onClick={() => setExpandedCard(expandedCard === "research" ? null : "research")}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500/20 rounded flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">AI & Intelligent Systems Research</h3>
                  <p className="text-gray-300">
                    {experience.length}+ years developing AI systems, blockchain solutions, and IoT applications. 
                    Research in Smart Cities, CubeSat integration, and predictive systems.
                  </p>
                  {expandedCard === "research" && (
                    <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-orange-400">📁</span> Research Projects
                        </h4>
                        <div className="space-y-3">
                          {research.map((r) => (
                            <div key={r.id} className="bg-[#1a1a1a] p-4 rounded border-l-2 border-gray-600 hover:border-orange-500 transition-colors">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="text-white font-semibold">{r.title}</h5>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  r.status === "Published" ? "bg-green-500/20 text-green-400" :
                                  r.status === "Ongoing" ? "bg-blue-500/20 text-blue-400" :
                                  "bg-yellow-500/20 text-yellow-400"
                                }`}>
                                  {r.status}
                                </span>
                              </div>
                              <p className="text-gray-300 text-sm mb-2">{r.description}</p>
                              <p className="text-gray-400 text-xs">{r.year}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-orange-400">📁</span> All Projects ({projects.length})
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {projects.map((project) => (
                            <div key={project.id} className="bg-[#1a1a1a] p-4 rounded border-l-2 border-gray-600 hover:border-orange-500 transition-colors">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="text-white font-semibold text-sm">{project.title}</h5>
                                {project.featured && (
                                  <span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded">Featured</span>
                                )}
                              </div>
                              <p className="text-gray-300 text-xs mb-2">{project.description}</p>
                              {project.longDescription && (
                                <p className="text-gray-400 text-xs mb-2">{project.longDescription}</p>
                              )}
                              <div className="flex flex-wrap gap-1 mb-2">
                                {project.tags.map((tag, idx) => (
                                  <span key={idx} className="bg-[#2d2d2d] text-gray-300 text-xs px-2 py-0.5 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-400 hover:text-orange-300 text-xs flex items-center gap-1"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github className="w-3 h-3" />
                                  View on GitHub
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-orange-400">📁</span> Publications
                        </h4>
                        <div className="space-y-3">
                          {publications.map((pub) => (
                            <div key={pub.id} className="bg-[#1a1a1a] p-4 rounded border-l-2 border-gray-600 hover:border-orange-500 transition-colors">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="text-white font-semibold">{pub.title}</h5>
                                <span className="text-xs text-gray-400">{pub.year}</span>
                              </div>
                              <p className="text-gray-300 text-sm mb-1">{pub.description}</p>
                              <span className="text-xs text-gray-400">Type: {pub.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div 
              className="bg-[#2d2d2d]/80 backdrop-blur-sm rounded-lg p-5 border-l-4 border-yellow-500 hover:border-yellow-400 hover:bg-[#3d3d3d]/80 transition-all cursor-pointer shadow-lg"
              onClick={() => setExpandedCard(expandedCard === "experience" ? null : "experience")}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                  <Briefcase className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Professional Experience</h3>
                  <p className="text-gray-300 mb-2">
                    {experience.length} positions including R&D internships, full-stack development, and AI research.
                  </p>
                  <div className="text-sm text-gray-400">
                    Recent: R&D Intern at Euromed Innovation, Python Developer at TUDIGISEC, 
                    Blockchain & IoT Intern at Digital Research & Technologies
                  </div>
                  {expandedCard === "experience" && (
                    <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                      {experience.map((exp) => (
                        <div key={exp.id} className="bg-[#1a1a1a] p-4 rounded border-l-2 border-gray-600 hover:border-yellow-500 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="text-white font-semibold text-lg mb-1">{exp.title}</h4>
                              <p className="text-orange-400 font-medium">{exp.organization}</p>
                            </div>
                            <span className="bg-[#2d2d2d] text-orange-400 text-xs px-3 py-1 rounded">
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Education */}
            <div 
              className="bg-[#2d2d2d]/80 backdrop-blur-sm rounded-lg p-5 border-l-4 border-red-500 hover:border-red-400 hover:bg-[#3d3d3d]/80 transition-all cursor-pointer shadow-lg"
              onClick={() => setExpandedCard(expandedCard === "education" ? null : "education")}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500/20 rounded flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <GraduationCap className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300">
                    {education.map((edu, idx) => (
                      <span key={edu.id}>
                        {edu.degree} at {edu.institution}. {edu.description}
                        {idx < education.length - 1 && " "}
                      </span>
                    ))}
                  </p>
                  {expandedCard === "education" && (
                    <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                      {education.map((edu) => (
                        <div key={edu.id} className="bg-[#1a1a1a] p-4 rounded border-l-2 border-gray-600 hover:border-red-500 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="text-white font-semibold text-lg mb-1">{edu.degree}</h4>
                              <p className="text-orange-400 font-medium">{edu.institution}</p>
                            </div>
                            <span className={`text-xs px-3 py-1 rounded ${
                              edu.status === "Completed" 
                                ? "bg-green-500/20 text-green-400" 
                                : "bg-orange-500/20 text-orange-400"
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{edu.description}</p>
                        </div>
                      ))}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-orange-400">📁</span> Certifications ({certifications.length})
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {certifications.map((cert) => (
                            <div key={cert.id} className="bg-[#1a1a1a] p-3 rounded border-l-2 border-gray-600 hover:border-orange-500 transition-colors">
                              <h5 className="text-white font-semibold text-sm mb-1">{cert.title}</h5>
                              <p className="text-gray-300 text-xs mb-1">{cert.issuer} · {cert.year}</p>
                              <span className="text-xs text-gray-400">{cert.category}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-orange-400">📁</span> Awards
                        </h4>
                        <div className="space-y-3">
                          {awards.map((award) => (
                            <div key={award.id} className="bg-[#1a1a1a] p-4 rounded border-l-2 border-gray-600 hover:border-orange-500 transition-colors">
                              <h5 className="text-white font-semibold mb-1">{award.title}</h5>
                              <p className="text-orange-400 text-sm mb-1">{award.organization} · {award.year}</p>
                              <p className="text-gray-300 text-sm">{award.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-[#2d2d2d]/80 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Featured Projects</h3>
              <div className="grid grid-cols-2 gap-4">
                {projects.filter(p => p.featured).slice(0, 4).map((project) => (
                  <div key={project.id} className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700 hover:border-orange-500/50 transition-colors">
                    <h4 className="text-white font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

