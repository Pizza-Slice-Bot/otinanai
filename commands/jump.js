module.exports.run = async (bot, message, args) => {
    let queue = distube.getQueue(message);
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) return message.channel.send('You must be in a voice channel to use this command.');

    if (0 <= Number(args[0]) && Number(args[0]) <= queue.songs.length) {
        embedbuilder(client, message, "RED", "ERROR", `Jumped ${parseInt(args[0])} songs!`)
        return distube.jump(message, parseInt(args[0]))
            .catch(err => message.channel.send("Invalid song number."));
    }
}

module.exports.config = {
    name: "jumpto",
    aliases: ['jt']
}
    
    
