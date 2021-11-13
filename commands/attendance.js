const Discord = require("discord.js");

module.exports = {
  name: "큐알",
  description: "출석을 위한 큐알을 보내주는 명령어입니다.",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("출결 관련 QR 코드")
      .setThumbnail("https://likelion.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9efb4b66-61b1-443b-8a9d-baef65781e79%2FFrontend_Icon_1.png?table=block&id=574e86fc-24db-454d-92c9-cc95a6e5639c&spaceId=c69962b0-3951-485b-b10a-5bb29576bba8&width=250&userId=&cache=v2")
      .addField("출결 노션 링크", "https://likelion.notion.site/1-574e86fc24db454d92c9cc95a6e5639c?p=f0a401fcd69241a68468a750120c4fa6", true)
    return message.channel.send(embed);
  },
};






