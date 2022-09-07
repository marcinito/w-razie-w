

import { handleHp } from "../../../Functions/helpFunction/handleHp"
import { monsterDropItem } from "../../../Functions/helpFunction/monsterDropItem"
import { countNumberMonsterOnLeve } from "../../../LEVEL/CHANGE-LEVEl/countNumberMonsterOnLevel"
import { itemsOnMap } from "../../../main"
export const  axeAttackMonster=(MONSTER,player)=>{
    player.axeArray.forEach((axe,axeIndex,axeArr)=>{

   
    MONSTER.forEach((particularArray,index,MONSTERarr)=>{
        particularArray.forEach((monster,monsterIndex,particularArrayArr)=>{

            if(axe.posX+axe.size<monster.posX || axe.posX>monster.posX+monster.size ||
                axe.posY+axe.size<monster.posY || axe.posY>monster.posY+monster.size){
       
                }else
                {
                    monster.hp-=axe.strenghtAttack.monster
                    monster.percentageHp-=handleHp(axe.strenghtAttack.monster,monster)
                    if(monster.hp<0){
                        monsterDropItem(monster,itemsOnMap)
                    particularArrayArr.splice(monsterIndex,1)
                    countNumberMonsterOnLeve()
                    }
                }

        })
    })
})

}