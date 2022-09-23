import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/MONSTER/dragon/dragon"
import { Ghost } from "../../objects/MONSTER/ghost/ghost"
import { Sheep } from "../../objects/MONSTER/sheep/sheep"
import { Soldier } from "../../objects/MONSTER/soldier/soldier"
import { soldierGravity } from "../../objects/MONSTER/soldier/soldierGravity"
import { Zombie } from "../../objects/MONSTER/zombie/zombie"

export const monsterOnFirstLevel=()=>{
    let array=[
    // createMonster(Ghost,5,[{x:600,y:100},{x:700,y:200},{x:500,y:140},{x:100,y:200},{x:100,y:200}]),
    // createMonster(Soldier,2,[{x:1195,y:567},{x:1195,y:567}]),
    // createMonster(Sheep,2,[{x:1195,y:567},{x:1195,y:567}]),
 
    // createMonster(Zombie,6,[{x:1295,y:237},{x:1295,y:237},{x:1295,y:237},{x:1295,y:237},{x:1295,y:237},{x:1295,y:237}]),
    createMonster(Zombie,1,[{x:105,y:237}]),
    // createMonster(Soldier,3,[{x:105,y:237},{x:105,y:237},{x:105,y:237}]),
  

  


]
    return array
}