const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "MTI4NjYxMzIwNTY3Mzg0MDY4MQ.GN-L6Y.nvSgF-UNySdDFpX3Py3iDT9I7SLD_3gX7XZyAM", // Here goes the Token you copied earlier!
    prefix: ".", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});

// Ping Command which responds when doing "!ping"
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

client.loadCommands("./commands");
console.log('Bot online!');