import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import logoSvg from "@assets/logo_1782390876037.svg";
import { RouterSvg } from "@/components/RouterSvg";

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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 font-mono text-xs uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  RayVPN Routers
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
                    className="w-full sm:w-auto h-14 px-8 text-base border-white/10 hover:bg-white/5 font-semibold"
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
                src={logoSvg}
                alt="RayVPN"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_40px_rgba(220,44,44,0.3)]"
                data-testid="img-logo"
              />
              <RouterSvg
                className="w-64 md:w-80 drop-shadow-[0_0_30px_rgba(220,44,44,0.2)]"
                data-testid="img-router-hero"
              />
              <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">
                Xiaomi AX 3000T на OpenWrt
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
