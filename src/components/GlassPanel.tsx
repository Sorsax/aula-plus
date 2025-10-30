import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export const GlassPanel = ({ children, className, hover = false, style }: GlassPanelProps) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-[var(--radius)]",
        hover && "glass-hover cursor-pointer",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
