import { Router, type IRouter } from "express";
import { z } from "zod";

const router: IRouter = Router();

const OrderBody = z.object({
  name: z.string().min(2),
  contact: z.string().min(5),
});

router.post("/order", async (req, res) => {
  const parsed = OrderBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, contact } = parsed.data;

  const botToken = process.env["TG_BOT_TOKEN"];
  const chatId = process.env["TG_CHAT_ID"];
  const threadId = process.env["TG_THREAD_ID"];

  if (!botToken || !chatId) {
    res.status(500).json({ error: "Telegram not configured" });
    return;
  }

  const text =
    `🔔 *Новая заявка с сайта RayVPN Routers*\n\n` +
    `👤 Имя: ${name}\n` +
    `📱 Контакт: ${contact}`;

  const params: Record<string, string> = {
    chat_id: chatId,
    text,
    parse_mode: "Markdown",
  };
  if (threadId) {
    params.message_thread_id = threadId;
  }

  const tgRes = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    },
  );

  if (!tgRes.ok) {
    const err = await tgRes.json().catch(() => ({}));
    res.status(502).json({ error: (err as { description?: string }).description ?? "Telegram API error" });
    return;
  }

  res.json({ success: true });
});

export default router;
