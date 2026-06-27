import { motion } from "framer-motion";
import { Tv, Smartphone, Laptop, Gamepad2, Speaker, Tablet, CheckCircle2, XCircle } from "lucide-react";

const devices = [
  { icon: <Tv className="w-7 h-7" />, label: "Smart TV", highlight: true },
  { icon: <Smartphone className="w-7 h-7" />, label: "Смартфоны" },
  { icon: <Laptop className="w-7 h-7" />, label: "Ноутбуки" },
  { icon: <Tablet className="w-7 h-7" />, label: "Планшеты" },
  { icon: <Gamepad2 className="w-7 h-7" />, label: "Приставки" },
  { icon: <Speaker className="w-7 h-7" />, label: "Умные колонки" },
];

export function DeviceSupport() {
  return (
    <section id="devices" className="py-24 md:py-32 border-b border-white/5 relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,44,44,0.05)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Работает на всех устройствах.{" "}
            <span className="text-primary">Без исключений.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            VPN на уровне роутера — это не приложение на телефоне. Он защищает всю вашу Wi-Fi сеть, поэтому работает на любом устройстве, которое в неё подключено.
          </p>
        </motion.div>

        {/* Smart TV highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 p-8 rounded-2xl bg-primary/8 border border-primary/25 flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-primary">
            <Tv className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/15 text-primary text-xs font-mono uppercase tracking-wider mb-3">
              Главная боль — решена
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Smart TV: YouTube и Netflix снова работают</h3>
            <p className="text-muted-foreground leading-relaxed">
              На большинстве российских Smart TV YouTube заблокирован, а Netflix никогда и не был доступен. Поставить VPN-приложение на телевизор невозможно — в магазине его нет. Наш роутер решает эту проблему раз и навсегда: VPN работает на уровне сети, поэтому телевизор получает незаблокированный интернет автоматически, без каких-либо настроек на самом телевизоре.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-3 min-w-[180px]">
            <div className="flex items-center gap-2 text-sm">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-muted-foreground">Без роутера — YouTube недоступен</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-white font-medium">С роутером — работает всё</span>
            </div>
          </div>
        </motion.div>

        {/* Device grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {devices.map(({ icon, label, highlight }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className={`flex flex-col items-center gap-3 p-6 rounded-xl border transition-colors duration-300 ${
                highlight
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:border-white/20"
              }`}
            >
              {icon}
              <span className={`text-sm font-medium ${highlight ? "text-white" : ""}`}>{label}</span>
              <CheckCircle2 className={`w-4 h-4 ${highlight ? "text-primary" : "text-emerald-500/70"}`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Любое устройство в вашей Wi-Fi сети — уже под защитой. Дополнительных настроек не требуется.
        </motion.p>
      </div>
    </section>
  );
}
