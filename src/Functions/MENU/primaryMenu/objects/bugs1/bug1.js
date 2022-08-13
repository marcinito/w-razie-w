import { random } from '../../../../helpFunction/random'
import bug1Img from './bug1.png'
const bug1=new Image(100,100)
bug1.src=bug1Img
let counter=0

setInterval(()=>{
    
counter++
if(counter>10){counter=0}
},200)
export class Bug1{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.size=60
        this.image=bug1
        this.directionArr=["top","down"]
        this.direction=random(this.directionArr)
        this.speed=0.5

    }
    draw(canMenu){
      if(this.direction==="top"){
        canMenu.ctx.drawImage(this.image,counter*144,0,136,125,this.posX,this.posY,this.size,this.size)
        this.posY-=this.speed
        if(this.posY<0){
            this.posY=canMenu.C_H
            this.posX=Math.floor(Math.random()*canMenu.C_W)
        }
      }
      if(this.direction==="down"){
        canMenu.ctx.drawImage(this.image,counter*144,125,136,125,this.posX,this.posY,this.size,this.size)
        this.posY+=this.speed
        if(this.posY>canMenu.C_H){
            this.posY=-10
            this.posX=Math.floor(Math.random()*canMenu.C_W)
        }
      }

    }
}