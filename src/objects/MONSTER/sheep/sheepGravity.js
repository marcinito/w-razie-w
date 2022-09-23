import { detecJumpCreature } from "../FUNCTION/detectJumpCreature"
import { detectJumpCreature2 } from "../FUNCTION/detectJumpCreature2"
import { dontFallDownFromTitle } from "../FUNCTION/dontFallDwonFromTitle"
import { zombieTouchAnotherZombie } from "../zombie/zombieTouchAnotherZombie"




export const sheepGravity=(WALL,sheepArr,can)=>{
sheepArr.forEach((sheep,index,arrSheep)=>{
    sheep.speed=0.5
   sheep.posY+=sheep.strenghtGravity
   sheep.doFall=true

   sheep.detect.trigger=true
   
})
WALL.forEach((particularArray,index,WALLarr)=>{
    particularArray.forEach((title,indexTitle,particularArrayArray)=>{
    
        sheepArr.forEach((sheep,indexSheep,sheepArray)=>{
            detecJumpCreature(sheep,title)
         
            if(title.posX>sheep.posX+sheep.size || title.posX+title.size<sheep.posX||
                title.posY>sheep.posY+sheep.size||title.posY+title.size<sheep.posY){
                    //no collision
                }
                else{
                    //Sheep WALK LEFT
                    if(title.direction==="horizontal"){
                        //Sheep STAND ON TOP HORIZONTAL BLOCK
                        if(sheep.posY+sheep.size>title.posY-1&&title.posY>sheep.posY+sheep.size/2){
                          
                            let deepCollision=sheep.posY+sheep.size-title.posY
                            sheep.posY-=deepCollision
                            sheep.doFall=false
                          sheep.speed=sheep.naturalSpeed
                          sheep.stopJump=false
                          
                           
                           
                        
                        }
                   
                        //LEFT MOVE ON HORIZONTAL
                        if(sheep.posX<title.posX+title.size&&sheep.posX>title.posX+title.size/2&&
                        sheep.posY+sheep.size>title.posY+5){
                            let deepCollision=title.posX+title.size-sheep.posX
                            sheep.posX+=deepCollision
                        
                           detectJumpCreature2(sheep,"right",title)
                           
                            
                        }
                        //RIGHT MOVE
                        if(sheep.posX+sheep.size>title.posX&&sheep.posX+sheep.size<title.posX+title.size/2&&
                        sheep.posY+sheep.size>title.posY+5){
                            let deepCollision=sheep.posX+sheep.size-title.posX
                            sheep.posX-=deepCollision
                           
                          detectJumpCreature2(sheep,"left",title)
                        
                           
                        }
                       //jum[]
                        if(sheep.posY<title.posY+title.size+3&&sheep.posY>title.posY+title.size/2){
                            sheep.posY=title.posY+title.size+1
                            title.color="black"
                            console.log("stop")
                            sheep.stopJump=true
                          
                            title.color="red"
                          }
                  
                  
                      
                        
                    }
    
                   if(title.direction==="vertical"){
                    if(sheep.posY+sheep.size>title.posY-1&&title.posY>sheep.posY+sheep.size/2){
                        let deepCollision=sheep.posY+sheep.size-title.posY
                        sheep.posY-=deepCollision
                        sheep.doFall=false
                      
                      
                    }
                    if(sheep.posX<title.posX+title.size&&sheep.posX>title.posX+title.size/2&&sheep.directionMove==="left"
                    &&sheep.posY+sheep.size>title.posY){
                    //LEFT
                        let deepCollision=title.posX+title.size-sheep.posX
                        sheep.posX+=deepCollision
                        sheep.directionMove="right"
                       
    
                    }
                    // RIGHT
                    if(sheep.posX+sheep.size>title.posX&&sheep.posX+sheep.size<title.posX+title.size/2&&
                    sheep.directionMove==="right"&&sheep.posY+sheep.size>title.posY){
                        let deepCollision=sheep.posX+sheep.size-title.posX
                        sheep.posX-=deepCollision
                        sheep.directionMove="left"
                       
                    }
                   }
                    
                }
                //  code serve as detect verge on map where monster need change direction in order not to fall to oblivion
                 dontFallDownFromTitle(sheep,title)
                if(sheep.posX<0){
                    sheep.directionMove="right"
                }
                if(sheep.posX+sheep.size>can.C_W){
                    sheep.directionMove="left"
    
                }
    
        })
    
    })
    
    
    })
    zombieTouchAnotherZombie(sheepArr)
}