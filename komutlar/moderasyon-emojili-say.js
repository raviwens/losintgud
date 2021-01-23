
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!["801194046059970647", "801194046059970649", "801194046059970646", "801194046089199832", "801194046089199831", "801194046059970648", "801194046029693017"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\
  
  
let tag = "♱";
const booster = message.guild.roles.cache.get("797405799295090689").members.size
const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
const toplam = message.guild.memberCount
const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

const embed = new MessageEmbed()
.setTimestamp()
.setColor('#d466ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
message.channel.send(embed.setDescription(`
<a:tag:798083767264608316> **Toplam Üye ・ ${toplam}
<a:tag:798083767264608316> Aktif Üye ・ ${online}
<a:tag:798083767264608316> Sesteki Üye ・${ses}
<a:tag:798083767264608316> Taglı Üye ・ ${ttag}
<a:tag:798083767264608316> Booster Üye ・${booster}
**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}
