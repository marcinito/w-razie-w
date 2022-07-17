import { borderBarrier } from "./helpFunction/borderBarrier"
import { changeDirectionMonster } from "./helpFunction/changeDirectionMonster"

export const GRAVITY=(sArr,dArr,can,wallArr)=>{


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
            if(dE.id==="monster"){
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
              //Player Collision with static Element
              if(dE.id==="player"){
                     
           if(sE.direction==="vertical"){
            //right
            if(dE.posX+dE.size>sE.posX && dE.posX+dE.size<sE.posX+sE.size/2 && dE.direction==="right"){
              dE.right=false
              dE.left=true
              dE.up=true
              dE.down=true
              let sizeColision =dE.posX+dE.size-sE.posX
              dE.posX-=sizeColision+2
                console.log("hit right...")
                console.log(dE.direction)
                
       
              }
            
       
                      //left
                      if(dE.posX<sE.posX+sE.size && dE.posX>sE.posX+sE.size/2 && dE.direction==="left"){
                       
                          dE.left=false
                        dE.right=true
                        dE.up=true
                        dE.down=true
                        let sizeColiision = sE.posX+sE.size-dE.posX
                        dE.posX+=sizeColiision+2
                        console.log("hit left...")
                       
                        }
                        //up
                 if(dE.posY>sE.posY+sE.size/2 && dE.posY<sE.posY+sE.size){
                        dE.up=false
                        let sizeColision=sE.posY+sE.size-dE.posY
                        dE.posY+=sizeColision
                        console.log("hit up...")
                 }
                 //down
                 if(dE.posY+dE.size>sE.posY && dE.posY+dE.size<sE.posY+sE.size/2){
                  dE.down=false
                  let sizeColision=dE.posY+dE.size-sE.posY
                  dE.posY-=sizeColision
                  console.log("hit down..")
                 }
                        
           }
         
               
           if(sE.direction==="horizontal"){
             //up
            if(dE.posY>sE.posY+sE.size/2 && dE.posY<sE.posY+sE.size){
              dE.up=false
              dE.down=true
              dE.left=true
              dE.right=true
              let sizeColision=sE.posY+sE.size-dE.posY
              dE.posY+=sizeColision+2
              // console.log("hit up...")
            
              }
              //down
            if(dE.posY+dE.size>sE.posY && dE.posY+dE.size<sE.posY+sE.size/2){
              dE.down=false
              dE.up=true
              dE.left=true
              dE.right=true
              let sizeColision=dE.posY+dE.size-sE.posY
              dE.posY-=sizeColision+2
              console.log("hit down...")
              }
           }
              }
              }

              borderBarrier(dE,can,changeDirectionMonster)
       
  })




})
}