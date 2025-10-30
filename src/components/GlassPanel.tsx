import { ReactNode, CSSProperties, useMemo } from "react";
import { cn } from "@/lib/utils";
import { LiquidGlass } from "@specy/liquid-glass-react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export const GlassPanel = ({ children, className, hover = false, style }: GlassPanelProps) => {
  // Memoize the glass parameters – lightweight defaults that look good
  const glassStyle = useMemo(
    () => ({
      depth: 0.6,
      segments: 48,
      radius: 0.12,
      roughness: 0.08,
      transmission: 0.98,
      reflectivity: 0.35,
      ior: 1.45,
      dispersion: 0.08,
      thickness: 0.45,
    }),
    []
  );

  return (
    <div className={cn(hover && "glass-hover cursor-pointer", className)} style={style}>
      <LiquidGlass
        glassStyle={glassStyle}
        wrapperStyle={{
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
        style={`width: 100%; height: 100%; border-radius: var(--radius);`}
      >
        <div className="w-full h-full">{children}</div>
      </LiquidGlass>
    </div>
  );
};
