import * as discord from "npm:discord.js";

import { ping } from "./cmds/ping.ts";
import { ban } from "./cmds/ban/ban.ts";
import { unban } from "./cmds/ban/unban.ts";

export function handleCommands(interaction: discord.Interaction) {
  if (!interaction.isCommand()) return;
  switch (interaction.commandName) {
    case "ping":
      ping(interaction);
      break;
    case "ban":
      ban(interaction);
      break;
    case "unban":
      unban(interaction);
      break;
  }
}
