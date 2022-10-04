
import { random } from '../../../Functions/shorthandFunction/random'
import { menu } from '../../../main'
import { changeDirectionMonster } from '../FUNCTION/changeDirectionMonster'
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
        this.directionMove=random(this.directionArr)
        this.speed=4+menu.level/2.5

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
        this._ID=Math.floor(Math.random()*213123)
        this.startPoint=Math.floor(Math.random()*280)
   
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
changeWay(){
    this.startPoint++
    if(this.startPoint>300){
    this.directionMove=random(this.directionArr)

    let whichSideUnBlok=this.directionMove.slice(0)
   
    this.startPoint=0
    switch(whichSideUnBlok){
        case "left":
            return this.left=true
            case "right":
                return this.right=true
                case "up":
                    return this.up=true
                    case "down":
                        return this.down=true
    }
    
    }
}

}
