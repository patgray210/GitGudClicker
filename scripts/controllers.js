const getScore = function(){
    score = localStorage.getItem('score');
    return score;
}

const useName = function(){
    playerName = localStorage.getItem('name');
    return playerName;
}


const Controllers = function(){
    const name = document.getElementById('start-game');
    name.addEventListener('click', getName);
}

const getName = function(){
    const tempName = document.getElementById('player-name').value;
    localStorage.setItem('name',tempName);
}


