const Discord = require("discord.js");

module.exports = {
  name:"투표",
  description:"봇이 투표를 생성해줍니다.",
  async execute(message){
    const vote = message.content.substring(4).split("/");
    const title = vote[0];
    const embed = new Discord.MessageEmbed().setTitle(`⭐️투표 - ${title}`).setColor("RED");
    await message.channel.send(embed)
    for (let i = 1; i < vote.length; i++){
      const choice = await message.channel.send("```" + vote[i] + "```");
      await choice.react(`👍`);
    }
  }
}

