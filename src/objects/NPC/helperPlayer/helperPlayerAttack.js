import attackImg from './blueBall.png'
const attackFire=new Image(100,100)
attackFire.src=attackImg
export class helperMagiAttack{
    constructor(posX,posY,direction){
        this.posX=posX
        this.posY=posY
        this.size=50;
        this.direction=direction
        this.strenghtAttack=20
        this.speed=3
        this.id="attack"
       
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
if(this.direction==="up"){
    this.posY-=this.speed
}
    }
}