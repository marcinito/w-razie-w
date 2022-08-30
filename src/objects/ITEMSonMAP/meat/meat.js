import meatImg from './Meat.png'
const meat=new Image(100,100)
meat.src=meatImg
export class Meat{
    constructor(posX,posY,isDrop,direction){
        this.posX=posX
        this.posY=posY
        this.size=30
        this.image=meat
        this.layOnMap=true
        this.name="meat"
        this.isDrop=isDrop
        this.speedX=1
        this.strenghtGravity=1
        this.direction=direction
     
       
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