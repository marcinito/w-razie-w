export class plainWall{
    constructor(posX,posY,size,color,direction){
        this.posX=posX 
        this.posY=posY
        this.size=size
        this.color=color
        this.type="static"
        this.direction=direction
        
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
        can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
         
    }
}