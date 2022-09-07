import { menu } from "../../main"

export const checkIfPlayerIsAlive=(player)=>{
if(player.hp<0 || player.hp==0){
    player.quantityLive-=1
    if(player.quantityLive===0&&player.hp<0){
        menu.playGame="game-over"
    }
    player.hp=player.hpTotal
    player.percentageHp=player.ratePercentage
  
}

}