/* Ekstra Bilgi Bölümü */
import { useState } from "react";

const topics = [
  {
    id: "heartrate",
    icon: "❤️",
    title: "Kalp Atım Hızının Düzenlenmesi",
    color: "hsl(var(--oxygenated))",
    content: {
      intro: "Kalbin pompalaması iki farklı sistem tarafından düzenlenir:",
      sections: [
        {
          title: "Sinüs Düğümü (Pace-Maker)",
          text: "Sağ kulakçıkta bulunan sinüs düğümü kalbin doğal ritim üreticisidir. Dakikada ~70 elektriksel uyarı üretir.",
          items: ["SA Düğümü → AV Düğümü → His Demeti → Purkinje Lifleri"],
        },
        {
          title: "Otonom Sinir Sistemi",
          text: "Kalp hızı, ihtiyaca göre sinir sistemi tarafından ayarlanır:",
          items: [
            "🔴 Sempatik sinirler → kalbi hızlandırır (adrenalin, egzersiz)",
            "🔵 Parasempatik sinirler (vagus) → kalbi yavaşlatır (istirahat)",
            "Normal dinlenme hızı: 60–100 atım/dakika",
            "Bradikardi: <60 atım/dakika | Taşikardi: >100 atım/dakika",
          ],
        },
      ],
    },
  },
  {
    id: "exercise",
    icon: "🏃",
    title: "Sporun Dolaşım Sistemine Etkisi",
    color: "hsl(280,70%,60%)",
    content: {
      intro: "Düzenli egzersiz dolaşım sistemini güçlendirir:",
      sections: [
        {
          title: "Kısa Vadeli Etkiler",
          text: "Egzersiz sırasında ani değişiklikler:",
          items: [
            "Kalp atım hızı artar (200 atım/dakika'ya kadar)",
            "Kalp debisi 5 L/dak'tan 25 L/dak'a çıkabilir",
            "Kan akımı kaslara yönlendirilir",
            "Solunum hızlanır, O₂ alımı artar",
          ],
        },
        {
          title: "Uzun Vadeli Etkiler",
          text: "Sürekli egzersizin kalıcı faydaları:",
          items: [
            "Kalp kası güçlenir → atım hacmi artar",
            "İstirahat kalp hızı düşer (sporcular: 40–50 atım/dak)",
            "Tansiyon düşer, kalp hastalığı riski azalır",
            "Kılcal damar ağı genişler",
            "HDL (iyi kolesterol) artar",
          ],
        },
      ],
    },
  },
  {
    id: "bloodpressure",
    icon: "📊",
    title: "Tansiyon Nedir?",
    color: "hsl(var(--deoxygenated))",
    content: {
      intro: "Tansiyon (kan basıncı), kanın damar duvarlarına uyguladığı basınçtır.",
      sections: [
        {
          title: "Sistolik / Diyastolik",
          text: "Tansiyon iki değerle ölçülür:",
          items: [
            "🔴 Sistolik basınç: Kalp kasılırken oluşan max. basınç (~120 mmHg)",
            "🔵 Diyastolik basınç: Kalp gevşerken oluşan min. basınç (~80 mmHg)",
            "Normal değer: 120/80 mmHg",
            "Hipertansiyon: >140/90 mmHg",
            "Hipotansiyon: <90/60 mmHg",
          ],
        },
        {
          title: "Tansiyonu Etkileyen Faktörler",
          text: "Kan basıncını değiştiren etkenler:",
          items: [
            "Kalp debisi (atım hızı × atım hacmi)",
            "Periferik direnç (damar çapı)",
            "Kan viskozitesi ve hacmi",
            "Yaş, stres, tuz tüketimi",
            "Böbrek fonksiyonu",
          ],
        },
      ],
    },
  },
];

const ExtraInfoSection = () => {
  const [activeTopic, setActiveTopic] = useState<string>("heartrate");
  const selectedTopic = topics.find((t) => t.id === activeTopic);

  return (
    <section id="extra" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-sm font-medium mb-4">
            📚 Bölüm 6
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient-mixed">Ekstra</span> Bilgiler
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dolaşım sistemini daha derin anlamak için ek konular
          </p>
        </div>

        {/* Konu seçici */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTopic === topic.id
                  ? "text-foreground scale-105"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
              style={activeTopic === topic.id ? {
                background: `${topic.color}25`,
                border: `2px solid ${topic.color}60`,
                boxShadow: `0 0 15px ${topic.color}30`,
              } : {}}
            >
              <span>{topic.icon}</span>
              <span>{topic.title}</span>
            </button>
          ))}
        </div>

        {/* İçerik */}
        {selectedTopic && (
          <div key={selectedTopic.id} className="glass rounded-2xl p-8 animate-fade-in-up border-l-4"
            style={{ borderLeftColor: selectedTopic.color }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{selectedTopic.icon}</span>
              <h3 className="font-display font-bold text-2xl text-foreground">{selectedTopic.title}</h3>
            </div>

            <p className="text-muted-foreground mb-6 text-base">{selectedTopic.content.intro}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {selectedTopic.content.sections.map((section, i) => (
                <div key={i} className="rounded-xl p-5 bg-muted/20 border border-border/30">
                  <h4 className="font-display font-semibold text-foreground mb-2"
                    style={{ color: selectedTopic.color }}>{section.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{section.text}</p>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: selectedTopic.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hızlı gerçekler */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { emoji: "💗", val: "~2.5 milyar", label: "Yaşamboyu kalp atışı" },
            { emoji: "🩸", val: "~7.200 L", label: "Günde pompalanan kan" },
            { emoji: "🫀", val: "250–350 g", label: "Kalbin ağırlığı" },
            { emoji: "⚡", val: "0.3 saniye", label: "Bir atış süresi" },
          ].map((fact, i) => (
            <div key={i} className="glass rounded-xl p-4 text-center card-hover">
              <span className="text-3xl block mb-2">{fact.emoji}</span>
              <p className="font-display font-bold text-lg text-gradient-mixed">{fact.val}</p>
              <p className="text-muted-foreground text-sm mt-1">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraInfoSection;
