import { handleHp } from "../../Functions/shorthandFunction/handleHp"
import { monsterTurnWhenPlayerIsBehindHisBack } from "../MONSTER/FUNCTION/monsterTurnWhenPlayesIsBehindHisBack"



export const zombieAttackNpc=(NPC,arrZombie)=>{
NPC.forEach((npc,i,arr)=>{
    arrZombie.forEach((zombie,index,arrZ)=>{
        let dX=zombie.posX-npc.posX
        let  dY=zombie.posY-npc.posY
         let hypotenuse=dX*dX+dY*dY

         monsterTurnWhenPlayerIsBehindHisBack(zombie,dX)
         hypotenuse=Math.floor(Math.sqrt(hypotenuse))
        if(hypotenuse<70&&zombie.directionMove==="right"){
         zombie.speed=0
        
             npc.hp-=zombie.strenghtAttack
             npc.percentageHp-=handleHp(zombie.strenghtAttack,npc)
            
         zombie.isDuringAttackPlayer=true
     
  
        }
        else if(hypotenuse<40&&zombie.directionMove==="left"){
         zombie.speed=0
      
         npc.hp-=zombie.strenghtAttack
         npc.percentageHp-=handleHp(zombie.strenghtAttack,npc)
        
         
         zombie.isDuringAttackPlayer=true
       
  
        }
        else if(hypotenuse>71&&hypotenuse<73&&zombie.directionMove==="right"){
         
            
         zombie.isDuringAttackPlayer=false
        
        }
        else if(hypotenuse>41&&hypotenuse<73&&zombie.directionMove==="left"){
         
            
            zombie.isDuringAttackPlayer=false
           
           }
    })
})


}