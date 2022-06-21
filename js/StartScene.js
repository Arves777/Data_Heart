
class StartScene extends Phaser.Scene{
    constructor(){
        super("StartScene")
        
    } 
    create(){
        this.ST = this.sound.add("StartTheme")
        this.ST.play({
            volume: 0.4,
            loop: true
        })
        this.CS = this.sound.add("ConfirmSound")
        this.add.image(0, 0, "start").setOrigin(0).setScale(0.56)

        setTimeout(() => {
            this.add.text(game.config.width/2, game.config.height/2 + 70, "Press Enter to Continue...", {fontSize: "32px"} )
            .setOrigin(.4)
        
        
            this.input.keyboard.addKey("enter")
            .on("down", () => {
                this.ST.stop()
                this.CS.play({
                    loop: false
                })
                setTimeout(() => {
                this.scene.start("Scene01")
                }, 700)
            
            }, 1000)
        })
    }
};
