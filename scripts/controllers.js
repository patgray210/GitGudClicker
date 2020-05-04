const getName = () => document.getElementById('player-name').value;

const getCallbacks = function(){
    const callbacks = {};
    callbacks['home-menu'] = gameMenu;
    callbacks['new-game'] = newGameScreen;
    callbacks['leaderboard-button'] = leaderboardScreen;
    return callbacks;
}

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for (let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id]);
    }
}