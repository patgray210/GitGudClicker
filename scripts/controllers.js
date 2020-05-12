const getScore = function(){
    score = localStorage.getItem('score');
}

<<<<<<< HEAD
const useName = function(){
    playerName = localStorage.getItem('name');
}


const Controllers = function(){
    const name = document.getElementById('start-game');
    name.addEventListener('click', getName);
}

const getName = function(){
    const tempName = document.getElementById('player-name').value;
    localStorage.setItem('name',tempName);
}

const useName = function(){
    playerName = localStorage.getItem('name');
}
=======
const getCallbacks = function(){
    const callbacks = {};
    callbacks['home-menu'] = gameMenu;
    callbacks['new-game'] = newGameScreen;
    return callbacks;
}

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for (let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id]);
    }
}


>>>>>>> d14de12985fcf96f5330a05a219319b2a56f15d6


