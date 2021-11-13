const Discord = require("discord.js");

module.exports = {
  name: "프로필",
  description: "lion cat bot의 프로필을 보여줍니다.",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Licat bot")
      .setColor("#C4302b")
      .setDescription("안녕하세요 라이봇 입니다. 저를 소개하겠습니다.")
      .setThumbnail("https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/2YH6/image/-im-bnvX33JVTe800JHLMcNvmwc.png")
      .setFooter("Copyright ⓒ 2021 HB, LikoLion-K front. All Right Reserved")
      //.addFields()
    message.channel.send(embed);
  }
  
}
