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

// Hoş Geldin Mesajı
client.on('guildMemberAdd', async (member) => {
    const kanalId = '1463174765387972864';
    const kanal = member.guild.channels.cache.get(kanalId);
    if (kanal) {
        kanal.send(`Favelaya Hoş Geldiiin :)${member}`);
    }
});

// Görüşürüz Mesajı
client.on('guildMemberRemove', async (member) => {
    const kanalId = '1463174765387972864';
    const kanal = member.guild.channels.cache.get(kanalId);
    if (kanal) {
        kanal.send(`Görüşürüz **${member.user.username}**, aramızdan ayrıldı... 🙁`);
    }
});

client.login(process.env.TOKEN);
