import { random } from "../../Functions/helpFunction/random"
import zombieSprite from './zombie.png'
import zombieSprite2 from './zombieSprites.png'
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
        this.naturalSpeed=1
        this.speed=0
       
        this.strenghtGravity=3
        this.strenghtAttack=0.3
    
        //DIRECTION
        this.directionArr=["left","right"]
        this.directionMove=random(this.directionArr)
        this.isDuringAttackPlayer=false
        this.doFall=false//It serve to draw zombie when he is in air it shows that zombie "fall"
        //OUTFIT
        this.image=zombieImg2
        //hp
        this.hpTotal=450
        this.hp=this.hpTotal
        this.percentageHp=this.size
        this.ratePercentage=this.size
        
    }
draw(can){
    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY-10,this.percentageHp,7)
    can.ctx.lineWidth=1
    can.ctx.strokeStyle="black"
    can.ctx.strokeRect(this.posX,this.posY-10,this.size,7)
    can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
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
}
    movement(){
   
    
        if(this.directionMove==="left"){
            this.posX-=this.speed
        }
     
     
        if(this.directionMove==="right"){
            this.posX+=this.speed
        }
       

    }
}