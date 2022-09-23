//this function serve as detector for checking Is monster can fall from to high , if small title which is put on feet monster is 
//over border title this function show it and switch trigger wchis allow checkinh how high it is if too many next function
//give order to change direction
export const dontFallDownFromTitle=(monster,title)=>{
  
    if(title.posX>monster.detect.posX+monster.detect.size || title.posX+title.size<monster.detect.posX||
        title.posY>monster.detect.posY+monster.detect.size||title.posY+title.size<monster.detect.posY){
          
        
        }else{
            if(monster.detect.posY+monster.detect.size>title.posY-1&&title.posY>monster.detect.posY){
          
          monster.detect.trigger=false  
            
                          
            }
        }
}