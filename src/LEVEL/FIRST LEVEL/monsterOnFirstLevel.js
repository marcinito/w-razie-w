
import { Zombie } from "../../objects/MONSTER/zombie/zombie"
import { createMonster } from "../../Functions/createMonster"

import { Soldier } from "../../objects/MONSTER/soldier/soldier"
import { Sheep } from "../../objects/MONSTER/sheep/sheep"

export const monsterOnFirstLevel=()=>{
    let array=[
    //     createMonster(Ghost,5,[{x:500,y:400},{x:500,y:400},{x:500,y:400},{x:500,y:400},{x:500,y:400}]),
    // createMonster(Dragon,1,[{x:100,y:200}]),
  
    // createMonster(Zombie,1,[{x:300,y:200}]),
    // createMonster(Soldier,1,[{x:500,y:200}]),
    // createMonster(Soldier,2,[{x:100,y:200},{x:200,y:200}]),
    createMonster(Sheep,3,[{x:600,y:200},{x:100,y:200},{x:800,y:200}]),
    createMonster(Soldier,3,[{x:600,y:200},{x:100,y:200},{x:800,y:200}]),
    // createMonster(Sheep,1,[{x:600,y:200}]),
    // createMonster(Soldier,2,[{x:600,y:200},{x:200,y:200}]),

]
    return array
}