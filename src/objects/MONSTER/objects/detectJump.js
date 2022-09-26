import { random } from "../../../Functions/shorthandFunction/random"
import { WALL } from "../../../main"

export class detectJump{
    constructor(){
        this.posX=1
        this.posY=1
        this.size=20
        this.width=
        this.touchWall=false
        this.color="gray"
       
    }
    draw(can){
    
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
        this.touchWall=false
        this.color="red"
        WALL.forEach((particular)=>{
            particular.forEach((title,index,arr)=>{

                if(this.posX+this.size<title.posX || this.posX>title.posX+title.size ||
                    this.posY+this.size<title.posY || this.posY>title.posY+title.size){
          
                    }else{
                        this.color="yellow"
                        this.touchWall=true
                     
                       
                    }
                 
            })

        })

    }


}
