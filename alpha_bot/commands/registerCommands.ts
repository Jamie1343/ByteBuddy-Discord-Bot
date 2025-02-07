import { REST, Routes } from "npm:discord.js";
import "jsr:@std/dotenv/load";
import * as discord from "npm:discord.js";

// const token = Deno.env.get("TOKEN")
// const guildId = Deno.env.get("TESTSERVER_ID")
// const clientId = Deno.env.get("CLIENT_ID")

const commands: Array<discord.ApplicationCommandData> = [
  {
    name: "ping",
    description: "pong",
  },
  {
    name: "ban",
    description: "ban the mentioned user",
    options: [
      {
        name: "user",
        type: discord.ApplicationCommandOptionType.User,
        description: "user to ban",
        required: true,
      },
      {
        name: "length",
        description: "time to ban user for eg. 1d",
        type: discord.ApplicationCommandOptionType.String,
        required: false,
      },
    ],
  },
  {
    name: "unban",
    description: "unban the mentioned user",
    options: [
      {
        name: "user",
        type: discord.ApplicationCommandOptionType.User,
        description: "user to unban",
        required: true,
      },
    ],
  },
];

console.log(commands);

const rest = new REST({ version: "10" }).setToken(Deno.env.get("TOKEN")!);

(async () => {
  try {
    console.log("Registering Commands");
    await rest.put(Routes.applicationGuildCommands(Deno.env.get("CLIENT_ID")!, Deno.env.get("TESTSERVER_ID")!), {
      body: commands,
    });

    console.log("command registered");
  } catch (error) {
    console.log(`There Was A Error: ${error}`);
  }
})();

// await rest.put(
//   Routes.applicationCommands(clientId),
//   { body: commands },
// );
