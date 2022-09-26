
import { random } from "../../../Functions/shorthandFunction/random"
import { detectJumpPosition } from "../FUNCTION/detectJumpPosition"
import { checkIfMonsterCanGoFurther } from "../FUNCTION/detectVerge/checkIfCreatureCanGoFurther"
import { detectBlokJump } from "../objects/detectBlokJump"
import { detectEdge } from "../objects/detectEdge"
import { detectJump } from "../objects/detectJump"



import sheepImg from './sheepSprites.png'
const sheep=new Image(100,100)
sheep.src=sheepImg
let animation=0
setInterval(()=>{
  
animation+=1
if(animation>5)animation=0
},100)

export class Sheep{
constructor(posX,posY){
    this.posX=posX
    this.posY=posY
    this.size=60
    this.attack=0
    this.color="aquamarine"
    
    this.name="sheep"
    this.naturalSpeed=2
    this.speed=this.naturalSpeed
  
    this.strenghtGravity=1
    this.doFall=true
    this.image=sheep
    this.isAlive=true


    //direction
    this.directionArr=["left","right"]
    this.directionMove=random(this.directionArr)

       //hp
       this.hpTotal=80
       this.hp=this.hpTotal
       this.percentageHp=this.size
       this.ratePercentage=this.size
       //detect it is tile which check if monster can fall down , blok serve like break from invoke function

       this.detect=new detectEdge()
       
       this.blok=false
       this.liczba=0
       ///
       //when sheep should jump in order to clamber to one more level higher title
       this.detectJump=new detectJump()
       this.touchWall=false
       this.jump=false
       this.stopJump=false
       this.detectBlokJump=new detectBlokJump()
       
}
draw(can){

    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY-10,this.percentageHp,5)
    can.ctx.strokeRect(this.posX,this.posY-10,this.size,5)
    can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
    if(this.directionMove==="right"){
        can.ctx.drawImage(this.image,animation*100,8,95,80,this.posX,this.posY,this.size,this.size)
    }
    if(this.directionMove==="left"){
        can.ctx.drawImage(this.image,animation*100,109,95,80,this.posX,this.posY,this.size,this.size)
    }
      //detect verge
  if(this.directionMove==="left"){
    this.detect.posX=this.posX-40
  }
  if(this.directionMove==="right"){
    this.detect.posX=this.posX+this.size-this.detect.size+40     
  }
 checkIfMonsterCanGoFurther(this.detect,this.posY,this.size)
    
    this.detect.draw(can)
    //detect jump
detectJumpPosition(this.directionMove,this.detectJump,this.posX,this.posY,this.size,can,20,90)
    //detect blok jump
    this.detectBlokJump.posX=this.posX+10
    this.detectBlokJump.posY=this.posY
    this.detectBlokJump.size=this.size-20

        this.detectBlokJump.draw(can)
}
jumpAction(){
  //jump

  let jumpHeight=2
  if(this.stopJump===false){
    this.posY-=jumpHeight
    setTimeout(()=>{
      if(this.stopJump===false){
        this.posY-=jumpHeight
        setTimeout(()=>{
          if(this.stopJump===false){
            this.posY-=jumpHeight
          }
        },20)
        setTimeout(()=>{
          if(this.stopJump===false){
            this.posY-=jumpHeight
          }
        },20)
        setTimeout(()=>{
          if(this.stopJump===false){
            this.posY-=jumpHeight
          }
        },20)
        setTimeout(()=>{
          if(this.stopJump===false){
            this.posY-=jumpHeight
          }
        },20)
      }
      
    },20)

    this.jump=false
    
  }

}
movement(){
        //JUMP
     
    //jump
   
    if(this.jump===true&&this.stopJump===false){
      this.speed=0
      this.posY-=50
      
      this.jump=false
    }
    if(this.directionMove==="left"){
        this.posX-=this.speed
        if(this.detect.trigger===true&&this.blok===false&&this.detect.avoidFallInChasm===true){
          this.directionMove="right"
          this.blok=true
          
          setTimeout(()=>{
            this.detect.avoidFallInChasm=false
          },1000)
          setTimeout(()=>{
            this.blok=false
          },1000)
        }
    }
 
 
    if(this.directionMove==="right"){
        this.posX+=this.speed
        if(this.detect.trigger===true&&this.blok===false&&this.detect.avoidFallInChasm===true){
          this.directionMove="left";this.blok=true;
          setTimeout(()=>{
            this.detect.avoidFallInChasm=false
          },1000)
        setTimeout(()=>{
          this.blok=false
        },1000)
      }
    }
}

}