const express = require('express');
const PORT = process.env.PORT || '3000';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API with the whole purpose of it to just ommit letters from sentences if you dont like them.");
});

app.post('/', (req, res) => {
    var text = {
        letter: req.body.letter,
        sentance: req.body.sentance
    };

    res.send(LetterRemover(text.sentance, text.letter));
});

// PORT
app.listen(PORT, () => console.log('Listening on port 3000..'));


function LetterRemover(txt, char) {
    return txt.replaceAll(char, '');;
}