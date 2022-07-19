import { random } from "../Functions/helpFunction/random"
import dragonImg from '../images/monsters/dragon.png'

let dragon=new Image(100,100)
dragon.src=dragonImg 




export class Dragon{
    constructor(){
        this.posX=10
        this.posY=10
        this.size=100
        this.type="dynamic"
        this.id="monster"
      
        
        this.image=dragon

        this.directionArr=["up","left","right","down"]
        this.directionCrossArr=["negative","positive","null"]
        this.directionCross=random(this.directionCrossArr)
        this.direction=random(this.directionArr)
        this.speed=1


         //direct
         this.left=true
         this.right=true
         this.down=true
         this.up=true

         this.animationEffect=0

        

    }
    draw(can,changeImage){
       
if(changeImage===1){
this.animationEffect=0

}
if(changeImage===2){
    this.animationEffect=191
}
if(changeImage===3){
    this.animationEffect=191*2
}


if(this.direction==="left"){
    can.ctx.drawImage(this.image,this.animationEffect,483,191,161,this.posX,this.posY,150,this.size)

}
if(this.direction==="right"){
    can.ctx.drawImage(this.image,this.animationEffect,161,191,161,this.posX,this.posY,150,this.size)
}
if(this.direction==="up"){
    can.ctx.drawImage(this.image,this.animationEffect,0,191,161,this.posX,this.posY,150,this.size)
}
if(this.direction==="down"){
    can.ctx.drawImage(this.image,this.animationEffect,322,191,161,this.posX,this.posY,150,this.size)
}
    }
    
        movement(){
      


            if(this.left===true){
                if(this.direction==="left"){
                    this.posX-=this.speed
                    if(this.directionCross==="negative"){
                        this.posY-=this.speed/2
                    }
                    if(this.directionCross==="positive"){
                        this.posY+=this.speed/2
                    }
                    if(this.directionCross==="null"){
                       
                    }
                  }
            }
          if(this.right===true){
            if(this.direction==="right"){
                this.posX+=this.speed
                if(this.directionCross==="negative"){
                    this.posY-=this.speed/2
                }
                if(this.directionCross==="positive"){
                    this.posY+=this.speed/2
                }
                if(this.directionCross==="null"){
                    
                }
                
              }
          }
           
        if(this.up===true){
            if(this.direction==="up"){
                this.posY-=this.speed
                if(this.directionCross==="negative"){
                    this.posX-=this.speed/2
                }
                if(this.directionCross==="positive"){
                    this.posX+=this.speed/2
                }
                if(this.directionCross==="null"){
                    
                }
              }
        }
        
            if(this.down===true){
                if(this.direction==="down"){
                    this.posY+=this.speed
                    if(this.directionCross==="negative"){
                        this.posX-=this.speed/2
                    }
                    if(this.directionCross==="positive"){
                        this.posX+=this.speed/2
                    }
                    if(this.directionCross==="null"){
                       
                    }
                    
            
                  }
               
                 
            }
              
            }
        
    
}