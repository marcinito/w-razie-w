import { detecJumpCreature } from "./detectJumpCreature"

export const detectJumpCreature2=(creature,side)=>{

    console.log(creature.touchWall,"wall")
   
    if(creature.touchWall===true){
    console.log("dziala")
        creature.directionMove=side
        
    
    }
    if(creature.touchWall===false){
     
        creature.jump=true
       
    }
}