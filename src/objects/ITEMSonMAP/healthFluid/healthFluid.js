import healthPotionImg from './hpPotion.png'
const hpPotion=new Image(100,100)
hpPotion.src=healthPotionImg
export class healthFluidItems{
    constructor(posX,posY,isDrop,direction){
        this.posX=posX
        this.posY=posY
        this.size=40
        this.name="hpPotion"
        this.layOnMap=true
        this.image=hpPotion
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