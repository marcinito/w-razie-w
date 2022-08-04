export const PLAYERGRAVITY=(player,WALL,can)=>{

//paW- particular array with wall



let pX=player.posX
let pXSize=player.posX+player.size
let pY=player.posY
let pYSize=player.posY+player.size


//STRENGHT GRAVITY
player.posY+=player.strenghtGravity


WALL.forEach((pAW,pAI,wallArray)=>{
    //pE-particular Element wall title
  pAW.forEach((title,pI,pArr)=>{

    //CONTACT PLAYER WITH TITLE FROM WALL
    if(player.posX+player.size<title.posX || player.posX>title.posX+title.size ||
         player.posY+player.size<title.posY || player.posY>title.posY+title.size){

         }
         else{
     
          //HORIZONTAL WALL CONTACT WITH PLAYER
          if(title.direction==="horizontal"){
            
      //When player touch horizontal element on top
   
            if(pYSize>title.posY-player.size && title.posY>pY){
              //Gravity dont work when player stand on block
            player.posY-=player.strenghtGravity
            //
              player.down=false
             title.color="white"
             player.up=true
             player.stop=true
             player.counterJump=0
             
             

         
            
             
            }
            //Move Left
            if(player.posX<title.posX+title.size&&player.posX>title.posX+title.size/2&&player.directionMove==="left"
            &&player.posY+player.size>title.posY&&player.posY+player.size<title.posY+title.size){
              let deepCollision=title.posX+title.size-player.posX
             
              player.posX+=deepCollision+3
              console.log("teraz 1")
             
            }
            if(player.posX<title.posX+title.size&&player.posX>title.posX+title.size/2&&player.directionMove==="left"&&player.posY+player.size>title.posY+title.size){
              let deepCollision=title.posX+title.size-player.posX
             
              
             console.log("teraz")
            }

          
      //Block jump when meet down horizontal wall
      //JUMP JUMP
      if(pY<title.posY+title.size+player.size&&pY>title.posY+title.size/2){
        player.posY=title.posY+title.size
        title.color="black"
        player.stop=false
        player.up=false
        title.color="red"
      }

          }

          //VERTICAL
          if(title.direction==="vertical"){
          
            //STAND ON TOP
            if(pYSize>title.posY-player.size&&pYSize<title.posY+title.size){
              player.down=false
              player.up=true
              player.posY-=player.strenghtGravity
              player.counterJump=0

              
             
            }

            //BLOCK RIGHT
            if(pXSize>title.posX&&pXSize<title.posX+title.size && player.directionMove==="right"&&pYSize>title.posY){
              player.posX=title.posX-player.size-2
              // player.right=false
              title.color="#696969"
              console.log("block right..v.")
             
            }
            //BLOCK LEFT
            if(pX<title.posX+title.size&&pX>title.posX+title.size/2&&player.directionMove==="left"&&pYSize>title.posY){
              let collisionSize=title.posX+title.size-player.posX
              player.posX=title.posX+title.size+1
             
              // player.left=false
              title.color="darkblue"
              console.log("block left")
              

            }
            // BLOCK JUMP JUMP
            if(pY<title.posY+title.size&&pY>title.posY+title.size/2&&player.directionMove=="up"){
              player.posY=title.posY+title.size+2
              title.color="yellow"
              console.log("wykonuje sie")
              
             
              
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