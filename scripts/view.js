const gameMenu = function(){
    const view = document.getElementById('view');
<<<<<<< HEAD
    const html =    `<section class=''>
                        <h1 class='text-center'>GitGudClicker</h1>
                        <div class='text-center pt-5'>    
                            Challenger Name: <input id='player-name' type=text placeholder='Insert Name'>
                            <a class="btn btn-dark" id='start-game' href="game.html">Start the Challenge</a>
                        </div>
                    </section>`
    view.innerHTML = html;
    Controllers();
}

=======
    const html =    `<section>
                        Challenger Name: <input id='player-name' type=text placeholder='Insert Name'>
                        <button type="button" class="btn btn-dark" id='new-game'> Start New Game</button>
                    </section>`
    view.innerHTML = html;
    addController('new-game');
}

const newGameScreen = function(){
    playerName = document.getElementById('player-name').value;
    const view = document.getElementById('view');
    const html =    `<section>
                        <a class="btn btn-dark" id='start-game' href="game.html">Start the Challenge</a>
                    </section>`
    view.innerHTML = html;
}

>>>>>>> d14de12985fcf96f5330a05a219319b2a56f15d6


