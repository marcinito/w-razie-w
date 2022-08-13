import { Ghost } from "../../objects/ghost/ghost"
import { Zombie } from "../../objects/zombie/zombie"
import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/dragon/dragon"
export const monsterOnFirstLevel=()=>{
    let array=[createMonster(Zombie,0),createMonster(Zombie,0),createMonster(Dragon,0)]
    return array
}