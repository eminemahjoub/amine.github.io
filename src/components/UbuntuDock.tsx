import { Window, AppType } from "./Desktop";
import { Globe, Terminal, Linkedin, Github, Facebook, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

interface UbuntuDockProps {
  windows: Window[];
  onOpenApp: (type: AppType, title: string) => void;
  onFocusWindow: (id: string) => void;
  isMobile?: boolean;
}

export const UbuntuDock = ({ windows, onOpenApp, onFocusWindow, isMobile = false }: UbuntuDockProps) => {
  const apps = [
    { 
      type: "portfolio" as AppType, 
      title: "Portfolio", 
      icon: Globe, 
      color: "bg-purple-600",
      label: "Browser"
    },
    { 
      type: "terminal" as AppType, 
      title: "Terminal", 
      icon: Terminal, 
      color: "bg-black",
      label: "Terminal"
    },
    { 
      type: "linkedin" as AppType, 
      title: "LinkedIn", 
      icon: Linkedin, 
      color: "bg-blue-600",
      label: "LinkedIn",
      external: personalInfo.social.linkedin
    },
    { 
      type: "github" as AppType, 
      title: "GitHub", 
      icon: Github, 
      color: "bg-black",
      label: "GitHub",
      external: personalInfo.social.github
    },
    { 
      type: "facebook" as AppType, 
      title: "Facebook", 
      icon: Facebook, 
      color: "bg-blue-700",
      label: "Facebook"
    },
    { 
      type: "blog" as AppType, 
      title: "Blog", 
      icon: Globe, 
      color: "bg-purple-800",
      label: "Blog"
    },
    { 
      type: "resume" as AppType, 
      title: "Resume", 
      icon: FileText, 
      color: "bg-red-600",
      label: "Resume"
    },
  ];

  const isWindowOpen = (type: AppType) => {
    return windows.some((w) => w.type === type && !w.minimized);
  };

  const handleClick = (app: typeof apps[0]) => {
    if (app.external) {
      window.open(app.external, '_blank');
      return;
    }
    
    if (isWindowOpen(app.type)) {
      const window = windows.find((w) => w.type === app.type && !w.minimized);
      if (window) onFocusWindow(window.id);
    } else {
      onOpenApp(app.type, app.title);
    }
  };

  if (isMobile) {
    return (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl px-2 py-2 flex flex-row items-center gap-2 shadow-2xl border border-gray-700/50 overflow-x-auto max-w-[calc(100vw-2rem)]">
          {apps.map((app) => {
            const isOpen = isWindowOpen(app.type);
            const IconComponent = app.icon;
            return (
              <button
                key={app.type}
                onClick={() => handleClick(app)}
                className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 flex-shrink-0 ${
                  isOpen
                    ? "bg-white/20 scale-110"
                    : "active:bg-white/10 active:scale-105"
                }`}
                title={app.label}
              >
                <div
                  className={`w-10 h-10 ${app.color} rounded-lg flex items-center justify-center text-white shadow-lg`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                {isOpen && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-white rounded-b-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-black/60 backdrop-blur-md rounded-2xl px-2 py-4 flex flex-col items-center gap-3 shadow-2xl border border-gray-700/50">
        {apps.map((app) => {
          const isOpen = isWindowOpen(app.type);
          const IconComponent = app.icon;
          return (
            <button
              key={app.type}
              onClick={() => handleClick(app)}
              className={`relative w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-200 group ${
                isOpen
                  ? "bg-white/20 scale-110"
                  : "hover:bg-white/10 hover:scale-105"
              }`}
              title={app.label}
            >
              <div
                className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center text-white shadow-lg`}
              >
                <IconComponent className="w-6 h-6" />
              </div>
              {isOpen && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
              )}
              <div className="absolute left-full ml-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {app.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
