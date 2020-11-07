const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client();
client.login(config.BOT_TOKEN)

client.on('ready', () => {
    console.log(`Ya esta encendido el Bot ${client.user.tag}!`);
    client.user.setStatus('dnd');
  });

//Se debe de indicar que el Bot este prendido para comenzar los comandos
client.on('message', message => {
    //Comandos y mensajes
    if (message.content === '!ping') {
        //Esta es la respuesta del mensaje
        message.channel.send('pong');
    }

    if (message.content === '!ayudame') {
        message.channel.send('Este bot aun esta en fase de pruebas');
        //Esto elimina el mensaje que se envia
        message.delete();
    }

    if(message.content === '!nuevosingresos') {
        message.channel.send('');
        message.delete();

    }

});