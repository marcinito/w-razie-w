import { player } from '../../../main'
import boxImg from './woodenBox.png'
const box=new Image(100,100)
box.src=boxImg

class detectTouch{
    constructor(posX,posY,size,id){
        this.posX=posX
        this.posY=posY
        this.size=size
        this.color="transparent"
        this.id=id
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    }
}


export class woodenBox{
    constructor(posX,posY,size,color,direction){
        this.posX=posX
        this.posY=posY
        this.size=65
        this.image=box
        this.id=Math.floor(Math.random()*343243)
        this.type="static"
        this.name="woodenBox"
        this.direction=direction
        this.hp=11
        this.isHitBy=undefined
    
        this.detectTouch=new detectTouch(this.posX,this.posY,this.size-5,this.id)


    }
    draw(can){
     
        if(this.counter<3){
            console.log(this.posY2)
            this.counter++
        }
        // can.ctx.strokeStyle="red"
        // can.ctx.lineWidth="2"
        // can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
        
        if(player.directionMove==="left"){
            this.detectTouch.posX=this.posX-5
        this.detectTouch.posY=this.posY+2.5
    }
        if(player.directionMove==='right'){

            this.detectTouch.posX=this.posX+this.size-this.detectTouch.size+5
            this.detectTouch.posY=this.posY+2.5

        }
        this.detectTouch.draw(can)
        

    }

}