export class Glock{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=10
        this.color="black"
        this.id="weapon"
        this.strenghtAttack=9.7
        this.directionAttack=direction
    }
    draw(can){
    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    if(this.directionAttack==="left"){
        this.posX-=5
    }
    if(this.directionAttack==="right"){
        this.posX+=5
    }
    if(this.directionAttack==="up"){
        this.posY-=5
    }
    if(this.directionAttack==="down"){
        this.posY+=5
    }
    }

}