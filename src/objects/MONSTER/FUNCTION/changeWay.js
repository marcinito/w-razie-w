import { random } from "../../../Functions/shorthandFunction/random"
import { MONSTER } from "../../../main"
import { zombieAttackNpc } from "../../NPC/zombieAttackNpc"

let flag=false
export const changeWay=(monsterR)=>{
    let arrayWithDirection=["left","right"]
  let arr=[]
   MONSTER.forEach((particular,index,array)=>{
   
    particular.forEach((monster,index,array)=>{
      arr.push(monster)
    })
   })

for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){

        if(arr[i].posX+arr[i].size<arr[j].posX||arr[i].posX+arr[i].size<arr[i].posX||
            arr[i].posY>arr[j].posY+arr[j].size||arr[i].posY+arr[i].size<arr[j].posY){
              if(flag===false){
                flag=true
                if(
                    arr[i].directionMove==="left"){arr[i].directionMove="right"
                    
                    
            }
                if(arr[j].directionMove==="right"){arr[j].directionMove="left"}
                
              
              
            setTimeout(()=>{
                flag=false
            },5000)

             
            }

    }
}

}}