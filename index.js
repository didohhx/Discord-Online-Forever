const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord

require('dotenv').config();
const { client, ActivityType }
let status = [
    {
      name: 'あ 𝕯𝖎𝕯𝖔 !',
      type: ActivityType.Streaming,
      url: 'https://www.youtube.com/watch?v=RBhxxpd5994&list=RDRBhxxpd5994&start_radio=1',
    },
];
