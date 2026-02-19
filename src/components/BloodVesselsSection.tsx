/* Kan Damarları Bölümü */
import { useState } from "react";

const vessels = [
  {
    id: "artery",
    name: "Atardamar",
    latin: "Arteria",
    color: "hsl(var(--oxygenated))",
    colorClass: "oxygenated",
    icon: "🔴",
    features: [
      "Kalbin pompalaması ile oluşan yüksek basınca dayanıklıdır",
      "Kalın ve esnek duvarlı yapıya sahiptir",
      "Düz kas ve elastik lif bakımından zengindir",
      "Genellikle oksijenli (temiz) kan taşır",
      "İstisnai: Pulmoner arter oksijensiz kan taşır",
      "Nabız atışı hissedilir",
    ],
    crossSection: {
      outer: "hsl(0,75%,40%)",
      muscle: "hsl(0,65%,35%)",
      inner: "hsl(0,75%,55%)",
      lumen: "hsl(0,75%,60%)",
    },
    examples: ["Aort", "Karotid arter", "Femoral arter", "Pulmoner arter"],
  },
  {
    id: "vein",
    name: "Toplardamar",
    latin: "Vena",
    color: "hsl(var(--deoxygenated))",
    colorClass: "deoxygenated",
    icon: "🔵",
    features: [
      "Düşük basınçlı ortamda çalışır",
      "İnce ve daha esnek duvarlıdır",
      "Kanın geri akışını önleyen kapakçıklar içerir",
      "Genellikle oksijensiz (kirli) kan taşır",
      "İstisnai: Pulmoner ven oksijenli kan taşır",
      "Nabız atışı hissedilmez",
    ],
    crossSection: {
      outer: "hsl(220,75%,35%)",
      muscle: "hsl(220,65%,30%)",
      inner: "hsl(220,85%,45%)",
      lumen: "hsl(220,85%,55%)",
    },
    examples: ["Vena kava", "Pulmoner ven", "Portal ven", "Jugüler ven"],
  },
  {
    id: "capillary",
    name: "Kılcal Damar",
    latin: "Capillarium",
    color: "hsl(280,70%,60%)",
    colorClass: "primary",
    icon: "🟣",
    features: [
      "Tek hücre katmanından oluşur (endotel)",
      "Çapı yaklaşık 5–10 mikrometre",
      "Gaz, besin ve atık madde alışverişi yapılır",
      "Doku sıvısıyla temas halindedir",
      "Yalnızca diffüzyon ile madde geçişi olur",
      "Ağ şeklinde doku içine yayılmıştır",
    ],
    crossSection: {
      outer: "hsl(280,60%,35%)",
      muscle: "hsl(280,55%,30%)",
      inner: "hsl(280,70%,50%)",
      lumen: "hsl(280,70%,60%)",
    },
    examples: ["Kas kılcalları", "Akciğer alveol kılcalları", "Böbrek glomerülleri"],
  },
];

/* Karşılaştırma tablosu verileri */
const comparisonData = [
  { feature: "Duvar kalınlığı", artery: "Kalın", vein: "İnce", capillary: "Tek hücre" },
  { feature: "Kapakçık", artery: "Yok", vein: "Var ✓", capillary: "Yok" },
  { feature: "Kan basıncı", artery: "Yüksek", vein: "Düşük", capillary: "Çok düşük" },
  { feature: "Taşınan kan", artery: "Oksijenli*", vein: "Oksijensiz*", capillary: "Her ikisi" },
  { feature: "Kas katmanı", artery: "Kalın", vein: "İnce", capillary: "Yok" },
  { feature: "Elastikiyet", artery: "Yüksek", vein: "Orta", capillary: "Düşük" },
];

/* Kesit SVG bileşeni */
const VesselCrossSection = ({ vessel }: { vessel: typeof vessels[0] }) => {
  const { crossSection } = vessel;
  const isCapillary = vessel.id === "capillary";

  if (isCapillary) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24">
        <circle cx="60" cy="60" r="55" fill={crossSection.outer} opacity="0.3" />
        <circle cx="60" cy="60" r="50" fill={crossSection.inner} opacity="0.4" />
        <circle cx="60" cy="60" r="44" fill={crossSection.lumen} opacity="0.9" />
        <text x="60" y="64" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter">Tek</text>
        <text x="60" y="74" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter">Endotel</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24">
      {/* Dış adventisya tabakası */}
      <circle cx="60" cy="60" r="55" fill={crossSection.outer} opacity="0.5" />
      {/* Orta kas tabakası (tunica media) */}
      <circle cx="60" cy="60" r={isCapillary ? "48" : "40"} fill={crossSection.muscle} opacity="0.8" />
      {/* İç intima tabakası */}
      <circle cx="60" cy="60" r="28" fill={crossSection.inner} opacity="0.9" />
      {/* Lümen */}
      <circle cx="60" cy="60" r={isCapillary ? "20" : "18"} fill={crossSection.lumen} />
      {/* Katman etiketleri */}
      {!isCapillary && (
        <>
          <line x1="60" y1="5" x2="60" y2="60" stroke="white" strokeWidth="0.5" strokeDasharray="2" opacity="0.5" />
          <text x="62" y="38" fill="white" fontSize="7" fontFamily="Inter" opacity="0.8">T.Media</text>
        </>
      )}
    </svg>
  );
};

const BloodVesselsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedVessel = vessels.find((v) => v.id === selected);

  return (
    <section id="vessels" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-deoxygenated/10 border border-deoxygenated/20 text-primary text-sm font-medium mb-4">
            🩸 Bölüm 3
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient-blue">Kan</span> Damarları
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vücudumuzda yaklaşık <strong className="text-foreground">100.000 km</strong> uzunluğunda damar ağı bulunur.
            Üç temel damar tipini keşfedin.
          </p>
        </div>

        {/* Damar Kartları */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {vessels.map((vessel) => (
            <button
              key={vessel.id}
              onClick={() => setSelected(selected === vessel.id ? null : vessel.id)}
              className={`glass rounded-2xl p-6 text-left card-hover transition-all duration-300 ${
                selected === vessel.id ? "border-l-4" : "border border-border/50"
              }`}
              style={selected === vessel.id ? { borderLeftColor: vessel.color } : {}}
            >
              {/* Kesit görseli */}
              <div className="flex items-center gap-4 mb-4">
                <VesselCrossSection vessel={vessel} />
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">{vessel.name}</h3>
                  <p className="text-muted-foreground text-sm italic">{vessel.latin}</p>
                  <div className="mt-2 px-2 py-0.5 rounded-full text-xs font-medium inline-block"
                    style={{ background: `${vessel.color}20`, color: vessel.color, border: `1px solid ${vessel.color}40` }}>
                    {vessel.icon} {vessel.id === "artery" ? "Oksijenli" : vessel.id === "vein" ? "Oksijensiz" : "Değişim"}
                  </div>
                </div>
              </div>

              {/* Özellikler */}
              <ul className="space-y-1.5">
                {vessel.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: vessel.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tıkla */}
              <p className="text-xs text-muted-foreground mt-3 opacity-60">
                {selected === vessel.id ? "▲ Kapat" : "▼ Daha fazla göster"}
              </p>
            </button>
          ))}
        </div>

        {/* Genişletilmiş bilgi */}
        {selectedVessel && (
          <div className="glass rounded-2xl p-6 mb-12 animate-fade-in-up border-l-4"
            style={{ borderLeftColor: selectedVessel.color }}>
            <h3 className="font-display font-bold text-xl text-foreground mb-4">
              {selectedVessel.name} — Tüm Özellikler
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                {selectedVessel.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: selectedVessel.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Örnekler:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedVessel.examples.map((ex, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm border"
                      style={{ borderColor: `${selectedVessel.color}40`, color: selectedVessel.color, background: `${selectedVessel.color}10` }}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Karşılaştırma Tablosu */}
        <div className="glass rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border/50">
            <h3 className="font-display font-bold text-lg text-foreground">Karşılaştırma Tablosu</h3>
            <p className="text-muted-foreground text-sm mt-1">*İstisnalar: Pulmoner arter oksijensiz, pulmoner ven oksijenli kan taşır</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/20">
                  <th className="text-left p-4 text-muted-foreground font-medium text-sm">Özellik</th>
                  <th className="text-center p-4 text-oxygenated font-semibold">Atardamar</th>
                  <th className="text-center p-4 text-primary font-semibold">Toplardamar</th>
                  <th className="text-center p-4 font-semibold" style={{ color: "hsl(280,70%,60%)" }}>Kılcal Damar</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-t border-border/30 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                    <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">{row.artery}</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">{row.vein}</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">{row.capillary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodVesselsSection;
