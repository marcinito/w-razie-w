export class Glock{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=10
        this.color="black"
        this.id="weapon"
        this.direction=direction
    }
    draw(can){
    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    if(this.direction==="left"){
        this.posX-=5
    }
    if(this.direction==="right"){
        this.posX+=5
    }
    if(this.direction==="up"){
        this.posY-=5
    }
    if(this.direction==="down"){
        this.posY+=5
    }
    }

}