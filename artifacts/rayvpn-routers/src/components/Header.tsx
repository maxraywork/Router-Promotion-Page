import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#comparison", label: "Сравнение" },
  { href: "#security", label: "Безопасность" },
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
      <nav className="container px-4 mx-auto flex items-center justify-between h-16 lg:h-18">
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label="RayVPN — на главную">
          <img src="/xiaomi-router.png" alt="RayVPN" className="h-8 w-auto object-contain" />
        </a>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
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

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://t.me/+Qxmb_1yXPb41M2Vi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 px-4 items-center gap-2 rounded-md border border-white/10 text-sm font-medium text-muted-foreground hover:text-white hover:border-white/20 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Новости
          </a>
          <a
            href="#order"
            className="inline-flex h-9 px-5 items-center rounded-md bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Оставить заявку
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40">
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
              href="https://t.me/+Qxmb_1yXPb41M2Vi"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 text-base font-medium text-muted-foreground hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              RayVPN News
            </a>
            <a
              href="#order"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex h-12 items-center justify-center rounded-lg bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
