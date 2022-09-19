import brickWallImg from '../../WALL/brickWall/images/brickWall100.png'
const brickWall=new Image(100,100)
brickWall.src=brickWallImg
export class brickWallItems{
    constructor(posX,posY,sizeTitle,isDrop,direction){
        this.size=15
        this.posX=posX+sizeTitle/2-this.size/2
        this.posY=posY+sizeTitle/2-this.size/2
        this.name="brickWall"
        
        this.image=brickWall
        this.layOnMap=true
        this.animation=0
            //When this item is drop from backpack on map
            this.isDrop=isDrop
            this.direction=direction
            this.speedX=1
            this.strenghtGravity=1
    }
    draw(can){
        this.animation+=1
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
        if(this.animation%200===0){
           
            can.ctx.lineWidth=10
            can.ctx.strokeStyle="darkblue"
            can.ctx.strokeRect(this.posX-1,this.posY-1,this.size+2,this.size+2)
            
        }
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