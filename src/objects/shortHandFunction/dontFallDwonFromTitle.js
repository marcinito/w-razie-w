//MONSTER Don't fall from edge of title
export const dontFallDownFromTitle=(title,monster)=>{
  
    if(title.posX>monster.detect.posX+monster.detect.size || title.posX+title.size<monster.detect.posX||
        title.posY>monster.detect.posY+monster.detect.size||title.posY+title.size<monster.detect.posY){
          
        
        }else{
            if(monster.detect.posY+monster.detect.size>title.posY-1&&title.posY>monster.detect.posY+monster.detect.size/2){
          
          monster.detect.trigger=false  
            
                          
            }
        }
}