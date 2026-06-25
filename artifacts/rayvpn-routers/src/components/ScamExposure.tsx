import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ScamExposure() {
  return (
    <section className="py-24 md:py-32 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,0,0.05)_0%,rgba(0,0,0,0)_60%)] border-b border-white/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Осторожно: скам на Авито</h2>
            <p className="text-xl text-muted-foreground">
              Рынок переполнен обещаниями "бесконечного VPN навсегда". Давайте разберемся, почему это ложь.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-destructive/5 border-destructive/20 p-8 h-full">
                <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-3">
                  <XCircle className="w-6 h-6" /> Типичный "Бесконечный VPN"
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Перестают работать через 2-3 месяца из-за блокировок или неоплаты дешевых серверов продавцом.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Используют публичные и перегруженные серверы, скорость падает до нуля.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Нет приложения. Вы не контролируете свой роутер и не можете ничего изменить.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Продавец исчезает после получения денег. Поддержки нет.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-primary/5 border-primary/20 p-8 h-full">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" /> Подход RayVPN
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Прозрачная модель: вы покупаете качественный роутер и оформляете подписку на приватный туннель.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Высокоскоростные приватные серверы без перегрузок.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Удобное приложение: полный контроль, смена локаций и управление сетью в вашем смартфоне.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Техническая поддержка и регулярные обновления прошивки и приложения.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
