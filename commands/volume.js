module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    message.channel.send( `changed volume to \`${args[0]} %\``)
    const music = args.join(" ");

    bot.distube.setVolume(message, args[0])
}

module.exports.config = {
    name: "volume",
    aliases: ['v']
}
