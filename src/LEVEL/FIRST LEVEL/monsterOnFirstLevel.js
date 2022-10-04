import { createMonster } from "../../Functions/createMonster"
import { Dragon } from "../../objects/MONSTER/dragon/dragon"
import { Ghost } from "../../objects/MONSTER/ghost/ghost"
import { Sheep } from "../../objects/MONSTER/sheep/sheep"
import { Soldier } from "../../objects/MONSTER/soldier/soldier"
import { soldierGravity } from "../../objects/MONSTER/soldier/soldierGravity"
import { Zombie } from "../../objects/MONSTER/zombie/zombie"

export const monsterOnFirstLevel=()=>{
    let array=[

    createMonster(Sheep,1,[{x:335,y:467}]),
    createMonster(Sheep,1,[{x:335,y:67}]),
    createMonster(Sheep,1,[{x:1135,y:467}]),
    createMonster(Zombie,1,[{x:1215,y:467}]),
    createMonster(Zombie,1,[{x:1115,y:467}]),
    createMonster(Zombie,1,[{x:1015,y:467}]),
 
   

    createMonster(Ghost,1,[{x:15,y:167}]),
    createMonster(Ghost,1,[{x:605,y:167}]),
    createMonster(Soldier,1,[{x:605,y:367}]),
    
 
  

  


]
    return array
}