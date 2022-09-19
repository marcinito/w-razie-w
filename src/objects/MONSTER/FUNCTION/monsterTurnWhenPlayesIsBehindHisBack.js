import { player } from "../../../main"

let flagToTurnMonsterWhenPlayerIsBehind=false
export const monsterTurnWhenPlayerIsBehindHisBack=(creature,dX)=>{
  
   
//when player is behind back of monster monster turn to player and attack his

    if(dX>1&&dX<40&&flagToTurnMonsterWhenPlayerIsBehind===false){
        flagToTurnMonsterWhenPlayerIsBehind=true
        creature.directionMove="left"
        setTimeout(()=>{
flagToTurnMonsterWhenPlayerIsBehind=false

        },500)
        return
    }
    if(dX<0&&dX>-50&&flagToTurnMonsterWhenPlayerIsBehind===false){
        flagToTurnMonsterWhenPlayerIsBehind=true
        creature.directionMove="right"
        setTimeout(()=>{
            flagToTurnMonsterWhenPlayerIsBehind=false
            
                        },500)
                        return
    }
}