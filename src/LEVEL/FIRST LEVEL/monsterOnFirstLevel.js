import { Ghost } from "../../objects/ghost/ghost"
import { Zombie } from "../../objects/zombie/zombie"
import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/dragon/dragon"
import { Soldier } from "../../objects/soldier/soldier"
import { Sheep } from "../../objects/sheep/sheep"
export const monsterOnFirstLevel=()=>{
    let array=[
    //     createMonster(Ghost,5,[{x:500,y:400},{x:500,y:400},{x:500,y:400},{x:500,y:400},{x:500,y:400}]),
    // createMonster(Dragon,1,[{x:100,y:200}]),
    createMonster(Sheep,5,[{x:300,y:200},{x:700,y:200},{x:400,y:200},{x:100,y:200},{x:300,y:200}]),
    createMonster(Sheep,1,[{x:300,y:200}]),
    createMonster(Sheep,1,[{x:300,y:200}]),
    createMonster(Sheep,1,[{x:300,y:200}])
]
    return array
}