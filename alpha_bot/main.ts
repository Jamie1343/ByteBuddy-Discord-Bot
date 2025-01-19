import * as discord from "npm:discord.js";
import "jsr:@std/dotenv/load";
import { handleCommands } from "./commands/handleCommands.ts";
import { botStatus } from "./misc/status.ts";
import "./deploy.ts";

import * as sql from "npm:mysql2";

const con = sql.createPool({
  host: Deno.env.get("HOST"),
  user: Deno.env.get("DBUSER"),
  password: Deno.env.get("DBPASSWORD"),
  database: Deno.env.get("DBNAME"),
});

const client = new discord.Client({ intents: [1] });

client.on("ready", () => {
  console.log(`${client.user?.username} Logged In`);
  botStatus(client);
});

client.on("interactionCreate", (interaction) => {
  handleCommands(interaction);
});

client.login(Deno.env.get("TOKEN"));

export { con };
