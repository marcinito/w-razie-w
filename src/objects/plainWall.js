import Grass100Block from '../images/plainWall/100GrassBlock.png'
import Grass80Block from '../images/plainWall/80GrassBlock.png'
import Grass50Block from '../images/plainWall/50GrassBlock.png'
import Grass20Block from '../images/plainWall/20GrassBlock.png'
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
        this.id="wall"
        this.direction=direction
        this.image=[block100,block80,block50,block20]
        this.hp=10
        
    }
    draw(can){
      if(this.hp===10 || this.hp<10 || this.hp===8){
        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)
      }
      if(this.hp===7||this.hp<7||this.hp==5){
        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)
      }
      if(this.hp===4 || this.hp===3 ){
        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)
      }
      if(this.hp===2 || this.hp===1 ){
        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)
      }
         
    }
}