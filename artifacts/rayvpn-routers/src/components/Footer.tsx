export function Footer() {
  return (
    <footer className="py-12 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/xiaomi-router.png" alt="Роутер RayVPN" className="w-10 h-10 object-contain opacity-80" />
            <span className="font-mono text-sm font-bold text-white tracking-widest uppercase">
              RayVPN Routers
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-mono">
            <a
              href="https://t.me/+Qxmb_1yXPb41M2Vi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              RayVPN News
            </a>
            <span className="text-white/30 hidden sm:inline">·</span>
            <a href="https://lk.raypn.online" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              Личный кабинет
            </a>
            <span className="text-white/30 hidden sm:inline">·</span>
            <a href="https://t.me/r4yvpn_bot" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              Телеграм-бот для VPN
            </a>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="text-muted-foreground/70">Остались вопросы?</span>
            <a href="https://t.me/rayloyal" target="_blank" rel="noreferrer" className="text-primary hover:underline transition-colors">
              Спросите у поддержки
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} RayVPN. Все права защищены. Не является публичной офертой.
        </div>
      </div>
    </footer>
  );
}
