const TelegramBot = require('node-telegram-bot-api');

const token = process.env.8606776337:AAFgODB9DE5a5gHabLnAKzo4sEOZjiqAUmw;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 Bot is live!");
});

bot.on('message', (msg) => {
  if (msg.text !== '/start') {
    bot.sendMessage(msg.chat.id, "You said: " + msg.text);
  }
});
