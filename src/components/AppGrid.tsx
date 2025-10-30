import { GlassPanel } from "./GlassPanel";

export const AppGrid = () => {
  const boxes = Array.from({ length: 6 });

  return (
    <div className="w-[65vw]" style={{ minHeight: "23vh" }}>
      <GlassPanel className="p-6 h-full flex items-center">
        <div className="grid grid-cols-6 gap-4 w-full">
          {boxes.map((_, idx) => (
            <GlassPanel key={idx} hover className="aspect-square flex items-center justify-center">
              <div className="w-1/2 h-1/2" />
            </GlassPanel>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};
