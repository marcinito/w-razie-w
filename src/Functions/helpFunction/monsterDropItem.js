
import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../objects/ITEMSonMAP/goldenCoin/goldenCoin"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"
import { Meat } from "../../objects/ITEMSonMAP/meat/meat"

let arrayWithItemSheep=[Meat,Meat,glockItems,Meat,goldenCoin]
let arrayWithItemDragon=[jumpFluidItems,dynamiteItems,dynamiteItems,dynamiteItems,glockItems]
let arrayWithItemZombie=[jumpFluidItems,Meat,goldenCoin]
export const monsterDropItem=(monster,itemsOnMap)=>{
    if(monster.name==="sheep"){
        itemsOnMap.push(new arrayWithItemSheep[Math.floor(Math.random()*arrayWithItemSheep.length)](monster.posX,monster.posY,true,monster.directionMove))
    }
    if(monster.name==="dragon"){
      for(let i=0;i<3;i++){
        itemsOnMap.push(new arrayWithItemDragon[Math.floor(Math.random()*arrayWithItemDragon.length)](monster.posX,monster.posY,true,monster.directionMove))
      }
    }
    if(monster.name==="zombie"){
        for(let i=0;i<3;i++){
          itemsOnMap.push(new arrayWithItemZombie[Math.floor(Math.random()*arrayWithItemZombie.length)](monster.posX,monster.posY,true,monster.directionMove))
        }
      }

}