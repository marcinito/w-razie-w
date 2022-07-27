export const checkIfPlayerIsAlive=(player)=>{
if(player.hp<0 || player.hp==0){
    player.hp=player.hpTotal
    player.percentageHp=player.ratePercentage
}
}