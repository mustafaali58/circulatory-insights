/* Kalp Bölümü - İnteraktif 4 odacık + 4 kapakçık */
import { useState } from "react";

/* Kapakçık bilgileri */
const valves = [
  {
    id: "tricuspid",
    name: "Triküspit Kapağı",
    turkish: "Sağ atriyoventriküler kapak",
    x: 390, y: 310,
    desc: "Sağ kulakçık ile sağ karıncık arasında yer alır. 3 yaprakçıktan oluşur. Kanın karıncıktan kulakçığa geri kaçmasını önler.",
    color: "hsl(220,85%,60%)",
  },
  {
    id: "mitral",
    name: "Mitral Kapak",
    turkish: "Sol atriyoventriküler kapak",
    x: 570, y: 310,
    desc: "Sol kulakçık ile sol karıncık arasında yer alır. 2 yaprakçıktan oluşur (biküspit kapak da denir).",
    color: "hsl(0,75%,60%)",
  },
  {
    id: "pulmoner",
    name: "Pulmoner Kapak",
    turkish: "Yarımay (semilunar) kapak",
    x: 380, y: 185,
    desc: "Sağ karıncık ile pulmoner (akciğer) arteri arasındadır. 3 yarımay yaprakçığa sahiptir. Oksijensiz kanı akciğerlere gönderir.",
    color: "hsl(220,85%,60%)",
  },
  {
    id: "aort",
    name: "Aort Kapağı",
    turkish: "Yarımay (semilunar) kapak",
    x: 570, y: 185,
    desc: "Sol karıncık ile aort arasındadır. 3 yarımay yaprakçığa sahiptir. Oksijenli kanın tüm vücuda dağıtılmasını sağlar.",
    color: "hsl(0,75%,60%)",
  },
];

/* Odacık bilgileri */
const chambers = [
  {
    id: "ra",
    name: "Sağ Kulakçık",
    latin: "Atrium Dextrum",
    color: "hsl(220,85%,45%)",
    desc: "Vücuttan gelen oksijensiz kanı toplar. Vena kava superior ve inferior bu odacığa açılır.",
    facts: ["İnce duvarlı", "Düşük basınçlı", "Oksijensiz kan taşır"],
  },
  {
    id: "la",
    name: "Sol Kulakçık",
    latin: "Atrium Sinistrum",
    color: "hsl(0,75%,52%)",
    desc: "Akciğerlerden gelen oksijenli kanı toplar. 4 pulmoner ven bu odacığa açılır.",
    facts: ["İnce duvarlı", "Düşük basınçlı", "Oksijenli kan taşır"],
  },
  {
    id: "rv",
    name: "Sağ Karıncık",
    latin: "Ventriculus Dexter",
    color: "hsl(220,85%,42%)",
    desc: "Oksijensiz kanı akciğerlere pompalar. Pulmoner artere bağlıdır.",
    facts: ["Orta kalın duvarlı", "Orta basınçlı", "Küçük dolaşım"],
  },
  {
    id: "lv",
    name: "Sol Karıncık",
    latin: "Ventriculus Sinister",
    color: "hsl(0,75%,48%)",
    desc: "Oksijenli kanı tüm vücuda pompalar. Kalbin en güçlü odacığıdır. Aorta bağlıdır.",
    facts: ["En kalın duvarlı", "Yüksek basınçlı", "Büyük dolaşım"],
  },
];

const HeartSection = () => {
  const [activeValve, setActiveValve] = useState<string | null>(null);
  const [activeChamber, setActiveChamber] = useState<string | null>(null);

  const selectedValve = valves.find((v) => v.id === activeValve);
  const selectedChamber = chambers.find((c) => c.id === activeChamber);

  return (
    <section id="heart" className="py-20 px-4 relative overflow-hidden">
      {/* Arka plan efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, hsl(0,75%,52%), hsl(220,85%,55%))" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-oxygenated/10 border border-oxygenated/20 text-oxygenated text-sm font-medium mb-4">
            🫀 Bölüm 2
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient-red">Kalbin</span> İç Yapısı
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kapakçıkların üzerine tıklayarak görevlerini öğrenin. Odacıklara tıklayarak ayrıntılı bilgi alın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Kalp SVG Diyagramı */}
          <div className="relative">
            <div className="glass rounded-2xl p-4 border-glow-red">
              <svg
                viewBox="0 0 960 720"
                className="w-full"
                style={{ filter: "drop-shadow(0 0 20px hsl(0,75%,52%,0.2))" }}
              >
                <defs>
                  <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="hsl(0,75%,60%)" />
                  </marker>
                  <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="hsl(220,85%,65%)" />
                  </marker>
                  <linearGradient id="heartBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(228,28%,14%)" />
                    <stop offset="100%" stopColor="hsl(228,25%,11%)" />
                  </linearGradient>
                  {/* Animasyonlu akış */}
                  <linearGradient id="flowRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(0,75%,52%)" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(0,75%,62%)" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(0,75%,52%)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* === BÜYÜK DAMARLAR === */}
                {/* Vena Kava Superior (oksijensiz - mavi) */}
                <rect x="340" y="30" width="70" height="130" rx="35" fill="hsl(220,85%,40%)" opacity="0.9" />
                <text x="375" y="20" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="14" fontFamily="Inter">Vena Kava</text>
                <text x="375" y="35" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="12" fontFamily="Inter">Superior</text>

                {/* Pulmoner Arterler (oksijensiz - mavi) */}
                <path d="M340 120 Q260 100 200 120 Q160 130 150 170" stroke="hsl(220,85%,50%)" strokeWidth="22" fill="none" />
                <text x="190" y="95" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="13" fontFamily="Inter">Pulmoner</text>
                <text x="190" y="110" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="13" fontFamily="Inter">Arterler</text>

                {/* Aort (oksijenli - kırmızı) */}
                <path d="M620 120 Q700 80 760 100 Q820 120 830 180" stroke="hsl(0,75%,52%)" strokeWidth="28" fill="none" />
                <text x="760" y="70" textAnchor="middle" fill="hsl(0,75%,75%)" fontSize="16" fontFamily="Inter" fontWeight="600">Aort</text>

                {/* Pulmoner Venler (oksijenli - kırmızı) */}
                <path d="M620 210 Q700 180 740 200 Q780 220 790 260" stroke="hsl(0,75%,52%)" strokeWidth="16" fill="none" />
                <text x="770" y="245" textAnchor="middle" fill="hsl(0,75%,75%)" fontSize="12" fontFamily="Inter">Pulmoner</text>
                <text x="770" y="260" textAnchor="middle" fill="hsl(0,75%,75%)" fontSize="12" fontFamily="Inter">Venler</text>

                {/* Vena Kava Inferior */}
                <rect x="340" y="580" width="70" height="100" rx="35" fill="hsl(220,85%,40%)" opacity="0.9" />
                <text x="375" y="700" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="13" fontFamily="Inter">V.K. Inferior</text>

                {/* === KALP GÖVDE === */}
                <ellipse cx="480" cy="420" rx="200" ry="220" fill="url(#heartBodyGrad)" stroke="hsl(0,75%,52%,0.3)" strokeWidth="1" />

                {/* === ODACIKLAR === */}

                {/* Sağ Kulakçık (RA) */}
                <ellipse
                  cx="390" cy="250" rx="90" ry="75"
                  fill={activeChamber === "ra" ? "hsl(220,85%,30%)" : "hsl(220,85%,22%)"}
                  stroke="hsl(220,85%,55%)"
                  strokeWidth={activeChamber === "ra" ? "3" : "1.5"}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setActiveChamber(activeChamber === "ra" ? null : "ra")}
                  style={{ filter: activeChamber === "ra" ? "drop-shadow(0 0 12px hsl(220,85%,55%))" : "none" }}
                />
                <text x="390" y="240" textAnchor="middle" fill="hsl(220,85%,80%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Sağ</text>
                <text x="390" y="256" textAnchor="middle" fill="hsl(220,85%,80%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Kulakçık</text>
                <text x="390" y="272" textAnchor="middle" fill="hsl(220,85%,65%)" fontSize="11" fontFamily="Inter" className="pointer-events-none">(RA)</text>

                {/* Sol Kulakçık (LA) */}
                <ellipse
                  cx="570" cy="250" rx="90" ry="75"
                  fill={activeChamber === "la" ? "hsl(0,75%,28%)" : "hsl(0,75%,20%)"}
                  stroke="hsl(0,75%,52%)"
                  strokeWidth={activeChamber === "la" ? "3" : "1.5"}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setActiveChamber(activeChamber === "la" ? null : "la")}
                  style={{ filter: activeChamber === "la" ? "drop-shadow(0 0 12px hsl(0,75%,52%))" : "none" }}
                />
                <text x="570" y="240" textAnchor="middle" fill="hsl(0,80%,80%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Sol</text>
                <text x="570" y="256" textAnchor="middle" fill="hsl(0,80%,80%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Kulakçık</text>
                <text x="570" y="272" textAnchor="middle" fill="hsl(0,80%,65%)" fontSize="11" fontFamily="Inter" className="pointer-events-none">(LA)</text>

                {/* Sağ Karıncık (RV) */}
                <path
                  d="M300 340 Q320 550 400 590 Q440 610 480 600 L480 340 Z"
                  fill={activeChamber === "rv" ? "hsl(220,85%,28%)" : "hsl(220,85%,18%)"}
                  stroke="hsl(220,85%,55%)"
                  strokeWidth={activeChamber === "rv" ? "3" : "1.5"}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setActiveChamber(activeChamber === "rv" ? null : "rv")}
                  style={{ filter: activeChamber === "rv" ? "drop-shadow(0 0 12px hsl(220,85%,55%))" : "none" }}
                />
                <text x="375" y="460" textAnchor="middle" fill="hsl(220,85%,80%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Sağ</text>
                <text x="375" y="476" textAnchor="middle" fill="hsl(220,85%,80%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Karıncık</text>
                <text x="375" y="492" textAnchor="middle" fill="hsl(220,85%,65%)" fontSize="11" fontFamily="Inter" className="pointer-events-none">(RV)</text>

                {/* Sol Karıncık (LV) */}
                <path
                  d="M480 340 L480 600 Q520 612 560 595 Q640 560 660 460 Q670 380 650 340 Z"
                  fill={activeChamber === "lv" ? "hsl(0,75%,26%)" : "hsl(0,75%,18%)"}
                  stroke="hsl(0,75%,52%)"
                  strokeWidth={activeChamber === "lv" ? "3" : "1.5"}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setActiveChamber(activeChamber === "lv" ? null : "lv")}
                  style={{ filter: activeChamber === "lv" ? "drop-shadow(0 0 12px hsl(0,75%,52%))" : "none" }}
                />
                <text x="580" y="460" textAnchor="middle" fill="hsl(0,80%,82%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Sol</text>
                <text x="580" y="476" textAnchor="middle" fill="hsl(0,80%,82%)" fontSize="13" fontFamily="Inter" fontWeight="600" className="pointer-events-none">Karıncık</text>
                <text x="580" y="492" textAnchor="middle" fill="hsl(0,80%,65%)" fontSize="11" fontFamily="Inter" className="pointer-events-none">(LV)</text>

                {/* Septum (bölme duvarı) */}
                <line x1="480" y1="175" x2="480" y2="610" stroke="hsl(228,25%,25%)" strokeWidth="6" />
                <text x="480" y="648" textAnchor="middle" fill="hsl(215,20%,55%)" fontSize="12" fontFamily="Inter" className="pointer-events-none">Septum</text>

                {/* === KAPAKÇIKLAR === */}
                {valves.map((valve) => (
                  <g key={valve.id} className="cursor-pointer" onClick={() => setActiveValve(activeValve === valve.id ? null : valve.id)}>
                    <ellipse
                      cx={valve.x}
                      cy={valve.y}
                      rx="38"
                      ry="18"
                      fill={activeValve === valve.id ? valve.color : "hsl(228,25%,18%)"}
                      stroke={valve.color}
                      strokeWidth="2"
                      style={{
                        filter: activeValve === valve.id ? `drop-shadow(0 0 8px ${valve.color})` : "none",
                        transition: "all 0.2s",
                      }}
                    />
                    <text x={valve.x} y={valve.y + 4} textAnchor="middle" fill="hsl(210,30%,90%)" fontSize="10" fontFamily="Inter" fontWeight="600" className="pointer-events-none">
                      {valve.id === "tricuspid" ? "Triküspit" : valve.id === "mitral" ? "Mitral" : valve.id === "pulmoner" ? "Pulmoner" : "Aort"}
                    </text>
                  </g>
                ))}

                {/* Kan akış okları - sağ taraf (mavi) */}
                <path d="M375 160 L375 315" stroke="hsl(220,85%,65%)" strokeWidth="3" markerEnd="url(#arrow-blue)" strokeDasharray="8 4" opacity="0.8" />
                <path d="M355 390 L335 540" stroke="hsl(220,85%,65%)" strokeWidth="3" markerEnd="url(#arrow-blue)" strokeDasharray="8 4" opacity="0.8" />
                <path d="M340 200 Q300 155 235 160" stroke="hsl(220,85%,65%)" strokeWidth="3" markerEnd="url(#arrow-blue)" strokeDasharray="8 4" opacity="0.8" />

                {/* Kan akış okları - sol taraf (kırmızı) */}
                <path d="M585 160 L585 315" stroke="hsl(0,75%,65%)" strokeWidth="3" markerEnd="url(#arrow-red)" strokeDasharray="8 4" opacity="0.8" />
                <path d="M600 390 L620 450 L640 400" stroke="hsl(0,75%,65%)" strokeWidth="3" markerEnd="url(#arrow-red)" strokeDasharray="8 4" opacity="0.8" />
                <path d="M620 200 Q660 150 710 120" stroke="hsl(0,75%,65%)" strokeWidth="3" markerEnd="url(#arrow-red)" strokeDasharray="8 4" opacity="0.8" />

                {/* Tıkla ipucu */}
                <text x="480" y="690" textAnchor="middle" fill="hsl(215,20%,55%)" fontSize="13" fontFamily="Inter">
                  ↑ Odacık veya kapakçığa tıklayarak bilgi alın
                </text>
              </svg>
            </div>
          </div>

          {/* Bilgi Paneli */}
          <div className="space-y-4">
            {/* Seçilen kapakçık bilgisi */}
            {selectedValve && (
              <div className="glass rounded-2xl p-5 border-l-4 animate-fade-in-up"
                style={{ borderLeftColor: selectedValve.color }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selectedValve.color}30`, border: `2px solid ${selectedValve.color}` }}>
                    🔒
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{selectedValve.name}</h3>
                    <p className="text-muted-foreground text-sm">{selectedValve.turkish}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{selectedValve.desc}</p>
              </div>
            )}

            {/* Seçilen odacık bilgisi */}
            {selectedChamber && (
              <div className="glass rounded-2xl p-5 border-l-4 animate-fade-in-up"
                style={{ borderLeftColor: selectedChamber.color }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${selectedChamber.color}30`, border: `2px solid ${selectedChamber.color}` }}>
                    🫀
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{selectedChamber.name}</h3>
                    <p className="text-muted-foreground text-sm italic">{selectedChamber.latin}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{selectedChamber.desc}</p>
                <ul className="space-y-1">
                  {selectedChamber.facts.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: selectedChamber.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hiçbiri seçilmediyse */}
            {!selectedValve && !selectedChamber && (
              <div className="glass rounded-2xl p-6 text-center">
                <p className="text-4xl mb-3">👆</p>
                <p className="text-muted-foreground">Sol taraftaki diyagramda bir odacık veya kapakçığa tıklayın</p>
              </div>
            )}

            {/* 4 Kapakçık Özeti */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">4 Kapakçık</h3>
              <div className="grid grid-cols-2 gap-3">
                {valves.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => { setActiveValve(v.id); setActiveChamber(null); }}
                    className={`glass rounded-xl p-3 text-left transition-all duration-200 hover:scale-102 ${activeValve === v.id ? "border-l-2" : ""}`}
                    style={activeValve === v.id ? { borderLeftColor: v.color } : {}}
                  >
                    <p className="font-medium text-sm text-foreground">{v.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{v.turkish}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Odacık Özeti */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">4 Odacık</h3>
              <div className="grid grid-cols-2 gap-3">
                {chambers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setActiveChamber(c.id); setActiveValve(null); }}
                    className={`glass rounded-xl p-3 text-left transition-all duration-200 ${activeChamber === c.id ? "border-l-2" : ""}`}
                    style={activeChamber === c.id ? { borderLeftColor: c.color } : {}}
                  >
                    <p className="font-medium text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.latin}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Kapakçık çalışma notu */}
            <div className="glass rounded-xl p-4 bg-muted/30">
              <p className="text-xs text-muted-foreground">
                <span className="text-oxygenated font-semibold">💡 Bilgi:</span>{" "}
                Kalp kapakçıkları tek yönlü valf görevi görür. Kasılma sırasında AV kapakçıklar kapanır,
                semilunar kapakçıklar açılır. Gevşeme sırasında tam tersi olur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartSection;
