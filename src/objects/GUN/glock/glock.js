export class Glock{
    constructor(posX,posY,directionAttack){
        this.posX=posX
        this.posY=posY
        this.size=10
        this.color="black"
        this.name="glock"
        this.strenghtAttack=9.7
        this.directionAttack=directionAttack
    }
    draw(can){
       
    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
      if(this.directionAttack==="left"){
        this.posX-=2
      }
      if(this.directionAttack==="right"){
        this.posX+=2
      }
      if(this.directionAttack==="up"){
        this.posY-=2
      }
      if(this.directionAttack==="down"){
        this.posY+=3
      }
          
            
        

    }

}