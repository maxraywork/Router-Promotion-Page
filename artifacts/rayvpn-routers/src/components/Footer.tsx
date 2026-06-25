export function Footer() {
  return (
    <footer className="py-12 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-white tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            RayVPN Routers
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-mono">
            <a href="https://cabinet.raypn.online" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              cabinet.raypn.online
            </a>
            <a href="https://t.me/r4yvpn_bot" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              @r4yvpn_bot
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
