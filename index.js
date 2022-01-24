const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "ODIzNjY0MDk2MjIxNDYyNTQ4.YFkG9w.zh7FFUc_Jq4EOrLm4_681gbhPOM"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN)