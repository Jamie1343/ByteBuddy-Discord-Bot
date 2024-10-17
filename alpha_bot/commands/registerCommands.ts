import { REST, Routes } from 'npm:discord.js'
import "jsr:@std/dotenv/load";
// const token = Deno.env.get("TOKEN")
// const guildId = Deno.env.get("TESTSERVER_ID")
// const clientId = Deno.env.get("CLIENT_ID")




const commands = [
    {
      name: "ping",
      description: "pong",
    }
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
  