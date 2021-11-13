const Discord = require("discord.js");

const answerFunnyWord = (msg) => {
  const check = msg.content.includes("신나") || msg.content.includes("좋아");
  if (check) {
    const embed = new Discord.MessageEmbed()
      .setTitle("무야~ 호~")
      .setImage("https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg")
    msg.channel.send(embed);
  }
}


exports.answerFunnyWord = answerFunnyWord;
