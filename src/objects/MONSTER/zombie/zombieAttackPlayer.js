import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { monsterTurnWhenPlayerIsBehindHisBack } from "../FUNCTION/monsterTurnWhenPlayesIsBehindHisBack"

export const zombieAttackPlayer=(player,arrZombie)=>{
    arrZombie.forEach((zombie,iZombie,zArr)=>{
       let dX=zombie.posX-player.posX
       let  dY=Math.sqrt((zombie.posY-player.posY)*(zombie.posY-player.posY))
        let hypotenuse=dX*dX+dY*dY

        monsterTurnWhenPlayerIsBehindHisBack(zombie,dX,dY)
        hypotenuse=Math.floor(Math.sqrt(hypotenuse))
    
       if(hypotenuse<70&&zombie.directionMove==="right"){
        zombie.speed=0
        console.log("r")
       
            player.hp-=zombie.strenghtAttack
            player.percentageHp-=handleHp(zombie.strenghtAttack,player)
           
        zombie.isDuringAttackPlayer=true
   
 
       }
       else if(hypotenuse<40&&zombie.directionMove==="left"){
        zombie.speed=0
        console.log("l")
        player.hp-=zombie.strenghtAttack
        player.percentageHp-=handleHp(zombie.strenghtAttack,player)
       
        
        zombie.isDuringAttackPlayer=true
        zombie.inRangeOfPlayer=true
 
       }
       else if(hypotenuse>71){
         
        zombie.isDuringAttackPlayer=false
       
       }

        
    })


}