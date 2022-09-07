import { random } from "../../Functions/helpFunction/random"
import { can } from "../../main"

export class detectJump{
    constructor(){
        this.posX=1
        this.posY=1
        this.size=20
        this.color="red"
       
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)

    }


}

export class helperPlayer{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=60
        this.color="black"
        this.directionArr=["left","right"]
        this.directionMove=random(this.directionArr)
        this.directionMemory=this.directionMove
        this.speed=2
        this.strenghtGravity=0.1
        this.stop=false
        this.detectJump=new detectJump()
        this.touchWall=false
        this.jump=false
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
        if(this.jump==true&&this.stop===false){
            this.posY-=50
            this.jump=false
            
          
        }
        if(this.directionMove==="left"){
            this.posX-=this.speed
        }
        if(this.directionMove==="right"){
            this.posX+=this.speed
        }
   
       if(this.directionMove==="left"){
        this.detectJump.posX=this.posX-this.detectJump.size
        this.detectJump.posY=this.posY-30
       }
       if(this.directionMove==="right"){
        this.detectJump.posX=this.posX+this.size
        this.detectJump.posY=this.posY-30
       }
        this.detectJump.draw(can)

    }
}