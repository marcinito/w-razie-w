import { Dynamite } from "../GUN/dynamite/dynamite"
import { Glock } from "../GUN/glock/glock"
import { Axe } from "../GUN/axe/axe"
import playerImageFile from './playerSprite.png'
import { updateEqDashboard } from "./shorthandFunction/updateEqDashboard"
import { countAmmoInGlockInPlayer } from "./shorthandFunction/countAmmoInGlockInPlayer"
import { displayItemInDetail } from "./shorthandFunction/displayItemInDetail"
import { countEnduranceInAxe } from "./shorthandFunction/countEnduranceInAxe"

const clack=document.querySelector(".clack")
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
   this.powerJump=20
   this.counterJump=0
   this.stop=false
    this.counterExtraJump=0
    
  

   //HP
   this.hpTotal=100
   this.hp=100
   this.percentageHp=50
   //ratePercentage serve as on what number is count "percent" for example 20*50/hpTotal
   this.ratePercentage=50
   //quantity live
   this.quantityLive=3


     //backpack
     this.whatIsInHand=undefined
     this.backpack={
      money:{amount:20,itemInBp:false},
      axe:{amount:0,itemInBp:false,ammo:"∞",bp:[],totalEndurance:0},
      glock:{amount:100,itemInBp:false,bp:[],ammo:100000},
      dynamite:{amount:0,itemInBp:false,ammo:"BOMB",},
      solidWall:{amount:0,itemInBp:false,ammo:0,},
      plainWall:{amount:0,itemInBp:false,ammo:0,},
      magmaWall:{amount:0,itemInBp:false,ammo:0,},
      hpPotion:{amount:0,itemInBp:false,ammo:0,},
      jumpFluid:{amount:0,itemInBp:false,ammo:0,},
      meat:{amount:0,itemInBp:false,ammo:0,},
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
      can.ctx.drawImage(this.image,0,0,250,230,this.posX,this.posY,this.size,this.size)
      
     }
     if(this.directionMove==="left"){
   
      can.ctx.drawImage(this.image,this.animation,500,250,220,this.posX,this.posY,this.size,this.size)
    
      if(this.animation>=1000){
        this.animation=0
      }
     }
     if(this.directionMove==="right")
   
     can.ctx.drawImage(this.image,this.animation,750,250,220,this.posX,this.posY,this.size,this.size)
    
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
                 if(this.extraJump===true){
                  setTimeout(()=>{
                    if(this.stop===false){
                      this.posY-=this.powerJump
                     }
                     if(this.extraJump===true){
                      setTimeout(()=>{
                        if(this.stop===false){
                          this.posY-=this.powerJump
                         }
                         if(this.extraJump===true){
                          setTimeout(()=>{
                            if(this.stop===false){
                              this.posY-=this.powerJump
                             }
                             if(this.extraJump===true){
                              setTimeout(()=>{
                                if(this.stop===false){
                                  this.posY-=this.powerJump
                                 }
                                 if(this.extraJump===true){
                                  setTimeout(()=>{
                                    if(this.stop===false){
                                      this.posY-=this.powerJump
                                     }
                                  },20)
                                 }
                              },20)
                             }
                          },20)
                         }
                      },20)
                     }
                  },20)
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

  if(this.backpack.axe.amount>0){
    if(this.axeArray.length<1){
     

        this.axeArray.push(new Axe(this.posX,this.posY,this.directionMove,this.size))
        this.backpack.axe.bp[0].endurance-=10
        if(this.backpack.axe.bp[0].endurance<0||this.backpack.axe.bp[0].endurance==0){
          this.backpack.axe.amount-=1
          this.backpack.axe.bp.splice(0,1)
        }
        updateEqDashboard("axe",this.backpack)
        countEnduranceInAxe(this.backpack,this.whatIsInHand)
       
    }
  }
}
if(this.whatIsInHand==="glock"){
 
  if(this.backpack.glock.ammo>0){
    
    this.bulletGlockArray.push(new Glock(this.posX,this.posY,this.directionMove))
    this.backpack.glock.bp[0].ammo-=1
    if( this.backpack.glock.bp[0].ammo===0){
      this.backpack.glock.bp.splice(0,1)
      this.backpack.glock.amount-=1
    }

  }
countAmmoInGlockInPlayer(this.backpack,this.whatIsInHand)
updateEqDashboard("glock",this.backpack)

}
if(this.whatIsInHand==="dynamite"){
  if(this.backpack.dynamite.amount>0){
    this.dynamitsArray.push(new Dynamite(this.posX,this.posY,this.directionMove))
    this.backpack.dynamite.amount-=1
    updateEqDashboard("dynamite",this.backpack)
  }
}
if(this.whatIsInHand==="hpPotion"){
  if(this.backpack.hpPotion.amount>0){
    this.hp=this.hpTotal
    this.percentageHp=50
    this.backpack.hpPotion.amount-=1
    updateEqDashboard("hpPotion",this.backpack)
  }
}

if(this.whatIsInHand==="jumpFluid"){

  if(this.backpack.jumpFluid.amount>0){
  this.counterExtraJump+=10
    this.backpack.jumpFluid.amount-=1
  


 


    
    updateEqDashboard("jumpFluid",this.backpack)
  }
}
if(this.whatIsInHand==="meat"){

  if(this.backpack.meat.amount>0){
  
     this.backpack.meat.amount-=1
     this.hp+=50 
  

 


    
    updateEqDashboard("meat",this.backpack)
  }
}
}


}