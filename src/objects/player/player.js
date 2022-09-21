import { Dynamite } from "../GUN/dynamite/dynamite"
import { Glock } from "../GUN/glock/glock"
import { Axe } from "../GUN/axe/axe"
import treatmentImg from './treatmentImg.png'
import { makeWall } from "../../Functions/makeWall"
import { plainWall } from "../WALL/plainWall/plainWall"
const treatment=new Image(100,100)
treatment.src=treatmentImg
import playerImageFile from './playerSprite.png'
import { updateEqDashboard } from "./shorthandFunction/updateEqDashboard"
import { countAmmoInGlockInPlayer } from "./shorthandFunction/countAmmoInGlockInPlayer"
import { displayItemInDetail } from "./shorthandFunction/displayItemInDetail"
import { countEnduranceInAxe } from "./shorthandFunction/countEnduranceInAxe"
import { menu, NPC, player } from "../../main"
import { helperPlayer } from "../NPC/helperPlayer/helperPlayer"
import { handleHp } from "../../Functions/shorthandFunction/handleHp"
import sculeImg from '../../stylesImage/deadImg.png'
const lifeSpan=document.querySelector(".lifeSpan")
const playerImage=new Image(100,100)
playerImage.src=playerImageFile
export class Player{
    constructor(){
        if(menu.level===0){
         this.posX=
         this.posY=100
        }
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
   this.powerJump=20//-strenght of jump how many player move to up when jump
   this.counterJump=0
   this.stop=false//-is becoming active when player meet obstacle when jump its blok his jumping
    this.counterExtraJump=0 //-is serve as timer how many second player can jump higher than usually
    this.extraJump=false//it tell if player have acces to jump higher than usually
    
  

   //HP
   this.hpTotal=80//hp total tell what is maximum hp player
   this.hp=this.hpTotal
   this.percentageHp=50// percentageHp tell how many percent hp player have
   this.ratePercentage=50// ratePercentage set value for "percent" in this case percent means 50
   //quantity live
   this.quantityLive=3
   //visual effect of treatment
   this.effect=0


     //backpack
     this.whatIsInHand=undefined
     this.backpack={
      money:{amount:20,itemInBp:false},
      axe:{amount:0,itemInBp:false,ammo:"∞",bp:[],totalEndurance:0},
      glock:{amount:0,itemInBp:false,bp:[],ammo:0,flag:true},
      machineGun:{amount:0,itemInBp:false,bp:[],ammo:0,flag:true},
      dynamite:{amount:1212,itemInBp:false,ammo:"BOMB",},
      solidWall:{amount:0,itemInBp:false,ammo:0,},
      plainWall:{amount:0,itemInBp:false,ammo:0,},
      brickWall:{amount:0,itemInBp:false,ammo:0,},
      magmaWall:{amount:0,itemInBp:false,ammo:0,},
      hpPotion:{amount:0,itemInBp:false,ammo:0,},
      jumpFluid:{amount:0,itemInBp:false,ammo:0,},
      meat:{amount:0,itemInBp:false,ammo:0,},
      helperRuna:{amount:0,itemInBp:false,ammo:0,},
     }


   //BUILDIN NEW BLOCK
    this.mode=true
   this.blockToBuild=[new plainWall(100,100,0,"red","horizontal")]
       //gun
       this.bulletGlockArray=[]
       this.dynamitsArray=[]
       this.axeArray=[]
       //switch for checking what a position is lowest tile on map
       this.checkPositionLowestTileOnMap=false
       this.deadEffect=false
    }
    draw(can){
    

    let percentHp=this.hp/this.hpTotal*this.ratePercentage
if(percentHp>25){
    
  can.ctx.fillStyle="green"
}
else if(percentHp<28&& percentHp>12){
    
  can.ctx.fillStyle="yellow"

}
else if(percentHp<11){
    
  can.ctx.fillStyle="red"

}
        can.ctx.fillRect(this.posX,this.posY-25,this.percentageHp,10)
        can.ctx.lineWidth=1
        can.ctx.strokeStyle="black"
        can.ctx.strokeRect(this.posX,this.posY-25,50,10)
        //treatment
      
    if(this.treatment===true){
this.effect++
  if(this.effect%10===0||this.effect%10===9||this.effect%10===11||this.effect%10===12||this.effect%10===13||this.effect%10===14){
    can.ctx.drawImage(treatment,this.posX-10,this.posY-10,this.size+20,this.size+10)
  }

    }
     can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
     if(this.directionMove==="up" || this.directionMove==="down"){
      can.ctx.drawImage(this.image,0,0,250,230,this.posX,this.posY,this.size,this.size)
    
      

     }
     if(this.directionMove==="left"&&this.deadEffect===false){
   
      can.ctx.drawImage(this.image,this.animation,500,250,220,this.posX,this.posY,this.size,this.size)
    
      if(this.animation>=1000){
        this.animation=0
      }
     }
     if(this.directionMove==="right"&&this.deadEffect===false){
   
     can.ctx.drawImage(this.image,this.animation,750,250,220,this.posX,this.posY,this.size,this.size)
    
     if(this.animation>=1000){
       this.animation=0
     }
     if(this.deadEffect===true&&this.directionMove==="right"||this.directionMove==="left"){
   
      can.ctx.drawImage(this.image,this.animation,750,250,220,this.posX,this.posY,this.size,this.size)
     
      if(this.animation>=1000){
        this.animation=0
      }
     }
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
              console.log("dziala")
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
 
  if(this.backpack.glock.ammo>0&&this.backpack.glock.flag===true){
    
    this.bulletGlockArray.push(new Glock(this.posX,this.posY,this.directionMove))
    this.backpack.glock.bp[0].ammo-=1
    this.backpack.glock.flag=false
    setTimeout(()=>{
      this.backpack.glock.flag=true
    },1)
    if( this.backpack.glock.bp[0].ammo===0){
      this.backpack.glock.bp.splice(0,1)
      this.backpack.glock.amount-=1
    }

  }
countAmmoInGlockInPlayer(this.backpack,this.whatIsInHand,"glock")
updateEqDashboard("glock",this.backpack)

}
if(this.whatIsInHand==="machineGun"){
 
  if(this.backpack.machineGun.ammo>0&&this.backpack.machineGun.flag===true){
    
    this.bulletGlockArray.push(new Glock(this.posX,this.posY,this.directionMove))
    this.backpack.machineGun.bp[0].ammo-=1
    this.backpack.machineGun.flag=false
    setTimeout(()=>{
      this.backpack.machineGun.flag=true
    },100)
    if( this.backpack.machineGun.bp[0].ammo===0){
      this.backpack.machineGun.bp.splice(0,1)
      this.backpack.machineGun.amount-=1
    }

  }
countAmmoInGlockInPlayer(this.backpack,this.whatIsInHand,"machineGun")
updateEqDashboard("machineGun",this.backpack)

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
    this.treatment=true
    setTimeout(()=>{
     this.treatment=false
    },3000)

    updateEqDashboard("hpPotion",this.backpack)
  }
}
//code from here operate in playerbreathing
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
     this.percentageHp+=handleHp(50,player)
     this.treatment=true
     setTimeout(()=>{
      this.treatment=false
     },3000)

    updateEqDashboard("meat",this.backpack)
  }
}
if(this.whatIsInHand==="helperRuna"){

  if(this.backpack.helperRuna.amount>0){
    console.log(this.backpack.helperRuna.amount)
     this.backpack.helperRuna.amount-=1
    NPC.push(new helperPlayer(this.posX,this.posY-20))
    updateEqDashboard("helperRuna",this.backpack)
  }
}
}


}