
export const detectJumpCreature2=(creature,side)=>{
 
    
    if(creature.touchWall===true){
        creature.directionMove=side
       
    }
    if(creature.touchWall===false){
      
        creature.jump=true
    }
}