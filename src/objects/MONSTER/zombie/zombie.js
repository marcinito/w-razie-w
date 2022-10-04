
import zombieSprite from './zombie.png'
import zombieSprite2 from './zombieSprites.png'


import { random } from '../../../Functions/shorthandFunction/random'

import { detectJumpPosition } from '../FUNCTION/detectJumpPosition'
import { checkIfMonsterCanGoFurther } from '../FUNCTION/detectVerge/checkIfCreatureCanGoFurther'
import { detectEdge } from '../objects/detectEdge'

import { detecJumpCreature } from '../FUNCTION/detectJumpCreature'
import { detectJump } from '../objects/detectJump'
import { detectBlokJump } from '../objects/detectBlokJump'
import { menu } from '../../../main'





let zombieImg=new Image(100,100)
zombieImg.src=zombieSprite
let zombieImg2=new Image(100,100)
zombieImg2.src=zombieSprite2
let zombieMove=0
setInterval(()=>{
zombieMove++

if(zombieMove>7)
{
    zombieMove=0
}
},100)





export class Zombie{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.naturalSize=80
        this.size=this.naturalSize
        this.color="darkgreen"
        this.name="zombie"
        this.naturalSpeed=1+menu.level/2
        this.speed=1
        //detectJump
        this.dposX=this.posX
        this.dposY=this.posY
       
        this.strenghtGravity=5
        this.strenghtAttack=0.3
    
        //DIRECTION
        this.directionArr=["left","right"]
        this.directionMove=random(this.directionArr)
        this.isDuringAttackPlayer=false

        
        this.doFall=false//It serve to draw zombie when he is in air it shows that zombie "fall"
        //OUTFIT
        this.image=zombieImg2
        //hp
        this.hpTotal=1050
        this.hp=this.hpTotal
        this.percentageHp=this.size
        this.ratePercentage=this.size
//detect it is tile which check if monster can fall down , blok serve like break from invoke function
        
       this.detect=new detectEdge()
       this.blok=false
       //detec jump
       this.detectJump=new detectJump()
       this.detectBlokJump=new detectBlokJump()

       this.jump=false
       this.stopJump=false
      this.touchWall=false
      //zombie touch other zombie
      this.touchOtherZombie=false

   
      this.hitInWallStrenght=5
      this._ID=Math.floor(Math.random()*213123)
      //change way in random manner
      this.counterToChangeWay=0
            
    }
draw(can){

        



    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY-10,this.percentageHp,7)
    can.ctx.lineWidth=1
    can.ctx.strokeStyle="black"
    can.ctx.strokeRect(this.posX,this.posY-10,this.size,7)
    // can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
if(this.directionMove==="right"){
if(this.isDuringAttackPlayer==false&&this.doFall===false){
    if(zombieMove===0){
        can.ctx.drawImage(this.image,0,0,100,152,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===1){
        can.ctx.drawImage(this.image,172,0,100,152,this.posX,this.posY,this.size,this.size)
      }
   
      if(zombieMove===2){
        can.ctx.drawImage(this.image,334,0,104,152,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===3){
        can.ctx.drawImage(this.image,493,0,113,152,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===4){
        can.ctx.drawImage(this.image,665,0,100,152,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===5){
        can.ctx.drawImage(this.image,821,0,101,152,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===6){
        can.ctx.drawImage(this.image,969,0,103,152,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===7){
        can.ctx.drawImage(this.image,1156,0,100,152,this.posX,this.posY,this.size,this.size)
      }
}
}
if(this.directionMove==="left"){
   if(this.isDuringAttackPlayer==false&&this.doFall===false){
    if(zombieMove===0){
        can.ctx.drawImage(this.image,0,158,100,148,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===1){
        can.ctx.drawImage(this.image,172,158,100,148,this.posX,this.posY,this.size,this.size)
      }
   
      if(zombieMove===2){
        can.ctx.drawImage(this.image,334,158,104,148,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===3){
        can.ctx.drawImage(this.image,493,158,113,148,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===4){
        can.ctx.drawImage(this.image,665,158,100,148,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===5){
        can.ctx.drawImage(this.image,821,158,101,148,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===6){
        can.ctx.drawImage(this.image,969,158,103,148,this.posX,this.posY,this.size,this.size)
      }
      if(zombieMove===7){
        can.ctx.drawImage(this.image,1156,158,100,148,this.posX,this.posY,this.size,this.size)
      }
   }
}
if(this.directionMove==="right"){
    if(this.isDuringAttackPlayer===true&&this.doFall===false){
        if(zombieMove===0){
            can.ctx.drawImage(this.image,15,320,115,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===1){
            can.ctx.drawImage(this.image,183,320,98,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===2){
            can.ctx.drawImage(this.image,350,320,100,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===3){
            can.ctx.drawImage(this.image,530,320,105,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===4){
            can.ctx.drawImage(this.image,680,320,115,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===5){
            can.ctx.drawImage(this.image,830,320,130,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===6){
            can.ctx.drawImage(this.image,985,320,145,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===7){
            can.ctx.drawImage(this.image,1166,320,98,145,this.posX,this.posY,this.size,this.size)
          }




    }
}
if(this.directionMove==="left"){
    if(this.isDuringAttackPlayer===true&&this.doFall===false){
        if(zombieMove===0){
            can.ctx.drawImage(this.image,10,500,113,155,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===1){
            can.ctx.drawImage(this.image,162,500,131,155,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===2){
            can.ctx.drawImage(this.image,328,500,117,155,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===3){
            can.ctx.drawImage(this.image,490,500,116,155,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===4){
            can.ctx.drawImage(this.image,650,500,106,155,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===5){
            can.ctx.drawImage(this.image,833,500,101,155,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===6){
            can.ctx.drawImage(this.image,1005,500,97,145,this.posX,this.posY,this.size,this.size)
          }
          if(zombieMove===7){
            can.ctx.drawImage(this.image,1157,500,94,145,this.posX,this.posY,this.size,this.size)
          }




    }
}
if(this.directionMove==="right"){

    if(this.doFall===true){
        can.ctx.drawImage(this.image,340,325,100,155,this.posX,this.posY,this.size,this.size)
    }
}
if(this.directionMove==="left"){
    if(this.doFall===true){
        can.ctx.drawImage(this.image,840,502,100,155,this.posX,this.posY,this.size,this.size)
    }
}
  //detect verge position//////////////////////////////////////////
  if(this.directionMove==="left"){
    this.detect.posX=this.posX-50     
  }
  if(this.directionMove==="right"){
    this.detect.posX=this.posX+this.size-this.detect.size+50
  }
  checkIfMonsterCanGoFurther(this.detect,this.posY,this.size)
    this.detect.draw(can)
//show if monster can do jump
  detectJumpPosition(this.directionMove,this.detectJump,this.posX,this.posY,this.size,can,10,110)
    //detect blok jump
    this.detectBlokJump.posX=this.posX+10
    this.detectBlokJump.posY=this.posY-10
    this.detectBlokJump.size=this.size-20

        this.detectBlokJump.draw(can)
}
jumpAction(){
  //jump

  let jumpHeight=3
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
  
 
    
        if(this.directionMove==="left"){
            this.posX-=this.speed
            if(this.detect.trigger===true&&this.blok===false&&this.detect.avoidFallInChasm===true){
        

              this.directionMove="right"
               
              setTimeout(()=>{
                this.detect.avoidFallInChasm=false
              },1000)
                
              this.blok=true
        
              setTimeout(()=>{
              
                this.blok=false
              },1000)
            }
        }
     
     
        if(this.directionMove==="right"){
         
            this.posX+=this.speed
            if(this.detect.trigger===true&&this.blok===false&&this.detect.avoidFallInChasm===true){
            
              setTimeout(()=>{
                this.detect.avoidFallInChasm=false
              },1000)
             
              this.directionMove="left"
             
              
              this.blok=true;
         
            setTimeout(()=>{
             
              this.blok=false
            },1000)
          }
        }
        

    }

}
