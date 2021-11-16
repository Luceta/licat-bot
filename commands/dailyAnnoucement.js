require("dotenv").config();

module.exports = {
  name: "일일공지",
  description: "일일 공지 사항을 알려주는 명령어 입니다.",
  execute(message) {
    const greeting = message.content.substring(6);
    const zoomLink = process.env.ZOOM;
    let announcement = `안녕하세요!\n${greeting}\n중간 출결은 매일 2시에 진행되오니 잊지말고 QR체크 해주세요!\n줌링크는 당분간 고정입니다!\n자유롭게 들어오시면 됩니다.\n얼른 들어오세요! 🙂\n${zoomLink}\n`;
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const date = new Date().getDay();
    const today = week[date];

    if (today === "금") {
      let newMessage =
        "\n금일은 주간 위클리 설문이 있습니다!\n짧은 설문이니 수업 개선을 위한 필수 설문이니 모두가 꼭 참여해주세요!\n(*적극적으로 의견 적어주시면  감사하겠습니다!)\n ※위클리 설문 링크는 점심시간에 공지 하겠습니다!)";
      announcement += newMessage;
    }
    return message.channel.send(`${announcement}`);
  },
};
