const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN);


client.on('ready', () => {
    console.log(`Ya esta encendido el Bot ${client.user.tag}!`);
    //declarando el estado del bot
estado();
    function estado(){
        client.user.setPresence({
            status: "online",
            activity:{
                name: "al Mercado | -ayuda",
                type: "WATCHING"
            }
        });
    }
  });

//conectando el prefijo del bot
var prefix = config.prefix;


//Se debe de indicar que el Bot este prendido para comenzar los comandos
client.on('message', message => {
    //declarando argumentos
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
  
    //evitando el bucle infinito o autorespuesta a otros bots
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    //Comandos y mensajes
    if (message.content.startsWith(prefix + 'ping')) {
        //Esta es la respuesta del mensaje
        message.channel.send('pong');
    }

    if (message.content.startsWith(prefix + 'ayuda')) {
        message.channel.send('Este bot aun esta en fase de pruebas').then(msg => msg.delete({timeout: 3000}));; //esto ultimo elimina el mensaje del bot
        //Esto elimina el mensaje que envia el usuario
        message.delete();
    }
    //starcWith define con que comienza el mensaje
    if(message.content.startsWith(prefix + 'nuevousuario')) {
        //Aqui estamos limitando el rol que puede usar este comando
        if(message.member.roles.cache.find(rol => rol.id === "423553208372166666")){
        //Definimos que al usuario mencionado, le enviaremos algo
        let user = message.mentions.users.first();
        user.send('Bienvenido al Club DM-500 tome en cuenta lo siguiente:\n\n`------ **Paso 1** ------`\n** Ya tiene acceso a los canales privados, Porfa me confirma que ya esta dentro y puede ver los canales correspondientes.**\n\n:point_right_tone3: También puede ingresar a esta invitación https://discord.gg/TjJrcry y podrá visualizar los canales del club. :point_left_tone3:\n\nMas abajo vera una imagen, así se ven los canales del Club de Trading https://bit.ly/35HOuAQ **(PRIMERA IMAGEN)**\n\n`------ **Paso 2** ------`\n**ACCESO AL INDICADOR DM INTRADIA**\n\nya tiene acceso al indicador Video Explicativo :point_right_tone3: https://youtu.be/Cgzmham6_Eg\n\n:point_right_tone3:  me confirma que le llego una notificación porfa `(si esta por el móvil, no le va a aparecer la notificación, solo aparece en la pc, como se muestra en la imagen)` SEGUNDA IMAGEN\nalgo así\nhttps://bit.ly/2FxhKRH\n\n:point_right_tone3:  Una vez le aparezca en Notificaciones lo agrega a favoritos y luego lo coloca en el grafico como cualquier otro indicador, me confirma que lo ve en el grafico por fa\nhttps://bit.ly/2FDy9En\n\nO en la ventana de indicadores, hay una pestaña que dice invite only scripts\npulse allí **(ULTIMA IMAGEN)**\n\n*Los canales mas importantes son lo de explicación de la estrategia, alli se explica a detalle como operar con cada estrategia*\n*en esos canales va a conseguir tanto el video de la explicación como el material en PDF.*\n\n*También va a ver que dentro del club hay personas con colores en los nombres, los amarillo son personas que ya dominan la estrategia y los morados son parte del equipo de trabajo de daniel*\n\n**Pulse acá para ir a la estrategia Intradía DM :point_down_tone3: **\nhttps://discordapp.com/channels/399697991533068303/696764466683183255/704452655875096718\n\n**Pulse acá para ir a la estrategia Vykonacci :point_down_tone3: **\nhttps://discordapp.com/channels/399697991533068303/696764615560003645/704324378757955635\n\n***El club se comienza a activar a partir de las 8:30am New York, Feliz Día*');
        }
        //Si no cumple la condicion del rol de arriba envia lo de abajo
        else{
            message.channel.send("Lo siento, no tienes permiso para utilizar este comando").then(msg => msg.delete({timeout: 3000}));
        }
        message.delete(); 

    }


});