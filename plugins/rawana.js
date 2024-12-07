const { cmd, commands } = require('../command')
const axios = require('axios');

cmd({
    pattern: "rawana",
    desc: "get films.",
    category: "search",
    filename: __filename
    react: "⚜️"
    use: ".rawana"

}, async (conn, mek, m, { from, reply }) => {
    try {


// ඔබගේ ගොනු ගබඩා ස්ථානය
const uploadDir = './https://cinesubz.co/episodes/page/3/';

// ගොනු ගබඩාව නිර්මාණය කිරීම
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.post('/download', async (req, res) => {
    const movieUrl = req.body.movieUrl;

    if (!movieUrl) {
        return res.status(400).json({ error: 'චිත්‍රපට ලින්ක් එකක් ලබා දෙන්න' });
    }

    try {
        const response = await axios({
            url: movieUrl,
            method: 'GET',
            responseType: 'stream'
        });

        const fileName = movieUrl.split('/').pop(); // ලින්ක් එකෙන් ගොනු නම ලබාගැනීම
        const filePath = `${uploadDir}/${fileName}`;

        await pipeline(response.data, createWriteStream(filePath));

        res.json({ downloadLink: `/uploads/${fileName}` });

    } catch (error) {
        console.error('Error downloading movie:', error);
        res.status(500).json({ error: 'චිත්‍රපටය ඩවුන්ලෝඩ් කිරීමේදී දෝෂයක්' });
    }
});


app.get('/uploads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = `${uploadDir}/${filename}`;

    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).json({ error: 'ගොනුව හමු නොවීය' });
    }
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
  }
});

