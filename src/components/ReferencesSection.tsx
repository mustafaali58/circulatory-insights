/* Kaynakça Bölümü */
const references = [
  {
    category: "Ders Kitapları",
    icon: "📘",
    sources: [
      { title: "MEB 11. Sınıf Biyoloji Ders Kitabı", author: "Millî Eğitim Bakanlığı, 2023–2024" },
      { title: "Biyoloji Lise 3 — İnsan Fizyolojisi", author: "MEB Yayınları" },
      { title: "Human Physiology: An Integrated Approach", author: "Silverthorn, D.U. (2019), 8. Basım, Pearson" },
      { title: "Guyton and Hall Medical Physiology", author: "Hall, J.E. & Guyton, A.C. (2021), 14. Basım, Elsevier" },
    ],
  },
  {
    category: "Bilimsel Dergiler",
    icon: "🔬",
    sources: [
      { title: "The Heart and Circulatory System", author: "American Heart Association (AHA), 2023, www.heart.org" },
      { title: "Cardiovascular Physiology Concepts", author: "Klabunde, R.E. (2022), www.cvphysiology.com" },
    ],
  },
  {
    category: "Görsel Kaynakları",
    icon: "🖼️",
    sources: [
      { title: "Anatomical Illustrations — Heart Diagrams", author: "AI Generated / Scientific diagrams (CC0)" },
      { title: "Microscopic Blood Cell Images", author: "AI Generated scientific illustrations" },
      { title: "Circulatory System Schematics", author: "Custom SVG diagrams, bu site" },
    ],
  },
  {
    category: "Çevrimiçi Kaynaklar",
    icon: "🌐",
    sources: [
      { title: "Khan Academy — Human Circulatory System", author: "khanacademy.org/science/ap-biology" },
      { title: "NIH MedlinePlus — Heart and Blood Vessels", author: "medlineplus.gov" },
      { title: "Visible Body — 3D Human Anatomy", author: "visiblebody.com" },
    ],
  },
];

const ReferencesSection = () => (
  <section id="references" className="py-20 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 pointer-events-none" />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Başlık */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-sm font-medium mb-4">
          📖 Bölüm 7
        </span>
        <h2 className="section-title mb-4">
          <span className="text-gradient-blue">Kaynakça</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Bu sitede yer alan bilgiler aşağıdaki güvenilir kaynaklardan derlenmiştir.
          Bilimsel doğruluk için bu kaynakları incelemeniz tavsiye edilir.
        </p>
      </div>

      {/* Kaynakça Kartları */}
      <div className="space-y-6">
        {references.map((cat, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-display font-bold text-foreground text-lg">{cat.category}</h3>
            </div>
            <div className="space-y-3">
              {cat.sources.map((src, j) => (
                <div key={j} className="flex items-start gap-3 py-3 border-t border-border/30 first:border-0">
                  <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs mt-0.5">
                    {j + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{src.title}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{src.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hazırlayan notu */}
      <div className="mt-8 glass rounded-2xl p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 animate-heartbeat">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 56C32 56 8 40 8 22C8 14 14 8 22 8C26 8 30 10 32 14C34 10 38 8 42 8C50 8 56 14 56 22C56 40 32 56 32 56Z"
              fill="hsl(0,75%,52%)" className="drop-shadow-[0_0_10px_hsl(0,75%,52%)]" />
          </svg>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Bu site <strong className="text-foreground">11. sınıf biyoloji</strong> öğrencileri için
          interaktif, görsel ve bilimsel doğruluğa sahip bir eğitim kaynağı olarak hazırlanmıştır.<br />
          <span className="text-oxygenated">🔴 Kırmızı = Oksijenli Kan</span>{" "}
          <span className="text-primary">🔵 Mavi = Oksijensiz Kan</span>
        </p>
        <p className="text-muted-foreground/60 text-xs mt-4">
          Biyoloji bilgilerini güncel tutmak için MEB müfredat kitapları ve peer-reviewed dergileri takip edin.
        </p>
      </div>
    </div>
  </section>
);

export default ReferencesSection;
