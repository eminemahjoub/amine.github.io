import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { UbuntuPanel } from "./UbuntuPanel";
import { UbuntuDock } from "./UbuntuDock";
import { UbuntuWindow } from "./UbuntuWindow";
import { AboutApp } from "./apps/AboutApp";
import { ProjectsApp } from "./apps/ProjectsApp";
import { SkillsApp } from "./apps/SkillsApp";
import { ExperienceApp } from "./apps/ExperienceApp";
import { EducationApp } from "./apps/EducationApp";
import { ContactApp } from "./apps/ContactApp";
import { PortfolioBrowser } from "./apps/PortfolioBrowser";
import { TerminalApp } from "./apps/TerminalApp";
import { useNotifications, NotificationSystem } from "./UbuntuNotification";
import { GitHubStats } from "./GitHubStats";
import { useIsMobile } from "@/hooks/use-mobile";

export type AppType = "portfolio" | "terminal" | "linkedin" | "github" | "launchpad" | "mastodon" | "blog" | "resume" | "about" | "projects" | "skills" | "experience" | "education" | "contact" | null;

interface Window {
  id: string;
  type: AppType;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
}

export const Desktop = () => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { notifications, addNotification, removeNotification } = useNotifications();
  const isMobile = useIsMobile();

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const openApp = (type: AppType, title: string) => {
    const existingWindow = windows.find((w) => w.type === type && !w.minimized);
    if (existingWindow) {
      // Focus existing window
      setWindows((prev) =>
        prev.map((w) =>
          w.id === existingWindow.id ? { ...w, zIndex: nextZIndex, minimized: false } : w
        )
      );
      setNextZIndex((prev) => prev + 1);
      return;
    }

    let windowConfig = {
      x: isMobile ? 0 : 150 + (windows.length * 30),
      y: isMobile ? 30 : 50 + (windows.length * 30),
      width: isMobile ? window.innerWidth : 900,
      height: isMobile ? window.innerHeight - 30 : 600,
    };

    let windowTitle = title;
    if (type === "portfolio") {
      windowConfig = {
        x: isMobile ? 0 : 200,
        y: isMobile ? 30 : 80,
        width: isMobile ? window.innerWidth : 1000,
        height: isMobile ? window.innerHeight - 30 : 700,
      };
      windowTitle = "Browser";
    }

    const newWindow: Window = {
      id: `${type}-${Date.now()}`,
      type,
      title: windowTitle,
      ...windowConfig,
      zIndex: nextZIndex,
      minimized: false,
    };

    setWindows([...windows, newWindow]);
    setNextZIndex((prev) => prev + 1);
  };

  // Auto-open portfolio window on mount
  useEffect(() => {
    if (windows.length === 0) {
      const newWindow: Window = {
        id: `portfolio-${Date.now()}`,
        type: "portfolio",
        title: "Browser",
        x: isMobile ? 0 : 200,
        y: isMobile ? 30 : 80,
        width: isMobile ? window.innerWidth : 1000,
        height: isMobile ? window.innerHeight - 30 : 700,
        zIndex: 1,
        minimized: false,
      };
      setWindows([newWindow]);
      setNextZIndex(2);
    }
  }, [isMobile]);

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  };

  const maximizeWindow = (id: string) => {
    const panelHeight = isMobile ? 30 : 30;
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              x: 0,
              y: panelHeight,
              width: window.innerWidth,
              height: window.innerHeight - panelHeight,
              zIndex: nextZIndex,
            }
          : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  };

  const focusWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, minimized: false } : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y } : w))
    );
  };

  const updateWindowSize = (id: string, width: number, height: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, width, height } : w))
    );
  };

  const renderAppContent = (type: AppType) => {
    switch (type) {
      case "portfolio":
        return <PortfolioBrowser />;
      case "terminal":
        return <TerminalApp />;
      case "about":
        return <AboutApp />;
      case "projects":
        return <ProjectsApp />;
      case "skills":
        return <SkillsApp />;
      case "experience":
        return <ExperienceApp />;
      case "education":
        return <EducationApp />;
      case "contact":
        return <ContactApp />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen fixed inset-0 bg-black overflow-hidden">
      {/* Ubuntu Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ubuntu.jpg')`,
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top Panel */}
      <UbuntuPanel 
        currentTime={currentTime}
        windows={windows}
        onFocusWindow={focusWindow}
        onMinimizeWindow={minimizeWindow}
        notificationCount={notifications.length}
        onNotificationClick={() => {
          // Notification panel can be opened here if needed
          addNotification(
            "Notifications",
            `${notifications.length} notification${notifications.length > 1 ? 's' : ''} available`,
            "info",
            3000
          );
        }}
      />
      
      {/* Notification System */}
      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
      />


      {/* Windows */}
      {windows.map((window) => (
        !window.minimized && (
          <UbuntuWindow
            key={window.id}
            window={window}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            onMove={updateWindowPosition}
            onResize={updateWindowSize}
          >
            {renderAppContent(window.type)}
          </UbuntuWindow>
        )
      ))}

      {/* Dock/Launcher */}
      <UbuntuDock
        windows={windows}
        onOpenApp={openApp}
        onFocusWindow={focusWindow}
        isMobile={isMobile}
      />
    </div>
  );
};

