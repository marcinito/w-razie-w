import { detecJumpCreature } from "./detectJumpCreature"

export const detectJumpCreature2=(creature,side,title)=>{

   
   
    if(creature.detectJump.touchWall===true){
        // creature.detectJump.color="orange"
        creature.directionMove=side
    
        
        

    }
    if(creature.detectJump.touchWall===false){
        // creature.detectJump.color="yellow"
        creature.jump=true
        
       
    }
}