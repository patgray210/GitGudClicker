window.onload = gameMenu;

var players = [];

const collectUserData = function (){
    playerName = document.getElementById("player-name").value;
    let player = {name: playerName}
    players.push(player);
    console.log(playerName, player);
}


