/* Kanın Yapısı Bölümü - Hücre tipleri + hover açıklamaları */
import { useState } from "react";
import bloodCellsImg from "@/assets/blood-cells.jpg";

const bloodComponents = [
  {
    id: "rbc",
    name: "Alyuvar",
    latin: "Eritrosit (Erythrocyte)",
    emoji: "🔴",
    color: "hsl(var(--oxygenated))",
    percentage: "45%",
    count: "4.5–5.5 milyon/mm³",
    shape: "Bikonkav disk",
    nucleus: "Yok (olgun hücrede)",
    lifespan: "120 gün",
    size: "6–8 µm",
    desc: "Kandaki en bol hücredir. Hemoglobin proteini sayesinde oksijen ve karbondioksit taşır. Bikonkav şekli yüzey alanını artırır.",
    facts: [
      "Hemoglobin içerir (Hb)",
      "O₂ ve CO₂ taşır",
      "Kemik iliğinde üretilir",
      "Dalakta yıkılır",
      "Olgun hücrede çekirdek yoktur",
    ],
  },
  {
    id: "wbc",
    name: "Akyuvar",
    latin: "Lökosit (Leukocyte)",
    emoji: "⚪",
    color: "hsl(210,40%,70%)",
    percentage: "1%",
    count: "4.000–11.000/mm³",
    shape: "Çeşitli (amiboid)",
    nucleus: "Var",
    lifespan: "Günler–yıllar (tipe göre)",
    size: "7–20 µm",
    desc: "Bağışıklık sisteminin temel hücreleridir. Bakteri, virüs ve yabancı maddelere karşı savunma yaparlar. Çeşitli tiplere ayrılırlar.",
    facts: [
      "Nötrofil, lenfosit, monosit, eozinofil, bazofil",
      "Fagositoz ile mikroplara saldırır",
      "Antikor üretir (lenfositler)",
      "Enfeksiyonda sayısı artar",
      "Çekirdekleri vardır",
    ],
  },
  {
    id: "platelet",
    name: "Trombosit",
    latin: "Platelet (Thrombocyte)",
    emoji: "🟡",
    color: "hsl(var(--plasma))",
    percentage: "<1%",
    count: "150.000–400.000/mm³",
    shape: "Disk şeklinde parça",
    nucleus: "Yok",
    lifespan: "8–10 gün",
    size: "2–4 µm",
    desc: "Kan pıhtılaşmasında kritik rol oynar. Damar hasarında hızla toplanarak fibrin ağı oluştururlar. Kanın akmasını durdururlar.",
    facts: [
      "Megakaryositlerden oluşur",
      "Pıhtılaşma (koagülasyon) sağlar",
      "Fibrin ağı oluşturur",
      "Trombosit tıkacı yapar",
      "Karaciğerde üretilen proteinlerle çalışır",
    ],
  },
  {
    id: "plasma",
    name: "Plazma",
    latin: "Plasma",
    emoji: "💛",
    color: "hsl(45,80%,55%)",
    percentage: "55%",
    count: "—",
    shape: "Sıvı",
    nucleus: "—",
    lifespan: "Sürekli yenilenir",
    size: "—",
    desc: "Kanın sıvı kısmıdır. %90'ı sudur. İçinde proteinler, mineraller, hormonlar, besinler ve atıklar taşınır.",
    facts: [
      "%90 su, %8 protein",
      "Albumin, fibrinojen, globulinler içerir",
      "Besin ve atık maddeler taşır",
      "Hormon ve ilaç taşıyıcısı",
      "Kan basıncını dengeler",
    ],
  },
];

/* SVG Hücre görseli */
const CellSVG = ({ type }: { type: string }) => {
  if (type === "rbc") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="rbcGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="hsl(0,80%,65%)" />
            <stop offset="60%" stopColor="hsl(0,75%,45%)" />
            <stop offset="100%" stopColor="hsl(0,70%,35%)" />
          </radialGradient>
        </defs>
        {/* Bikonkav disk şekli */}
        <ellipse cx="50" cy="50" rx="42" ry="30" fill="url(#rbcGrad)" />
        <ellipse cx="50" cy="50" rx="22" ry="10" fill="hsl(0,75%,35%)" opacity="0.6" />
        <ellipse cx="50" cy="46" rx="18" ry="7" fill="hsl(0,70%,30%)" opacity="0.4" />
      </svg>
    );
  }
  if (type === "wbc") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="wbcGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(210,40%,80%)" />
            <stop offset="100%" stopColor="hsl(210,35%,60%)" />
          </radialGradient>
        </defs>
        {/* Amiboid şekil */}
        <path d="M50 10 Q75 15 85 35 Q95 55 80 75 Q65 90 45 85 Q20 80 12 60 Q5 40 20 22 Q35 8 50 10Z" fill="url(#wbcGrad)" opacity="0.9" />
        {/* Çekirdek */}
        <ellipse cx="50" cy="48" rx="18" ry="14" fill="hsl(220,60%,35%)" opacity="0.8" />
        <ellipse cx="50" cy="47" rx="12" ry="9" fill="hsl(220,65%,25%)" opacity="0.6" />
        {/* Granüller */}
        {[30, 65, 40, 70, 55].map((x, i) => (
          <circle key={i} cx={x} cy={[65, 30, 75, 65, 25][i]} r="3" fill="hsl(210,40%,70%)" opacity="0.6" />
        ))}
      </svg>
    );
  }
  if (type === "platelet") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="platGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(45,85%,65%)" />
            <stop offset="100%" stopColor="hsl(45,75%,45%)" />
          </radialGradient>
        </defs>
        {/* Küçük diskler */}
        <ellipse cx="50" cy="50" rx="28" ry="20" fill="url(#platGrad)" />
        <ellipse cx="28" cy="38" rx="18" ry="12" fill="hsl(45,80%,55%)" opacity="0.8" />
        <ellipse cx="70" cy="62" rx="16" ry="11" fill="hsl(45,80%,50%)" opacity="0.8" />
        {/* Granüller */}
        {[50, 30, 68, 45, 55].map((x, i) => (
          <circle key={i} cx={x} cy={[50, 38, 60, 58, 42][i]} r="3" fill="hsl(45,70%,35%)" opacity="0.7" />
        ))}
      </svg>
    );
  }
  // Plazma
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id="plasmaGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="hsl(45,85%,70%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(45,70%,50%)" stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <rect x="5" y="5" width="90" height="90" rx="15" fill="url(#plasmaGrad)" opacity="0.6" />
      {/* Dalga efekti */}
      <path d="M5,50 Q25,40 45,50 T85,50 T95,50" stroke="hsl(45,80%,65%)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M5,60 Q25,50 45,60 T85,60 T95,60" stroke="hsl(45,80%,60%)" strokeWidth="2" fill="none" opacity="0.4" />
      {/* Protein molekülleri */}
      {[[20,30],[70,25],[35,70],[80,70],[55,45]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="hsl(45,75%,55%)" opacity="0.7" />
      ))}
    </svg>
  );
};

const BloodCompositionSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredComp = bloodComponents.find((c) => c.id === hovered);

  return (
    <section id="blood" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-oxygenated/10 border border-oxygenated/20 text-oxygenated text-sm font-medium mb-4">
            🩸 Bölüm 4
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient-mixed">Kanın</span> Yapısı
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Yetişkin bir insanda yaklaşık <strong className="text-foreground">5 litre</strong> kan bulunur.
            Her bir bileşenin üzerine gelin ve görevini öğrenin.
          </p>
        </div>

        {/* Kan bileşimi çubuk grafiği */}
        <div className="glass rounded-2xl p-6 mb-10">
          <h3 className="font-display font-semibold text-foreground mb-4 text-center">Kan Bileşimi</h3>
          <div className="flex h-14 rounded-xl overflow-hidden mb-3">
            <div className="bg-plasma/80 flex items-center justify-center text-sm font-semibold text-background" style={{ width: "55%" }}>
              Plazma %55
            </div>
            <div className="flex items-center justify-center text-sm font-semibold text-foreground" style={{ width: "45%", background: "hsl(0,75%,45%)" }}>
              Alyuvar %45
            </div>
          </div>
          <div className="flex gap-4 justify-center text-sm text-muted-foreground">
            <span>🟡 Plazma (55%)</span>
            <span>🔴 Alyuvar (~45%)</span>
            <span>⚪ Akyuvar + Trombosit (&lt;1%)</span>
          </div>
        </div>

        {/* Hücre Kartları */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {bloodComponents.map((comp) => (
            <div
              key={comp.id}
              className="glass rounded-2xl p-5 card-hover cursor-pointer transition-all duration-300"
              style={{
                borderLeft: hovered === comp.id ? `3px solid ${comp.color}` : "1px solid hsl(var(--border)/0.5)",
                boxShadow: hovered === comp.id ? `0 0 20px ${comp.color}30` : "none",
              }}
              onMouseEnter={() => setHovered(comp.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hücre SVG */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden"
                style={{ background: `${comp.color}15`, border: `2px solid ${comp.color}40` }}>
                <div className="w-full h-full p-2">
                  <CellSVG type={comp.id} />
                </div>
              </div>

              <h3 className="font-display font-bold text-foreground text-center mb-1">{comp.name}</h3>
              <p className="text-muted-foreground text-xs text-center italic mb-3">{comp.latin}</p>

              {/* Hızlı bilgiler */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Oran:</span>
                  <span className="font-medium text-foreground">{comp.percentage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Şekil:</span>
                  <span className="font-medium text-foreground">{comp.shape}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ömür:</span>
                  <span className="font-medium text-foreground">{comp.lifespan}</span>
                </div>
              </div>

              {/* Hover ipucu */}
              <p className="text-xs text-muted-foreground/60 text-center mt-3">Görev için bekle →</p>
            </div>
          ))}
        </div>

        {/* Hover ile açılan bilgi paneli */}
        {hoveredComp && (
          <div className="glass rounded-2xl p-6 animate-fade-in-up border-l-4 mb-10"
            style={{ borderLeftColor: hoveredComp.color }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {hoveredComp.emoji} {hoveredComp.name}
                </h3>
                <p className="text-muted-foreground italic text-sm mb-3">{hoveredComp.latin}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{hoveredComp.desc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Temel Özellikler:</h4>
                <ul className="space-y-1.5">
                  {hoveredComp.facts.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: hoveredComp.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    ["Sayı", hoveredComp.count],
                    ["Boyut", hoveredComp.size],
                    ["Çekirdek", hoveredComp.nucleus],
                    ["Ömür", hoveredComp.lifespan],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-muted/30 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">{k}</p>
                      <p className="text-xs font-medium text-foreground">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mikroskobik görsel + Hemoglobin açıklaması */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl overflow-hidden">
            <img src={bloodCellsImg} alt="Kan hücreleri mikroskobik görünüm" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-muted-foreground text-sm">
                <span className="text-oxygenated font-semibold">Mikroskobik görünüm:</span> Alyuvarların
                bikonkav disk şekli, oksijenin hızla bağlanıp salınmasına olanak tanır.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">🧬</span>
              <h3 className="font-display font-bold text-foreground text-lg">Hemoglobin</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-oxygenated">▸</span>
                Dört polipeptit zincir ve <strong className="text-foreground">4 hem grubu</strong> içerir
              </li>
              <li className="flex items-start gap-2">
                <span className="text-oxygenated">▸</span>
                Her hem grubunda <strong className="text-foreground">Fe²⁺ (demir) iyonu</strong> bulunur
              </li>
              <li className="flex items-start gap-2">
                <span className="text-oxygenated">▸</span>
                <strong className="text-foreground">Oksijenle</strong> birleşince → <em>Oksihemoglobin</em> (HbO₂) → parlak kırmızı
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                <strong className="text-foreground">Karbondioksitle</strong> birleşince → <em>Karbhemoglobin</em> → koyu kırmızı/mavi
              </li>
              <li className="flex items-start gap-2">
                <span className="text-oxygenated">▸</span>
                1 Hb molekülü <strong className="text-foreground">4 O₂</strong> taşıyabilir
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodCompositionSection;
