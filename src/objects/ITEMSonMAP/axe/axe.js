import axeImg from './axe.png'
const axe=new Image(100,100)
axe.src=axeImg
export class AxeItems{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=50
        this.image=axe
        this.layOnMap=true
        this.name="axe"
    }
    draw(can){
can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
    }
}