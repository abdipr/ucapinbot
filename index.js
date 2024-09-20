const { AoiClient } = require('aoi.js');

const bot = new AoiClient({
    token: "MTI4NjYxMzIwNTY3Mzg0MDY4MQ.GN-L6Y.nvSgF-UNySdDFpX3Py3iDT9I7SLD_3gX7XZyAM",
    prefix: ".",
});

bot.onReady(() => {
    console.log("Bot is online!");
});
bot.loadCommands("./commands");

bot.command({
    name: "ping",
    code: `Pong!`
});

bot.start();