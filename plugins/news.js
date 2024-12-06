*ADA NEWS COMMAND📰*

```
const { cmd, commands } = require('../command')
const axios = require('axios');


cmd({
    pattern: "ada",
    alias: ["adanews"],
    desc: "Get the latest Ada news.",
    category: "search",
    react: "📰",
    use: '.ada',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
       
        const apiUrl = "https://saviya-kolla-api.up.railway.app/news/ada";

       
        const response = await axios.get(apiUrl);

        
        if (!response.data.status) {
            return reply("Failed to fetch the latest Ada news. Please try again later.");
        }

        
        const { title, image, date, time, url, desc } = response.data.result;

        
        const newsMessage = `📰 *${title}*\n\n${desc}\n\n*📅 Date:* ${date}\n*🕒 Time:* ${time}\n\n🔗 [Read More](${url})`;

       
        await conn.sendMessage(from, { image: { url: image }, caption: newsMessage });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});

```
