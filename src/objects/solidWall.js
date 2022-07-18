import one from '../images/solidWall/100SolidBlock.png'
import two from '../images/solidWall/80SolidBlock.png'
import three from '../images/solidWall/50SolidBlock.png'
import four from '../images/solidWall/20SolidBlock.png'

let block1=new Image(100,100)
let block2=new Image(100,100)
let block3=new Image(100,100)
let block4=new Image(100,100)
block1.src=one
block2.src=two
block3.src=three
block4.src=four

export class solidWall{
    constructor(posX,posY,size,color,direction){
        this.posX=posX 
        this.posY=posY
        this.size=size
        this.color=color
        this.type="static"
        this.id="solidWall"
        this.direction=direction
        this.image=[block1,block2,block3,block4]
        this.hp=25
        
    }
    draw(can){
      if(this.hp===25 || this.hp<25 || this.hp===20){
        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)
      }
      if(this.hp===19||this.hp<19||this.hp==12){
        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)
      }
      if(this.hp===11 || this.hp<11 ){
        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)
      }
      if(this.hp===5 || this.hp<5 ){
        can.ctx.drawImage(this.image[3],this.posX,this.posY,this.size,this.size)
      }
         
    }
}