import { GlassPanel } from "./GlassPanel";

interface LinkCategory {
  title: string;
  subtitle: string;
  links: { name: string; url: string; description: string }[];
}

const linkCategories: LinkCategory[] = [
  {
    title: "Lukion Kotisivu",
    subtitle: "Helsingin #kaupunkilukio",
    links: [
      { name: "Opiskelijan opas", url: "#", description: "Lue koulun opiskeluopas" },
      { name: "Lukiolaisen digiohjeet", url: "#", description: "Miten löydät digitaalialustat" },
    ],
  },
  {
    title: "Opiskelijoiden hyvinvointi",
    subtitle: "Korotettu ja päivitetty",
    links: [
      { name: "Ristiinopiskelu", url: "#", description: "Lähde kokeile JAM:n ja yliopistojen opintoja" },
      { name: "Hyvinvoinnin tuki", url: "#", description: "Vinkkejä on tässä kohelluksessa" },
    ],
  },
  {
    title: "Opiskelijaruokailu",
    subtitle: "Päivän ruokalistat",
    links: [
      { name: "Helsingin verkkolukio", url: "#", description: "Lukion virtuaalset opinnot" },
    ],
  },
];

export const InfoLinks = () => {
  return (
    <div className="w-[46vw]" style={{ minHeight: '18vh' }}>
      <GlassPanel className="p-6 h-full">
        <div className="grid grid-cols-3 gap-6 h-full">
          {linkCategories.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <div>
                <h3 className="text-glass font-semibold text-base mb-0.5">{category.title}</h3>
                <p className="text-glass-muted text-xs">{category.subtitle}</p>
              </div>
              <div className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    className="block group"
                  >
                    <h4 className="text-glass font-medium text-sm group-hover:underline">{link.name}</h4>
                    <p className="text-glass-muted text-xs mt-0.5">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};
