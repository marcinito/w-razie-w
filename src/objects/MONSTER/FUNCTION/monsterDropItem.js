import { dynamiteItems } from "../../ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../ITEMSonMAP/glock/glockItems"
import { jumpFluidItems } from "../../ITEMSonMAP/jumpFluid/jumpFluidItems"



let arrayWithItemSheep=[glockItems]
let arrayWithItemDragon=[jumpFluidItems,dynamiteItems,dynamiteItems,dynamiteItems,glockItems]
let arrayWithItemZombie=[jumpFluidItems]
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