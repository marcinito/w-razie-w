export const detectJumpPosition=(directionMove,detectJump,posX,posY,size,can,X,Y)=>{
  
    if(directionMove==="left"){
        detectJump.posX=posX-X
        detectJump.posY=posY+size-Y
      }
      else if(directionMove==="right"){
     
        detectJump.posX=posX+size
        detectJump.posY=posY+size-Y
                 
      }
  detectJump.draw(can)
}