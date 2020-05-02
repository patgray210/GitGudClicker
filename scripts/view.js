const gameMenu = function(){
    const view = document.getElementById('view');
    const html =    `<section>
                        Challenger Name: <input id='player-name' type=text placeholder='Insert Name'>
                        <button type="button" class="btn btn-dark" id='new-game'> Start New Game</button>
                        <button type="button" class="btn btn-dark" id='leaderboard-button'> Leaderboard</button>
                    </section>`
    view.innerHTML = html;
    addController('new-game');
    addController('leaderboard-button');
}

const newGameScreen = function(){
    collectUserData();
    const view = document.getElementById('view');
    const html =    `<section>
                        <a class="btn btn-dark" id='start-game' href="game.html">Start the Challenge</a>
                        <button type="button" class="btn btn-dark" id='leaderboard-button'> Leaderboard</button>
                    </section>`
    view.innerHTML = html;
    addController('leaderboard-button')
}

const leaderboardScreen = function(){
    const view = document.getElementById('view');
    const html =    `<section>
                        <h1>  Leaderboard </h1>
                        
                        <button type="button" class="btn btn-dark" id='home-menu'> Main Menu </button>
                    </section>`
    view.innerHTML = html;
    addController('home-menu');
}


