const Discord = require('discord.js')
const data = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
 if(!message.member.roles.cache.some(r => ["801194046147919929", "801194046147919925"].includes(r.id))) //
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")

const altytrol = message.guild.roles.cache.find(r => r.id === '801194046118297602')
let isim = []
let enAltYetkiliRolu = message.guild.roles.cache.get(altytrol);
let members = message.guild.members.cache.filter(member => member.roles.highest.position >= altytrol.position);
let sesteOlanlar = members.filter(member => member.voice.channel);
let sesteOlmayanlar = members.filter(member => !member.voice.channel);

 message.channel.send(` \`\`\`Seste olmayan yetkililer: ${sesteOlmayanlar.map(member => `${member}`).join(", ")}\`\`\` `)

} 
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
}

exports.help = {
name: 'ses-say'
}

