module.exports.run = async (bot, message, args) => {
    let queue = bot.distube.getQueue(message);
    let curqueue = queue.songs.map((song, id) =>
    `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
    ).join("\n");
    return message.channel.send(`Current queue
${curqueue}`)
}
module.exports.config = {
    name: "queue",
    aliases: ['q']
}
