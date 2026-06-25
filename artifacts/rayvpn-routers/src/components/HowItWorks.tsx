import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Wifi } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Заказываете роутер",
      desc: "Получаете прошитый роутер на базе OpenWrt. VPN-ключ RayVPN уже вшит с завода — ничего настраивать вручную не нужно."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Скачиваете приложение",
      desc: "Устанавливаете приложение RayVPN для iOS или Android. Приложение находит ваш роутер в сети автоматически."
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Подключаете VPN",
      desc: "Один клик в приложении — и туннелированный VPN активирован для всей вашей сети. Все устройства дома защищены."
    }
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/5 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Как это работает</h2>
          <p className="text-xl text-muted-foreground font-light">
            Три шага от получения роутера до защищённой сети.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-white/10 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
              data-testid={`step-howit-${idx}`}
            >
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 text-primary shadow-[0_0_30px_rgba(220,44,44,0.15)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h4 className="text-lg font-bold text-white mb-2">Уже есть роутер на OpenWrt?</h4>
            <p className="text-muted-foreground mb-6 text-sm">
              С подпиской на RayVPN вы получаете доступ к приложению для вашего роутера. Ключ нужно будет ввести вручную при первой настройке.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-mono">
              <a
                href="https://cabinet.raypn.online"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline bg-primary/10 px-4 py-2 rounded-md"
                data-testid="link-cabinet"
              >
                cabinet.raypn.online
              </a>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <a
                href="https://t.me/r4yvpn_bot"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline bg-primary/10 px-4 py-2 rounded-md"
                data-testid="link-tgbot"
              >
                @r4yvpn_bot
              </a>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center flex flex-col items-center justify-center">
            <h4 className="text-lg font-bold text-white mb-2">Наш роутер из коробки</h4>
            <p className="text-muted-foreground text-sm mb-4">
              При заказе роутера у нас — ключ уже вшит с завода. Достаёте из коробки, подключаете к сети, открываете приложение. Готово.
            </p>
            <a
              href="#order"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              data-testid="link-order-howit"
            >
              Заказать роутер
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
