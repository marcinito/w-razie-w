import { random } from "../../Functions/helpFunction/random"
import { zombieTouchAnotherZombie } from "./zombieTouchAnotherZombie"

export const zombieGravity=(WALL,zombieArr)=>{
//GRAVITY ZOMBIE
zombieArr.forEach((zombie,i,arr)=>{
    zombie.posY+=zombie.strenghtGravity
    zombie.speed=0.5
    zombie.doFall=true

})


WALL.forEach((particularArray,index,WALLarr)=>{
particularArray.forEach((title,indexTitle,particularArrayArray)=>{

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
                       
                    
                    }
               
                    //LEFT MOVE ON HORIZONTAL
                    if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&
                    zombie.posY+zombie.size>title.posY+title.size+5){
                        let deepCollision=title.posX+title.size-zombie.posX
                        zombie.posX+=deepCollision+3
                        zombie.directionMove="right"
                        
                    }
                    //RIGHT MOVE
                    if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                    zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=zombie.posX+zombie.size-title.posX
                        zombie.posX-=deepCollision
                        zombie.directionMove="left"
                    
                       
                    }
                    
                }

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
                   

                }
                // RIGHT
                if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                zombie.directionMove==="right"&&zombie.posY+zombie.size>title.posY){
                    let deepCollision=zombie.posX+zombie.size-title.posX
                    zombie.posX-=deepCollision
                    zombie.directionMove="left"
                   
                }
               }
                
            }

    })

})


})
zombieTouchAnotherZombie(zombieArr)

}