import { handleHp } from "../../Functions/helpFunction/handleHp"

export const whenDragonTouchPlayer=(player,dragonArray)=>{
  dragonArray.forEach((dragon,indexDragon,arr)=>{

    if(player.posX+player.size<dragon.posX || player.posX>dragon.posX+dragon.size ||
        player.posY+player.size<dragon.posY || player.posY>dragon.posY+dragon.size){
        
//No coliision

  }else{
    dragon.posY-=100
    player.hp-=dragon.attack.whenTouchPlayer
    player.percentageHp-=handleHp(dragon.attack.whenTouchPlayer,player)
  }


  }
)

}