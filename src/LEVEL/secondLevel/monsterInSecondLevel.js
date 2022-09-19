import { Soldier } from "../../objects/MONSTER/soldier/soldier"
import { Sheep } from "../../objects/MONSTER/sheep/sheep"
import { Dragon } from "../../objects/dragon/dragon"
import { Ghost } from "../../objects/ghost/ghost"
import { createMonster } from "../../Functions/createMonster"
export const monsterInSecondLevel=()=>{
    let array=[
        createMonster(Soldier,1,[{x:100,y:200}]),
        createMonster(Ghost,1,[{x:100,y:200}]),
    ]
    return array
}