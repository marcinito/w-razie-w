

import { random } from '../../../Functions/shorthandFunction/random'
import dragonImg from '../dragon/dragon.png'
import {FireBallAttackFromMonster} from '../dragon/fireBallAttackFromMonster'

let dragon=new Image(100,100)
dragon.src=dragonImg 

let changeImage=0
setInterval(()=>{
changeImage++
if(changeImage>=3){
    changeImage=0
    
}
},150)



export class Dragon{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=130
        this.type="dynamic"
        this.id="monsterFly"
        this.name="dragon"
        this.attack={wall:4,player:30,whenTouchPlayer:60}
      
        
        this.image=dragon

        this.directionArr=["up","left","right","down"]
        this.directionCrossArr=["negative","positive","null"]
        this.directionCross=random(this.directionCrossArr)
        this.directionMove=random(this.directionArr)
        this.speed=1
         //direct
         this.left=true
         this.right=true
         this.down=true
         this.up=true
         this.animationEffect=0
        //atack
        this.fireBall=[]
        this.timerToAttack=0
        this.frequencyAttack=random([200,100,300,350,240,230,310,320])
        //HP
        this.hpTotal=2500
        this.hp=this.hpTotal
        this.percentageHp=this.size
        this.ratePercentage=this.size
        this._ID=Math.floor(Math.random()*324234)



    }
    draw(can){
   
if(changeImage===1){
this.animationEffect=0

}
if(changeImage===2){
    this.animationEffect=191
}
if(changeImage===3){
    this.animationEffect=191*2
}
can.ctx.fillStyle="yellow"
can.ctx.fillRect(this.posX,this.posY-5,this.percentageHp,5)
can.ctx.lineWidth=1
can.ctx.strokeStyle="black"
can.ctx.strokeRect(this.posX,this.posY-5,this.size,5)
if(this.directionMove==="left"){
    can.ctx.drawImage(this.image,this.animationEffect,483,191,161,this.posX,this.posY,130,this.size)

}
if(this.directionMove==="right"){
    can.ctx.drawImage(this.image,this.animationEffect,161,191,161,this.posX,this.posY,130,this.size)
}
if(this.directionMove==="up"){
    can.ctx.drawImage(this.image,this.animationEffect,0,191,161,this.posX,this.posY,130,this.size)
}
if(this.directionMove==="down"){
    can.ctx.drawImage(this.image,this.animationEffect,322,191,161,this.posX,this.posY,130,this.size)
}
    }
    
        movement(can){
 
//ATTACK HANDLE
this.timerToAttack++

            if(this.left===true){
                if(this.directionMove==="left"){
                    this.posX-=this.speed
                    if(this.directionCross==="negative"){
                        this.posY-=this.speed/2
                    }
                    if(this.directionCross==="positive"){
                        this.posY+=this.speed/2
                    }
                    if(this.directionCross==="null"){
                       
                    }
                  }
            }
          if(this.right===true){
            if(this.directionMove==="right"){
                this.posX+=this.speed
                if(this.directionCross==="negative"){
                    this.posY-=this.speed/2
                }
                if(this.directionCross==="positive"){
                    this.posY+=this.speed/2
                }
                if(this.directionCross==="null"){
                    
                }
                
              }
          }
           
        if(this.up===true){
            if(this.directionMove==="up"){
                this.posY-=this.speed
                if(this.directionCross==="negative"){
                    this.posX-=this.speed/2
                }
                if(this.directionCross==="positive"){
                    this.posX+=this.speed/2
                }
                if(this.directionCross==="null"){
                    
                }
              }
        }
        
            if(this.down===true){
                if(this.directionMove==="down"){
                    this.posY+=this.speed
                    if(this.directionCross==="negative"){
                        this.posX-=this.speed/2
                    }
                    if(this.directionCross==="positive"){
                        this.posX+=this.speed/2
                    }
                    if(this.directionCross==="null"){
                       
                    }
                    
            
                  }
               
                 
            }
              
            }

      
    
}