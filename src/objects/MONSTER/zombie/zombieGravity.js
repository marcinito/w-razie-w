import { player } from "../../../main"
import { detecJumpCreature } from "../FUNCTION/detectJumpCreature"
import { detectJumpCreature2 } from "../FUNCTION/detectJumpCreature2"
import { detectJumpPosition } from "../FUNCTION/detectJumpPosition"
import { checkIfMonsterCanGoFurther } from "../FUNCTION/detectVerge/checkIfCreatureCanGoFurther"
import { dontFallDownFromTitle } from "../FUNCTION/dontFallDwonFromTitle"


import { zombieTouchAnotherZombie } from "./zombieTouchAnotherZombie"

let counter=0
export const zombieGravity=(WALL,zombieArr,can)=>{
zombieArr.forEach((zombie,i,arr)=>{
    counter++
    zombie.posY+=zombie.strenghtGravity
    zombie.speed=3
    zombie.doFall=true
    zombie.detect.trigger=true
   
    
    

   

  

   
  

})


WALL.forEach((particularArray,index,WALLarr)=>{
  


particularArray.forEach((title,indexTitle,arrTitle)=>{

  

    zombieArr.forEach((zombie,indexZombie,zombieArray)=>{
      
     
      
        zombie.detectBlokJump.canMonsterJump(title)
        


   
        if(title.posX>zombie.posX+zombie.size || title.posX+title.size<zombie.posX||
            title.posY>zombie.posY+zombie.size||title.posY+title.size<zombie.posY){
                //no collision
            }
         
            else{
       
                //ZOMBIE WALK LEFT
                if(title.direction==="horizontal"){
                    //ZOMBIE STAND ON TOP HORIZONTAL BLOCK
                    if(zombie.posY+zombie.size>title.posY-1&&title.posY>zombie.posY+zombie.size/2){
                        // zombie.posY-=zombie.strenghtGravity
                   
                        let deepCollision=zombie.posY+zombie.size-title.posY
                        zombie.posY-=deepCollision
                     zombie.doFall=false
                       zombie.speed=zombie.naturalSpeed
                        zombie.stopJump=false
                    }
                  
        
                    // jump
            if(zombie.jump===true){
                zombie.jumpAction()
            }
                   if(zombie.detectBlokJump.canJump===false){
                        zombie.stopJump=true
                        title.isHitBy="glock"
                        title.hp-=10
                        
                        
                   }
                           //LEFT MOVE ON HORIZONTAL
                           if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&
                           zombie.posY+zombie.size>title.posY+5){
                               let deepCollision=title.posX+title.size-zombie.posX
                               zombie.posX+=deepCollision
                                  detectJumpCreature2(zombie,"right")
                                
                                 console.log("left")
                                
                         
                             
                             return
                           }
                           //RIGHT MOVE
                           if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                           zombie.posY+zombie.size>title.posY+5){
                               let deepCollision=zombie.posX+zombie.size-title.posX
                          console.log("right")
                              zombie.posX-=deepCollision
                              detectJumpCreature2(zombie,"left")
                             
                              
                             
                          
                         
                       return
                           }
                    
                }

             
                
            }
        // code serve as detect verge on map where monster need change direction in order not to fall to oblivion
       
      dontFallDownFromTitle(zombie,title)
            if(zombie.posX<0){
                zombie.directionMove="right"
           
            }
            if(zombie.posX+zombie.size>can.C_W){
                zombie.directionMove="left"
                
            }
           

    })

})


})
zombieTouchAnotherZombie(zombieArr)

}