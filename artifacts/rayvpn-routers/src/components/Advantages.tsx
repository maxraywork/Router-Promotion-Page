import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, MousePointerClick } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Advantages() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 relative border-b border-white/5 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему мы лучше.</h2>
          <p className="text-xl text-muted-foreground font-light">
            Не дороже и не громче — просто честнее. Чистая прошивка, ваш контроль, реальная работающая система.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item}>
            <Card
              className="h-full bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-colors duration-300"
              data-testid="card-advantage-firmware"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Чистая прошивка, ваш контроль</h3>
              <p className="text-muted-foreground leading-relaxed">
                OpenWrt без модификаций. Роутер принадлежит вам и управляется вами — не нами. Если вы решите уйти, роутер останется рабочим и вы поставите любой другой VPN. Мы не держим вас в заложниках.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className="h-full bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
              data-testid="card-advantage-app"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Smartphone className="w-32 h-32" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 relative z-10">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10">Приложение iOS и Android</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                Настройка, мониторинг и удалённое управление роутером прямо со смартфона. Видите, что происходит в вашей сети — в любое время, из любого места.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className="h-full bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-colors duration-300"
              data-testid="card-advantage-vpn"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <MousePointerClick className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">VPN в один клик</h3>
              <p className="text-muted-foreground leading-relaxed">
                Туннелированный VPN через приложение — без терминалов, конфигов и технического погружения. Нажали кнопку — работает. Для всех устройств в вашей сети сразу.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
