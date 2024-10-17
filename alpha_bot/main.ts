import * as discord from "npm:discord.js"
import "jsr:@std/dotenv/load";
import { handleCommands } from "./commands/handleCommands.ts";
import { botStatus } from "./misc/status.ts";
import "./deploy.ts";

const client = new discord.Client({ intents: [1] });

client.on("ready", () => {
  console.log(`${client.user?.username} Logged In`);
  botStatus(client);
});

client.on("interactionCreate", (interaction) => {
  handleCommands(interaction);
});

client.login(Deno.env.get("TOKEN"));
