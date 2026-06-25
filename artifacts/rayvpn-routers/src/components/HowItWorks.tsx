import { motion } from "framer-motion";
import { Network, Router, Key } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Router className="w-6 h-6" />,
      title: "Закажите роутер",
      desc: "Получите наш прошитый роутер на базе OpenWrt, полностью готовый к работе."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Оформите подписку",
      desc: "Подключите сервис RayVPN через сайт или Telegram-бота. Ваш ключ доступа всегда под рукой."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Подключите в 1 клик",
      desc: "Скачайте наше приложение, введите ключ и нажмите одну кнопку. Сеть защищена."
    }
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/5 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Как работает экосистема RayVPN</h2>
          <p className="text-xl text-muted-foreground font-light">
            Наш роутер создан для работы с подпиской RayVPN. Полная синергия железа и софта.
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
            >
              <div className="w-24 h-24 rounded-full bg-background border-2 border-white/10 flex items-center justify-center mb-6 text-primary shadow-[0_0_30px_rgba(0,255,255,0.1)]">
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
          className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto text-center"
        >
          <h4 className="text-lg font-bold text-white mb-2">Уже есть роутер на OpenWrt?</h4>
          <p className="text-muted-foreground mb-6">
            С подпиской на RayVPN вы также получаете доступ к нашему приложению для управления вашим существующим роутером.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-mono">
            <a href="https://cabinet.raypn.online" target="_blank" rel="noreferrer" className="text-primary hover:underline bg-primary/10 px-4 py-2 rounded-md">
              cabinet.raypn.online
            </a>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <a href="https://t.me/r4yvpn_bot" target="_blank" rel="noreferrer" className="text-primary hover:underline bg-primary/10 px-4 py-2 rounded-md">
              @r4yvpn_bot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
