import jumpFluidImg from './jumpFluid.png'
const jumpFluid=new Image(100,100)
jumpFluid.src=jumpFluidImg
export class jumpFluidItems{
    constructor(posX,posY,isDrop,direction){
        this.posX=posX
        this.posY=posY
        this.size=40
        this.name="jumpFluid"
        this.layOnMap=true
        this.image=jumpFluid
                //When this item is drop from backpack on map
                this.isDrop=isDrop
                this.direction=direction
                this.speedX=1
                this.strenghtGravity=1

    }
    draw(can){
    can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
    if(this.isDrop===true){

        if(this.direction==="left"){
                
                this.posX-=this.speedX
        }
        if(this.direction==="right"){
                this.posX+=this.speedX
        }
            
            
        }
    }
}