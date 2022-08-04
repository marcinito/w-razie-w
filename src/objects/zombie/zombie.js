import { random } from "../../Functions/helpFunction/random"
import zombieSprite from './zombie.png'
let zombieImg=new Image(100,100)
zombieImg.src=zombieSprite

export class Zombie{
    constructor(){
        this.posX=600+Math.floor(Math.random()*200)
        this.posY=180
        this.size=40
        this.color="black"
        this.name="zombie"
        this.speed=1
        this.strenghtGravity=0.5
        //DIRECTION
        this.directionArr=["left","right"]
        this.directionMove=random(this.directionArr)

        this.left=true
        this.right=true
        //OUTFIT
        this.image=zombieImg
        
    }
    draw(can,zombieMove){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY-20,this.size,10)
        let animation=200*zombieMove
        if(this.directionMove==="left"){
           
                can.ctx.drawImage(this.image,animation,0,200,305,this.posX,this.posY,this.size,this.size)
            
        }
        if(this.directionMove==="right"){
           
            can.ctx.drawImage(this.image,animation,330,200,312,this.posX,this.posY,this.size,this.size)
        
    }
    }
    movement(){
     if(this.left===true){
        if(this.directionMove==="left"){
            this.posX-=this.speed
        }
     }
       if(this.right===true){
        if(this.directionMove==="right"){
            this.posX+=this.speed
        }
       }

    }
}