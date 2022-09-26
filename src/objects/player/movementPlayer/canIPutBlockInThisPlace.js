import { can, MONSTER, player } from "../../../main"
import { mouseDetectorMonster } from "./movementPlayer"

export const canIPutBlockInThisPlace=(detect)=>{
    
detect.color="gray"
player.canBuild=true
MONSTER.forEach((particular)=>{
    particular.forEach((monster,index,arr)=>{

      if(detect.posX+detect.size<monster.posX || detect.posX>monster.posX+monster.size ||
        detect.posY+detect.size<monster.posY || detect.posY>monster.posY+monster.size){

        }else{
          console.log("dziala")
          // detect.color="orange"
          player.canBuild=false
        }
       

    })
})

}