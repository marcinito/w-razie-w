import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { monsterTurnWhenPlayerIsBehindHisBack } from "../FUNCTION/monsterTurnWhenPlayesIsBehindHisBack"

import {bulletFromSoldierGun} from '../soldier/bulletFromSoldierGun'

let counter=0

export const soldierAttackPlayer=(player,arrSoldier)=>{
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
      


        let dX=soldier.posX-player.posX
        let  dY=soldier.posY-player.posY
//when player is behind back of monster monster turn to player and attack his

monsterTurnWhenPlayerIsBehindHisBack(soldier,dX)

         let hypotenuse=dX*dX+dY*dY
         hypotenuse=Math.floor(Math.sqrt(hypotenuse))
        if(hypotenuse<40&&soldier.directionMove==="right"){
          soldier.speed=0
             player.hp-=soldier.strenghtAttack
             player.percentageHp-=handleHp(soldier.strenghtAttack,player)
         soldier.isDuringAttackPlayer=true
         console.log(soldier.speed,"numeracy")
        }
        else if(hypotenuse<40&&soldier.directionMove==="left"){
            soldier.speed=0
         player.hp-=soldier.strenghtAttack
         player.percentageHp-=handleHp(soldier.strenghtAttack,player)
         soldier.isDuringAttackPlayer=true
         console.log(soldier.speed)
      
  
        }
     
        else if(hypotenuse>55){
        
         
            soldier.isDuringAttackPlayer=false
           
           }
      
         
         
     })
 
}