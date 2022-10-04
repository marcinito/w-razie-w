import fireBallImg from './fireBall.png'
const fireBall=new Image(100,100)
fireBall.src=fireBallImg
export class FireBallAttackFromMonster{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=50
        this.color="red"
        this.image=fireBall
        this.directionMove=direction
    
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
        if(this.directionMove==="down"){
            this.posY+=3
           }
           if(this.directionMove==="up"){
            this.posY-=3
           }
           if(this.directionMove==="left"){
            this.posX-=3
           }
           if(this.directionMove==="right"){
            this.posX+=3
           }
    }
}