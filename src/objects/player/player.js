import { Glock } from "../GUN/glock"
export class Player{
    constructor(){
        this.posX=300
        this.posY=500
        this.size=29.7
        this.color="blue"
       
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
        //gun
      
     
        this.bullet=[]
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
   //BUILDIN NEW BLOCK
   this.isBuildingIsPossible={plainWall:false,solidWall:false}
   this.blockToBuild=[]

       

    }
    draw(can){
      can.ctx.fillStyle="green"
        can.ctx.fillRect(this.posX-this.size/3,this.posY-25,this.percentageHp,10)
        can.ctx.strokeRect(this.posX-this.size/3,this.posY-25,50,10)
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
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
           
            this.right=true
            this.directionMove="left"
            this.directionAttack="left"
            this.directionJump="left"
            if(this.left===true){
              this.posX-=this.speed
            }
       
    }
    moveRight(){
           
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
this.bullet.push(new Glock(this.posX,this.posY,this.directionAttack))

}


}