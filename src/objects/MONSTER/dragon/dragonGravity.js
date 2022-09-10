
import { borderBarrier } from "../../../Functions/shorthandFunction/borderBarrier"
import { changeDirectionMonster } from "../FUNCTION/changeDirectionMonster"

export const dragonGravity=(WALL,dragonArray,can)=>{
    //paW- particular array with wall




WALL.forEach((arrayWIthWall,index,WALL)=>{

    arrayWIthWall.forEach((title,indexTitle,particularArrayWithTitle)=>{


        dragonArray.forEach((dragon,indexGhost,dragonArray)=>{

            if(dragon.posX>title.posX+title.size || dragon.posX+dragon.size<title.posX ||
                dragon.posY>title.posY+title.size || dragon.posY+dragon.size<title.posY){
              //WHEN NO COLLISION 
              
              }
              else{
                //COLISSION ***************************************************
                //Monster Collisionb with static Element
               
                  //right
                  if(dragon.posX+dragon.size>title.posX && dragon.posX+dragon.size<title.posX+title.size/2){
                    dragon.down=true
                    dragon.up=true
                    dragon.right=false
                    dragon.left=true
                  dragon.posX-=dragon.speed+2
                  changeDirectionMonster(dragon,dragon.directionCross,"right")
                  }
                  //left
                  if(dragon.posX<title.posX+title.size && dragon.posX>title.posX+title.size/2){
                    dragon.down=true
                    dragon.up=true
                    dragon.right=true
                    dragon.left=false
                    dragon.posX+=dragon.speed+2
                  changeDirectionMonster(dragon,dragon.directionCross,"left")
                  }
                  //up
                  if(dragon.posY>title.posY+title.size/2 && dragon.posY<title.posY+title.size){
                    dragon.down=true
                    dragon.up=false
                    dragon.right=true
                    dragon.left=true
                    dragon.posY+=dragon.speed+2
                  changeDirectionMonster(dragon,dragon.directionCross,"up")
                  }
                  //down
                  if(dragon.posY+dragon.size>title.posY && dragon.posY+dragon.size<title.posY+title.size/2){
                    dragon.down=false
                    dragon.up=true
                    dragon.right=true
                    dragon.left=true
                    dragon.posY-=dragon.speed+2
                  changeDirectionMonster(dragon,dragon.directionCross,"down")
                  }
        
                  
         
                  }

                  borderBarrier(dragon,can,changeDirectionMonster)

        })


    })

})

}