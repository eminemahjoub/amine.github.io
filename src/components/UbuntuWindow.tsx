import { useState, useRef, useEffect } from "react";
import { Window } from "./Desktop";
import { X, Minus, Square } from "lucide-react";

interface UbuntuWindowProps {
  window: Window;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, width: number, height: number) => void;
  children: React.ReactNode;
}

export const UbuntuWindow = ({
  window,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  onResize,
  children,
}: UbuntuWindowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        onMove(window.id, Math.max(0, newX), Math.max(30, newY));
      } else if (isResizing) {
        if (windowRef.current) {
          const rect = windowRef.current.getBoundingClientRect();
          const newWidth = Math.max(400, e.clientX - rect.left);
          const newHeight = Math.max(300, e.clientY - rect.top);
          onResize(window.id, newWidth, newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, window.id, onMove, onResize]);

  const handleTitleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - window.x,
        y: e.clientY - window.y,
      });
      onFocus();
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    onFocus();
  };

  return (
    <div
      ref={windowRef}
      className="absolute bg-[#1a1a1a] rounded-lg shadow-2xl border border-gray-700 overflow-hidden flex flex-col"
      style={{
        left: `${window.x}px`,
        top: `${window.y}px`,
        width: `${window.width}px`,
        height: `${window.height}px`,
        zIndex: window.zIndex,
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="h-8 bg-[#2d2d2d] flex items-center justify-between px-3 cursor-move border-b border-gray-700"
        onMouseDown={handleTitleMouseDown}
      >
        <div className="flex items-center gap-3 flex-1">
          <span className="text-white text-xs font-medium select-none">
            {window.title}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-4 h-4 rounded hover:bg-gray-600 flex items-center justify-center transition-colors group"
            title="Minimize"
          >
            <Minus className="w-3 h-3 text-gray-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            className="w-4 h-4 rounded hover:bg-gray-600 flex items-center justify-center transition-colors group"
            title="Maximize"
          >
            <Square className="w-3 h-3 text-gray-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-4 h-4 rounded hover:bg-red-600 flex items-center justify-center transition-colors group"
            title="Close"
          >
            <X className="w-3 h-3 text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto bg-[#1a1a1a] text-white">
        {children}
      </div>

      {/* Resize Handle */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={handleResizeMouseDown}
      >
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-gray-600 opacity-50"></div>
      </div>
    </div>
  );
};

