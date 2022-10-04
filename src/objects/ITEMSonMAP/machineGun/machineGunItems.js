import machineGunImg from './machineGun.png'
const machineGun=new Image(100,100)
machineGun.src=machineGunImg
export class machineGunItems{
    constructor(posX,posY,isDrop,direction,ammo=40){
        this.posX=posX
        this.posY=posY
        this.name="machineGun"
        this.size=50
        this.image=machineGun
        this.layOnMap=true
       this.ammo=ammo
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