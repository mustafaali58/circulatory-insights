/* Navigasyon Bileşeni - Dolaşım Sistemi Sitesi */
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Ana Sayfa" },
  { id: "heart", label: "Kalp" },
  { id: "vessels", label: "Kan Damarları" },
  { id: "blood", label: "Kanın Yapısı" },
  { id: "circulation", label: "Dolaşım" },
  { id: "extra", label: "Ekstra Bilgi" },
  { id: "references", label: "Kaynakça" },
];

const Navigation = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Aktif bölümü takip et
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative animate-heartbeat">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 28C16 28 3 19 3 10.5C3 7.46 5.46 5 8.5 5C10.24 5 11.8 5.78 12.86 7.02L16 10.5L19.14 7.02C20.2 5.78 21.76 5 23.5 5C26.54 5 29 7.46 29 10.5C29 19 16 28 16 28Z"
                  fill="hsl(var(--oxygenated))"
                  className="drop-shadow-[0_0_8px_hsl(var(--oxygenated))]"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-sm text-gradient-mixed hidden sm:block">
              Dolaşım Sistemi
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === section.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass rounded-xl mb-4 p-3 flex flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
                  active === section.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
