import soldierBullet from './gunBullet.png'
const bullet=new Image(100.100)
bullet.src=soldierBullet
export class bulletFromSoldierGun{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=5
        this.color="black"
        this.direction=direction
        this.speed=7
        this.color="red"
        this.image=bullet
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
        if(this.direction==="left"){
            this.posX-=this.speed
        }
        if(this.direction==="right"){
            this.posX+=this.speed
        }

    }

}