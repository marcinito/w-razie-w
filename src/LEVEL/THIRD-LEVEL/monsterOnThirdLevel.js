import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/MONSTER/dragon/dragon"
import { Ghost } from "../../objects/MONSTER/ghost/ghost"
import { Soldier } from "../../objects/MONSTER/soldier/soldier"

export const monsterOnThirdLevel=()=>{
    let Array=[
createMonster(Ghost,1,[{x:100,y:200}]),
createMonster(Ghost,1,[{x:500,y:400}]),
createMonster(Ghost,1,[{x:500,y:600}]),
createMonster(Ghost,1,[{x:900,y:800}]),
createMonster(Soldier,1,[{x:400,y:400}]),

createMonster(Dragon,1,[{x:100,y:400}]),
createMonster(Dragon,1,[{x:340,y:400}]),


createMonster(Soldier,1,[{x:1200,y:300}])
    ]
    return Array
}