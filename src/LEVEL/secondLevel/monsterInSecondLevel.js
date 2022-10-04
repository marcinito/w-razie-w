
import { createMonster } from '../../Functions/createMonster'
import { Sheep } from '../../objects/MONSTER/sheep/sheep'
import {Soldier} from '../../objects/MONSTER/soldier/soldier'
import { Zombie } from '../../objects/MONSTER/zombie/zombie'
export const monsterInSecondLevel=()=>{
    let array=[
        createMonster(Soldier,1,[{x:100,y:200}]),
        createMonster(Soldier,1,[{x:200,y:200}]),
        createMonster(Soldier,1,[{x:50,y:200}]),
        createMonster(Zombie,1,[{x:850,y:10}]),
        createMonster(Zombie,1,[{x:850,y:10}]),
        createMonster(Zombie,1,[{x:950,y:600}]),
        createMonster(Sheep,1,[{x:1250,y:600}]),
        createMonster(Sheep,1,[{x:1150,y:600}]),
     
    ]
    return array
}