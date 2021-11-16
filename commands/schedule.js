const Discord = require("discord.js");
module.exports = {
  name: "강의일정",
  description: "그 주간의 강의 일정에 대해 안내해줍니다.",
  execute(message) {

    const current = new Date();
    const today = `${current.getFullYear()} / ${current.getMonth()} / ${current.getDate()}`

    const embed = new Discord.MessageEmbed()
      .setTitle("이번 주 강의 일정")
      .setColor("#C4302b")
      .setDescription(`오늘(${today})은 조코딩님의 원데이 특강 클래스로 진행됩니다!\n 오전10시에 시작합니다.\n`)
      .setThumbnail("https://likelion.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9efb4b66-61b1-443b-8a9d-baef65781e79%2FFrontend_Icon_1.png?table=block&id=574e86fc-24db-454d-92c9-cc95a6e5639c&spaceId=c69962b0-3951-485b-b10a-5bb29576bba8&width=250&userId=&cache=v2")
      .setFooter("Copyright ⓒ 2021 HB, LikoLion-K front. All Right Reserved")

    .setTimestamp(new Date().toLocaleDateString('en-us'))

    return message.channel.send(embed);
  }
}

