//config dotenv
require("dotenv").config()

//require bolt and put into 'app'

const { App } = require("@slack/bolt");

//Initialize with bot token and signing secret
const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET
});

//listening to 'Hello' on anywhere in scope
app.message("hello" || "Hi" || "Hey" || "hey" || "hi" || "สวัสดี" || "ฮาย", async function({message, say}) {
  //say 'Hello USER!'
  console.log(message);
  console.log(message.data);
  await say('Hello!');
  console.log('Said HELLO back!');
});





(async() => {
  //start the App
  app.start(process.env.PORT || 3000)
    console.log("⚡️ Bolt-Hello-World-V2 app is running! and This is a 3rd revision");
})();
