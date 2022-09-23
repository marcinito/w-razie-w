import { handleHp } from "../../Functions/shorthandFunction/handleHp"
import { random } from "../../Functions/shorthandFunction/random"






export const whenDragonTouchNpc=(NPC,dragonArray)=>{
  dragonArray.forEach((dragon,indexDragon,arr)=>{
NPC.forEach((npc,indexNpc,npcArr)=>{

  
    if(npc.posX+npc.size<dragon.posX || npc.posX>dragon.posX+dragon.size ||
        npc.posY+npc.size<dragon.posY || npc.posY>dragon.posY+dragon.size){
        
//No coliision

  }else{
  if(dragon.directionMove!=="up"){
    dragon.posY-=100
    dragon.directionMove=random(dragon.directionArr)
    npc.hp-=dragon.attack.whenTouchPlayer
    npc.percentageHp-=handleHp(dragon.attack.whenTouchPlayer,npc)

  }
  
  }


  }
)

})  
}

