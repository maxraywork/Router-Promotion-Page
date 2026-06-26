import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, MousePointerClick, Globe, Wifi } from "lucide-react";
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
    <section id="advantages" className="py-24 md:py-32 relative border-b border-white/5 bg-background scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему мы лучше.</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                OpenWrt без модификаций. Роутер принадлежит вам и управляется только вами. Если что-то случится с нашим сервисом — роутер останется полностью рабочим и не превратится в кирпич. Вы в любой момент можете настроить его под себя или поставить любой другой VPN.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className="h-full bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden border-primary/30"
              data-testid="card-advantage-app"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Smartphone className="w-32 h-32" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 relative z-10">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/15 text-primary text-xs font-mono uppercase tracking-wider">
                    Уникальная функция
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 text-xs font-mono uppercase tracking-wider">
                    Скоро
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Удалённое управление роутером</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Приложение для iOS и Android позволяет управлять роутером удалённо — из любой точки мира. В стандартном OpenWrt и других прошивках такого нет. Вы видите статус сети, подключённые устройства и состояние VPN прямо со смартфона — без доступа к домашней сети.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className="h-full bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-colors duration-300"
              data-testid="card-advantage-vpn"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">VPN-туннель для всей сети</h3>
              <p className="text-muted-foreground leading-relaxed">
                VPN работает на уровне роутера — значит все устройства в вашей Wi-Fi сети защищены автоматически: телефоны, ноутбуки, телевизоры, умные колонки. Российские сервисы (Яндекс, ВКонтакте, Сбер) и зарубежные работают одновременно, без ручных переключений.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 rounded-xl bg-white/3 border border-white/8 flex flex-col md:flex-row items-start md:items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <Wifi className="w-5 h-5" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-white font-medium">Что такое VPN-туннелирование?</span>{" "}
            Роутер сам решает по домену, куда направить трафик. ВКонтакте, Озон, Яндекс, Госуслуги и все незаблокированные сервисы — идут напрямую через провайдера, как обычно. Instagram, YouTube и заблокированные сервисы — автоматически уходят через VPN-туннель. Переключать ничего не нужно: всё работает одновременно, на каждом устройстве в вашей Wi-Fi сети.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
