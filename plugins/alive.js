const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let msg = `*Hello ${pushname},*

_I am INDUWA-MD created by Induwara_

_Type .menu to get all commands list_

> POWERED BY INDUWA-MD`
    
await conn.sendMessage(from,{image: {url: `https://i.ibb.co/jyVLMdD/infinitywabot.jpg`},caption: msg},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
