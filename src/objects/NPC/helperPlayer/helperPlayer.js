
import helperImg from './monk.png'

import { helperMagiAttack } from "./helperPlayerAttack"
import { random } from '../../../Functions/shorthandFunction/random'
import { detectJump } from '../../MONSTER/objects/detectJump'
import { player } from '../../../main'
import { helperTreatPlayer } from './helperTreatmentPlayer'
let animationChange=0
setInterval(()=>{
animationChange++
if(animationChange>3){
    animationChange=0
}
},200)

const helper=new Image(100,100)
helper.src=helperImg


export class helperPlayer{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=60
        this.color="black"
        this.directionArr=["left","right"]
        this.directionMove=random(this.directionArr)
        this.directionMemory=this.directionMove
        this.speed=3
        this.strenghtGravity=0.1
        this.skyAttack=false//when fly monster are on map helper will attack up direction
        this.stop=false
        this.detectJump=new detectJump()
        this.touchWall=false
        this.jump=false
        this.image=helper
        this.attack=false
        this.arrayWithMagic=[]
        this.name="helperPlayer"
        //hp
        this.hpTotal=100
        this.hp=this.hpTotal
        this.percentageHp=50
        this.ratePercentage=50

        this.counter=0
    }
    draw(can){
        this.counter++
        can.ctx.fillStyle="green"
        can.ctx.fillRect(this.posX,this.posY-25,this.percentageHp,10)
        can.ctx.lineWidth=1
        can.ctx.strokeStyle="black"
        can.ctx.strokeRect(this.posX,this.posY-25,50,10)
        can.ctx.fillStyle=this.color
       
        if(this.jump==true&&this.stop===false){
            this.posY-=50
            this.jump=false
            
          
        }
        if(this.directionMove==="left"){
            if(this.attack===false){
             let height=234
                if(animationChange===0){
                    can.ctx.drawImage(this.image,0,234,145,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===1){
                    can.ctx.drawImage(this.image,151,234,154,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===2){
                    can.ctx.drawImage(this.image,320,234,135,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===3){
                    can.ctx.drawImage(this.image,500,234,146,height,this.posX,this.posY,this.size,this.size)
                }
            }
            if(this.attack===true){
                let height=222
                let startY=709
                this.speed=0
                if(animationChange===0){
                    can.ctx.drawImage(this.image,0,startY,121,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===1){
                    can.ctx.drawImage(this.image,149,startY,129,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===2){
                    can.ctx.drawImage(this.image,328,startY,124,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===3){
                    can.ctx.drawImage(this.image,497,startY,127,height,this.posX,this.posY,this.size,this.size)
                }
               setTimeout(()=>{
                this.speed=1
                this.attack=false
               },1000)
            }
           
        }
        if(this.directionMove==="right"){
          
            if(this.attack===false){
                let height=224
                let startY=0
                if(animationChange===0){
                    can.ctx.drawImage(this.image,0,startY,146,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===1){
                    can.ctx.drawImage(this.image,165,startY,146,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===2){
                    can.ctx.drawImage(this.image,329,startY,148,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===3){
                    can.ctx.drawImage(this.image,500,startY,148,height,this.posX,this.posY,this.size,this.size)
                }
            }
            if(this.attack===true){
                let height=222
                let startY=470
                this.speed=0
                if(animationChange===0){
                    can.ctx.drawImage(this.image,0,startY,121,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===1){
                    can.ctx.drawImage(this.image,149,startY,129,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===2){
                    can.ctx.drawImage(this.image,328,startY,124,height,this.posX,this.posY,this.size,this.size)
                }
                if(animationChange===3){
                    can.ctx.drawImage(this.image,497,startY,127,height,this.posX,this.posY,this.size,this.size)
                }
               setTimeout(()=>{
                this.speed=3
                this.attack=false
               },1000)
            
            }
        }
   //detect jump
       if(this.directionMove==="left"){
        this.detectJump.posX=this.posX-this.detectJump.size
        this.detectJump.posY=this.posY-100
       }
       if(this.directionMove==="right"){
        this.detectJump.posX=this.posX+this.size
        this.detectJump.posY=this.posY-100
       }
        this.detectJump.draw(can)

        //draw magic attack
        if(this.arrayWithMagic.length>0){
            this.arrayWithMagic.forEach((el)=>{
                el.draw(can)
            })
        }

    }
    movement(){
        let distanceFromPlayer=this.posX-player.posX
      
      if(distanceFromPlayer>300){
        this.directionMove="left"
      }
      if(distanceFromPlayer<-300){
        this.directionMove="right"
      }
   

        
    if(this.directionMove==="right"){
        this.posX+=this.speed
    }
    if(this.directionMove==="left"){
        this.posX-=this.speed
    }
  
    }
    magicUse(){
if(Math.floor(Math.random()*50)===19&&this.attack===false){
    this.attack=true
    this.arrayWithMagic.push(new helperMagiAttack(this.posX,this.posY,this.directionMove))
   
    return
}
if(Math.floor(Math.random()*50)===1&&this.attack===false){
    this.attack=true
    this.arrayWithMagic.push(new helperTreatPlayer(this.posX,this.posY,this.directionMove))
   
    return
}
if(Math.floor(Math.random()*50)===2&&this.attack===false&&this.skyAttack===true){
    this.attack=true
    this.arrayWithMagic.push(new helperMagiAttack(this.posX,this.posY,"up"))
   
    return
}
    }
}