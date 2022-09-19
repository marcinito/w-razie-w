import helperRunaImg from './helperRuna.png'
const helperRuna=new Image(100,100)
helperRuna.src=helperRunaImg
export class helperSpawnRuna{
    constructor(posX,posY,isDrop,direction,ammo=20){
        this.posX=posX
        this.posY=posY
        this.name="helperRuna"
        this.size=50
        this.image=helperRuna
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