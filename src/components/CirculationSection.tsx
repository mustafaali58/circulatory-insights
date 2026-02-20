/* Küçük ve Büyük Dolaşım - Animasyonlu Şema */
import { useState, useEffect } from "react";

const smallCirculationSteps = [
  { icon: "🫀", title: "Sağ Karıncık", desc: "Oksijensiz kan kasılmayla sağ karıncıktan atılır.", color: "hsl(220,85%,55%)" },
  { icon: "🔵", title: "Akciğer Atardamarı", desc: "Akciğer Atardamarı oksijensiz kanı akciğerlere taşır.", color: "hsl(220,80%,60%)" },
  { icon: "🫁", title: "Akciğer Alveolleri", desc: "Alveollerde gaz değişimi: O₂ alınır, CO₂ verilir.", color: "hsl(280,70%,60%)" },
  { icon: "🔴", title: "Akciğer Toplardamarı", desc: "Akciğer Toplardamarı oksijenli kanı sol kulakçığa taşır.", color: "hsl(0,75%,55%)" },
  { icon: "🫀", title: "Sol Kulakçık", desc: "Oksijenli kan sol kulakçıkta toplanır.", color: "hsl(0,75%,52%)" },
];

const bigCirculationSteps = [
  { icon: "🫀", title: "Sol Karıncık", desc: "Oksijenli kan büyük kasılmayla sol karıncıktan atılır.", color: "hsl(0,75%,52%)" },
  { icon: "🔴", title: "Aort", desc: "En büyük atar damar olan aort kanı vücuda dağıtır.", color: "hsl(0,75%,55%)" },
  { icon: "🌐", title: "Kapillerler", desc: "Kılcal damarlarda O₂ ve besin hücrelere verilir.", color: "hsl(280,70%,60%)" },
  { icon: "🔵", title: "Toplardamarlar", desc: "CO₂ ve atıkları taşıyan kan anatoplardamara geçer.", color: "hsl(220,80%,60%)" },
  { icon: "🫀", title: "Anatoplardamar", desc: "Anatoplardamar superior/inferior oksijensiz kanı sağ kulakçığa getirir.", color: "hsl(220,85%,55%)" },
];

const CirculationSection = () => {
  const [activeSmall, setActiveSmall] = useState(0);
  const [activeBig, setActiveBig] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Otomatik ilerleme
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveSmall((prev) => (prev + 1) % smallCirculationSteps.length);
      setActiveBig((prev) => (prev + 1) % bigCirculationSteps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section id="circulation" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            🔄 Bölüm 5
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient-mixed">Dolaşım</span> Sistemleri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            İnsan dolaşım sistemi <strong className="text-foreground">kapalı çift dolaşım</strong> sistemine sahiptir.
            Küçük ve büyük dolaşım eş zamanlı çalışır.
          </p>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="mt-4 px-4 py-2 rounded-full text-sm font-medium glass border border-border/50 hover:border-primary/50 transition-all duration-200"
          >
            {autoPlay ? "⏸ Duraklat" : "▶ Otomatik Oynat"}
          </button>
        </div>

        {/* Ana dolaşım şeması - SVG */}
        <div className="glass rounded-2xl p-6 mb-10">
          <svg viewBox="0 0 900 500" className="w-full max-h-96">
            <defs>
              <marker id="arr-red-c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="hsl(0,75%,62%)" />
              </marker>
              <marker id="arr-blue-c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="hsl(220,85%,65%)" />
              </marker>
            </defs>

            {/* === KALP === */}
            <rect x="370" y="170" width="160" height="160" rx="20"
              fill="hsl(228,28%,12%)" stroke="hsl(0,75%,52%)" strokeWidth="2" />
            <text x="450" y="235" textAnchor="middle" fill="hsl(210,30%,90%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="600">KALP</text>

            {/* Sol taraf (kırmızı - oksijenli) */}
            <rect x="400" y="255" width="60" height="55" rx="8"
              fill="hsl(0,75%,22%)" stroke="hsl(0,75%,52%)" strokeWidth="1.5" />
            <text x="430" y="278" textAnchor="middle" fill="hsl(0,80%,75%)" fontSize="9" fontFamily="Inter">Sol</text>
            <text x="430" y="291" textAnchor="middle" fill="hsl(0,80%,75%)" fontSize="9" fontFamily="Inter">Kulakçık</text>

            {/* Sağ taraf (mavi - oksijensiz) */}
            <rect x="470" y="255" width="60" height="55" rx="8"
              fill="hsl(220,85%,18%)" stroke="hsl(220,85%,55%)" strokeWidth="1.5" />
            <text x="500" y="278" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="9" fontFamily="Inter">Sağ</text>
            <text x="500" y="291" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="9" fontFamily="Inter">Kulakçık</text>

            {/* Sol karıncık */}
            <rect x="395" y="200" width="60" height="50" rx="8"
              fill="hsl(0,75%,20%)" stroke="hsl(0,75%,52%)" strokeWidth="1.5" />
            <text x="425" y="222" textAnchor="middle" fill="hsl(0,80%,75%)" fontSize="9" fontFamily="Inter">Sol</text>
            <text x="425" y="235" textAnchor="middle" fill="hsl(0,80%,75%)" fontSize="9" fontFamily="Inter">Karıncık</text>

            {/* Sağ karıncık */}
            <rect x="475" y="200" width="60" height="50" rx="8"
              fill="hsl(220,85%,15%)" stroke="hsl(220,85%,55%)" strokeWidth="1.5" />
            <text x="505" y="222" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="9" fontFamily="Inter">Sağ</text>
            <text x="505" y="235" textAnchor="middle" fill="hsl(220,85%,75%)" fontSize="9" fontFamily="Inter">Karıncık</text>

            {/* === AKCIĞERLER (üst) === */}
            <ellipse cx="450" cy="80" rx="110" ry="50" fill="hsl(228,28%,10%)" stroke="hsl(280,70%,55%)" strokeWidth="2" />
            <text x="450" y="76" textAnchor="middle" fill="hsl(280,70%,75%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="600">AKCİĞERLER</text>
            <text x="450" y="92" textAnchor="middle" fill="hsl(280,70%,60%)" fontSize="10" fontFamily="Inter">Gaz Değişimi</text>

            {/* === VÜCUT (alt) === */}
            <rect x="330" y="400" width="240" height="60" rx="16"
              fill="hsl(228,28%,10%)" stroke="hsl(215,20%,55%)" strokeWidth="2" />
            <text x="450" y="427" textAnchor="middle" fill="hsl(215,20%,80%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="600">VÜCUT DOKULARI</text>
            <text x="450" y="445" textAnchor="middle" fill="hsl(215,20%,55%)" fontSize="10" fontFamily="Inter">Hücre Metabolizması</text>

            {/* === KÜÇÜK DOLAŞIM YOLLARI === */}
            {/* Sağ karıncık → Akciğer (mavi, sol) */}
            <path d="M490 200 Q460 150 430 130" stroke="hsl(220,85%,55%)" strokeWidth="4" fill="none"
              markerEnd="url(#arr-blue-c)" strokeDasharray="8 4" />
            <text x="442" y="155" fill="hsl(220,85%,70%)" fontSize="10" fontFamily="Inter" textAnchor="middle">Akciğer Atardamarı</text>

            {/* Akciğer → Sol kulakçık (kırmızı, sağ) */}
            <path d="M470 130 Q490 155 415 255" stroke="hsl(0,75%,55%)" strokeWidth="4" fill="none"
              markerEnd="url(#arr-red-c)" strokeDasharray="8 4" />
            <text x="488" y="170" fill="hsl(0,75%,70%)" fontSize="10" fontFamily="Inter" textAnchor="middle">Akciğer Toplardamarı</text>

            {/* === BÜYÜK DOLAŞIM YOLLARI === */}
            {/* Sol karıncık → Vücut (kırmızı, sol) */}
            <path d="M400 225 Q300 300 350 400" stroke="hsl(0,75%,55%)" strokeWidth="4" fill="none"
              markerEnd="url(#arr-red-c)" strokeDasharray="8 4" />
            <text x="308" y="330" fill="hsl(0,75%,70%)" fontSize="10" fontFamily="Inter" textAnchor="middle">Aort</text>

            {/* Vücut → Sağ kulakçık (mavi, sağ) */}
            <path d="M570 430 Q620 350 540 310" stroke="hsl(220,85%,55%)" strokeWidth="4" fill="none"
              markerEnd="url(#arr-blue-c)" strokeDasharray="8 4" />
            <text x="618" y="370" fill="hsl(220,85%,70%)" fontSize="10" fontFamily="Inter" textAnchor="middle">Anatoplardamar</text>

            {/* Etiketler */}
            <text x="220" y="250" fill="hsl(220,85%,60%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Küçük</text>
            <text x="220" y="268" fill="hsl(220,85%,60%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Dolaşım</text>
            <text x="700" y="250" fill="hsl(0,75%,60%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Büyük</text>
            <text x="700" y="268" fill="hsl(0,75%,60%)" fontSize="14" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Dolaşım</text>
          </svg>
        </div>

        {/* Adım adım anlatım */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Küçük Dolaşım */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-deoxygenated/20 border border-deoxygenated/40 flex items-center justify-center text-xl">
                🫁
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Küçük Dolaşım</h3>
                <p className="text-primary text-sm">Küçük Dolaşım</p>
              </div>
            </div>

            <div className="space-y-3">
              {smallCirculationSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveSmall(i); setAutoPlay(false); }}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                    activeSmall === i ? "bg-primary/15 border border-primary/30" : "hover:bg-muted/30"
                  }`}
                >
                  <span className="text-lg flex-shrink-0 mt-0.5">{step.icon}</span>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-foreground">{step.title}</p>
                    {activeSmall === i && (
                      <p className="text-xs text-muted-foreground mt-1 animate-fade-in-up">{step.desc}</p>
                    )}
                  </div>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${activeSmall === i ? "bg-primary" : "bg-muted"}`} />
                </button>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-deoxygenated/10 border border-deoxygenated/20">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-semibold">Özet:</span> Sağ karıncık → Akciğer Atardamarı →
                Akciğerler (gaz değişimi) → Akciğer Toplardamarı → Sol kulakçık
              </p>
            </div>
          </div>

          {/* Büyük Dolaşım */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-oxygenated/20 border border-oxygenated/40 flex items-center justify-center text-xl">
                🌍
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Büyük Dolaşım</h3>
                <p className="text-oxygenated text-sm">Sistemik Dolaşım</p>
              </div>
            </div>

            <div className="space-y-3">
              {bigCirculationSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveBig(i); setAutoPlay(false); }}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                    activeBig === i ? "bg-oxygenated/15 border border-oxygenated/30" : "hover:bg-muted/30"
                  }`}
                >
                  <span className="text-lg flex-shrink-0 mt-0.5">{step.icon}</span>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-foreground">{step.title}</p>
                    {activeBig === i && (
                      <p className="text-xs text-muted-foreground mt-1 animate-fade-in-up">{step.desc}</p>
                    )}
                  </div>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${activeBig === i ? "bg-oxygenated" : "bg-muted"}`} />
                </button>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-oxygenated/10 border border-oxygenated/20">
              <p className="text-xs text-muted-foreground">
                <span className="text-oxygenated font-semibold">Özet:</span> Sol karıncık → Aort →
                Vücut dokuları (gaz değişimi) → Toplardamar → Sağ kulakçık
              </p>
            </div>
          </div>
        </div>

        {/* Gaz değişimi karşılaştırması */}
        <div className="mt-8 glass rounded-2xl p-6">
          <h3 className="font-display font-bold text-foreground mb-4 text-center">Gaz Değişimi Karşılaştırması</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-4 bg-deoxygenated/10 border border-deoxygenated/20">
              <h4 className="font-semibold text-primary mb-3">🫁 Akciğerlerde (Küçük Dolaşım)</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Oksijensiz kan akciğerlere gelir</li>
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Alveol havasından O₂ kana geçer</li>
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Kandaki CO₂ alveollere geçer</li>
                <li className="flex items-center gap-2"><span className="text-oxygenated">✓</span> Oksijenli kan sol kulakçığa gider</li>
              </ul>
            </div>
            <div className="rounded-xl p-4 bg-oxygenated/10 border border-oxygenated/20">
              <h4 className="font-semibold text-oxygenated mb-3">🌐 Dokularda (Büyük Dolaşım)</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-oxygenated">→</span> Oksijenli kan dokulara gelir</li>
                <li className="flex items-center gap-2"><span className="text-oxygenated">→</span> Kandan O₂ hücrelere geçer</li>
                <li className="flex items-center gap-2"><span className="text-oxygenated">→</span> Hücrelerden CO₂ kana geçer</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Oksijensiz kan sağ kulakçığa gider</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CirculationSection;
