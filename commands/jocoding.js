const Discord = require("discord.js");

module.exports = {
  name: "조코딩",
  description: "프로필을 보여주는 명령어",
  execute(message) {
    const embed = new Discord.MessageEmbed()
    .setThumbnail("https://ww.namu.la/s/640d2c21033e51e073e8d98d27dd73b926cd1be0eef73a7128ea7d55c16540e3d243392a18d96db056add187f3c5d96668b63762aa367d67923c25c97a6b64ba2caab8668de54d305f53000445a86d6068df2b0c6e9cc1aebb578ec04a2bb136")
    message.channel.send(`${message.author}, 안녕 인간! 조코딩님을 몰라?\n 유투버로 2020년 4월에 구독자 10만을 달성했고, 동물상테스트가 2020년 12월 한때 대세 테스트로 떠올라 수익이 엄청나다고 해!`);
    message.channel.send(embed);
  }
}
