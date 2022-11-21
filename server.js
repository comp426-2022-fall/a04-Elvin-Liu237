import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const app = express(2);

const args = minimist(process.argv.slice(2));

const port = args.port || 5000;

const Sides = 6;
const Dice  = 2;
const Rolls = 1;


app.use(express.urlencoded({extended: true}));

'Check endpoint at /app/ that returns 200 OK.'
app.get('/app/', (req, res) => {
    res.type('html')
    res.status(200).send('200 OK');
});

'Endpoint /app/roll/ that returns JSON for a default roll of two six-sided dice one time.'
app.get('/app/roll/', (req, res) => {
    res.send(roll(Sides, Dice, Rolls));
});

'check if JSON or URL encoded'

app.get('/app/roll/', (req, res) => {

    let Sides = 6;
    let Dice = 2;
    let Rolls = 1;
     
    if (req.body.sides) {
        Sides = parseInt(req.body.sides)
    }
    if (req.body.dice) {
        Dice = parseInt(req.body.dice)
    }
    if (req.body.rolls) {
        Rolls = parseInt(req.body.rolls)
    }
 
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(Sides, Dice, Rolls));
    //res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)))
});

'Endpoint /app/roll/:sides/ that returns JSON for a default number of rolls'
app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), Dice, Rolls));
});

'Endpoint /app/roll/:sides/:dice/ that returns JSON for a default number of rolls'
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), Rolls));
});

'Endpoint /app/roll/:sides/:dice/:rolls/'

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
});

'404 error not found'

app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

app.listen(port);

