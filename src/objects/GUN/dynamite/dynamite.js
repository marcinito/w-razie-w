import { Player } from "../../player/player"

import TnTImg from './TnT.png'
import tntExplosionImg from './tntExplosion.png'
const tnt2=new Image(100,100)
tnt2.src=tntExplosionImg
const tnt1=new Image(100,100)
tnt1.src=TnTImg


export class Dynamite{
    constructor(posX,posY,directionAttack){
        this.posX=posX
        this.posY=posY
        this.size=30
        this.color="red"
        this.name="dynamite"
        this.startPosX=posX
        this.startPosY=posY
        this.directionAttack=directionAttack
        this.speed=2
        this.fallenSpeed=0.8
        this.timeToExplode=50
        this.imageWaitingForExplosion=tnt1
        this.imageExplosion=tnt2
        this.posXWhenExplosion=null
        this.posYWhenExplosion=null
        this.strenghtAttack=1
        
    }

    draw(can,arrBullet){
    
  
        
        //THROW IN RIGHT DIRECTION
        if(this.directionAttack==="right"){
           
            let distanceX=this.posX-this.startPosX
            if(distanceX>=50){
                this.posY+=this.speed
                this.posX+=this.fallenSpeed
                
            }
            else{
                this.posX+=this.speed
                this.posY-=this.speed
            }
        }
        //THROW IN LEFT
        if(this.directionAttack==="left"){
            let distance=this.startPosX-this.posX

                if(distance>=50){
                    this.posX-=this.fallenSpeed
                    this.posY+=this.speed
                }else{
                    this.posX-=this.speed
                    this.posY-=this.speed
                }
                
            
        }
        if(this.directionAttack==="up"){
                    this.posY-=this.speed  
        }
        if(this.directionAttack==="down"){
            this.posY+=this.speed
        }





      
        this.timeToExplode-=1
        if(this.timeToExplode>0){
       
            can.ctx.drawImage(this.imageWaitingForExplosion,this.posX,this.posY,this.size,this.size)
         }
        if(this.timeToExplode<0&&this.timeToExplode>-10){
         this.posXWhenExplosion=this.posX
         this.posYWhenExplosion=this.posY
            can.ctx.drawImage(this.imageExplosion,0,90,130,100,this.posX-this.size/2,this.posY-this.size,100,100)
            
        }
        else if(this.timeToExplode<-10&&this.timeToExplode>-20){
            this.size=140
            this.posX=this.posXWhenExplosion-20
            this.posY=this.posYWhenExplosion-20
            can.ctx.drawImage(this.imageExplosion,200,0,200,200,this.posXWhenExplosion-20,this.posYWhenExplosion-20,120,120)
        }
        else if(this.timeToExplode<-20&&this.timeToExplode>-30){
            this.size=160
            this.posX=this.posXWhenExplosion-40
            this.posY=this.posYWhenExplosion-40
            can.ctx.drawImage(this.imageExplosion,400,0,200,200,this.posXWhenExplosion-40,this.posY,150,150)
        }
        else if(this.timeToExplode<-30&&this.timeToExplode>-40){
            this.size=180
            this.posX=this.posXWhenExplosion-60
            this.posY=this.posYWhenExplosion-60
            can.ctx.drawImage(this.imageExplosion,600,0,200,200,this.posXWhenExplosion-60,this.posY,170,170)
        }
        else if(this.timeToExplode<-40&&this.timeToExplode>-60){
            this.size=200
            this.posX=this.posXWhenExplosion-80
            this.posY=this.posYWhenExplosion-80
          
          
            can.ctx.drawImage(this.imageExplosion,800,0,200,200,this.posXWhenExplosion-80,this.posY,200,200)
        }

    }
}