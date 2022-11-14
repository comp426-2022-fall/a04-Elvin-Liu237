export function roll(sides, dice, rolls) {

    const results = [];
    var sides = 6;

    for (let i = 0; i < rolls; i++) {
        var score = 0;
        for (let j = 0; j < dice; j++) {
            score += (Math.floor(Math.random() * sides) + 1);
        }
        results.push(score);
    }

    const diceOutputObject = {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    }

    return JSON.stringify(diceOutputObject);
}