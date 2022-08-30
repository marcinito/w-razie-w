import axeImg from './axe.png'
const axe=new Image(100,100)
axe.src=axeImg
export class AxeItems{
    constructor(posX,posY,isDrop,direction){
        this.posX=posX
        this.posY=posY
        this.size=30
        this.image=axe
        this.layOnMap=true
        this.name="axe"
        this.isDrop=isDrop
        this.speedX=1
        this.strenghtGravity=1
        this.direction=direction
        this.endurance=100
       
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