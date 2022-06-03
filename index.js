const express = require('express');
const PORT = process.env.PORT || '3000';
var cors = require('cors');

const app = express();

app.use(express.json());



// use it before all route definitions
app.use(cors({ origin: '*' }));

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.send("API with the whole purpose of it to just ommit letters from sentences if you dont like them.");
});

app.post('/', (req, res) => {
    var text = {
        letter: req.body.letter,
        sentance: req.body.sentance
    };

    res.send(`edit numb3 ${LetterRemover(text.sentance,text.letter)} `);
});
var x = "zzz";
// PORT
app.listen(PORT, () => console.log('Listening on port 3000..'));


function LetterRemover(txt, char) {
    return txt //txt.replaceAll(char, '');;
}