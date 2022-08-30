
import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../objects/ITEMSonMAP/goldenCoin/goldenCoin"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"
import { Meat } from "../../objects/ITEMSonMAP/meat/meat"

let arrayWithItem=[Meat,Meat,glockItems,glockItems,glockItems]
export const monsterDropItem=(monster,itemsOnMap)=>{
    if(monster.name==="sheep"){
        itemsOnMap.push(new arrayWithItem[Math.floor(Math.random()*3)](monster.posX,monster.posY,true,monster.directionMove))
    }

}