const Discord = require("discord.js");

const answerFunnyWord = (msg) => {
  const check = msg.content.includes("신나") || msg.content.includes("좋아");
  const lifeOfTheParty = msg.content.includes("제섭");
  const omg =
    msg.content.includes("오 마이갓") ||
    msg.content.includes("킹") ||
    msg.content.includes("omg");
  const stop = msg.content.includes("멈춰");

  if (check) {
    const embed = new Discord.MessageEmbed()
      .setTitle("무야~ 호~")
      .setImage(
        "https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg"
      );
    embed.setTitle("무야~ 호~");
    embed.setImage(
      "https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg"
    );
    return msg.channel.send(embed);
  }
  if (lifeOfTheParty) {
    const embed = new Discord.MessageEmbed()
      .setTitle("나는 야 핵인싸 홍제섭~")
      .setImage("https://c.tenor.com/Utfm0NszTAcAAAAM/%EA%B5%B0%EC%B9%A8.gif")
      .setImage("https://c.tenor.com/Utfm0NszTAcAAAAM/%EA%B5%B0%EC%B9%A8.gif");
    return msg.channel.send(embed);
  }

  if (omg) {
    const embed = new Discord.MessageEmbed().setImage(
      "https://thumbs.gfycat.com/YellowishNarrowFoal-size_restricted.gif"
    );
    return msg.channel.send(embed);
  }

  if (stop) {
    const embed = new Discord.MessageEmbed().setImage(
      "https://c.tenor.com/BUFmvH6RjgUAAAAM/%EB%A9%88%EC%B6%B0-stop.gif"
    );
    return msg.channel.send(embed);
  }
};

exports.answerFunnyWord = answerFunnyWord;
