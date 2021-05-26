module.exports.run = async (bot, message, args) => {
embedbuilder(`seeked the song for \`${args[0]} seconds\``)
return distube.seek(message, Number(args[0]*1000));
}

module.exports.config = {
    name: "seek",
    aliases: ['se']
}
