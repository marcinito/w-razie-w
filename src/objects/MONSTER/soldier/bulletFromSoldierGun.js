export class bulletFromSoldierGun{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=5
        this.color="black"
        this.direction=direction
        this.speed=2
        this.color="red"
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
        if(this.direction==="left"){
            this.posX-=this.speed
        }
        if(this.direction==="right"){
            this.posX+=this.speed
        }

    }

}