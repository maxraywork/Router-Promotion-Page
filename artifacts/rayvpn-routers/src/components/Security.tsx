import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Lock, Unlock } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Security() {
  return (
    <section id="security" className="py-24 md:py-32 border-b border-white/5 relative scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Безопасность подключения
            </h2>
            <p className="text-xl text-muted-foreground">
              Не все VPN-роутеры одинаково безопасны. Разница — в архитектуре.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/3 border-white/10 p-8 h-full">
                <h3 className="text-2xl font-bold text-white/80 mb-6 flex items-center gap-3">
                  <Unlock className="w-6 h-6 text-primary/70" /> «Бесконечные VPN»-роутеры
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      Продавец имеет прямой SSH/Telnet-доступ к вашему роутеру — и может удалённо управлять им без вашего ведома.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      Все роутеры объединены в одну незащищённую сеть. Другие владельцы таких же роутеров потенциально могут видеть ваш трафик и устройства.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary/70 mt-1 font-bold">✗</span>
                    <span className="text-muted-foreground">
                      Пароли по умолчанию, отсутствие шифрования конфигов — ваш роутер открыт для атак не только продавцу, но и любому, кто окажется в той же сети.
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
              <Card className="bg-primary/5 border-primary/20 p-8 h-full">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6" /> Как устроен RayVPN
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      Ваш роутер подключается к нашему серверу и просто слушает команды, которые поступают от вашего приложения. Это не VPN-туннель к серверу управления, а безопасное управляющее соединение.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      У нас нет прямого доступа к вашему роутеру. Все действия инициируются только из вашего приложения — мы лишь передаём команды.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="text-muted-foreground">
                      Каждый роутер изолирован. Никаких общих сетей — другие пользователи RayVPN не имеют доступа к вашему устройству.
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
