const Discord = require("discord.js");
const { answerFunnyDb } = require("../answer/word");

module.exports = {
  name: "단어",
  description: "라이캣이 반응하는 단어 목록",
  execute(message) {
    return message.channel.send(answerFunnyDb());
  },
};
