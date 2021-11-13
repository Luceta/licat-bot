const Discord = require("discord.js");
module.exports = {
  name: "라이캣",
  description: "lion cat bot의 프로필을 보여줍니다.",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Licat bot")
      .setColor("#C4302b")
      .setDescription("안녕하세요 라이봇 입니다. 저를 소개하겠습니다. 저를 사용하는 명령어는 아래와 같습니다!")
      .setThumbnail("https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/2YH6/image/-im-bnvX33JVTe800JHLMcNvmwc.png")
      .setFooter("Copyright ⓒ 2021 HB, LikoLion-K front. All Right Reserved")
      .addFields(
        { name: '좋아하는 사람', value:'이모지 눌러주는 사람' ,inline:true},
        { name: '특기', value: '멋사 로봇' ,inline:true},
        { name: '좋아하는 것', value: '전기⚡️💡' ,inline:true},
        { name: '취미', value: '대답하기', inline: true },
        { name: '명령어', value: '!help', inline: true },
    )
    .setTimestamp(new Date().toLocaleDateString('en-us'))

    return message.channel.send(embed);
  }
}
