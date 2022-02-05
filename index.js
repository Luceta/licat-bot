const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");
const { answerFunnyWord } = require("./answer/word");

const axios = require("axios");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

const allCommands = [];

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  allCommands.push(command.name);
}

client.on("ready", () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on("message", (msg) => {
  answerFunnyWord(msg);

  if (msg.author.id === client.user.id) return;
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift();

  if (!client.commands.has(command)) return;

  try {
    const commandObj = client.commands.get(command);
    if (commandObj.name === "라이캣") {
      return client.commands.get(command).execute(msg, allCommands);
    }
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
  }
});

client.login(token);
