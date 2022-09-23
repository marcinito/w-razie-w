

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

//COUNTER is equivalent how often dragon attack from fire ball
let counter=0
setInterval(()=>{
counter++
if(counter>=3){
    counter=0
}
},1000)


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
        this.direction=random(this.directionArr)
        this.speed=1
         //direct
         this.left=true
         this.right=true
         this.down=true
         this.up=true
         this.animationEffect=0
        //atack
        this.fireBall=[]
        //HP
        this.hpTotal=800
        this.hp=this.hpTotal
        this.percentageHp=this.size
        this.ratePercentage=this.size



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
if(this.direction==="left"){
    can.ctx.drawImage(this.image,this.animationEffect,483,191,161,this.posX,this.posY,130,this.size)

}
if(this.direction==="right"){
    can.ctx.drawImage(this.image,this.animationEffect,161,191,161,this.posX,this.posY,130,this.size)
}
if(this.direction==="up"){
    can.ctx.drawImage(this.image,this.animationEffect,0,191,161,this.posX,this.posY,130,this.size)
}
if(this.direction==="down"){
    can.ctx.drawImage(this.image,this.animationEffect,322,191,161,this.posX,this.posY,130,this.size)
}
    }
    
        movement(){
      


            if(this.left===true){
                if(this.direction==="left"){
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
            if(this.direction==="right"){
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
            if(this.direction==="up"){
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
                if(this.direction==="down"){
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
attackFireBall(can){

    if(counter%5===0 && this.fireBall.length<1){
    
        this.fireBall.push(new FireBallAttackFromMonster(this.posX,this.posY))
    }
    if(this.fireBall.length>0){
        this.fireBall.forEach((el,i,arr)=>{
           el.draw(can)
           el.posY+=1
        })
    }
    
}
      
    
}