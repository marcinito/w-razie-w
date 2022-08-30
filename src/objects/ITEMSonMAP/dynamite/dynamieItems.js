import { player } from '../../../main'
import dynamiteImg from '../../GUN/dynamite/TnT.png'
import { gravityItemsOnMap } from '../functionItemsOnMap/gravityItemsOnMap'
const dynamite=new Image(100,100)
dynamite.src=dynamiteImg
export class dynamiteItems{
    constructor(posX,posY,isDrop,direction){
        this.posX=posX
        this.startPosX=posX
        this.startPosY=posY
        this.posY=posY
        this.name="dynamite"
        this.size=30
        this.image=dynamite
        this.layOnMap=true
        //When this item is drop from backpack on map
        this.isDrop=isDrop
        this.direction=direction
        this.speedX=1
        this.strenghtGravity=1

    }
    draw(can){
        can.ctx.drawImage(this.image,this.posX,this.posY,this.size,this.size)
    //    can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
     
       
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