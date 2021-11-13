const Discord = require("discord.js");

module.exports = {
  name: "도움",
  description: "모든 명령아를 안내해주는 명령어",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("HELP")
      .setColor("#C4302b")
      .setDescription("저어게 명령 할 수 있는 키워드입니다!")
      .setThumbnail("https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/2YH6/image/-im-bnvX33JVTe800JHLMcNvmwc.png")
      .setFooter("Copyright ⓒ 2021 HB, LikoLion-K front. All Right Reserved")
      .addFields(
        { name: '!안녕', value:'라이캣이 인사합니다.' ,inline:true},
        { name: '!아바타', value:'아바타를 확인 할 수 있습니다.' ,inline:true},
        { name: '!라이캣', value: '멋사 로봇' ,inline:true},
        { name: '!쉬는시간', value: '쉬는 시간 짤 💡' ,inline:true},
        { name: '!투표', value: '원하는 투표를 열 수 있습니다.', inline: true },
        { name: '!줌링크', value: '줌 링크를 안내해줍니다.', inline: true },
        { name: '!큐알', value: '큐알 코드를 안내해줍니다.', inline: true },
    )
    .setTimestamp(new Date().toLocaleDateString('en-us'))
    return message.channel.send(embed);
  },
};
