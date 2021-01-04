import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    preload() {

    }

    create() {
        const ball = this.add.circle(400, 250, 10, 0xffffff, 1)
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)
        ball.body.setCollideWorldBounds(true, 1, 1)
        ball.body. setVelocity(-200, 0)

        this.paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff)
        this.physics.add.existing(this.paddleLeft, true)
        
        const body = this.paddleLeft.body

        body.setMass(100)

        this.physics.add.collider(this.paddleLeft, ball)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        /** @type {Phaser.Physics.Arcade.StaticBody} */
        this.body = this.paddleLeft.body

        if(this.cursors.up.isDown){
            //console.dir(body) 
            this.paddleLeft.y -= 10
            this.body.updateFromGameObject() // To move the physics bounce along 
        } else if (this.cursors.down.isDown) {
            this.paddleLeft.y += 10
            body.updateFromGameObject()
        }
    }
}
