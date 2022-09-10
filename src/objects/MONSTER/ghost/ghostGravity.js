

import { borderBarrier } from "../../../Functions/shorthandFunction/borderBarrier"
import { changeDirectionMonster } from "../FUNCTION/changeDirectionMonster"

export const ghostGravity=(WALL,ghostArray,can)=>{
    //paW- particular array with wall




WALL.forEach((arrayWIthWall,index,WALL)=>{

    arrayWIthWall.forEach((title,indexTitle,particularArrayWithTitle)=>{


        ghostArray.forEach((ghost,indexGhost,ghostArray)=>{

            if(ghost.posX>title.posX+title.size || ghost.posX+ghost.size<title.posX ||
                ghost.posY>title.posY+title.size || ghost.posY+ghost.size<title.posY){
              //WHEN NO COLLISION 
              
              }
              else{
                //COLISSION ***************************************************
                //Monster Collisionb with static Element
               
                  //right
                  if(ghost.posX+ghost.size>title.posX && ghost.posX+ghost.size<title.posX+title.size/2){
                    ghost.down=true
                    ghost.up=true
                    ghost.right=false
                    ghost.left=true
                  ghost.posX-=ghost.speed+2
                  changeDirectionMonster(ghost,ghost.directionCross,"right")
                  }
                  //left
                  if(ghost.posX<title.posX+title.size && ghost.posX>title.posX+title.size/2){
                    ghost.down=true
                    ghost.up=true
                    ghost.right=true
                    ghost.left=false
                    ghost.posX+=ghost.speed+2
                  changeDirectionMonster(ghost,ghost.directionCross,"left")
                  }
                  //up
                  if(ghost.posY>title.posY+title.size/2 && ghost.posY<title.posY+title.size){
                    ghost.down=true
                    ghost.up=false
                    ghost.right=true
                    ghost.left=true
                    ghost.posY+=ghost.speed+2
                  changeDirectionMonster(ghost,ghost.directionCross,"up")
                  }
                  //down
                  if(ghost.posY+ghost.size>title.posY && ghost.posY+ghost.size<title.posY+title.size/2){
                    ghost.down=false
                    ghost.up=true
                    ghost.right=true
                    ghost.left=true
                    ghost.posY-=ghost.speed+2
                  changeDirectionMonster(ghost,ghost.directionCross,"down")
                  }
        
                  
         
                  }

                  borderBarrier(ghost,can,changeDirectionMonster)

        })


    })

})

}