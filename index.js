const express = require('express');
var bodyParser = require("body-parser");
const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
    res.json({message: 'Hello!'});
});

app.post('/test', (req, res) => {
    console.log("Request received: " + JSON.stringify(req.body));
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});