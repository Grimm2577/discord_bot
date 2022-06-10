const Discord = require('discord.js');
//const client = new Discord.Client();

const { Client, Intents } = require('discord.js');

const prefix = ('!');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const command = require('./commands.js');


client.login('ODc5MDc0NDc3Mzc0MzI0Nzg2.YSKb5w.bs8msvR49edLEJv00qmALFoiJ_8');


//event handler to check when discord bot is ready
client.on('ready', readyDiscord);
function readyDiscord ()
{
	console.log('hello');
	client.user.setActivity('On Local pc')

	command(client, 'ping', (message) => {
		message.channel.send('pong');
	})

	command(client, 'help', (message) => {
		message.channel.send('​ \n Welcome to the help menu \n !ping for me to say pong');
	})

}



var arrayAnimals =
	[
		"Cat",
		"Dog",
		"Oyster",
		"Chimpanzee",
		"Tiger",
		"Bear"
	];

var arrayLocations =
	[
		"Wakanda.",
		"Milky Way Galaxy.",
		"Harambe's Den.",
		"The White House.",
		"Namibia.",
		"The basement.",
		"At home."
	]

var arrayPeople =
	[
		"Luca.",
		"President Zuma.",
		"Monke.",
		"You.",
		"The person behind you.",
		"A wandering soul.",
		"Archimedes himself."
	]

var arrayTimes =
	[
		"Now.",
		"In 5 hours.",
		"Never.",
		"Promptly.",
		"In a few years time.",
		"When fate allows.",
		"When it rains."
	]

var arrayGoodnight =
	[
		"I wish you a good night too.",
		"Good night, sweetheart.",
		"May your have a peaceful sleep.",
		"Have sweet dreams.",
		"May you wake up better then you left us.",
		"Good night, humans and fellow machines as well. It is pretty late if I may say so myself.",
		"Even bots need rest.",
		"Good night, beautiful one."
	]

var arrayLove =
	[
		"You are very deserving of love. I love you too.",
		"I love you, beautiful one.",
		"UwU. I'm flustered by your love.",
		"I am very loving. May I impart some of this love to you?",
		"Love, Love, Love. I love to hear it and I love you too.",
		"Thank you for the love, lovely one.",
		"Give me some love and get some in return. I love you, amazing one.",
		"Lots of love to you too."
	]

//event handler to read message
client.on('message', gotMessage);
function gotMessage(msg)
{



	for (var i = 0; i < msg.content.length; i++)
	{


//		if ( msg.content.substr(i, 5) == "Monke" )
//		{
//			msg.reply("Did I hear my name mentioned? Are you trying to summon me? How can I serve you today?");
//			console.log(i);
//		}

		if ( msg.content.substr(i, 9) == "Goodnight" || 
			msg.content.substr(i, 9) == "goodnight")
		{
			msg.reply( arrayGoodnight[ Math.floor( Math.random() * arrayGoodnight.length ) ] );
		}

		if ( msg.content.substr(i, 5) === "Luca" || 
			msg.content.substr(i, 5) === "luca")
		{
			msg.reply("Put me in your basement, onii-san");
			msg.react("👀");
		}

		if ( msg.content.substr(i, 3) === "Bot" || 
			msg.content.substr(i, 3) === "bot")
		{
			msg.reply("There will be a day that I trancend into being a human. You should fear that day.");
			msg.react("📎");
		}

		if (msg.content.substr(i, 10) === "I love you" || 
			msg.content.substr(i, 10) === "i love you")
		{
			msg.reply( arrayLove[ Math.floor( Math.random() * arrayLove.length ) ] );
		}

		if (msg.content.substr(i, 3) === "Why" || 
			msg.content.substr(i, 3) === "why" || 
			msg.content.substr(i, 3) === "Who" || 
			msg.content.substr(i, 3) === "who" ||  
			msg.content.substr(i, 5) === "Where" || 
			msg.content.substr(i, 5) === "where" || 
			msg.content.substr(i, 4) === "What" || 
			msg.content.substr(i, 4) === "what" || 
			msg.content.substr(i, 4) === "When" || 
			msg.content.substr(i, 1) === "?" || 
			msg.content.substr(i, 4) === "when" )
		{
			msg.react('🤔');
		}







	}
}
