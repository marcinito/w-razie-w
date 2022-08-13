import axeImg from './attackAxe.png'
import { player } from '../../../main'
const axe=new Image(100,100)

axe.src=axeImg
export class Axe{
    constructor(){
        this.name="axe"
      
        this.image=axe
        this.strenghtAttack=1
        
        this.size=30
     
        this.lifeCycleAttack=0 //lifeCycle serve as time to expire attack from axe
    }
    draw(can,axeCounter){
        this.lifeCycleAttack+=1
        can.ctx.strokeStyle="red"
       can.ctx.strokeRect(player.posX-35,player.posY,this.size,this.size)
        if(player.directionMove==="left"){
            can.ctx.drawImage(axe,axeCounter*534,0,534,497,player.posX-30,player.posY,this.size,this.size)
        }
        if(player.directionMove==="right"){
            can.ctx.drawImage(axe,0,0,534,497,player.posX+player.size,player.posY,this.size,this.size)
        }
    }
    
}