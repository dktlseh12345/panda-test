const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Panda_BOT? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Panda_BOT','https://cdn.discordapp.com/attachments/549903089969135627/922118403119005756/1637659979709.jpg')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Panda_BOT to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=921796461484736543&permissions=49572160&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};