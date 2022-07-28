export class Glock{
    constructor(posX,posY,xDirection,yDirection){
        this.posX=posX
        this.posY=posY
        this.size=10
        this.color="black"
        this.id="weapon"
        this.strenghtAttack=9.7
        this.dAttackX=xDirection
        this.dAttackY=yDirection
    }
    draw(can){
    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
       
            this.posX+=1
            this.posY-=1
            
        

    }

}