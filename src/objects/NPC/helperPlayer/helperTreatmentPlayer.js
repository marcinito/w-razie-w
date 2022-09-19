import attackImg from './greenBall.png'
const attackFire=new Image(100,100)
attackFire.src=attackImg
export class helperTreatPlayer{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=50;
        this.direction=direction
        this.strenghtAttack=20
        this.speed=3
        this.id="treat"
       
    }
    draw(can){
                can.ctx.fillStyle="red"
                can.ctx.drawImage(attackFire,this.posX,this.posY,this.size,this.size)
if(this.direction==="left"){
    this.posX-=this.speed
}
if(this.direction==="right"){
    this.posX+=this.speed
}
    }
}