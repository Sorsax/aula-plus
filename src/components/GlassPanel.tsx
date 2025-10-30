import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import LiquidGlass from "liquid-glass-react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
  cornerRadius?: number;
  padding?: string;
}

export const GlassPanel = ({ children, className, hover = false, style, cornerRadius, padding }: GlassPanelProps) => {
  return (
    <LiquidGlass
      className={cn(hover && "glass-hover cursor-pointer", className)}
      style={style}
      cornerRadius={cornerRadius ?? 16}
      padding={padding}
      displacementScale={70}
      blurAmount={0.0625}
      saturation={140}
      aberrationIntensity={2}
      elasticity={0.15}
    >
      {children}
    </LiquidGlass>
  );
};
