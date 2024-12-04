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
    
await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/900435c6d3157c98c3c88.jpg`},caption: `Hello ${pushname}, I am alive now !`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
