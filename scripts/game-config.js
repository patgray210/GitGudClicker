var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var info;
var timer;
var hit = 0;
var miss =0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('bg', 'assets/skies/sky4.png');
    this.load.image('crate', 'assets/sprites/red_ball.png');
}

function create (){
    
    this.add.image(400, 300, 'bg');
    var box = this.add.image(400, 400, 'crate');
    box.setInteractive();
    //makes boxes send a click event when clicked
    box.on('clicked', clickHandler, this);
    this.input.on('gameobjectup', function (pointer, gameObject){
        gameObject.emit('clicked', gameObject); 
    }, this);

    //  Display the game info
    info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' });
    
    timer = this.time.addEvent({ delay: 60000, callback: gameOver, callbackScope: this });
}
function createBox(){
        var x = Phaser.Math.Between(0, 800);
        var y = Phaser.Math.Between(0, 600);

        box = this.add.image(x, y, 'crate');

        //  Make them all input enabled
        box.setInteractive();

        //  The images will dispatch a 'clicked' event when they are clicked on
        box.on('clicked', clickHandler, this);
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
}

function update (){
    info.setText('Hit: ' + hit + '\nTime: ' + Math.floor(60000 - timer.getElapsed()));
    
}

function clickHandler (box){
    hit++;
    box.off('clicked', clickHandler);
    box.input.enabled = false;
    box.setVisible(false);
    x = Phaser.Math.Between(0, 800);
    y = Phaser.Math.Between(0, 600);
    box = this.add.image(x, y, 'crate');
    box.setInteractive();
    box.on('clicked', clickHandler, this);
    this.input.on('gameobjectup', function (pointer, gameObject){
        gameObject.emit('clicked', gameObject);
    }, this);
}

function gameOver (){
    this.input.off('gameobjectup');
}
