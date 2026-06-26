import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import routerImg from "@assets/image_1782392233503.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,44,44,0.08)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-xs uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    RayVPN Routers
                  </div>
                  <a
                    href="https://t.me/+Qxmb_1yXPb41M2Vi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#229ED9]/10 text-[#229ED9] border border-[#229ED9]/20 font-mono text-xs uppercase tracking-wider hover:bg-[#229ED9]/20 transition-colors"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Новости
                  </a>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                  Прошитые роутеры на OpenWrt с{" "}
                  <span className="text-primary font-mono block mt-2">настоящим VPN.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-light leading-relaxed">
                  Собственное приложение для iOS и Android. Туннелированный VPN в один клик. Полный контроль над своим интернетом — у вас, а не у нас.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    asChild
                  >
                    <a href="#order" className="flex items-center gap-2" data-testid="button-order">
                      Оставить заявку
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hidden w-full sm:w-auto h-14 px-8 text-base border-white/10 hover:bg-white/5 font-semibold"
                    asChild
                  >
                    <a
                      href="https://avito.ru"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                      data-testid="link-avito-hero"
                    >
                      Купить быстро через Авито
                      <Zap className="w-4 h-4 text-primary" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="flex-shrink-0 flex flex-col items-center gap-6"
            >
              <img
                src={routerImg}
                alt="Xiaomi AX 3000T на OpenWrt"
                className="w-64 md:w-80 object-contain drop-shadow-[0_0_40px_rgba(220,44,44,0.15)]"
                data-testid="img-router-hero"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
