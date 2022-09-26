import { can } from "../../../main";

export class mouseDetector{
    constructor(posX,posY){
        this.posX=posX;
        this.posY=posY;
        this.size=100
        this.color="black"

    }
    draw(can){
        can.ctx.strokeStyle=this.color
        can.ctx.lineWidth=1
        can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
       
        can.ctx.beginPath()
        can.ctx.lineWidth=1
       
        can.ctx.moveTo(this.posX+this.size/2,this.posY)
        can.ctx.lineTo(this.posX+this.size/2,this.posY+this.size)
        can.ctx.stroke()
        //
        can.ctx.beginPath()
        can.ctx.strokeStyle=this.color
        can.ctx.lineWidth=1
       
        can.ctx.moveTo(this.posX,this.posY+this.size/2)
        can.ctx.lineTo(this.posX+this.size,this.posY+this.size/2)
        can.ctx.stroke()
        //
    can.ctx.stokeStyle="red"
    can.ctx.lineWidth=5
    can.ctx.strokeRect(this.posX+35/2,this.posY+35/2,65,65)

    }
}