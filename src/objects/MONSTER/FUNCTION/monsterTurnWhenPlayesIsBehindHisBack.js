import { player } from "../../../main"

let flagToTurnMonsterWhenPlayerIsBehind=false
export const monsterTurnWhenPlayerIsBehindHisBack=(creature,dX,dY)=>{
  

//when player is behind back of monster monster turn to player and attack his

    if(dX>1&&dX<70&&flagToTurnMonsterWhenPlayerIsBehind===false&&dY<50){
        flagToTurnMonsterWhenPlayerIsBehind=true
        creature.directionMove="left"
        setTimeout(()=>{
flagToTurnMonsterWhenPlayerIsBehind=false

        },500)
        return
    }
    if(dX<0&&dX>-70&&flagToTurnMonsterWhenPlayerIsBehind===false&&dY<50){
        flagToTurnMonsterWhenPlayerIsBehind=true
        creature.directionMove="right"
        setTimeout(()=>{
            flagToTurnMonsterWhenPlayerIsBehind=false
            
                        },500)
                        return
    }
}