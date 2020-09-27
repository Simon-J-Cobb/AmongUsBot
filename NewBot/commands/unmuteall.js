module.exports = {
	name: 'unmuteall',
	description: 'unmuteall members in voice chate',
	aliases: ['uma'],
	execute(message) {
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {
          // I added the following if statement to mute everyone but the invoker:
          // if (member != message.member)
      
          // This single line however, nested inside the for loop, should mute everyone in the channel:
                member.voice.setMute(false);
                }
        } else {
            message.reply('You need to join a voice channel first!');
	}},
};
