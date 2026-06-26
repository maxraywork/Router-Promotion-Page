import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#comparison", label: "Сравнение" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#order", label: "Заказать" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container px-4 mx-auto flex items-center justify-between h-16 md:h-18">
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label="RayVPN — на главную">
          <img
            src="/rayvpn-logo.svg"
            alt="RayVPN"
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#order"
          className="hidden md:inline-flex h-9 px-5 items-center rounded-md bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Оставить заявку
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40">
          <nav className="container px-4 mx-auto py-8">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-4 text-lg text-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#order"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex h-12 items-center justify-center rounded-lg bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
