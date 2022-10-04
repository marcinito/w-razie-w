import { can, MONSTER, player } from "../../../main"
import { mouseDetectorMonster } from "./movementPlayer"

export const canIPutBlockInThisPlace=(detect)=>{
    
detect.color="black"
player.canBuild=true
MONSTER.forEach((particular)=>{
    particular.forEach((monster,index,arr)=>{

      if(detect.posX+detect.size<monster.posX || detect.posX>monster.posX+monster.size ||
        detect.posY+detect.size<monster.posY || detect.posY>monster.posY+monster.size){

        }else{
         
          detect.color="red"
          player.canBuild=false
         
        }
       

    })
})
if(detect.posX+detect.size<player.posX || detect.posX>player.posX+player.size ||
  detect.posY+detect.size<player.posY || detect.posY>player.posY+player.size){

  }else{
    detect.color="red"
    player.canBuild=false
    
  }

}