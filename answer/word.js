const Discord = require("discord.js");

const database = [
  {
    wordArr: ["신나", "좋아", "최고"],
    title: "무야~ 호~",
    image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg",
  },

  {
    wordArr: ["오 마이갓", "킹", "omg"],
    title: "",
    image: "https://thumbs.gfycat.com/YellowishNarrowFoal-size_restricted.gif",
  },

  {
    wordArr: ["멈춰"],
    title: "Stop!",
    image: "https://c.tenor.com/BUFmvH6RjgUAAAAM/%EB%A9%88%EC%B6%B0-stop.gif",
  },

  {
    wordArr: ["커피"],
    title: "",
    image:
      "https://cdn.discordapp.com/attachments/903526029077929984/909098394780315718/zzal.gif",
  },
];

const answerFunnyWord = (msg) => {
  const sendMessage = (msg, { wordArr, title, image }) => {
    const check = wordArr.some((word) => {
      return msg.content.includes(word);
    });

    if (check) {
      const embed = new Discord.MessageEmbed().setTitle(title).setImage(image);
      msg.channel.send(embed);
    }
  };

  database.forEach((doc) => sendMessage(msg, doc));
};

const answerFunnyDb = () => {
  const wordList = [];
  database.forEach(({ wordArr }) => wordList.push(wordArr.join("/")));

  return `[라이캣이 반응하는 단어 목록]\n\n${wordList.join(", ")}`;
};

exports.answerFunnyWord = answerFunnyWord;
exports.answerFunnyDb = answerFunnyDb;
