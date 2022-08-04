import { random } from "../../Functions/helpFunction/random"

export const zombieGravity=(WALL,zombieArr)=>{
//GRAVITY ZOMBIE
zombieArr.forEach((zombie,i,arr)=>{
    zombie.posY+=zombie.strenghtGravity

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
                    if(zombie.posY+zombie.size>title.posY&&zombie.posY<title.posY+title.size/2){
                        zombie.posY-=zombie.strenghtGravity
                        let deepCollision=zombie.posY+zombie.size-title.posY
                        // zombie.posY-=deepCollision+2
                        // console.log(title.posY,"title")
                        // console.log(zombie.posY+zombie.size,"zombie")
                    }
                    //LEFT MOVE ON HORIZONTAL
                    if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=title.posX+title.size-zombie.posX
                        zombie.posX+=deepCollision
                        zombie.directionMove="right"
                    }
                    //RIGHT MOVE
                    if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=zombie.posX-title.posX+title.size
                        zombie.posX-=deepCollision
                        zombie.directionMove="left"
                    }
                }

               if(title.direction==="vertical"){
                if(zombie.posY+zombie.size>title.posY&&zombie.posY<title.posY+title.size/2){
                    zombie.posY-=zombie.strenghtGravity
                  
                  
                }
                if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&zombie.directionMove==="left"){
                //LEFT
                    let deepCollision=title.posX+title.size-zombie.posX
                    zombie.posX+=deepCollision
                    zombie.directionMove="right"

                }
                //ZOMBIE WAL RIGHT
                if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                zombie.directionMove==="right"){
                    let deepCollision=zombie.posX+zombie.size-title.posX
                    zombie.posX-=deepCollision
                    zombie.directionMove="left"
                }
               }
                
            }

    })

})


})
}