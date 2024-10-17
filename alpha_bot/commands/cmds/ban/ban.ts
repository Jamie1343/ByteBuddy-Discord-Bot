import * as discord from "npm:discord.js";
// @deno-types="npm:@types/ms"
import ms from "npm:ms";
import { con } from "../../../main.ts";

export async function ban(interaction: discord.Interaction) {
  if (!interaction.isCommand()) return;
  const user = interaction.options.get("user")?.user;
  const length = interaction.options.get("length")?.value as string;

  const time = ms(length ?? "999y");

  const unbanTime = Date.now() + time;
  const unbanDate = new Date(unbanTime).toISOString().slice(0, 19).replace("T", " ");

  con.query("INSERT INTO `discord`.`bans` (`discordID`, `unban_date`) VALUES ('" + user?.id + "', '" + unbanDate + "');", function (error) {
    if (error) throw error;
    console.log("Ban Logged");
  });

  const ban = new discord.EmbedBuilder()
    .setTitle("User Banned")
    .setDescription(`<@${user?.id}> Was Banned By <@${interaction.user.id}> ${length == undefined ? "" : `For ${ms(ms(length), { long: true })}`}`)
    .setColor(discord.Colors.Red)
    .setTimestamp();

  await interaction.reply({ embeds: [ban] });
}
