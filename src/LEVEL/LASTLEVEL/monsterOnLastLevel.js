import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/MONSTER/dragon/dragon"
import { Soldier } from "../../objects/MONSTER/soldier/soldier"
import { Zombie } from "../../objects/MONSTER/zombie/zombie"

export const monsterOnLastLevel=()=>{
    let array=[
createMonster(Dragon,1,[{x:1200,y:500}]),
createMonster(Dragon,1,[{x:1300,y:500}]),
createMonster(Dragon,1,[{x:1100,y:500}]),
createMonster(Zombie,1,[{x:1190,y:500}]),
createMonster(Zombie,1,[{x:1250,y:500}]),
createMonster(Soldier,1,[{x:1050,y:500}]),
createMonster(Soldier,1,[{x:1000,y:500}]),
createMonster(Soldier,1,[{x:1100,y:500}]),
createMonster(Soldier,1,[{x:1400,y:500}]),
    ]
    return array
}