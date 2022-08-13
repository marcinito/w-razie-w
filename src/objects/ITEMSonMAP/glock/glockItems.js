import glockImg from './glockItems.png'
const glock=new Image(100,100)
glock.src=glockImg
export class glockItems{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.name="glock"
        this.size=50
        this.image=glock
        this.layOnMap=true

    }
    draw(can){
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)

    }
}