const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "gpt",
    desc: "AI chat feature",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv()
if(config.BLOCK_JID.includes(from)) return
if(!q) return reply("*_Please give me a text._*")

let data = await fetchJson(`https://www.dark-yasiya-api.site/ai/chatgpt?q=${q}`)

return reply(`${data.result}\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`)

}catch(e){
console.log(e)
reply(`${e}`)
}
})
