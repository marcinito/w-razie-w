import { WALL } from "../../../main"



export const detecJumpCreature=(creature)=>{
 creature.touchWall=false
    WALL.forEach((particular,index,arr)=>{
        particular.forEach((title,indexTitle,arrTitle)=>{
            
            if(creature.posX+creature.size<title.posX || creature.posX>title.posX+title.size ||
                creature.posY+creature.size<title.posY || creature.posY>title.posY+title.size){
            
                }else{
                
                    creature.touchWall=true
                   
            
                   
                }
        })
       })
       
}