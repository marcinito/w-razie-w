
import { createMonster } from '../../Functions/createMonster'
import {Soldier} from '../../objects/MONSTER/soldier/soldier'
export const monsterInSecondLevel=()=>{
    let array=[
        createMonster(Soldier,1,[{x:100,y:200}]),
     
    ]
    return array
}