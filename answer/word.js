const Discord = require("discord.js");
const coffe = require("../commands/coffe");

const answerFunnyWord = (msg) => {
  const check = msg.content.includes("신나") || msg.content.includes("좋아");
  const lifeOfTheParty = msg.content.includes("제섭");
  const omg = msg.content.includes("오 마이갓") || msg.content.includes("킹") || msg.content.includes("omg");
  const stop = msg.content.includes("멈춰");
  const coffee = msg.content.includes("커피");

  if (check) {
    const embed = new Discord.MessageEmbed()
      embed.setTitle("무야~ 호~")
      embed.setImage("https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg");
    return msg.channel.send(embed);
  }

  if (lifeOfTheParty) {
    const embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/Utfm0NszTAcAAAAM/%EA%B5%B0%EC%B9%A8.gif");
    return msg.channel.send(embed);
  }

  if (omg) {
    const embed = new Discord.MessageEmbed()
      .setImage("https://thumbs.gfycat.com/YellowishNarrowFoal-size_restricted.gif");
    return msg.channel.send(embed);
  }
  if (stop) {
    const embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/BUFmvH6RjgUAAAAM/%EB%A9%88%EC%B6%B0-stop.gif");
    return msg.channel.send(embed);
  }

  if (coffee) {
    const embed = new Discord.MessageEmbed()
      .setImage("https://cdn.discordapp.com/attachments/903526029077929984/909098394780315718/zzal.gif");
    return msg.channel.send(embed);
  }
}



exports.answerFunnyWord = answerFunnyWord;
