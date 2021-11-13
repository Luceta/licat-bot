module.exports = {
  name: "아바타",
  description: "프로필을 보여주는 명령어",
  execute(message) {
    return message.channel.send(`${message.author}의 아바타 : ${message.author.displayAvatarURL()}`)
  }
}
