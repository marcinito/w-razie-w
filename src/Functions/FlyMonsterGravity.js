import { borderBarrier } from "./helpFunction/borderBarrier"
import { changeDirectionMonster } from "./helpFunction/changeDirectionMonster"

export const flyMonsterContactWall=(sArr,dArr,can,allObject)=>{





sArr.forEach((sE,sI,statArr)=>{
//sE-static element

dArr.forEach((dE,dI,dynArr)=>{
  
        let rightVertex=dE.posX+dE.size
        let leftVertex=dE.posX
        let topVertex=dE.posY
        let downVertex=dE.posY+dE.size

        //dE-dynamic element

  

              if(dE.posX>sE.posX+sE.size || dE.posX+dE.size<sE.posX ||
                  dE.posY>sE.posY+sE.size || dE.posY+dE.size<sE.posY){
                //WHEN NO COLLISION 
                
                }
          else{
            //COLISSION ***************************************************
            //Monster Collisionb with static Element
            if(dE.id==="monsterFly"){
              //right
              if(rightVertex>sE.posX && rightVertex<sE.posX+sE.size/2){
                dE.down=true
                dE.up=true
                dE.right=false
                dE.left=true
              dE.posX-=dE.speed+2
              changeDirectionMonster(dE,dE.directionCross,"right")
              }
              //left
              if(leftVertex<sE.posX+sE.size && leftVertex>sE.posX+sE.size/2){
              dE.down=true
              dE.up=true
              dE.right=true
              dE.left=false
              dE.posX+=dE.speed+2
              changeDirectionMonster(dE,dE.directionCross,"left")
              }
              //up
              if(topVertex>sE.posY+sE.size/2 && topVertex<sE.posY+sE.size){
              dE.down=true
              dE.up=false
              dE.right=true
              dE.left=true
              dE.posY+=dE.speed+2
              changeDirectionMonster(dE,dE.directionCross,"up")
              }
              //down
              if(downVertex>sE.posY && downVertex<sE.posY+sE.size/2){
              dE.down=false
              dE.up=true
              dE.right=true
              dE.left=true
              dE.posY-=dE.speed+2
              changeDirectionMonster(dE,dE.directionCross,"down")
              }
    
              }
     
              }

              
              borderBarrier(dE,can,changeDirectionMonster)
       
  })




})
}