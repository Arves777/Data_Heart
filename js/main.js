let game
window.onload = function() {
    const config  = {
        type: Phaser.Canvas, //Phaser.AUTO|| Phaser.WebGL
        width: 900,
        height: 600,
        scene: [Preload ,StartScene, Scene01],
        parent: "game-local", 
        physics: {
            
                default: "arcade",
                arcade:{
                    gravity:{y : 1000

                    }
                }
            
        },
        pixelArt: true
    }
    game = new Phaser.Game(config)
};