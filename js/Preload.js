class Preload extends Phaser.Scene{
    constructor(){
        super("Preload")
    }

    preload(){
        this.load.audio("ThemeMusic", [ "snd/musictheme.mp3"])
        this.load.audio("StartTheme", ["snd/starttheme.mp3"])
        this.load.audio("ConfirmSound", ["snd/confirmsound.mp3"])
        this.load.image("start", "img/Start.jpg")
        this.load.image("sky", "img/fundo1.png")
        this.load.image("platform", "img/platform.png")
        this.load.image("mplatform", "img/mplatform.png")
        this.load.spritesheet("player", "img/player.png", {frameWidth: 96, frameHeight: 80})
    }
    create(){

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("player",{
                start: 0,
                end: 9
            }),
            frameRate: 5,
            repeat: -1
        })

        this.scene.start("StartScene")
    }
}