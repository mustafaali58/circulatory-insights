/* Ana Sayfa (Giriş) Bölümü */
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToHeart = () => {
    document.getElementById("heart")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Arka plan görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Animasyonlu damar çizgileri - dekoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path d="M0,400 Q200,200 400,400 T800,400 T1200,400" stroke="hsl(0,75%,52%)" strokeWidth="2" fill="none"
            strokeDasharray="20 10" className="animate-[blood-flow_3s_linear_infinite]" />
          <path d="M0,300 Q300,100 600,300 T1200,300" stroke="hsl(220,85%,55%)" strokeWidth="2" fill="none"
            strokeDasharray="15 8" className="animate-[blood-flow_4s_linear_infinite]" />
          <path d="M0,500 Q250,700 500,500 T1000,500 T1200,500" stroke="hsl(0,75%,52%)" strokeWidth="1.5" fill="none"
            strokeDasharray="10 6" className="animate-[blood-flow_3.5s_linear_infinite]" />
        </svg>
      </div>

      {/* İçerik */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Kalp ikonu - animasyonlu */}
        <div
          className={`mb-8 flex justify-center transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 animate-heartbeat drop-shadow-[0_0_30px_hsl(var(--oxygenated)/0.8)]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="heartGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(0,80%,65%)" />
                    <stop offset="100%" stopColor="hsl(0,75%,40%)" />
                  </radialGradient>
                </defs>
                <path
                  d="M50 85C50 85 12 60 12 32C12 21 21 13 32 13C39 13 45 17 50 23C55 17 61 13 68 13C79 13 88 21 88 32C88 60 50 85 50 85Z"
                  fill="url(#heartGrad)"
                  stroke="hsl(0,80%,70%)"
                  strokeWidth="1"
                />
                {/* Kalp içi - karıncıklar */}
                <path d="M50 23 Q42 35 42 45 L50 42 L58 45 Q58 35 50 23Z" fill="hsl(220,85%,55%)" opacity="0.7" />
                <path d="M42 45 Q38 60 50 70 Q62 60 58 45 L50 42Z" fill="hsl(0,75%,52%)" opacity="0.7" />
              </svg>
            </div>
            {/* Etrafındaki parlayan halka */}
            <div className="absolute inset-0 rounded-full border-2 border-oxygenated/30 animate-ping" style={{ animationDuration: '2s' }} />
          </div>
        </div>

        {/* Başlık */}
        <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary/80 mb-3">
            11. Sınıf Biyoloji
          </p>
          <h1 className="section-title text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gradient-red">İnsan</span>{" "}
            <span className="text-foreground">Dolaşım</span>
            <br />
            <span className="text-gradient-blue">Sistemi</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Kalbiniz her dakika yaklaşık <span className="text-oxygenated font-semibold">5 litre</span> kanı
            pompalar. Bu interaktif rehberle dolaşım sisteminin tüm sırlarını keşfedin.
          </p>

          {/* İstatistik kartları */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            {[
              { val: "100.000+", label: "km damar" },
              { val: "~70", label: "atım/dakika" },
              { val: "5 L", label: "kan hacmi" },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-3 text-center">
                <p className="text-gradient-mixed font-display font-bold text-xl md:text-2xl">{stat.val}</p>
                <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Keşfet butonu */}
          <button
            onClick={scrollToHeart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-foreground overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(var(--oxygenated)), hsl(var(--deoxygenated)))",
              boxShadow: "0 0 30px hsl(var(--oxygenated)/0.4)",
            }}
          >
            <span>Keşfet</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Renk göstergesi */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 transition-all duration-1000 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-oxygenated shadow-[0_0_8px_hsl(var(--oxygenated))]" />
            <span className="text-muted-foreground">Oksijenli (Temiz) Kan</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-deoxygenated shadow-[0_0_8px_hsl(var(--deoxygenated))]" />
            <span className="text-muted-foreground">Oksijensiz (Kirli) Kan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
