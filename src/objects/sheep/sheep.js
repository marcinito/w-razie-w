import { random } from "../../Functions/helpFunction/random"
import { itemsOnMap } from "../../main"
import { AxeItems } from "../ITEMSonMAP/axe/axe"
import { detectEdge } from "../MONSTER/objects/detectEdge"

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
    this.speed=1
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
       this.detectCreator=new detectEdge()
       this.detect=this.detectCreator
       this.blok=false
       this.liczba=0
       
}
draw(can){
    can.ctx.fillStyle=this.color
    can.ctx.fillRect(this.posX,this.posY-10,this.percentageHp,5)
    can.ctx.strokeRect(this.posX,this.posY-10,this.size,5)
    if(this.directionMove==="right"){
        can.ctx.drawImage(this.image,animation*100,8,95,80,this.posX,this.posY,this.size,this.size)
    }
    if(this.directionMove==="left"){
        can.ctx.drawImage(this.image,animation*100,109,95,80,this.posX,this.posY,this.size,this.size)
    }
      //detect verge
  if(this.directionMove==="left"){
    this.detect.posX=this.posX     
  }
  if(this.directionMove==="right"){
    this.detect.posX=this.posX+this.size-this.detect.size     
  }
    this.detect.posY=this.posY+this.size-this.detect.size
    
    this.detect.draw(can)
}
movement(){
    if(this.liczba<6){
      
        this.liczba+=1
    }
    if(this.directionMove==="left"){
        this.posX-=this.speed
        if(this.detect.trigger===true&&this.blok===false){
          this.directionMove="right"
          this.blok=true
          setTimeout(()=>{
            this.blok=false
          },1000)
        }
    }
 
 
    if(this.directionMove==="right"){
        this.posX+=this.speed
        if(this.detect.trigger===true&&this.blok===false){
          this.directionMove="left";this.blok=true;
        setTimeout(()=>{
          this.blok=false
        },1000)
      }
    }
}

}