const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client();
client.login(config.BOT_TOKEN)

//Agregando Roles
let miembro = message.mentions.members.first();
let nombrerol = args.slice(1).join(' ');

let role = message.guild.roles.cache.find(r => r.name === nombrerol);
let perms = message.member.hasPermission("MANAGE_ROLES");

if(!perms) return message.channel.send("No tienes permisos suficientes, para agregar roles.");
if(!miembro) return message.reply('Debe mencionar a un miembro.');
if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar.');
if(!role) return message.channel.send('Rol no encontrado en el servidor.');

miembro.roles.add(role).catch(console.error);
message.channel.send(`El rol **${role.name}** fue agregado a **${miembro.user.username}**.`);