const { cmd, commands } = require('../command')
const axios = require('axios');



cmd({
    pattern: "rawana",
    alias: ["getfilms"],
    desc: "Get movie info from OMDb API.",
    category: "get",
    react: "☺",
    use: '.rawana <movie name>', //Updated use section to show the movie name input is needed.
    filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        const q = args.join(" "); // Get movie name from user input

        if (!q) return reply("Please give me a movie name");

        const response = await axios.get(`https://www.omdbapi.com/?apikey=448bb257&t=${q}`);
        const data = response.data;

        if (data.Error) {
            return reply(`Error: ${data.Error}`); // Handle API errors
        }

        let mvInfo = `*INDUWA-MD MOVIE INFO*

● Movie Name : ${data.Title}
● Released Date : ${data.Released}
● Runtime : ${data.Runtime}
● Genre : ${data.Genre}
● Director : ${data.Director}
● Actors : ${data.Actors}
● Language : ${data.Language}
● IMDB Rating : ${data.imdbRating}
● Type : ${data.Type}
● Box Office : ${data.BoxOffice}
● Plot : ${data.Plot}

> POWERED BY INDUWA-MD`;

        await conn.sendMessage(from, {
            image: { url: data.Poster },
            caption: mvInfo
        });

    } catch (error) {
        console.error("Error fetching movie info:", error);
        reply("Error fetching movie information. Please try again later.");
    }
});
