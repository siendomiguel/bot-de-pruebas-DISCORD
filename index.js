const Discord = require("discord.js")
const config = require("./config.json")

client.on('ready', () => {
    console.log('El Bot esta listo para usarse!');
});

const client = new Discord.Client();
client.login(config.BOT_TOKEN)
