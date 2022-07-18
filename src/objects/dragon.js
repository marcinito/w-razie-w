import { random } from "../Functions/helpFunction/random"
export class Dragon{
    constructor(){
        this.posX=10
        this.posY=10
        this.size=20
        this.type="dynamic"
        this.id="monster"

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

    }
    draw(can){

can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
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