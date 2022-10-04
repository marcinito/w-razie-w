export const borderBarrier=(dE,can,changeDirectionMonster)=>{
  
    if(dE.posX<=0){
       changeDirectionMonster(dE,dE.directionCross,"left")
                dE.posX+=2
                dE.down=true
                dE.up=true
                dE.left=false
                dE.right=true
        
        if(dE.id==="player"){
            dE.posX+=2
        }
        console.log("d")
    }
    if(dE.posX+dE.size>=can.C_W){
      
            changeDirectionMonster(dE,dE.directionCross,"right")
            dE.posX-=2
            dE.down=true
            dE.up=true
            dE.left=true
            dE.right=false
        
        if(dE.id==="player"){
            dE.posX-=2
        }
    }
    if(dE.posY<=0){
       changeDirectionMonster(dE,dE.direction,"up")
            dE.down=true
            dE.up=false
            dE.left=true
            dE.right=true
                dE.posY+=2
        
        if(dE.id==="player"){
            dE.posY+=2
        }
    }
    if(dE.posY+dE.size>=can.C_H){
       changeDirectionMonster(dE,dE.directionCross,"down")
                dE.posY-=2
                dE.down=false
                dE.up=true
                dE.left=true
                dE.right=true
                console.log("down")
        
        if(dE.id==="player"){
            dE.posY-=2
        }
    }
}