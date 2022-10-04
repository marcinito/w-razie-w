import soldierImg from './solideSprites.png'
import fireFromSoldierImg from './fireFromSoldierImg.png'
import { random } from '../../../Functions/shorthandFunction/random'
import { detectJump } from '../objects/detectJump'
import { detectJumpPosition } from '../FUNCTION/detectJumpPosition'
import { detectEdge } from '../objects/detectEdge'
import { checkIfMonsterCanGoFurther } from '../FUNCTION/detectVerge/checkIfCreatureCanGoFurther'
import { detectBlokJump } from '../objects/detectBlokJump'
import { menu } from '../../../main'


const fireFromSoldier=new Image(100,100)
fireFromSoldier.src=fireFromSoldierImg
const soldier=new Image(100,100)
soldier.src=soldierImg


let animation=0//Number which describes what part image display
let rangeAnimation=11//Number describes what number of parts is in image

setInterval(()=>{
   
    if(animation>rangeAnimation)animation=0
    animation++

},100)





export class Soldier{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=60
        this.sizeX=80
     
        this.name="soldier"
        this.color="orange"
        this.naturalSpeed=1.2+menu.level/3
        this.speed=0
        this.strenghtGravity=4
        this.strenghtAttack=0.3
        this.strenghtAttackFromGun=10

        //DIRECTION
        this.directionArr=["left","right"]
        this.directionMove=random(this.directionArr)
        this.isDuringAttackPlayer=false
        this.doFall=false//It serve to draw zombie when he is in air it shows that zombie "fall"
        this.image=soldier
        this.image2=fireFromSoldier
        this.heIsShooting=false
   
        //OUTFIT
   
        //hp
        this.hpTotal=900
        this.hp=this.hpTotal
        this.percentageHp=this.size
        this.ratePercentage=this.size
        //gun
        this.arrayWithBullet=[]
        //detect it is tile which check if monster can fall down , blok serve like break from invoke function
     
        this.detect=new detectEdge()
        this.blok=false
               //detec jump
       this.detectJump=new detectJump()
       this.touchWall=false
       this.jump=false
       this.stopJump=false
       this.waitForNextJump=false
       this.detectBlokJump=new detectBlokJump()

       this.hitInWallStrenght=3
       this.frequencyFireFromGun=Math.floor(Math.random()*400)
       this.frequencyNumber=random([400,450,350,370,380,390,420])

    }
    draw(can,changeImage){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY-10,this.percentageHp,7)
        can.ctx.lineWidth=1
        can.ctx.strokeStyle="black"
        can.ctx.strokeRect(this.posX,this.posY-10,this.size,7)
        // can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
      
        if(this.doFall===true&&this.directionMove==="left"){
            can.ctx.drawImage(soldier,566,663,85,108,this.posX,this.posY,this.size,this.size)
            return
         }
         if(this.doFall===true&&this.directionMove==="right"){
            can.ctx.drawImage(soldier,281,531,85,110,this.posX,this.posY,this.size,this.size)
            return
         }
        //walking Right
     if(this.directionMove==="right"&&this.isDuringAttackPlayer===false&&this.heIsShooting===false){
        rangeAnimation=11
        if(animation===1){
            can.ctx.drawImage(soldier,9,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===2){
            can.ctx.drawImage(soldier,140,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===3){
            can.ctx.drawImage(soldier,271,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===4){
            can.ctx.drawImage(soldier,407,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===5){
            can.ctx.drawImage(soldier,550,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===6){
            can.ctx.drawImage(soldier,692,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===7){
            can.ctx.drawImage(soldier,822,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===8){
            can.ctx.drawImage(soldier,945,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===9){
            can.ctx.drawImage(soldier,1087,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===10){
            can.ctx.drawImage(soldier,1213,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===11){
            can.ctx.drawImage(soldier,1352,19,85,100,this.posX,this.posY,this.size,this.size)
        }
        if(animation===12){
            can.ctx.drawImage(soldier,1494,19,85,100,this.posX,this.posY,this.size,this.size)
        }
       
     }
     //attack knife right
     if(this.directionMove==="right"&&this.isDuringAttackPlayer===true&&this.heIsShooting===false){
        rangeAnimation=6
        let startY=530
        let sizeY=110
        if(animation===1){
            can.ctx.drawImage(this.image,25,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===2){
            can.ctx.drawImage(this.image,158,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===3){
            can.ctx.drawImage(this.image,274,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===4){
            can.ctx.drawImage(this.image,440,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===5){
            can.ctx.drawImage(this.image,566,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===6){
            can.ctx.drawImage(this.image,693,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===7){
            can.ctx.drawImage(this.image,826,startY,95,sizeY,this.posX,this.posY,this.size,this.size)
        }
       
     }
     //walking left
    if(this.directionMove==="left"&&this.isDuringAttackPlayer===false&&this.heIsShooting===false){
        rangeAnimation=11
        let startY=150
        let sizeY=102
        if(animation===1){
            can.ctx.drawImage(this.image,9,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===2){
            can.ctx.drawImage(this.image,140,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===3){
            can.ctx.drawImage(this.image,271,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===4){
            can.ctx.drawImage(this.image,407,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===5){
            can.ctx.drawImage(this.image,550,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===6){
            can.ctx.drawImage(this.image,692,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===7){
            can.ctx.drawImage(this.image,822,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===8){
            can.ctx.drawImage(this.image,945,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===9){
            can.ctx.drawImage(this.image,1087,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===10){
            can.ctx.drawImage(this.image,1213,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===11){
            can.ctx.drawImage(this.image,1352,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===12){
            can.ctx.drawImage(this.image,1494,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
       
     }
     //Attack knife left
     if(this.directionMove==="left"&&this.isDuringAttackPlayer===true&&this.heIsShooting===false){
        rangeAnimation=6
        let startY=665
        let sizeY=103
        if(animation===1){
            can.ctx.drawImage(this.image,21,startY,73,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===2){
            can.ctx.drawImage(this.image,142,startY,92,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===3){
            can.ctx.drawImage(this.image,268,startY,90,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===4){
            can.ctx.drawImage(this.image,396,startY,91,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===5){
            can.ctx.drawImage(this.image,570,startY,77,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===6){
            can.ctx.drawImage(this.image,689,startY,71,sizeY,this.posX,this.posY,this.size,this.size)
        }
        if(animation===7){
            can.ctx.drawImage(this.image,818,startY,85,sizeY,this.posX,this.posY,this.size,this.size)
        }
        
     }
     //SHOT RIGHT
     if(this.directionMove==="right"&&this.isDuringAttackPlayer===false&&this.heIsShooting===true){
      
        rangeAnimation=5
        let startY=2
        let sizeY=105
        if(animation===1){
        
            can.ctx.drawImage(this.image2,21,2,128,108,this.posX,this.posY,this.sizeX,this.size)
        }
        if(animation===2){
         
            can.ctx.drawImage(this.image2,160,startY,132,sizeY,this.posX,this.posY,this.sizeX,this.size)
        }
        if(animation===3){
         
            can.ctx.drawImage(this.image2,330,startY,136,sizeY,this.posX,this.posY,this.sizeX,this.size)
            

        }
        if(animation===4){
        
            can.ctx.drawImage(this.image2,490,startY,122,sizeY,this.posX,this.posY,this.sizeX,this.size)
            
        }
        if(animation===5){

            can.ctx.drawImage(this.image2,645,startY,95,sizeY,this.posX,this.posY,this.sizeX,this.size)
          
        }
        if(animation===6){
            can.ctx.drawImage(this.image2,780,startY,99,sizeY,this.posX,this.posY,this.sizeX,this.size)
        }
    
     }
     //Shoot Left
   if(this.directionMove==="left"&&this.isDuringAttackPlayer===false&&this.heIsShooting===true){
  
        rangeAnimation=5
        let startY=132
        let sizeY=105
        console.log()
        if(animation===1){
            can.ctx.drawImage(this.image2,0,startY,98,107,this.posX,this.posY,this.sizeX,this.size)
        }
        if(animation===2){
            can.ctx.drawImage(this.image2,139,startY,97,sizeY,this.posX,this.posY,this.sizeX,this.size)
        }
        if(animation===3){
            can.ctx.drawImage(this.image2,251,startY,124,sizeY,this.posX,this.posY,this.sizeX,this.size)
           
        }
        if(animation===4){
            can.ctx.drawImage(this.image2,395,startY,136,sizeY,this.posX,this.posY,this.sizeX,this.size)
        }
        if(animation===5){
            can.ctx.drawImage(this.image2,550,startY,135,sizeY,this.posX,this.posY,this.sizeX,this.size)
        }
        if(animation===6){
            can.ctx.drawImage(this.image2,715,startY,130,sizeY,this.posX,this.posY,this.sizeX,this.size)
        }
      
     }

//detect verge
if(this.directionMove==="left"){
    this.detect.posX=this.posX-30     
  }
  if(this.directionMove==="right"){
    this.detect.posX=this.posX+this.size-this.detect.size+30     
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
        
            if(this.jump==true&&this.stopJump===false){
 
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

    
shootFromGun(can){

    if(this.arrayWithBullet.length>0){
        this.arrayWithBullet.forEach((el,i,arr)=>{
            el.draw(can)
        })
    }
}

}