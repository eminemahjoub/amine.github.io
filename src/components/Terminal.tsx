import { useState, useEffect, useRef } from "react";
import { personalInfo, projects, skills, experience, education, certifications, awards, research, publications, community } from "@/data/portfolio";
import profileImg from "@/amine mahjoub image.png";

interface CommandOutput {
  type: "command" | "output" | "error";
  content: string | JSX.Element;
}

export const Terminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      type: "output",
      content: `Welcome to ${personalInfo.name}'s Portfolio Terminal

Type 'help' to see available commands.
Type 'clear' to clear the terminal.
`,
    },
  ]);
  const [input, setInput] = useState("");
  const [currentPath, setCurrentPath] = useState("~/portfolio");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.split(" ");

    // Add command to history
    setHistory((prev) => [
      ...prev,
      { type: "command", content: `${currentPath}$ ${trimmedCmd}` },
    ]);

    let output: CommandOutput | null = null;

    switch (command.toLowerCase()) {
      case "help":
        output = {
          type: "output",
          content: `Available commands:

  help          - Show this help message
  clear         - Clear the terminal
  about         - Show about information
  whoami        - Display personal information
  projects      - List all projects
  project [id]  - Show details of a specific project
  skills        - Display technical skills
  experience    - Show work experience
  education     - Display education background
  certifications - List certifications
  awards        - Show awards and achievements
  research      - Display research projects
  publications  - List publications
  community     - Show community involvement
  contact       - Display contact information
  social        - Show social media links
  ls            - List available sections
  cat [file]    - Display content of a file
  pwd           - Print current directory
  cd [dir]      - Change directory (sections)
  exit          - Exit terminal (refresh to restart)
`,
        };
        break;

      case "clear":
        setHistory([]);
        return;

      case "about":
        output = {
          type: "output",
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-24 h-24 rounded-lg object-cover border-2 border-green-500"
                />
                <div>
                  <h2 className="text-2xl font-bold text-green-400">{personalInfo.name}</h2>
                  <p className="text-green-300">{personalInfo.title}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{personalInfo.bio}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <span className="text-green-400">Location:</span>{" "}
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
                <div>
                  <span className="text-green-400">Education:</span>{" "}
                  <span className="text-gray-300">{personalInfo.education}</span>
                </div>
                <div>
                  <span className="text-green-400">University:</span>{" "}
                  <span className="text-gray-300">{personalInfo.university}</span>
                </div>
                <div>
                  <span className="text-green-400">Interests:</span>{" "}
                  <span className="text-gray-300">AI, Blockchain, Web Development, R&D</span>
                </div>
              </div>
            </div>
          ),
        };
        break;

      case "whoami":
        output = {
          type: "output",
          content: `${personalInfo.name}
${personalInfo.title}
${personalInfo.location}
${personalInfo.email}`,
        };
        break;

      case "projects":
        output = {
          type: "output",
          content: (
            <div className="space-y-3">
              <p className="text-green-400 mb-2">Projects ({projects.length}):</p>
              {projects.map((project) => (
                <div key={project.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">
                    [{project.id}] {project.title}
                  </p>
                  <p className="text-gray-300 text-sm ml-2">{project.description}</p>
                  <p className="text-gray-500 text-xs ml-2">
                    Tags: {project.tags.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "project":
        const projectId = parseInt(args[0]);
        const project = projects.find((p) => p.id === projectId);
        if (project) {
          output = {
            type: "output",
            content: (
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
                <p className="text-gray-300">{project.longDescription || project.description}</p>
                <div>
                  <span className="text-green-400">Tags:</span>{" "}
                  <span className="text-gray-300">{project.tags.join(", ")}</span>
                </div>
                {project.github && (
                  <div>
                    <span className="text-green-400">GitHub:</span>{" "}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {project.github}
                    </a>
                  </div>
                )}
              </div>
            ),
          };
        } else {
          output = {
            type: "error",
            content: `Project not found. Use 'projects' to list available projects.`,
          };
        }
        break;

      case "skills":
        const skillCategories = skills.reduce((acc, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {} as Record<string, typeof skills>);

        output = {
          type: "output",
          content: (
            <div className="space-y-4">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <p className="text-green-400 font-semibold mb-2">{category}:</p>
                  <div className="grid grid-cols-2 gap-2 ml-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2">
                        <span className="text-gray-300 w-32">{skill.name}:</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-gray-400 text-xs w-8">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "experience":
        output = {
          type: "output",
          content: (
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{exp.title}</p>
                  <p className="text-gray-300">{exp.organization}</p>
                  <p className="text-gray-400 text-sm">
                    {exp.period} · {exp.location}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "education":
        output = {
          type: "output",
          content: (
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{edu.degree}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                  <p className="text-gray-300 text-sm mt-1">{edu.description}</p>
                  <p className="text-green-300 text-xs mt-1">Status: {edu.status}</p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "certifications":
        output = {
          type: "output",
          content: (
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{cert.title}</p>
                  <p className="text-gray-300 text-sm">{cert.issuer} · {cert.year}</p>
                  <p className="text-gray-400 text-xs">Category: {cert.category}</p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "awards":
        output = {
          type: "output",
          content: (
            <div className="space-y-3">
              {awards.map((award) => (
                <div key={award.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{award.title}</p>
                  <p className="text-gray-300 text-sm">{award.organization} · {award.year}</p>
                  <p className="text-gray-300 text-sm mt-1">{award.description}</p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "research":
        output = {
          type: "output",
          content: (
            <div className="space-y-3">
              {research.map((r) => (
                <div key={r.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{r.title}</p>
                  <p className="text-gray-300 text-sm">{r.description}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {r.year} · Status: <span className="text-green-300">{r.status}</span>
                  </p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "publications":
        output = {
          type: "output",
          content: (
            <div className="space-y-3">
              {publications.map((pub) => (
                <div key={pub.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{pub.title}</p>
                  <p className="text-gray-300 text-sm">{pub.description}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {pub.year} · Type: {pub.type}
                  </p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "community":
        output = {
          type: "output",
          content: (
            <div className="space-y-3">
              {community.map((comm) => (
                <div key={comm.id} className="pl-4 border-l-2 border-green-500/30">
                  <p className="text-green-400 font-semibold">{comm.role}</p>
                  <p className="text-gray-300">{comm.organization}</p>
                  <p className="text-gray-400 text-sm">{comm.period}</p>
                  <p className="text-gray-300 text-sm mt-1">{comm.description}</p>
                </div>
              ))}
            </div>
          ),
        };
        break;

      case "contact":
        output = {
          type: "output",
          content: `Contact Information:

Email:    ${personalInfo.email}
Phone:    ${personalInfo.phone}
Location: ${personalInfo.location}

Use 'social' command to see social media links.`,
        };
        break;

      case "social":
        output = {
          type: "output",
          content: (
            <div className="space-y-2">
              <p className="text-green-400">Social Media:</p>
              <div className="ml-4 space-y-1">
                <div>
                  <span className="text-green-400">LinkedIn:</span>{" "}
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {personalInfo.social.linkedin}
                  </a>
                </div>
                <div>
                  <span className="text-green-400">GitHub:</span>{" "}
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {personalInfo.social.github}
                  </a>
                </div>
                <div>
                  <span className="text-green-400">Twitter:</span>{" "}
                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {personalInfo.social.twitter}
                  </a>
                </div>
              </div>
            </div>
          ),
        };
        break;

      case "ls":
        output = {
          type: "output",
          content: `about  projects  skills  experience  education  certifications
awards  research  publications  community  contact  social`,
        };
        break;

      case "cat":
        const file = args[0];
        if (!file) {
          output = {
            type: "error",
            content: "Usage: cat <file>\nUse 'ls' to see available files.",
          };
        } else {
          switch (file.toLowerCase()) {
            case "about":
              output = {
                type: "output",
                content: personalInfo.bio,
              };
              break;
            case "projects":
              output = {
                type: "output",
                content: projects.map((p) => `${p.id}. ${p.title}: ${p.description}`).join("\n"),
              };
              break;
            default:
              output = {
                type: "error",
                content: `File '${file}' not found. Use 'ls' to see available files.`,
              };
          }
        }
        break;

      case "pwd":
        output = {
          type: "output",
          content: currentPath,
        };
        break;

      case "cd":
        const dir = args[0];
        if (!dir || dir === "~") {
          setCurrentPath("~/portfolio");
        } else {
          setCurrentPath(`~/portfolio/${dir}`);
        }
        output = {
          type: "output",
          content: "",
        };
        break;

      case "exit":
        output = {
          type: "output",
          content: "Type 'clear' and refresh the page to restart the terminal.",
        };
        break;

      default:
        output = {
          type: "error",
          content: `Command not found: ${command}\nType 'help' for available commands.`,
        };
    }

    if (output) {
      setHistory((prev) => [...prev, output!]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      // Could implement command history here
    }
  };

  return (
    <div className="w-full h-screen bg-[#300a24] text-green-400 font-mono overflow-hidden flex flex-col">
      {/* Terminal Header */}
      <div className="bg-[#2d1b1e] border-b border-red-800/50 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm ml-2">terminal — amine@portfolio</span>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 space-y-1 text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {item.type === "command" && (
              <div className="text-green-400">
                <span className="text-blue-400">{currentPath}</span>
                <span className="text-white">$</span> {item.content.replace(`${currentPath}$ `, "")}
              </div>
            )}
            {item.type === "output" && (
              <div className="text-gray-300">{item.content}</div>
            )}
            {item.type === "error" && (
              <div className="text-red-400">{item.content}</div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-blue-400">{currentPath}</span>
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-300 caret-green-400 caret-[2px]"
            style={{ caretColor: "#4ade80" }}
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
          <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
        </form>
      </div>
    </div>
  );
};

