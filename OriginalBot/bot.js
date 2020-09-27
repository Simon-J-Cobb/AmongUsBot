var auth = require('./auth.json');
const Discord = require('discord.js');
const client = new Discord.Client();

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
  }
  if (msg.content === '!muteall') {
    // Your invokation here, for example your switch/case hook for some command (i.e. '!muteall')
// Check if user is in a voice channel:
    if (msg.member.voice.channel) {
        let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
      // I added the following if statement to mute everyone but the invoker:
      // if (member != message.member)
  
      // This single line however, nested inside the for loop, should mute everyone in the channel:
            member.voice.setMute(true);
            }
    } else {
        msg.reply('You need to join a voice channel first!');
  }}
  if (msg.content === '!unmuteall') {
    if (msg.member.voice.channel) {
        let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
            member.voice.setMute(false);
            }
    } else {
        msg.reply('You need to join a voice channel first!');
  }
  }
  if (msg.content === '!sus') {
    if (msg.member.voice.channel) {
        let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
        let players = channel.members.size;
        let choice = getRandomInt(1,players);
        console.log(choice);
        let counter=1;
        for (const [memberID, member] of channel.members) {
            if (choice==counter){
                msg.reply(member.user.username + ' is sus');
                break;
            }
            counter+=1;
            }
    } else {
        msg.reply('You need to join a voice channel first!');
  }
  }    
}
);

client.login(auth.token);

