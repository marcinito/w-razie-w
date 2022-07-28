import { Glock } from "../GUN/glock"
import playerImageFile from './playerImage.png'
const playerImage=new Image(100,100)
playerImage.src=playerImageFile
export class Player{
    constructor(){
        this.posX=300
        this.posY=500
        this.size=45.7
        this.color="blue"
        //IMAGE PLAYER
        this.image=playerImage
        this.animation=0
        this.movementOngoing=true
       
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
   this.building={plainWall:{quantity:3,canIBuild:false},solidWall:{quantity:3,canIBuild:false}}
   this.blockToBuild=[]
       //gun
       this.bullet=[]
       
       

    }
    draw(can){
 
      can.ctx.fillStyle="green"
        can.ctx.fillRect(this.posX+10,this.posY-25,this.percentageHp,10)
        can.ctx.strokeRect(this.posX+10,this.posY-25,50,10)
    if(this.directionMove==="down"||this.directionMove==="up"&&this.movementOngoing===true){
      can.ctx.drawImage(this.image,0,0,200,200,this.posX,this.posY,this.size,this.size)
    }
     
     if(this.directionMove==="left"&&this.movementOngoing===false){
      can.ctx.drawImage(this.image,this.animation,510,200,200,this.posX,this.posY,this.size,this.size)
      
     }
     if(this.directionMove==="right"&&this.movementOngoing===false){
      can.ctx.drawImage(this.image,this.animation,0,200,200,this.posX,this.posY,this.size,this.size)
      
     }
     if(this.directionMove==="up"){
      can.ctx.drawImage(this.image,this.animation,0,200,200,this.posX,this.posY,this.size,this.size)
      
     }
     if(this.movementOngoing===true&&this.directionMove==="left"){
      can.ctx.drawImage(this.image,1000,510,200,200,this.posX,this.posY,this.size,this.size)
     }
     if(this.movementOngoing===true&&this.directionMove==="right"){
      can.ctx.drawImage(this.image,0,0,200,200,this.posX,this.posY,this.size,this.size)
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
  this.movementOngoing=false

    }

    moveLeft(){
      
   
            this.animation+=200
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
            this.movementOngoing=false
           
       
    }
    moveRight(){
           this.animation+=200
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
            this.movementOngoing=false
}
moveDown(){
  this.directionMove="down"
  this.directionAttack="down"
  this.movementOngoing=false

}

fire(xDirection,yDirection){
this.bullet.push(new Glock(this.posX,this.posY,xDirection,yDirection))

}


}