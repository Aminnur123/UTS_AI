const fs = require('fs');
const { Bot, webhookCallback } = require("grammy");
const express = require("express");
// Import modul fs (file system) dari Node.js
require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) =>
  ctx.reply(
    'hai, selamat datang di Bot kelompok kami, disini kami menampilkan bot puisi'
  )
);
bot.command("kelompok 3", (ctx) =>
  ctx.reply(
    'Fariz, Fiki, Aminnur, Rafli'
  )
);
bot.command("daftarpuisi", (ctx) =>
  ctx.reply(
    '/puisi_1\n/puisi_2\n/puisi_3\n/puisi_4'
  )
);
bot.command("puisi_1", (ctx) => {
  const filePath = 'puisi1.txt';
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error('Terjadi kesalahan dalam membaca file:', error);
      return;
    }

    const fileContent = data;
    ctx.reply(fileContent);
  });
});
bot.command("puisi_2", (ctx) => {
  const filePath = 'puisi2.txt';
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error('Terjadi kesalahan dalam membaca file:', error);
      return;
    }

    const fileContent = data;
    ctx.reply(fileContent);
  });
});
bot.command("puisi_3", (ctx) => {
  const filePath = 'puisi3.txt';
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error('Terjadi kesalahan dalam membaca file:', error);
      return;
    }

    const fileContent = data;
    ctx.reply(fileContent);
  });
});
bot.command("puisi_4", (ctx) => {
  const filePath = 'puisi4.txt';
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error('Terjadi kesalahan dalam membaca file:', error);
      return;
    }

    const fileContent = data;
    ctx.reply(fileContent);
  });
});

bot.on("message", (ctx) => {
  const { first_name, last_name, username } = ctx.from;
  const name =
    first_name +
    (last_name ? ` ${last_name}` : "") +
    (username ? ` (@${username})` : "");
  ctx.reply(
    `Hi ${name} `
  );
});

if (process.env.NODE_ENV === "production") {
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, "express"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  bot.start();
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));