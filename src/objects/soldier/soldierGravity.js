import { random } from "../../Functions/helpFunction/random"
import { zombieTouchAnotherZombie } from "../zombie/zombieTouchAnotherZombie"

export const soldierGravity=(WALL,soldierArr,can)=>{
//GRAVITY ZOMBIE
soldierArr.forEach((soldier,i,arr)=>{
    soldier.posY+=soldier.strenghtGravity
    soldier.doFall=true
   
    

})


WALL.forEach((particularArray,index,WALLarr)=>{
particularArray.forEach((title,indexTitle,particularArrayArray)=>{

    soldierArr.forEach((soldier,indexSoldier,soldierArray)=>{
     
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
                       
                       
                    
                    }
               
                    //LEFT MOVE ON HORIZONTAL
                    if(soldier.posX<title.posX+title.size&&soldier.posX>title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY+title.size+5){
                        let deepCollision=title.posX+title.size-soldier.posX
                        soldier.posX+=deepCollision+3
                        soldier.directionMove="right"
                        
                    }
                    //RIGHT MOVE
                    if(soldier.posX+soldier.size>title.posX&&soldier.posX+soldier.size<title.posX+title.size/2&&
                    soldier.posY+soldier.size>title.posY+5){
                        let deepCollision=soldier.posX+soldier.size-title.posX
                        soldier.posX-=deepCollision
                        soldier.directionMove="left"
                    
                       
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