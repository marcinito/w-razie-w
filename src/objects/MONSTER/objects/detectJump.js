import { random } from "../../../Functions/shorthandFunction/random"

export class detectJump{
    constructor(){
        this.posX=1
        this.posY=1
        this.size=20
   
        this.color="transparent"
       
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)

    }


}