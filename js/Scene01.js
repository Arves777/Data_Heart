class Scene01 extends Phaser.Scene{
    constructor(){
        super("Scene01")
    }
    
    create(){
        this.sky = this.add.image(0,0,"sky").setOrigin(0,0)
        this.sky.displayWidth = 1400
        this.sky.displayHeight = 600
        //Personagem
        this.player = this.physics.add.sprite(50, 50, "player")
        .setCollideWorldBounds(true)
        .setScale(1.25)
        //Pulo
        this.player.canJump = true
        // Animação do Personagem
        
        //controles
        this.control = this.input.keyboard.createCursorKeys()
        //plataformas
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(0, 600, "platform")
        .setScale(5.5, 1)
        .setOrigin(0, 1)
        .refreshBody()
        this.platforms.create(200, 200, "platform")
        .setScale(1.5, 1)
        .refreshBody()
        this.platforms.create(650, 400, "platform")
        .setScale(1.5, 1)
        .refreshBody()
        this.platforms.create(1100, 200, "platform")
        this.platforms.create(1100, 475, "platform")

        this.mPlatforms = this.physics.add.group({
            allowGravity: false,
            immovable: true
        })

        let mPlatform = this.mPlatforms.create(650, 220, "mplatform").setScale(.80, .80)
        mPlatform.speed = 2
        mPlatform.minX = 550
        mPlatform.maxX = 850

        //Pulo na Plataforma
        this.physics.world.setBounds(0,0,1400,600)
        this.cameras.main.setBounds(0,0,1400,600).startFollow(this.player)

        
        



        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.mPlatforms, this.platformMovingThings)
        

    }
    movePlatform(p){
        if(p.x < p.minX || p.x > p.maxX){
            p.speed *= -1
        }
        p.x += p.speed
    }
    platformMovingThings(sprite, plat){
        sprite.x += plat.speed
    }
    update(){
        if(this.control.left.isDown){
            this.player.flipX = true
            this.player.anims.play("walk", true)
            this.player.setVelocityX(-175)
        }else
        if(this.control.right.isDown){
            this.player.flipX = false
            this.player.anims.play("walk", true)
            this.player.setVelocityX(+175)
        }else{
            this.player.setVelocityX(0)
            this.player.setFrame(0)
        }
        if (!this.player.body.touching.down){
            this.player.setFrame(
                this.player.body.velocity.y < 0 ? 5 : 7
            )
        }

        if (this.control.up.isDown && this.player.canJump && this.player.body.touching.down){
            this.player.setVelocityY(-600)
            this.player.canJump = false
        }
        if (!this.control.up.isDown && !this.player.canJump && this.player.body.touching.down){
            this.player.canJump = true
        }

        this.mPlatforms.children.iterate((plat) => {
            this.movePlatform(plat)
        })
        

        
        
    }
}
