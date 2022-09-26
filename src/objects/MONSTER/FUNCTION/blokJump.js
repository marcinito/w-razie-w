export const blokJump=(creature,title)=>{
   
    if(creature.detectBlokJump.canJump===false){
        creature.stopJump=true
        creature.posY=title.posY+title.size+2
        console.log("wykonuje sie")
        
        if(creature.directionMove==="left"&&creature.detectJump.touchWall===false){
            creature.directionMove="right"
            creature.posX+=2
    return
    }
        if(creature.directionMove==="right"&&creature.detectJump.touchWall===false){
            creature.directionMove="left"
        creature.posX-=2
    return
    }
        
        
   }
}