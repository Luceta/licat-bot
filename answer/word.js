const Discord = require("discord.js");

const answerFunnyWord = (msg) => {

  const database = [

    {
      wordArr: [ "신나", "좋아", "최고" ],
      title: "무야~ 호~",
      image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/11/12/110217903.2.jpg"
    },
  
    {
      wordArr: [ "오 마이갓", "킹", "omg" ],
      title: "",
      image: "https://thumbs.gfycat.com/YellowishNarrowFoal-size_restricted.gif"
    },
  
    {
      wordArr: [ "멈춰" ],
      title: "",
      image: "https://c.tenor.com/BUFmvH6RjgUAAAAM/%EB%A9%88%EC%B6%B0-stop.gif"
    },
  
    {
      wordArr: [ "커피" ],
      title: "",
      image: "https://cdn.discordapp.com/attachments/903526029077929984/909098394780315718/zzal.gif"
    },
  
  // {
  //   wordArr: [ "제섭" ],
  //   title: "",
  //   image: "https://c.tenor.com/Utfm0NszTAcAAAAM/%EA%B5%B0%EC%B9%A8.gif"
  // },
  // 
  // {
  //   wordArr: [ "맛점" ],
  //   title: "맛점하구 있다가 만나요!",
  //   image: "https://c.tenor.com/fbRMi1PLNrwAAAAM/winnie-the-pooh-lunch-time.gif"
  // },
  // 
  // {
  //   wordArr: [ "화이팅" ],
  //   title: "",
  //   image: ""
  // }
  
  ];

  // 접두사 종류
  // 접두사 없이도 메시지가 나오게 하려면 공백문자 ""을 추가
  const prefixArr = [ "!", "#" ]; 

  const sendMessage = (msg, { wordArr, title, image }) => {
    const check = wordArr.some(word => {
      return prefixArr.some(prefix => msg.includes(prefix + word));
    });
    if (check) {
      const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setImage(image);
      msg.channel.send(embed);
    }
  };

  database.forEach(doc => sendMessage(msg, doc));
};

exports.answerFunnyWord = answerFunnyWord;