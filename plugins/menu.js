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

let madeMenu =`👋 *Hello budy ${pushname}*
> *Download commands*👈
${menu.download}

    
> *Main Commands* 🌝
${menu.main}


> *owner commands* ⚜️
${menu.owner}


> *Convert commands* ♻️
${menu.convert}


>*group commands* 💠
${menu.group}


> *Search commands* 🧐
${menu.search}


POWERED_BY_Induwara ❤️‍🔥
`
await conn.sendMessage(from,{text:madeMenu},{quoted:mek})





}
  
}catch(e)
console.log(e)
replay(`${e}`)
}
