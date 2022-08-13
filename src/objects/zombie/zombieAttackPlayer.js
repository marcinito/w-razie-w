import { handleHp } from "../../Functions/helpFunction/handleHp"

export const zombieAttackPlayer=(player,arrZombie)=>{
    arrZombie.forEach((zombie,iZombie,zArr)=>{
       let dX=zombie.posX-player.posX
       let  dY=zombie.posY-player.posY
        let hypotenuse=dX*dX+dY*dY
        hypotenuse=Math.floor(Math.sqrt(hypotenuse))
       if(hypotenuse<70&&zombie.directionMove==="right"){
        zombie.speed=0
       
            player.hp-=zombie.strenghtAttack
            player.percentageHp-=handleHp(zombie.strenghtAttack,player)
           
        zombie.isDuringAttackPlayer=true
        zombie.inRangeOfPlayer=true
 
       }
       else if(hypotenuse<40&&zombie.directionMove==="left"){
        zombie.speed=0
     
        player.hp-=zombie.strenghtAttack
        player.percentageHp-=handleHp(zombie.strenghtAttack,player)
       
        
        zombie.isDuringAttackPlayer=true
        zombie.inRangeOfPlayer=true
 
       }
       else{
        
        
        zombie.isDuringAttackPlayer=false
        zombie.inRangeOfPlayer=false
       }
        
    })


}