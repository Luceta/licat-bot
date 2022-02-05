const Discord = require("discord.js");

module.exports = {
  name: "맛점",
  description: "점심 인사 하는 명령어",
  execute(message) {
    const embed = new Discord.MessageEmbed().setImage(
      "https://item.kakaocdn.net/do/cb02160064f6f8be9e4a66d5043f07299f17e489affba0627eb1eb39695f93dd"
    );
    message.channel.send(embed);
  },
};
