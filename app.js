//config dotenv
require("dotenv").config()

//require bolt and put into 'app'

const { App } = require("@slack/bolt");

//Initialize with bot token and signing secret
const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET
});

(async() => {
  //start the App
  app.start(process.env.PORT || 3000)
    console.log("⚡️ Bolt-Hello-World-V2 app is running! and This is a 3rd revision");
})();
