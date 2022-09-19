import { can, changeLevel, menu, MONSTER, player, transitionArray } from "../../main"
import { transitionEffect } from "./transitionEffect"





export const countNumberMonsterOnLeve=()=>{
    let counter=0
    MONSTER.forEach((el,i,arr)=>{
        counter+=el.length
    })
   menu.numberOfMonster=counter

    if(menu.numberOfMonster===0){
  
      
        //Starts from heaven when player passed level
        for(let i=0;i<100;i++){
            transitionArray.push(new transitionEffect())
        }
     setTimeout(()=>{
        for(let i=0;i<100;i++){
            transitionArray.push(new transitionEffect())
        }
     },500)
setTimeout(()=>{
    menu.level+=1
    //
    changeLevel()//this function update new monster ,object in next level
    transitionArray.splice(0)
 
},5000)
}
   
   
   
   
}