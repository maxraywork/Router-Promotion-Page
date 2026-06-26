import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ShoppingCart, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа." }),
  contact: z.string().min(5, { message: "Укажите корректный телефон или Telegram." }),
});

async function submitOrder(name: string, contact: string): Promise<void> {
  const res = await fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, contact }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? "Server error");
  }
}

export function OrderForm() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", contact: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSending(true);
    try {
      await submitOrder(values.name, values.contact);
      toast({
        title: "Спасибо!",
        description: "Мы свяжемся с вами скоро.",
        duration: 5000,
      });
      form.reset();
    } catch {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте ещё раз или напишите нам напрямую в Telegram.",
        variant: "destructive",
        duration: 6000,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="order" className="py-24 md:py-32 relative overflow-hidden border-b border-white/5 scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Оставить заявку</h2>
              <p className="text-muted-foreground">Оставьте контакты, и мы свяжемся с вами для оформления заказа.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ваше имя</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Иван"
                          className="bg-background/50 border-white/10 h-12"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Телефон или Telegram</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="@username или +7..."
                          className="bg-background/50 border-white/10 h-12"
                          data-testid="input-contact"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-14 text-base font-semibold"
                  disabled={sending}
                  data-testid="button-submit-order"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Отправляем...
                    </span>
                  ) : (
                    "Отправить заявку"
                  )}
                </Button>
              </form>
            </Form>

            <div className="hidden mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-muted-foreground mb-4">Или купите быстро через Авито</p>
              <Button
                variant="outline"
                className="w-full h-12 border-white/10 hover:bg-white/5"
                asChild
              >
                <a
                  href="https://avito.ru"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-avito-form"
                >
                  Перейти на Авито
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
