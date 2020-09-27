module.exports = {
	name: 'sus',
	description: 'sus a random member in voicechate',
	aliases: ['ma'],
	execute(message) {
        if (message.member.voice.channel) {
            function getRandomInt (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            let players = channel.members.size;
            let choice = getRandomInt(1,players);
            console.log(choice);
            let counter=1;
            for (const [memberID, member] of channel.members) {
                if (choice==counter){
                    message.reply(member.user.username + ' is sus');
                    break;
                }
                counter+=1;
                }
        } else {
            message.reply('You need to join a voice channel first!');
      }}
};
