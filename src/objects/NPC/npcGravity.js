import { detecJumpCreature } from "../MONSTER/FUNCTION/detectJumpCreature"
import { detectJumpCreature2 } from "../MONSTER/FUNCTION/detectJumpCreature2"
export const npcGravity=(npc,WALL,can)=>{
    npc.posY+=npc.strenghtGravity
    npc.strenghtGravity=3
   npc.touchWall=false
  

WALL.forEach((pAW,pAI,wallArray)=>{
    //pE-particular Element wall title
  pAW.forEach((title,pI,pArr)=>{



        //check do npc can do jump it is possible when meet only one title height
    detecJumpCreature(npc,title)

    //CONTACT PLAYER WITH TITLE FROM WALL
    if(npc.posX+npc.size<title.posX || npc.posX>title.posX+title.size ||
         npc.posY+npc.size<title.posY || npc.posY>title.posY+title.size){

         }
         else{
     
          //HORIZONTAL WALL CONTACT WITH NPC
          if(title.direction==="horizontal"){
      //When npc touch horizontal element on top
   
            if(npc.posY+npc.size>title.posY-1 && title.posY>npc.posY&&npc.posY+npc.size<title.posY+title.size/2){
              //Gravity dont work when npc stand on block
              npc.strenghtGravity=2
            let deepCollision=npc.posY+npc.size-title.posY
            npc.posY-=deepCollision
           npc.stop=false
          
            }
            //Move Left
            if(npc.posX<title.posX+title.size&&npc.posX>title.posX+title.size/2&&npc.directionMove==="left"
            &&npc.posY+npc.size>title.posY){
              let deepCollision=title.posX+title.size-npc.posX
              npc.up=false
              npc.posX+=deepCollision+3
              //detect jump posibility
          detectJumpCreature2(npc,"right")
             
            }
            //move right
            if(npc.posX+npc.size>title.posX&&npc.posX+npc.size<title.posX+title.size/2&&npc.directionMove==="right"&&
            npc.posY+npc.size>title.posY){
              let deepCollision=npc.posX+npc.size-title.posX
              npc.posX-=deepCollision+3
          
              detectJumpCreature2(npc,"left")
    
            }
          
      //Block jump when meet down horizontal wall
      //JUMP JUMP
      if(npc.posY<title.posY+title.size+3&&npc.posY>title.posY+title.size/2){
        npc.posY=title.posY+title.size+1
        title.color="black"
      //  
        npc.stop=true
      
        title.color="red"
      }

          }

          //VERTICAL
          if(title.direction==="vertical"){
          
            //STAND ON TOP
            if(npc.posY+npc.size>title.posY-1&&npc.posY+npc.size<title.posY+title.size/2){
              npc.down=false
              npc.up=true
              npc.counterJump=0
              let deepCollision=npc.posY+npc.size-title.posY
              npc.posY-=deepCollision
            

              
             
            }

            //BLOCK RIGHT
            if(npc.posX+npc.size>title.posX&&npc.posX+npc.size<title.posX+title.size && npc.directionMove==="right"
            &&npc.posY+npc.size>title.posY){
              let deepCollision=npc.posX+npc.size-title.posX
              npc.posX-=deepCollision+3

              npc.up=false
              title.color="#696969"
              console.log("block right..v.")
             
            }
            //BLOCK LEFT
            if(npc.posX<title.posX+title.size&&npc.posX>title.posX+title.size/2&&npc.directionMove==="left"&&npc.posY+npc.size>title.posY){
          
              let deepCollision=title.posX+title.size-npc.posX
              npc.posX+=deepCollision+3
              npc.up=false
              
              title.color="darkblue"
              console.log("block left")
              

            }
            // BLOCK JUMP JUMP
            if(npc.posY<title.posY+title.size&&npc.posY>title.posY+title.size/2&&npc.directionMove=="up"){
              npc.posY=title.posY+title.size+2
              title.color="yellow"
              console.log("wykonuje sie")
              npc.up=false
             
              
            }
      

          }

           
            //END ELSE
         }
 


  })
})
//WHEN PLAYER TOUCH VERGE OF MAP
if(npc.posX<0||npc.posX==0){
  npc.posX=0+1
  npc.left=false
  npc.directionMove="right"
}
if(npc.posX+npc.size>can.C_W){
  npc.posX=can.C_W-npc.size-1
  npc.right=false
  npc.directionMove="left"
}
if(npc.posY>can.C_H){
  npc.posY=100
}
}