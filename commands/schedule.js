const fs = require("fs");

module.exports = {
  name: "강의일정",
  description: "강의 일정에 대해서 봇이 알려줍니다.",
  execute(message) {
    
    
    return message.channel.send(`${message.author}, 안녕 인간!`);
  },
};
