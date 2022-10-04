import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { random } from "../../../Functions/shorthandFunction/random"
import { monsterTurnWhenPlayerIsBehindHisBack } from "../FUNCTION/monsterTurnWhenPlayesIsBehindHisBack"

import {bulletFromSoldierGun} from '../soldier/bulletFromSoldierGun'


export const soldierAttackPlayer=(player,arrSoldier)=>{


    arrSoldier.forEach((soldier,iSoldier,sArr)=>{
       soldier.frequencyFireFromGun++
//Shooting
        if(soldier.frequencyFireFromGun%soldier.frequencyNumber===0&&soldier.isDuringAttackPlayer===false){
            soldier.heIsShooting=true
          
        soldier.frequencyNumber=random([400,450,350,370,380,390,420])
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

        }
        else if(hypotenuse<40&&soldier.directionMove==="left"){
            soldier.speed=0
         player.hp-=soldier.strenghtAttack
         player.percentageHp-=handleHp(soldier.strenghtAttack,player)
         soldier.isDuringAttackPlayer=true
        
       
  
        }
     
        else if(hypotenuse>150){
        
         
            soldier.isDuringAttackPlayer=false
           
           }
      
         
         
     })
 
}