import * as discord from "npm:discord.js";
import * as info from "npm:systeminformation";

const CPUInfo = info.cpu().then((cpu) => {
  return cpu;
});

function CPUPackageUsage() {
  const load = info.currentLoad().then((cpu) => {
    return cpu.currentLoad.toFixed(2);
  });
  return load;
}

function CPUPackageTemp() {
  const temp = info.cpuTemperature().then((temp) => {
    return temp.main;
  });
  return temp;
}
async function CPULoad() {
  const cpuinf = info.cpu().then((cpu) => {
    const maxSpeed = `${cpu.speedMax}Ghz`;
    const cores = cpu.physicalCores;
    return { maxSpeed, cores };
  });
  return await cpuinf;
}

async function CPUUsage() {
  const coreInfo = info.cpuCurrentSpeed().then(async (cpu) => {
    const load = await CPULoad();
    let cpuCoreInfo: Array<string> = [];

    for (let i = 1; i <= load.cores; i++) {
      cpuCoreInfo.push(`${i}. ${cpu.cores[i - 1]}Ghz`);
    }

    return cpuCoreInfo;
  });
  return await coreInfo;
}

async function CPUTemps() {
  const temps = info.cpuTemperature().then(async (cpu) => {
    let tempNum = -1;
    const pachageTemp = cpu.main;
    const coresUsage = await CPUUsage();
    const cpuInfo = coresUsage.map((core) => {
      tempNum++;
      return `\n${core} > ${cpu.cores[tempNum]}°C`;
    });
    return await cpuInfo;
  });

  return await temps;
}

const GPUInfo = info.graphics().then((gpu) => {
  return gpu;
});

const systemInfo = info.system().then((sys) => {
  return sys;
});

export async function ping(interaction: discord.Interaction) {
  if (!interaction.isCommand()) return;
  const ping = new discord.EmbedBuilder()
    .setTitle("PONG")
    .setDescription(
      `Motherboard - ${(await systemInfo).model}\nCPU - ${(await CPUInfo).brand}\nGPU - ${(await GPUInfo).controllers[0].model}\nPing: ${Date.now() - interaction.createdTimestamp}ms\nCPU Package Usage ${await CPUPackageUsage()}%\nCPU Package Temp - ${await CPUPackageTemp()}°C\nCPU Usage - ${(
        await CPUTemps()
      ).join("")}`
    )
    .setColor(discord.Colors.Blue)
    .setTimestamp();

  await interaction.reply({ embeds: [ping] });
}
