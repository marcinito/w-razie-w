import one from './images/woodenWall100.png'
import two from './images/woodenWall80.png'
import three from './images/woodenWall50.png'
import four from './images/woodenWall20.png'

let block1=new Image(100,100)
let block2=new Image(100,100)
let block3=new Image(100,100)
let block4=new Image(100,100)
block1.src=one
block2.src=two
block3.src=three
block4.src=four

export class woodenWall{
    constructor(posX,posY,size,color,direction){
        this.posX=posX 
        this.posY=posY
        this.size=size
        this.color=color
        this.isHit="null"
        this.name="woodenWall"
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