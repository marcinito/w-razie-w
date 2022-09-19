import { can } from "../../../../main"



//this function works in this way that when detect which check if monster is very near verge title
//when is not touching title its mean that is gap in map o chasm it will check depth of it and when it is more than 300 monster change direction
//in order avoid fall in down ,its prevent dead monster from nature force in game and force player to kill them by herself
export const checkIfMonsterCanGoFurther=(detect,posY,size)=>{
let distance=detect.posY-posY+size
 //detect.trigger is true when detect objects dont touch title 
    if(detect.trigger===true){
        detect.posY+=detect.speed
        
        if(distance>300||detect.posY>can.C_H){
            detect.avoidFallInChasm=true
            console.log("dziala")
      
          }
          if(detect.posY>can.C_H){
            detect.posY=posY+size-detect.size
          }
        return
    }
 //detect.trigger is false when player is on ground and is not any gap on his way in very near range
      if(detect.trigger===false)
        {
          detect.posY=posY+size-detect.size
          
        }
       
}