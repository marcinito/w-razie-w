
import { random } from '../../../Functions/shorthandFunction/random'
import duszek from '../ghost/duszek.png'
let imgGhost=new Image(100,100)
imgGhost.src=duszek

export class Ghost{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=60
        this.attack=0.1
        this.color="plum"
        this.type="dynamic"
        this.id="monsterFly"
        this.image=imgGhost
        this.name="ghost"
     
        //DIRECTION
        this.directionArr=["up","left","right","down"]
        this.directionCrossArr=["negative","positive","null"]
        this.directionCross=random(this.directionCrossArr)
        this.direction=random(this.directionArr)
        this.speed=0

        //direct
        this.left=true
        this.right=true
        this.down=true
        this.up=true
        //HP
        this.hpTotal=150
        this.hp=this.hpTotal
        this.percentageHp=50
        this.ratePercentage=50
   
    }
    draw(can){
        can.ctx.fillStyle="red"
        can.ctx.fillRect(this.posX,this.posY-5,this.percentageHp,5)
        can.ctx.lineWidth=1
        can.ctx.strokeStyle="black"
        can.ctx.strokeRect(this.posX,this.posY-5,50,5)
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
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


}
