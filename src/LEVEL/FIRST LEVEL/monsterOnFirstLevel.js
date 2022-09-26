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
    // createMonster(Zombie,1,[{x:1195,y:167}]),
    // createMonster(Soldier,3,[{x:95,y:167},{x:195,y:167},{x:295,y:167}]),
    // createMonster(Sheep,2,[{x:1195,y:567},{x:1195,y:567}]),
    // createMonster(Soldier,4,[{x:1195,y:367},{x:1195,y:567},{x:1195,y:567},{x:1195,y:567}]),
   
    createMonster(Soldier,1,[{x:1295,y:367}]),
    createMonster(Soldier,1,[{x:1195,y:367}]),
    createMonster(Soldier,1,[{x:1155,y:367}]),
    createMonster(Soldier,1,[{x:1195,y:367}]),
    createMonster(Sheep,1,[{x:1195,y:567}]),
    createMonster(Sheep,1,[{x:1195,y:567}]),
    createMonster(Sheep,1,[{x:1195,y:567}]),
    createMonster(Sheep,1,[{x:1195,y:567}]),
    createMonster(Sheep,1,[{x:1195,y:567}]),
    createMonster(Sheep,1,[{x:1195,y:567}]),
 
    // createMonster(Zombie,6,[{x:1295,y:237},{x:1295,y:237},{x:1295,y:237},{x:1295,y:237},{x:1295,y:237},{x:1295,y:237}]),
    // createMonster(Soldier,3,[{x:1205,y:667},{x:1205,y:667},{x:1205,y:667}]),
    // createMonster(Sheep,3,[{x:105,y:167},{x:105,y:67},{x:205,y:267}]),
    // createMonster(Zombie,1,[{x:1205,y:27}]),
    // createMonster(Soldier,3,[{x:205,y:1117},{x:305,y:557},{x:1205,y:27}]),
    // createMonster(Sheep,3,[{x:505,y:1317},{x:305,y:557},{x:1205,y:27}]),
    // createMonster(Ghost,2,[{x:29,y:493},{x:109,y:293}]),
    // createMonster(Zombie,3,[{x:105,y:237},{x:105,y:237},{x:105,y:237}]),
  

  


]
    return array
}