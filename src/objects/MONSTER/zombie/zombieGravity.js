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
zombie.touchWall=false
    zombie.detect.trigger=true
  
  
   
  

})


WALL.forEach((particularArray,index,WALLarr)=>{
  


particularArray.forEach((title,indexTitle,arrTitle)=>{

    

    zombieArr.forEach((zombie,indexZombie,zombieArray)=>{
      
     


        


   
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
                  
                  
               
                    //LEFT MOVE ON HORIZONTAL
                    if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&
                    zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=title.posX+title.size-zombie.posX
                        console.log("hit left")
                       
                        // detectJumpCreature2(zombie,"right")
                        zombie.posX+=deepCollision
                        // zombie.directionMove="right"
                        detectJumpCreature2(zombie,"left")
                   
       
                        
                    }
                    //RIGHT MOVE
                    if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                    zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=zombie.posX+zombie.size-title.posX
                    
                       zombie.posX-=deepCollision
                    //    zombie.directionMove="left"
                    detectJumpCreature2(zombie,"right")
                       
                    
                        
                     
                      
                        
                    
                      
                    }
                  
                    
                    
                }
//Vertical wall will deleted
               if(title.direction==="vertical"){
                if(zombie.posY+zombie.size>title.posY-1&&title.posY>zombie.posY+zombie.size/2){
                    let deepCollision=zombie.posY+zombie.size-title.posY
                    zombie.posY-=deepCollision
                    zombie.doFall=false
                  
                  
                }
                if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&zombie.directionMove==="left"
                &&zombie.posY+zombie.size>title.posY){
                //LEFT
                    let deepCollision=title.posX+title.size-zombie.posX
                    zombie.posX+=deepCollision
                    zombie.directionMove="right"
                    console.log("left")
                   

                }
                // RIGHT
                if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                zombie.directionMove==="right"&&zombie.posY+zombie.size>title.posY){
                    let deepCollision=zombie.posX+zombie.size-title.posX
                    zombie.posX-=deepCollision
                    zombie.directionMove="left"
                    console.log("right")
                   
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