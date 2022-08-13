import solidWallImg from '../../WALL/solidWall/images/100SolidBlock.png'
const solidWall=new Image(100,100)
solidWall.src=solidWallImg
export class solidWallItems{

    constructor(posX,posY,sizeTitle){
        this.size=15
        this.posX=posX+sizeTitle/2-this.size/2
        this.posY=posY+sizeTitle/2-this.size/2
        this.name="solidWall"
        
        this.image=solidWall
        this.layOnMap=true
        this.animation=0
    }
    draw(can){
        this.animation+=1
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
        if(this.animation%200===0){
           
            can.ctx.lineWidth=10
            can.ctx.strokeStyle="darkblue"
            can.ctx.strokeRect(this.posX-1,this.posY-1,this.size+2,this.size+2)
            
        }
     

    }
}