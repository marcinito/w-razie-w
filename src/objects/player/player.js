import { Dynamite } from "../GUN/dynamite/dynamite"
import { Glock } from "../GUN/glock/glock"
import playerImageFile from './playerSprite.png'
const playerImage=new Image(100,100)
playerImage.src=playerImageFile
export class Player{
    constructor(){
        this.posX=300
        this.posY=500
        this.size=40.7
        this.color="blue"
        //IMAGE PLAYER
        this.image=playerImage
        this.animation=0
        this.money=0
       
       
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

   //HP
   this.hpTotal=100
   this.hp=this.hpTotal
   this.percentageHp=50
   //ratePercentage serve as on what number is count "percent" for example 20*50/hpTotal
   this.ratePercentage=50
   //quantity live
   this.quantityLive=3


   //MODE DASHBOARD
   this.mode="fireFire"
   //BUILDIN NEW BLOCK
   this.building={plainWall:{quantity:3,canIBuild:false},solidWall:{quantity:3,canIBuild:false},magmaWall:{quantity:3,canIBuild:false}}
   this.blockToBuild=[]
       //gun
       this.GUN={glock:{choosen:true,available:true,ammo:102332},dynamite:{choosen:false,available:true,ammo:52112}}
       this.bulletGlockArray=[]
       this.dynamitsArray=[]
       
       

    }
    draw(can){
 
      can.ctx.fillStyle="green"
        can.ctx.fillRect(this.posX,this.posY-25,this.percentageHp,10)
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
  
      if(this.up===true){
        this.posY-=this.powerJump
      setTimeout(()=>{
        if(this.stop===true){
          this.posY-=this.powerJump
        }
        setTimeout(()=>{
          if(this.stop===true){
            this.posY-=this.powerJump
          }
          setTimeout(()=>{
            if(this.stop===true){
              this.posY-=this.powerJump
            }
            setTimeout(()=>{
              if(this.stop===true){
                this.posY-=this.powerJump
              }
              setTimeout(()=>{
                if(this.stop===true){
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
if(this.GUN.glock.choosen===true&&this.GUN.glock.available===true&&this.GUN.glock.ammo>0){
  this.GUN.glock.ammo-=1
  this.bulletGlockArray.push(new Glock(this.posX+this.size/2,this.posY+this.size/2,this.directionAttack))

}
if(this.GUN.dynamite.choosen===true&&this.GUN.dynamite.available===true&&this.GUN.dynamite.ammo>0){
  this.GUN.dynamite.ammo-=1
  this.dynamitsArray.push(new Dynamite(this.posX+this.size/2,this.posY-10,this.directionAttack))

}

}


}