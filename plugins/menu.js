const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu ={
main: '',
owner: '',
dowload: '',
convert: '',
group: '',
search: ''
};
  
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu =`👋 *Hello ${pushname}*

> *Download Commands* 👈

${menu.download}

> *Main Commands* 🌝

${menu.main}

> *Owner Commands* ⚜️

${menu.owner}

> *Convert Commands* ♻️

${menu.convert}

> *Group Commands* 💠

${menu.group}

> *Search Commands* 🧐

${menu.search}

> POWERED BY INDUWA-MD`

await conn.sendMessage(from,{text:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
