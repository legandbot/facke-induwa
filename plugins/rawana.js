const { cmd, commands } = require('../command')
const axios = require('axios');


cmd({
    pattern: "rawana",
    alias: ["getfilms"],
    desc: "Get the latestfilm on cinzesub.",
    category: "get",
    react: "☺",
    use: '.rawana',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
       
        const apiUrl = "https://cinesubz.co/episodes/page/3/";

       
        const response = await axios.get(apiUrl);

        
        if (!response.data.status) {
            return reply("Failed to fetch the latest film. Please try again later.");
        }

        
        const { title, image, date, time, url, desc } = response.data.result;

        
        const rawanMessage = `❤️‍🔥 *${title}*\n\n${desc}\n\n*📅 Date:* ${date}\n*🕒 Time:* ${time}\n\n🔗 [Read More](${url})`;

       
        await conn.sendMessage(from, { image: { url: image }, caption: newsMessage });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});
