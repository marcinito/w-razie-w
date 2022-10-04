import { random } from "../../../Functions/shorthandFunction/random"
import { can } from "../../../main"
import { FireBallAttackFromMonster } from "./fireBallAttackFromMonster"

// let timer=0
//     setInterval(()=>{
// timer++
// if(timer>5)timer=0
//     },1000)
    export const dragonFireBallAttack=(monster)=>{
    
  
   if(monster.timerToAttack%monster.frequencyAttack===0){
    monster.fireBall.push(new FireBallAttackFromMonster(monster.posX,monster.posY,monster.directionMove))
    monster.frequencyAttack=random([50,10,150,200,100,300,350,240,230,310,320,1,2])
    // console.log(monster)
   }
            
       
        
        monster.fireBall.forEach((el)=>{
            el.draw(can)
           
        })

    
}