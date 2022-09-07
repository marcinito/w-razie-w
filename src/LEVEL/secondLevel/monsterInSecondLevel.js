import { createMonster } from "../../Functions/createMonster"
import { Ghost } from "../../objects/ghost/ghost"
import { Zombie } from "../../objects/zombie/zombie"

export const monsterInSecondLevel=()=>{
    let array=[
        createMonster(Ghost,1,[{x:200,y:200}])]
    return array
}