import magmaWallImg from '../../WALL/magmaWall/images/100MagmaBlock.png'
const magmaWall=new Image(100,100)
magmaWall.src=magmaWallImg
export class magmaWallItems{
    constructor(posX,posY,sizeTitle){
        this.size=15
        this.posX=posX+sizeTitle/2-this.size/2
        this.posY=posY+sizeTitle/2-this.size/2
        this.name="magmaWall"
        
        this.image=magmaWall
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