import one from './images/100SolidBlock.png'
import two from './images/80SolidBlock.png'
import three from './images/50SolidBlock.png'
import four from './images/20SolidBlock.png'

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
        this.isHit="null"
        this.name="solidWall"
        this.direction=direction
        this.image=[block1,block2,block3,block4]
        this.hp=26
        this.isHitBy="null"
        
    }
    draw(can){
      let hpRate=this.hp-1
      if(hpRate>19){
        can.ctx.drawImage(this.image[0],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>11){
        can.ctx.drawImage(this.image[1],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>5){
        can.ctx.drawImage(this.image[2],this.posX,this.posY,this.size,this.size)
        return
      }
      if(hpRate>0||hpRate===0 ){
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