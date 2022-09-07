import transitionImg from './transitionEffect.png'
const transition=new Image(100,100)
transition.src=transitionImg
export class transitionEffect{
    constructor(){
        this.posX=Math.floor(Math.random()*window.innerWidth)
        this.posY=Math.floor(Math.random()*100)
        this.size=40
        this.color="yellow"
        this.speed=Math.floor(Math.random()*5+1)
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.drawImage(transition,150*Math.floor(Math.random()*5),0,150,170,this.posX,this.posY,this.size,this.size)
        this.posY+=this.speed
     }
}