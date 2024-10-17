import * as discord from "npm:discord.js";

export async function unban(interaction: discord.Interaction) {
  if (!interaction.isCommand()) return;
  const ping = new discord.EmbedBuilder().setTitle("PONG").setDescription(``).setColor(discord.Colors.Blue).setTimestamp();

  await interaction.reply({ embeds: [ping] });
}
