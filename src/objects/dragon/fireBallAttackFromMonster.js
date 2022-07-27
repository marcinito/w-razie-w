import fireBallImg from './fireBall.png'
const fireBall=new Image(100,100)
fireBall.src=fireBallImg
export class FireBallAttackFromMonster{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=20
        this.color="red"
        this.image=fireBall
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
        this.posY+=2
    }
}