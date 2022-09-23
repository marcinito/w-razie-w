import { handleHp } from "../../Functions/shorthandFunction/handleHp"
import { monsterTurnWhenPlayerIsBehindHisBack } from "../MONSTER/FUNCTION/monsterTurnWhenPlayesIsBehindHisBack"
import { bulletFromSoldierGun } from "../MONSTER/soldier/bulletFromSoldierGun"


let counter=0
let counter2=0
export const soldierAttackNpc=(NPC,arrSoldier)=>{
NPC.forEach((npc,i,arr)=>{
    counter++

    arrSoldier.forEach((soldier,iSoldier,sArr)=>{
       
//Shooting
        if(counter%500===0&&soldier.isDuringAttackPlayer===false){
            soldier.heIsShooting=true
            soldier.sizeX=60
            soldier.speed=0
            soldier.arrayWithBullet.push(new bulletFromSoldierGun(soldier.posX,soldier.posY+soldier.size/2,soldier.directionMove))
            setTimeout(()=>{
                soldier.heIsShooting=false
            },500)
            
        }
      


        let dX=soldier.posX-npc.posX
        let  dY=soldier.posY-npc.posY
//when player is behind back of monster monster turn to player and attack his

monsterTurnWhenPlayerIsBehindHisBack(soldier,dX)

         let hypotenuse=dX*dX+dY*dY
         hypotenuse=Math.floor(Math.sqrt(hypotenuse))

        counter2++ 
        if(hypotenuse<40){
          soldier.speed=0
          soldier.isDuringAttackPlayer=true
             npc.hp-=soldier.strenghtAttack
             npc.percentageHp-=handleHp(soldier.strenghtAttack,npc)
       
      
        }
     
        else if(hypotenuse>71&&hypotenuse<73&&soldier.directionMove==="right"){
         
            
            soldier.isDuringAttackPlayer=false
           
           }
           else if(hypotenuse>41&&hypotenuse<73&&soldier.directionMove==="left"){
            
               
               soldier.isDuringAttackPlayer=false
              
              }
      
      
         
         
     })
 
})
}