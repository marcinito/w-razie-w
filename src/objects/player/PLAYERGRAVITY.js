export const PLAYERGRAVITY=(player,WALL,can)=>{

//paW- particular array with wall



let pX=player.posX
let pXSize=player.posX+player.size
let pY=player.posY
let pYSize=player.posY+player.size


//STRENGHT GRAVITY
player.posY+=player.strenghtGravity

let dwa=0
WALL.forEach((pAW,pAI,wallArray)=>{
    //pE-particular Element wall title
  pAW.forEach((pE,pI,pArr)=>{

    //CONTACT PLAYER WITH TITLE FROM WALL
    if(player.posX+player.size<pE.posX || player.posX>pE.posX+pE.size ||
         player.posY+player.size<pE.posY || player.posY>pE.posY+pE.size){

         }
         else{
     
          //HORIZONTAL WALL CONTACT WITH PLAYER
          if(pE.direction==="horizontal"){
          
      //When player touch horizontal element on top
   
            if(pYSize>pE.posY-player.size && pE.posY>pY){
              //Gravity dont work when player stand on block
            player.posY-=player.strenghtGravity
            //
              player.down=false
             pE.color="white"
             player.up=true
             player.stop=true
             player.counterJump=0

         
            
             
            }
         //Block MoveRight on horizontal when meet wall
            if(pXSize>pE.posX && pE.posY<pYSize &&pXSize<pE.posX+pE.size/2 && player.directionMove==="right"){
              player.posX=pE.posX-player.size-2
            
              // player.right="false"
              pE.color="red"
              console.log("HORIZONTAl right")
             
            
            }
            //Move Left
            if(pX<pE.posX+pE.size&&pX>pE.posX+pE.size/2 && player.directionMove==="left" &&pYSize>pE.posY){
              player.posX+=player.speed
              // player.left=false
            
             
              pE.color="pink"
             
            }
      //Block jump when meet down horizontal wall
      //JUMP JUMP
      if(pY<pE.posY+pE.size+player.size&&pY>pE.posY+pE.size/2){
        player.posY=pE.posY+pE.size
        pE.color="black"
        player.stop=false
        player.up=false
        pE.color="red"
      }

          }

          //VERTICAL
          if(pE.direction==="vertical"){
          
            //STAND ON TOP
            if(pYSize>pE.posY-player.size&&pYSize<pE.posY+pE.size){
              player.down=false
              player.posY-=player.strenghtGravity
              player.counterJump=0
              
             
            }

            //BLOCK RIGHT
            if(pXSize>pE.posX&&pXSize<pE.posX+pE.size && player.directionMove==="right"&&pYSize>pE.posY){
              player.posX=pE.posX-player.size-2
              // player.right=false
              pE.color="#696969"
              console.log("block right..v.")
             
            }
            //BLOCK LEFT
            if(pX<pE.posX+pE.size&&pX>pE.posX+pE.size/2&&player.directionMove==="left"&&pYSize>pE.posY){
              let collisionSize=pE.posX+pE.size-player.posX
              player.posX=pE.posX+pE.size+1
             
              // player.left=false
              pE.color="darkblue"
              console.log("block left")
              

            }
            //JUMP JUMP
            if(pY<pE.posY+pE.size&&pY>pE.posY+pE.size/2&&player.directionMove=="up"){
              player.posY=pE.posY+pE.size+2
              pE.color="yellow"
              player.up=false
              
             
              
            }
      

          }

           
            //END ELSE
         }


  })
})
//WHEN PLAYER TOUCH VERGE OF MAP
if(player.posX<0||player.posX==0){
  player.posX=0+1
  player.left=false
}
if(player.posX+player.size>can.C_W){
  player.posX=can.C_W-player.size-1
  player.right=false
}
if(player.posY>can.C_H){
  player.posY=100
}
}