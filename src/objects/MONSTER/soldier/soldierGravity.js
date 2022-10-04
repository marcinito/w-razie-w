import { blokJump } from "../FUNCTION/blokJump"
import { blockMonsterAgainstEndMap, blockMonsterAgainstMap } from "../FUNCTION/blokMonsterAgainstEndMap"
import { detecJumpCreature } from "../FUNCTION/detectJumpCreature"
import { detectJumpCreature2 } from "../FUNCTION/detectJumpCreature2"
import { dontFallDownFromTitle } from "../FUNCTION/dontFallDwonFromTitle"


import { zombieTouchAnotherZombie } from "../zombie/zombieTouchAnotherZombie"

export const soldierGravity=(WALL,soldierArr,can)=>{

soldierArr.forEach((soldier,i,arr)=>{
    soldier.speed=0.5
    soldier.posY+=soldier.strenghtGravity
    soldier.doFall=true
    soldier.touchWall=false
    soldier.stopJump=false
    soldier.detect.trigger=true
    
   
    

})


WALL.forEach((particularArray,index,WALLarr)=>{
particularArray.forEach((title,indexTitle,particularArrayArray)=>{

    soldierArr.forEach((soldier,indx,soldierArray)=>{
     soldier.detectBlokJump.canMonsterJump(title)
     
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
                        soldier.speed=soldier.naturalSpeed
                        soldier.posY-=deepCollision
                        soldier.doFall=false
                        soldier.stopJump=false
                      
                      
                       
                    
                    }
                       // jump
                    if(soldier.jump===true){
                        soldier.jumpAction()
                    }
                         blokJump(soldier,title)
                        }
                    //LEFT MOVE ON HORIZONTAL
                    if(soldier.posX<title.posX+title.size&&soldier.posX>title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY){
                        let deepCollision=title.posX+title.size-soldier.posX
                        soldier.posX+=deepCollision
                      
                        detectJumpCreature2(soldier,"right",title)
                                           
                    }
                    //RIGHT MOVE
                    if(soldier.posX+soldier.size>title.posX&&soldier.posX+soldier.size<title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY){
                        let deepCollision=soldier.posX+soldier.size-title.posX
                        soldier.posX-=deepCollision
                    
                        detectJumpCreature2(soldier,"left",title)
                        
                   
                       
                    }
                    
                 
         

            
                
            }
             //code serve as detect verge on map where monster need change direction in order not to fall to oblivion
            dontFallDownFromTitle(soldier,title)
       
          blockMonsterAgainstEndMap(soldier,soldierArray,indx)

    })

})


})
zombieTouchAnotherZombie(soldierArr)

}