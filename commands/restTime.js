const Discord = require("discord.js");

module.exports = {
  name: "쉬는시간",
  description: "프로필을 보여주는 명령어",
  execute(message) {
    const embed = new Discord.MessageEmbed()
    .setImage("https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjlfMzIg/MDAxNTkwNzE4MTQ5Mjkx.M9Oab5pvlv8Z5GQfkC_5W_CAR2QPyEJGGkerfC4_I_wg.bXKSLGsT0BTWdDAZ3rtXtTcHVTbcKE2laSep6wHtE30g.JPEG.theworkscompany/23_%EC%9E%98_%EC%89%AC%EB%8A%94_%EA%B2%83%EB%8F%84_%EC%A4%91%EC%9A%94%ED%95%9C_%EC%9D%BC%EC%9D%B4%EB%9E%AC%EC%96%B4_2.jpg?type=w800")
    message.channel.send(`${message.author}, 안녕 인간!`);
    message.channel.send(embed);
  }
}
