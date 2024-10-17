import * as discord from "npm:discord.js";
import * as info from "npm:systeminformation";
import { ping } from "./cmds/ping.ts";

export async function handleCommands(interaction: discord.Interaction) {
  if (!interaction.isCommand()) return;
  switch (interaction.commandName) {
    case "ping":
      ping(interaction);
      break;
  }
}
