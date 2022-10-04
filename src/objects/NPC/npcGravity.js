import { blokJump } from "../MONSTER/FUNCTION/blokJump"
import { detecJumpCreature } from "../MONSTER/FUNCTION/detectJumpCreature"
import { detectJumpCreature2 } from "../MONSTER/FUNCTION/detectJumpCreature2"
import { dontFallDownFromTitle } from "../MONSTER/FUNCTION/dontFallDwonFromTitle"
export const npcGravity=(npc,WALL,can)=>{
    npc.posY+=npc.strenghtGravity
    npc.strenghtGravity=3
   npc.touchWall=false
   npc.detect.trigger=true
  

WALL.forEach((pAW,pAI,wallArray)=>{
    //pE-particular Element wall title
  pAW.forEach((title,pI,pArr)=>{
    npc.detectBlokJump.canMonsterJump(title)


        //check do npc can do jump it is possible when meet only one title height
    

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
           npc.stopJump=false
          
            }
            if(npc.jump===true){
              npc.jumpAction()
            }
            blokJump(npc,title)
            //Move Left
            if(npc.posX<title.posX+title.size&&npc.posX>title.posX+title.size/2&&npc.directionMove==="left"
            &&npc.posY+npc.size>title.posY){
              let deepCollision=title.posX+title.size-npc.posX
           console.log("hit left")
              npc.posX+=deepCollision+3
              //detect jump posibility
          detectJumpCreature2(npc,"right",title)
             
            }
            //move right
            if(npc.posX+npc.size>title.posX&&npc.posX+npc.size<title.posX+title.size/2&&npc.directionMove==="right"&&
            npc.posY+npc.size>title.posY){
              let deepCollision=npc.posX+npc.size-title.posX
              npc.posX-=deepCollision+3
              console.log("hit right")
              detectJumpCreature2(npc,"left",title)
    
            }
          

               
              
       

          }

        
           
            //END ELSE
         }
 dontFallDownFromTitle(npc,title)


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
  npc.hp=-20
}
}