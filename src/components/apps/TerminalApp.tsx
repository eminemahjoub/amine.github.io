import { useState, useRef, useEffect } from "react";
import { personalInfo, projects, skills, experience, education, certifications, awards, research, publications, community } from "@/data/portfolio";

export const TerminalApp = () => {
  const [history, setHistory] = useState<Array<{ type: "command" | "output"; content: string }>>([
    { type: "output", content: `Welcome to ${personalInfo.name}'s Terminal\nType 'help' for available commands.\n` }
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandHistory = useRef<string[]>([]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().split(" ");
    
    if (cmd.trim()) {
      commandHistory.current.push(cmd);
    }
    
    setHistory(prev => [...prev, { type: "command", content: `$ ${cmd}` }]);

    let output = "";
    switch (command.toLowerCase()) {
      case "help":
        output = `Available commands:
  help          - Show this help message
  whoami        - Display personal information
  about         - Show about information
  clear         - Clear the terminal
  ls            - List available sections
  cat [file]    - Display content of a file
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
  pwd           - Print current directory
  cd [dir]      - Change directory (sections)
  date          - Show current date and time
  echo [text]   - Display text
  uname         - Display system information
  history       - Show command history
  exit          - Exit terminal message
`;
        break;
      case "whoami":
        output = `${personalInfo.name}\n${personalInfo.title}\n${personalInfo.location}`;
        break;
      case "about":
        output = `${personalInfo.bio}\n\nLocation: ${personalInfo.location}\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}`;
        break;
      case "clear":
        setHistory([]);
        return;
      case "ls":
        output = `about  projects  skills  experience  education  certifications
awards  research  publications  community  contact  social`;
        break;
      case "cat":
        const file = args[0];
        if (!file) {
          output = "Usage: cat <file>\nUse 'ls' to see available files.";
        } else {
          switch (file.toLowerCase()) {
            case "about":
              output = personalInfo.bio;
              break;
            case "projects":
              output = projects.map((p) => `${p.id}. ${p.title}: ${p.description}`).join("\n");
              break;
            case "skills":
              output = skills.map((s) => `${s.name}: ${s.level}%`).join("\n");
              break;
            default:
              output = `File '${file}' not found. Use 'ls' to see available files.`;
          }
        }
        break;
      case "projects":
        output = projects.map((p) => `[${p.id}] ${p.title}\n    ${p.description}\n    Tags: ${p.tags.join(", ")}`).join("\n\n");
        break;
      case "project":
        const projectId = parseInt(args[0]);
        const project = projects.find((p) => p.id === projectId);
        if (project) {
          output = `${project.title}\n\n${project.longDescription || project.description}\n\nTags: ${project.tags.join(", ")}\n${project.github ? `GitHub: ${project.github}` : ""}`;
        } else {
          output = `Project not found. Use 'projects' to list available projects.`;
        }
        break;
      case "skills":
        const skillCategories = skills.reduce((acc, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {} as Record<string, typeof skills>);
        output = Object.entries(skillCategories).map(([category, categorySkills]) => 
          `${category}:\n${categorySkills.map(s => `  ${s.name}: ${s.level}%`).join("\n")}`
        ).join("\n\n");
        break;
      case "experience":
        output = experience.map((exp) => 
          `${exp.title} at ${exp.organization}\n  Period: ${exp.period}\n  Location: ${exp.location}\n  Type: ${exp.type}\n  ${exp.description}`
        ).join("\n\n");
        break;
      case "education":
        output = education.map((edu) => 
          `${edu.degree} at ${edu.institution}\n  Period: ${edu.period}\n  Status: ${edu.status}\n  ${edu.description}`
        ).join("\n\n");
        break;
      case "certifications":
        output = certifications.map((cert) => 
          `${cert.title}\n  Issuer: ${cert.issuer}\n  Year: ${cert.year}\n  Category: ${cert.category}`
        ).join("\n\n");
        break;
      case "awards":
        output = awards.map((award) => 
          `${award.title}\n  Organization: ${award.organization}\n  Year: ${award.year}\n  ${award.description}`
        ).join("\n\n");
        break;
      case "research":
        output = research.map((r) => 
          `${r.title}\n  Status: ${r.status}\n  Year: ${r.year}\n  ${r.description}`
        ).join("\n\n");
        break;
      case "publications":
        output = publications.map((pub) => 
          `${pub.title}\n  Type: ${pub.type}\n  Year: ${pub.year}\n  ${pub.description}`
        ).join("\n\n");
        break;
      case "community":
        output = community.map((comm) => 
          `${comm.role} at ${comm.organization}\n  Period: ${comm.period}\n  ${comm.description}`
        ).join("\n\n");
        break;
      case "contact":
        output = `Contact Information:\n\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}\n\nUse 'social' command to see social media links.`;
        break;
      case "social":
        output = `Social Media Links:\n\nLinkedIn: ${personalInfo.social.linkedin}\nGitHub: ${personalInfo.social.github}\nTwitter: ${personalInfo.social.twitter}`;
        break;
      case "pwd":
        output = "~/portfolio";
        break;
      case "cd":
        const dir = args[0];
        if (!dir || dir === "~") {
          output = "Changed to ~/portfolio";
        } else {
          output = `Changed to ~/portfolio/${dir}`;
        }
        break;
      case "date":
        output = new Date().toString();
        break;
      case "echo":
        output = args.join(" ");
        break;
      case "uname":
        output = `Linux portfolio-terminal 5.15.0-ubuntu-generic\nPortfolio OS v1.0\nUser: ${personalInfo.name}`;
        break;
      case "history":
        output = commandHistory.current.length > 0 
          ? commandHistory.current.map((cmd, i) => `${i + 1}  ${cmd}`).join("\n")
          : "No command history.";
        break;
      case "exit":
        output = "Type 'clear' and refresh the page to restart the terminal.";
        break;
      default:
        output = `Command not found: ${command}\nType 'help' for available commands.`;
    }

    if (output) {
      setHistory(prev => [...prev, { type: "output", content: output }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div className="w-full h-full bg-[#1a1a1a] p-4 font-mono text-sm">
      <div ref={terminalRef} className="h-full overflow-y-auto text-green-400">
        {history.map((item, index) => (
          <div key={index} className="whitespace-pre-wrap mb-2">
            {item.type === "command" ? (
              <div className="text-green-400">{item.content}</div>
            ) : (
              <div className="text-gray-300">{item.content}</div>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-300 caret-green-400"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

