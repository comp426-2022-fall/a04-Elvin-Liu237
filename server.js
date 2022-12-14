import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const app = express(2);

const args = minimist(process.argv.slice(2));

const port = args.port || 5000;



app.use(express.urlencoded({extended: true}));

//Check endpoint at /app/ that returns 200 OK.
app.get('/app/', (req, res) => {
    res.type('html')
    res.status(200).send('200 OK');
});

//'Endpoint /app/roll/ that returns JSON for a default roll of two six-sided dice one time.'
app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1));
});

//'check if JSON or URL encoded'

app.post('/app/roll/', (req, res) => {

    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
});

//'Endpoint /app/roll/:sides/ that returns JSON for a default number of rolls'
app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
});

//'Endpoint /app/roll/:sides/:dice/ that returns JSON for a default number of rolls'
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
});

//'Endpoint /app/roll/:sides/:dice/:rolls/'

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
});

//'404 error not found'

app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

app.listen(port);

