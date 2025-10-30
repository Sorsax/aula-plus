import { GlassPanel } from "./GlassPanel";
import { User } from "lucide-react";

export const ProfileCircle = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
  <GlassPanel hover cornerRadius={999} className="w-12 h-12 rounded-full flex items-center justify-center">
        <button
          className="w-full h-full flex items-center justify-center text-glass"
          aria-label="Profiili"
        >
          <span className="text-sm font-medium">NL</span>
        </button>
      </GlassPanel>
    </div>
  );
};
