import axeImgLeft from './attackAxe.png'
import axeImgRight from './attackAxe-right.png'

const axeLeft=new Image(100,100)
const axeRight=new Image(100,100)
axeRight.src=axeImgRight
axeLeft.src=axeImgLeft
export class Axe{
    constructor(posX,posY,direction,sizePlayer){
        this.size=30
        this.name="axe"
      if(direction==="left"){
        this.posX=posX-35
        this.posY=posY
      }
      if(direction==="right"){
        this.posX=posX+sizePlayer+5
        this.posY=posY
      }
      if(direction==="down"){
        this.posX=posX+5
        this.posY=posY+sizePlayer+5
      }
      if(direction==="up"){
        this.posX=posX+5
        this.posY=posY-sizePlayer+5
      }
       
        this.image=axeLeft
        this.strenghtAttack={wall:0.05,monster:0.5}
        this.direction=direction
        
    
     
   //lifeCycle serve as time to expire attack from axe
   this.lifeCycleAttack=0
    }
    draw(can,axeCounter){
        this.lifeCycleAttack+=1
   
        if(this.direction==="left"){
            console.log("left")
            
            can.ctx.drawImage(axeLeft,axeCounter*534,0,534,497,this.posX,this.posY,this.size,this.size)
        }
        if(this.direction==="right"){
            console.log("right")
            can.ctx.drawImage(axeRight,axeCounter*534,0,534,497,this.posX,this.posY,this.size,this.size)
        }
        if(this.direction==="down"){
            console.log("down")
            can.ctx.drawImage(axeLeft,axeCounter*534,0,534,497,this.posX,this.posY,this.size,this.size)
        }
        if(this.direction==="up"){
            console.log("down")
            can.ctx.drawImage(axeLeft,axeCounter*534,0,534,497,this.posX,this.posY,this.size,this.size)
        }
    }
    
}