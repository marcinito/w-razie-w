import Brick100Block from './images/brickWall100.png'
import Brick80Block from './images/brickWall80.png'
import Brick50Block from './images/brickWall50.png'
import Brick20Block from './images/brickWall20.png'
let block100=new Image(100,100)
let block80=new Image(100,100)
let block50=new Image(100,100)
let block20=new Image(100,100)

block100.src=Brick100Block
block80.src=Brick80Block
block50.src=Brick50Block
block20.src=Brick20Block

export class brickWall{
    constructor(posX,posY,size,color,direction){
        this.posX=posX 
        this.posY=posY
        this.size=size
        this.color=color
        this.type="static"
        this.name="brickWall"
        this.direction=direction
        this.image=[block100,block80,block50,block20]
        this.hp=16
        this.isHitBy="null"
        this.isVulnerable=[]
        
    }
    draw(can){
      let hpRate=this.hp-1
      if(hpRate>12){
        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>7){
        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)
      return
      }
      if(hpRate>4){
        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>0){
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