const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`${client.user.tag} olarak giriş yapıldı! Bot aktif.`);
});

client.on('guildMemberAdd', async (member) => {
    const kanalId = '1463174765387972864'; 
    
    const kanal = member.guild.channels.cache.get(kanalId);
    if (kanal) {
        kanal.send(`Favelaya Hoş Geldiin :) ${member}`);
    }
});

client.login('MTU1NDUwOTQwNDkzMjY2OTQ4MA.GJw8ca.82V_f85zkPcyCZQkh2D2D9yJmIKTZM5D0wf7-Q');