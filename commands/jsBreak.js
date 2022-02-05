const Discord = require("discord.js");

module.exports = {
  name: "자스뿌셔",
  description: "코딩을 독려하는 명령어",
  execute(message) {
    const embed = new Discord.MessageEmbed().setImage(
      "https://z-images.s3.amazonaws.com/6/62/%EC%9D%BC%EC%96%B4%EB%82%98_%EC%BD%94%EB%94%A9%ED%95%B4%EC%95%BC%EC%A7%80_cropped.jpg"
    );
    message.channel.send(embed);
  },
};
