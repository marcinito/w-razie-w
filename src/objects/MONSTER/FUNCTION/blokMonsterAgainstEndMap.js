import { countNumberMonsterOnLeve } from "../../../LEVEL/CHANGE-LEVEl/countNumberMonsterOnLevel"
import { can } from "../../../main"


export const blockMonsterAgainstEndMap=(monster,monsterArr,monsterIndex)=>{

    if(monster.posX<0){
        monster.directionMove="right"
   
    }
    if(monster.posX+monster.size>can.C_W){
        monster.directionMove="left"
        
    }
    if(monster.posY>can.C_H+100){
        monsterArr.splice(monsterIndex,1)
        console.log(monsterArr)
        countNumberMonsterOnLeve()
    }
}