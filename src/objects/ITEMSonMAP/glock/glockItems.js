import glockImg from './glockItems.png'
const glock=new Image(100,100)
glock.src=glockImg
export class glockItems{
    constructor(posX,posY,isDrop,direction,ammo=25){
        this.posX=posX
        this.posY=posY
        this.name="glock"
        this.size=40
        this.image=glock
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