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

    soldierArr.forEach((soldier,indx,soldierArr)=>{
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
                        soldierArr[indx].jumpAction()
                    }
                           if(soldier.detectBlokJump.canJump===false){
                                soldierArr[indx].stopJump=true
                                soldierArr[indx].posY=title.posY+title.size+2
                                console.log("wykonuje sie")
                                
                                if(soldier.directionMove==="left"&&soldier.detectJump.touchWall===false){
                                    soldier.directionMove="right"
                                    soldier.posX+=3
                            return
                            }
                                if(soldier.directionMove==="right"&&soldier.detectJump.touchWall===false){
                                    soldier.directionMove="left"
                                soldier.posX-=3
                            return
                            }
                                
                                
                           }
                        }
                    //LEFT MOVE ON HORIZONTAL
                    if(soldier.posX<title.posX+title.size&&soldier.posX>title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY){
                        let deepCollision=title.posX+title.size-soldier.posX
                        soldier.posX+=deepCollision
                      
                        detectJumpCreature2(soldierArr[indx],"right",title)
                                           
                    }
                    //RIGHT MOVE
                    if(soldier.posX+soldier.size>title.posX&&soldier.posX+soldier.size<title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY){
                        let deepCollision=soldier.posX+soldier.size-title.posX
                        soldier.posX-=deepCollision
                    
                        detectJumpCreature2(soldierArr[indx],"left",title)
                        
                   
                       
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