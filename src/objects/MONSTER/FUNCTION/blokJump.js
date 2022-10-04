export const blokJump=(creature,title)=>{
   //canJump is false when monster touch head under title
    if(creature.detectBlokJump.canJump===false){
        creature.stopJump=true
        creature.posY=title.posY+title.size+2
     
        
        if(creature.directionMove==="left"){
            creature.directionMove="right"
            creature.posX+=2
    return
    }
        if(creature.directionMove==="right"){
            creature.directionMove="left"
        creature.posX-=2
    return
    }
        
        
   }
}