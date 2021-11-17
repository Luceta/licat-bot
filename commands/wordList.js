const database = require("./answer/word");

module.exports = {
  name: "단어",
  description: "라이캣이 반응하는 단어 목록",
  execute(message) {
    const wordList = [];
    database.forEach(({ wordArr }) => wordList.push(wordArr.join("/")));
    return message.channel.send(`[라이캣이 반응하는 단어 목록]\n\n${wordList.join(", ")}`);
  },
};