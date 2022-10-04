import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/MONSTER/dragon/dragon"
import { Ghost } from "../../objects/MONSTER/ghost/ghost"
import { Zombie } from "../../objects/MONSTER/zombie/zombie"

export const monsterOnFourLevel=()=>{
    let array=[
        createMonster(Dragon,1,[{x:800,y:200}]),
        createMonster(Dragon,1,[{x:600,y:200}]),
        createMonster(Dragon,1,[{x:600,y:500}]),
        createMonster(Zombie,1,[{x:600,y:500}]),
        createMonster(Zombie,1,[{x:800,y:500}]),
        createMonster(Ghost,1,[{x:100,y:100}]),
        createMonster(Ghost,1,[{x:800,y:200}]),
        createMonster(Ghost,1,[{x:400,y:700}]),
        createMonster(Ghost,1,[{x:120,y:190}]),
    ]
    return array
}