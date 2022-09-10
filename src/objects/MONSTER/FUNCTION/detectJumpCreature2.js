let numer=0
export const detectJumpCreature2=(creature,side)=>{
   numer++
       
        if(numer%1===0&&creature.name==="zombie"){
            console.log(creature.touchWall,"touchWall")
        }
    
    if(creature.touchWall===true){
        creature.directionMove=side
       
    }
    if(creature.touchWall===false){
      
        creature.jump=true
    }
}