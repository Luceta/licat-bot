const Discord = require("discord.js");

const answerFunnyWord = (msg) => {
  const check = msg.content.includes("신나") || msg.content.includes("좋아");
  const lifeOfTheParty = msg.content.includes("제섭");
  if (check) {
    const embed = new Discord.MessageEmbed()
      .setTitle("무야~ 호~")
      .setImage("https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg")
    return msg.channel.send(embed);
  }
  if (lifeOfTheParty) {
    const embed = new Discord.MessageEmbed()
      .setTitle("나는 야 핵인싸 홍제섭~")
      .setImage("https://c.tenor.com/Utfm0NszTAcAAAAM/%EA%B5%B0%EC%B9%A8.gif")
    return msg.channel.send(embed);
  }
}


exports.answerFunnyWord = answerFunnyWord;
