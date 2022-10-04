import { dynamiteItems } from "../../ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../ITEMSonMAP/glock/glockItems"
import { healthFluidItems } from "../../ITEMSonMAP/healthFluid/healthFluid"
import { helperSpawnRuna } from "../../ITEMSonMAP/helperRuna/helperRuna"
import { jumpFluidItems } from "../../ITEMSonMAP/jumpFluid/jumpFluidItems"
import { machineGunItems } from "../../ITEMSonMAP/machineGun/machineGunItems"



let arrayWithItemSheep=[glockItems,healthFluidItems]
let arrayWithItemDragon=[helperSpawnRuna,helperSpawnRuna,helperSpawnRuna]
let arrayWithItemZombie=[jumpFluidItems,dynamiteItems,machineGunItems,machineGunItems]
let arrayWithItemSoldier=[machineGunItems,machineGunItems]
let arrayWithItemGhost=[healthFluidItems,jumpFluidItems]
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
        for(let i=0;i<2;i++){
          itemsOnMap.push(new arrayWithItemZombie[Math.floor(Math.random()*arrayWithItemZombie.length)](monster.posX,monster.posY,true,monster.directionMove))
        }
      }
      if(monster.name==="soldier"){
        for(let i=0;i<2;i++){
          itemsOnMap.push(new arrayWithItemZombie[Math.floor(Math.random()*arrayWithItemSoldier.length)](monster.posX,monster.posY,true,monster.directionMove))
        }
      }
      if(monster.name==="ghost"){
       
          itemsOnMap.push(new arrayWithItemZombie[Math.floor(Math.random()*arrayWithItemGhost.length)](monster.posX,monster.posY,true,monster.directionMove))
        
      }

}