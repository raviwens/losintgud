const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["801194046059970647", "801194046059970649", "801194046059970646", "801194046089199832", "801194046059970648", "801194046029693017", "801194046013440030"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let ramo;
let ramo1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let ramo2 = message.guild.members.cache.get(args[0]);
if(!ramo1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('0x800d0d').setDescription(`Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin`))
if (ramo1) {
ramo = ramo1;
}
if (ramo2) {
ramo = ramo2;
}
if (!ramo) {
ramo = message.member;
}
let ses = ramo.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+ramo.id+"> Bir Sesli Kanalda Değil!**"));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('#7289D').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"**<@"+ramo.id+"> İsimli Kişi `"+ses.name+"` İsimli Kanalda!**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgula"],
    permLevel: 0,
    name: "sorgula"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  