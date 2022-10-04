
import { handleHp } from "../../../Functions/shorthandFunction/handleHp"

import { countNumberMonsterOnLeve } from "../../../LEVEL/CHANGE-LEVEl/countNumberMonsterOnLevel"
import { itemsOnMap } from "../../../main"
import { monsterDropItem } from "../../MONSTER/FUNCTION/monsterDropItem"

let flag=false
export const dynamiteVsLivingCreature=(MONSTER,player)=>{
//DYNAMITE HIT MONSTER
MONSTER.forEach((particularArray,index,arr)=>{
    particularArray.forEach((monster,indexMonster,arrMonster)=>{


player.dynamitsArray.forEach((dynamite,indexDynamit,arrayDynamit)=>{


    if(dynamite.posX+dynamite.size<monster.posX || dynamite.posX>monster.posX+monster.size||
        dynamite.posY>monster.posY+monster.size || dynamite.posY+dynamite.size<monster.posY){
            //NO COLLISION
        }
        else{
           
          if(dynamite.timeToExplode<0){
            monster.hp-=dynamite.strenghtAttack
        
               monster.percentageHp-=handleHp(dynamite.strenghtAttack,monster)
          }
                    
                    if(monster.hp<0&&flag===false){
                        flag=true
                        monsterDropItem(monster,itemsOnMap)
                        arrMonster.splice(indexMonster,1)
                       countNumberMonsterOnLeve()
                       setTimeout(()=>{
flag=false
                       },200)
                       return
                    }
        }
})
    })

})
}