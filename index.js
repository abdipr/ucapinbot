const { AoiClient } = require('aoi.js');

const bot = new AoiClient({
    token: "MTI4NjYxMzIwNTY3Mzg0MDY4MQ.GN-L6Y.nvSgF-UNySdDFpX3Py3iDT9I7SLD_3gX7XZyAM", // Gantilah dengan variabel environment jika menggunakan Vercel
    prefix: ".", // Gantilah sesuai kebutuhan
});

// Event saat bot siap
bot.onReady(() => {
    console.log("Bot is online!");
});
bot.loadCommands("./commands");

// Contoh command
bot.command({
    name: "ping",
    code: `Pong!`
});

// Menjalankan bot
bot.start();