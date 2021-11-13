module.exports = {
  name: "안녕",
  description: "봇이 인사하는 명령어",
  execute(message) {
    return message.channel.send(`${message.author}, 안녕 인간!`);
  },
};
