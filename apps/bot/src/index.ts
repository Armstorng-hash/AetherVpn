import 'dotenv/config';
import { Telegraf, Markup } from 'telegraf';

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error('BOT_TOKEN not found in .env');
}

const bot = new Telegraf(token);

bot.start(async (ctx) => {
  await ctx.reply(
    'Открыть Aether',
    Markup.inlineKeyboard([
      [Markup.button.webApp('🚀 Открыть Aether', 'https://fastidious-churros-95261f.netlify.app')]
    ])
  );
});

bot.launch().then(() => {
  console.log('Aether bot started');
}).catch((err) => {
  console.error('Launch error:', err);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));