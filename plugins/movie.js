const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "movie",
    desc: "search movie",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://www.omdbapi.com/?apikey=448bb257&t=${q}`)

if(!q) return reply("*Please give me a movie name*")

let mvInfo = `*_INDUWA-MD MOVIE DETAILS_*

*● Movie Name :* ${data.Title}

*● Released Date :* ${data.Released}

*● Runtime :* ${data.Runtime}

*● Genre :* ${data.Genre}

*● Director :* ${data.Director}
                 
*● Actors :* ${data.Actors}

*● Language :* ${data.Language}

*● IMDB Rating :* ${data.imdbRating}

*● Type :* ${data.Type}

*● Box Office :* ${data.BoxOffice}

*● Plot :* ${data.Plot}

> POWERED BY INDUWA-MD`
           
await conn.sendMessage(from,{image:{url: data.Poster},caption:mvInfo},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
