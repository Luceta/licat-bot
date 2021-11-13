require("dotenv").config();

module.exports = {
  name: "줌링크",
  description: "강의실 링크를 보내주는 명령어 입니다.",
  execute(message) {
    const zoomLink = process.env.ZOOM;
   return message.channel.send(`${message.author}, 강의실 링크:${zoomLink}!`);
  }
}
