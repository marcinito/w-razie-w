import { can, changeLevel, menu, MONSTER, player, transitionArray } from "../../main"
import { transitionEffect } from "./transitionEffect"
const promotionDiv=document.querySelector(".promotionDiv")



let flag=false
export const countNumberMonsterOnLeve=()=>{
    let counter=0
    MONSTER.forEach((el,i,arr)=>{
        counter+=el.length
    })
   menu.numberOfMonster=counter

   if(!flag){
    if(menu.numberOfMonster===0&&flag===false){
        promotionDiv.style.opacity=1
        promotionDiv.style.zIndex=10
      
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
    flag=true
    changeLevel()
    transitionArray.splice(0)
    promotionDiv.style.opacity=0
    promotionDiv.style.zIndex=-100
    setTimeout(()=>{
        flag=false
    },8000)
},5000)
}
   }
   
   
   
}