import { Dynamite } from "../GUN/dynamite/dynamite"
import { Glock } from "../GUN/glock/glock"
import { Axe } from "../GUN/axe/axe"
import playerImageFile from './playerSprite.png'
import { updateEqDashboard } from "./shorthandFunction/updateEqDashboard"

const playerImage=new Image(100,100)
playerImage.src=playerImageFile
export class Player{
    constructor(){
        this.posX=300
        this.posY=20
        this.size=40.7
        this.color="blue"
        //IMAGE PLAYER
        this.image=playerImage
        this.animation=0
       
        
       
       
        this.id="player"
      this.strenghtGravity=2
  
        this.directionMove="down"
        this.directionAttack="left"
        this.directionJump="left"
        this.speed=19.57

        //Direction
        this.up=true
        this.down=true
        this.left=true
        this.right=true
 
        //JUMP HANDLE
   this.powerJump=40
   this.counterJump=0
   this.stop=false
  

   //HP
   this.hpTotal=100
   this.hp=this.hpTotal
   this.percentageHp=50
   //ratePercentage serve as on what number is count "percent" for example 20*50/hpTotal
   this.ratePercentage=50
   //quantity live
   this.quantityLive=3


     //backpack
     this.whatIsInHand="glock"
     this.backpack={
      money:{amount:0,itemInBp:false},
      axe:{amount:0,itemInBp:false,ammo:"∞",},
      glock:{amount:0,itemInBp:false,ammo:21212,},
      dynamite:{amount:0,itemInBp:false,ammo:0,},
      solidWall:{amount:0,itemInBp:false,ammo:0,},
      plainWall:{amount:0,itemInBp:false,ammo:0,},
      magmaWall:{amount:0,itemInBp:false,ammo:0,},
     }


   //BUILDIN NEW BLOCK
    this.mode=true
   this.blockToBuild=[]
       //gun
    
       this.bulletGlockArray=[]
       this.dynamitsArray=[]
       this.axeArray=[]
  
       
       

    }
    draw(can){
 
      can.ctx.fillStyle="green"
        can.ctx.fillRect(this.posX,this.posY-25,this.percentageHp,10)
        can.ctx.lineWidth=1
        can.ctx.strokeStyle="black"
        can.ctx.strokeRect(this.posX,this.posY-25,50,10)
 
     can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
     if(this.directionMove==="up" || this.directionMove==="down"){
      can.ctx.drawImage(this.image,0,0,250,240,this.posX,this.posY,this.size,this.size)
      
     }
     if(this.directionMove==="left"){
   
      can.ctx.drawImage(this.image,this.animation,500,250,240,this.posX,this.posY,this.size,this.size)
    
      if(this.animation>=1000){
        this.animation=0
      }
     }
     if(this.directionMove==="right")
   
     can.ctx.drawImage(this.image,this.animation,750,250,240,this.posX,this.posY,this.size,this.size)
    
     if(this.animation>=1000){
       this.animation=0
     }
    }
    moveUp(){
  this.stop=false
      if(this.up===true){
        this.posY-=this.powerJump
      setTimeout(()=>{
        
         if(this.stop===false){
          this.posY-=this.powerJump
         }
        
        setTimeout(()=>{
        
          if(this.stop===false){
            this.posY-=this.powerJump
           }
          
          setTimeout(()=>{
           
            if(this.stop===false){
              this.posY-=this.powerJump
             }
            
            setTimeout(()=>{
             
              if(this.stop===false){
                this.posY-=this.powerJump
               }
                
              
              setTimeout(()=>{
              
                if(this.stop===false){
                  this.posY-=this.powerJump
                 }
                
              },20)
            },20)
          },20)
        },20)
      },20)
      }

      this.right=true
      this.left=true
      this.down=true
      
      
  this.directionMove="up"
  this.directionAttack="up"


    }

    moveLeft(){
      this.strenghtGravity=2
      
            this.animation+=250
            if(this.animation>=1200){
              this.animation=0
            }
            this.right=true
            this.directionMove="left"
            this.directionAttack="left"
            this.directionJump="left"
            if(this.left===true){
              this.posX-=this.speed
            }
          
           
       
    }
    moveRight(){
           this.animation+=250
           if(this.animation>=1200){
            this.animation=0
           }
          this.left=true
            this.directionMove="right"
            this.directionAttack="right"
            this.directionJump="right"
            if(this.right===true){
              this.posX+=this.speed
            }
            
}
moveDown(){
  this.directionMove="down"
  this.directionAttack="down"
  

}

fire(){
if(this.whatIsInHand==="axe"){
  
  if(this.backpack.axe.ammo>0){
    if(this.axeArray.length<1){
        this.axeArray.push(new Axe())
    }
  }
}
if(this.whatIsInHand==="glock"){
  if(this.backpack.glock.ammo>0){
    let slot
    this.bulletGlockArray.push(new Glock(this.posX,this.posY,this.directionMove))
    this.backpack.glock.ammo-=1
updateEqDashboard("glock",this.backpack)
  }
}
if(this.whatIsInHand==="dynamite"){
  if(this.backpack.dynamite.ammo>0){
    this.dynamitsArray.push(new Dynamite(this.posX,this.posY,this.directionMove))
    this.backpack.dynamite.ammo-=1
    updateEqDashboard("dynamite",this.backpack)
  }
}

}


}