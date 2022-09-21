export const detectJumpPosition=(directionMove,detectJump,posX,posY,size,can,X)=>{
  
    if(directionMove==="left"){
        detectJump.posX=posX-X
        detectJump.posY=posY+size-90       
      }
      if(directionMove==="right"){
        detectJump.posX=posX+size
        detectJump.posY=posY+size-90         
      }
  detectJump.draw(can)
}