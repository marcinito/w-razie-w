import dynamiteImg from '../../GUN/dynamite/TnT.png'
const dynamite=new Image(100,100)
dynamite.src=dynamiteImg
export class dynamiteItems{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.name="dynamite"
        this.size=50
        this.image=dynamite
        this.layOnMap=true

    }
    draw(can){
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)

    }
}