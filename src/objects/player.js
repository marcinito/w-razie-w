export class Player{
    constructor(){
        this.posX=300
        this.posY=500
        this.size=30
        this.color="orange"
        this.type="dynamic"
        this.id="player"
        this.direction=null
        this.speed=40

        //Direction
        this.up=true
        this.down=true
        this.left=true
        this.right=true

    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    }
    moveUp(){
       if(this.up===true){
        this.posY-=this.speed
        this.direction="up"
       }
    }
    moveDown(){
        if(this.down===true){
            this.posY+=this.speed
        this.direction="down"
        }
    }
    moveLeft(){
      if(this.left===true){
        this.posX-=this.speed
        this.direction="left"
      }
       
    }
    moveRight(){
        if(this.right===true){
            this.posX+=this.speed
        this.direction="right"
        }
    }
}