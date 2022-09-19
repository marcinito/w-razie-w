export class detectEdge{
    constructor(){
      this.posX=0
      this.posY=0
      this.size=20
     
      this.speed=10
      this.color="green"
      this.trigger=true
      this.avoidFallInChasm=false
  
      
  
    }
    draw(can){
      can.ctx.fillStyle=this.color
      can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
  
    }
  }