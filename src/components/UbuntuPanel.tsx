interface UbuntuPanelProps {
  currentTime: Date;
}

export const UbuntuPanel = ({ currentTime }: UbuntuPanelProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 backdrop-blur-sm border-b border-gray-700/50 flex items-center justify-between px-4 z-50 shadow-lg">
      {/* Center: Window List */}
      <div className="flex-1 flex items-center justify-center gap-1"></div>

      {/* Right: System Tray */}
      <div className="flex items-center gap-4 text-white text-xs">
        <div className="px-2 py-1 bg-black/40 rounded">
          <span>{formatTime(currentTime)}</span>
        </div>
        <div className="px-2 py-1 bg-black/40 rounded">
          <span>{formatDate(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

