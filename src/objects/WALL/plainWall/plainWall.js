import Grass100Block from './images/100GrassBlock.png'
import Grass80Block from './images/80GrassBlock.png'
import Grass50Block from './images/50GrassBlock.png'
import Grass20Block from './images/20GrassBlock.png'
let block100=new Image(100,100)
let block80=new Image(100,100)
let block50=new Image(100,100)
let block20=new Image(100,100)

block100.src=Grass100Block
block80.src=Grass80Block
block50.src=Grass50Block
block20.src=Grass20Block

export class plainWall{
    constructor(posX,posY,size,color,direction){
        this.posX=posX 
        this.posY=posY
        this.size=size
        this.color=color
        this.type="static"
        this.name="plainWall"
        this.direction=direction
        this.image=[block100,block80,block50,block20]
        this.hp=11
        
    }
    draw(can){
      let hpRate=this.hp-1
      if(hpRate>7){
        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>4){
        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>2){
        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>0||hpRate===0){
        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)
        return
      }
         
    }
    // draw(can){
      
    //   can.ctx.fillStyle=this.color
    //   can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    //   can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
    // }
}