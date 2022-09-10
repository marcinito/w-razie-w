import { detecJumpCreature } from "../FUNCTION/detectJumpCreature"
import { detectJumpCreature2 } from "../FUNCTION/detectJumpCreature2"
import { dontFallDownFromTitle } from "../FUNCTION/dontFallDwonFromTitle"


import { zombieTouchAnotherZombie } from "../zombie/zombieTouchAnotherZombie"

export const soldierGravity=(WALL,soldierArr,can)=>{
//GRAVITY ZOMBIE
soldierArr.forEach((soldier,i,arr)=>{
    soldier.posY+=soldier.strenghtGravity
    soldier.doFall=true
    // soldier.detect.trigger=true
    soldier.touchWall=false
    soldier.stopJump=false
    soldier.detect.trigger=true
    
   
    

})


WALL.forEach((particularArray,index,WALLarr)=>{
particularArray.forEach((title,indexTitle,particularArrayArray)=>{

    soldierArr.forEach((soldier,indexSoldier,soldierArray)=>{
        detecJumpCreature(soldier,title)
     
        if(title.posX>soldier.posX+soldier.size || title.posX+title.size<soldier.posX||
            title.posY>soldier.posY+soldier.size||title.posY+title.size<soldier.posY){
                //no collision
            }
            else{
                //ZOMBIE WALK LEFT
                if(title.direction==="horizontal"){
                    //ZOMBIE STAND ON TOP HORIZONTAL BLOCK
                    if(soldier.posY+soldier.size>title.posY-1&&title.posY>soldier.posY+soldier.size/2){
                        // zombie.posY-=zombie.strenghtGravity
                        let deepCollision=soldier.posY+soldier.size-title.posY
                        soldier.posY-=deepCollision
                        soldier.doFall=false
                        soldier.jumpStop=false
                       
                       
                    
                    }
               
                    //LEFT MOVE ON HORIZONTAL
                    if(soldier.posX<title.posX+title.size&&soldier.posX>title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY+5){
                        let deepCollision=title.posX+title.size-soldier.posX
                        soldier.posX+=deepCollision+3
                        detectJumpCreature2(soldier,"right")
                        
                    }
                    //RIGHT MOVE
                    if(soldier.posX+soldier.size>title.posX&&soldier.posX+soldier.size<title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY+5){
                        let deepCollision=soldier.posX+soldier.size-title.posX
                        soldier.posX-=deepCollision
                        detectJumpCreature2(soldier,"left")
                    
                       
                    }
                    //jump
            
                    if(soldier.posY<title.posY+title.size+3&&soldier.posY>title.posY+title.size/2){
                        soldier.posY=title.posY+title.size+1
                        title.color="black"

                        soldier.stop=true
                      
                        title.color="red"
                      }
                    
                    
                }

               if(title.direction==="vertical"){
                if(soldier.posY+soldier.size>title.posY-1&&title.posY>soldier.posY+soldier.size/2){
                    let deepCollision=soldier.posY+soldier.size-title.posY
                    soldier.posY-=deepCollision
                    soldier.doFall=false
                  
                  
                }
                if(soldier.posX<title.posX+title.size&&soldier.posX>title.posX+title.size/2&&soldier.directionMove==="left"
                &&soldier.posY+soldier.size>title.posY){
                //LEFT
                    let deepCollision=title.posX+title.size-soldier.posX
                    soldier.posX+=deepCollision
                    soldier.directionMove="right"
                   

                }
                // RIGHT
                if(soldier.posX+soldier.size>title.posX&&soldier.posX+soldier.size<title.posX+title.size/2&&
                soldier.directionMove==="right"&&soldier.posY+soldier.size>title.posY){
                    let deepCollision=soldier.posX+soldier.size-title.posX
                    soldier.posX-=deepCollision
                    soldier.directionMove="left"
                   
                }
               }
                
            }
             //code serve as detect verge on map where monster need change direction in order not to fall to oblivion
            dontFallDownFromTitle(soldier,title)
            if(soldier.posX<0){
                soldier.directionMove="right"
            }
            if(soldier.posX+soldier.size>can.C_W){
                soldier.directionMove="left"

            }

    })

})


})
zombieTouchAnotherZombie(soldierArr)

}