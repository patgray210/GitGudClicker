let playerName;
let score = "0";
let gameover;
const leaderboard = [];

const makePlayer = function(name, score){
    return {
        name,
        score,
    }
}