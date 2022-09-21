
export const detectJumpCreature2=(creature,side)=>{
 
    
    if(creature.touchWall===true){
        creature.directionMove=side
       
    }
    if(creature.touchWall===false){
      console.log(creature.directionMove)
        creature.jump=true
    }
}