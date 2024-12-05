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
    
await conn.sendMessage(from,{image: {url: `https://i.ibb.co/jyVLMdD/infinitywabot.jpg`},caption: `Hello ${pushname}, hello iam created by induwara🌝❤️‍🔥 *⭕my name is induwamd* *⭕my owner is induwara nilupul* !`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
