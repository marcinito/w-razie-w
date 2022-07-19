import { Glock } from "./GUN/glock"
export class Player{
    constructor(){
        this.posX=300
        this.posY=500
        this.size=30
        this.color="orange"
        this.type="dynamic"
        this.id="player"
        this.doGravityWork=true
        this.direction="down"
        this.speed=20

        //Direction
        this.up=true
       
        this.left=true
        this.right=true
        //gun
      
     
        this.bullet=[]

    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    }
    moveUp(){
  if(this.up===true){
    console.log("up working..")
    this.posY-=100
    this.doGravityWork=true
    
    this.direction="up"
  }
    }

    moveLeft(){
            this.doGravityWork=true
            this.posX-=this.speed
            this.direction="left"
       
    }
    moveRight(){
            this.doGravityWork=true
            this.posX+=this.speed
            this.direction="right"
      
}
moveDown(){
  this.direction="down"

}

fire(){
this.bullet.push(new Glock(this.posX,this.posY,this.direction))

}

}