import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ScamExposure() {
  return (
    <section className="py-24 md:py-32 bg-[radial-gradient(ellipse_at_bottom,rgba(220,44,44,0.05)_0%,rgba(0,0,0,0)_60%)] border-b border-white/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-primary mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Почему «бесконечный VPN» — это невозможно
            </h2>
            <p className="text-xl text-muted-foreground">
              На Авито и Озоне десятки объявлений с обещанием «VPN навсегда». Разберём, как это работает на самом деле.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/3 border-white/10 p-8 h-full" data-testid="card-competitors">
                <h3 className="text-2xl font-bold text-white/80 mb-6 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-primary/70" /> Типичный «бесконечный VPN»
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      VPN на дешёвых публичных серверах физически не может работать вечно — они блокируются или закрываются через 2–3 месяца.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      Когда VPN перестаёт работать, продавец просто пересоздаёт объявление на Авито или Озоне с нуля — чтобы не копились плохие отзывы. Пользователи остаются ни с чем.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      Нет приложения. Вы не можете ни проверить состояние, ни изменить настройки, ни обратиться за помощью. Роутер формально ваш, но управлять им вы не можете.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      Прошивка закрытая или неизвестная. Что происходит с вашим трафиком — непрозрачно.
                    </span>
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
              <Card className="bg-primary/5 border-primary/20 p-8 h-full" data-testid="card-rayvpn">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" /> Подход RayVPN
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      Чистая прошивка OpenWrt. Никаких закрытых модификаций — вы видите всё, что происходит в вашей сети.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      Роутер под вашим контролем, а не нашим. Приложение на вашем смартфоне — вы управляете, видите статус, меняете настройки.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      Даже если мы закроемся — роутер продолжит работать. OpenWrt остаётся, и вы сможете установить любой другой VPN самостоятельно.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      Прозрачная модель: подписка на приватный туннель RayVPN с поддержкой. Вы знаете, за что платите.
                    </span>
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
