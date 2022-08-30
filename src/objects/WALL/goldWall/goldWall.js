import Gold100Block from './images/100GoldBlock.png'
import Gold80Block from './images/80GoldBlock.png'
import Gold50Block from './images/50GoldBlock.png'
import Gold20Block from './images/20GoldBlock.png'
let block100=new Image(100,100)
let block80=new Image(100,100)
let block50=new Image(100,100)
let block20=new Image(100,100)

block100.src=Gold100Block
block80.src=Gold80Block
block50.src=Gold50Block
block20.src=Gold20Block

export class goldWall{
    constructor(posX,posY,size,color,direction){
        this.posX=posX 
        this.posY=posY
        this.size=size
        this.color=color
        this.type="static"
        this.name="goldWall"
        this.direction=direction
        this.image=[block100,block80,block50,block20]
        this.hp=10
        this.isHitBy="null"
        
        
    }
    draw(can){
      let hpRate=this.hp-1
      if(hpRate>80){
        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>60){
        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)
      return
      }
      if(hpRate>25){
        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>0||hpRate===0){
        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate<1){
        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)
      }
         
    }
    // draw(can){
      
    //   can.ctx.fillStyle=this.color
    //   can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    //   can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
    // }
}