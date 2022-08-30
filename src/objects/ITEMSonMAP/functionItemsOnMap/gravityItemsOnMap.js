import { itemsOnMap } from "../../../main"
import { WALL } from "../../../main"
export const gravityItemsOnMap=(speed)=>{
itemsOnMap.forEach((item,index,arrayItemsOnMap)=>{
    if(item.isDrop===true){
        
        item.posY+=item.strenghtGravity
        WALL.forEach((particularArray,i,arr)=>{
            particularArray.forEach((title,titleIndex,titleArray)=>{


                if(item.posX+item.size<title.posX || item.posX>title.posX+title.size ||
                    item.posY+item.size<title.posY || item.posY>title.posY+title.size){
           //No collision
                    }
                    else{
                     
                     
                        
                       if(title.direction==="horizontal"||title.direction==="vertical"){
                        //Touch top wall
                        if(item.posY+item.size>title.posY-2&&item.posY+item.size-5<title.posY
                        ){
                            if(item.posX<title.posX+title.size||item.posX>title.posX){
                                let deepCollision=item.posY+item.size-title.posY
                                item.posY-=deepCollision
                             
                                item.speedX=0
                            }
                            
                         
                            
                          
                            
                        }
                        //hit in right side of block
                        if(item.posX<title.posX+title.size&&item.posX>title.posX+title.size/2&&item.posY+item.size>title.posY){
                            let deepCollision=title.posX+title.size-item.posX
                            item.posX+=deepCollision+3
                            item.speedX=0
                           
                            
                        }
                        //hit in left side of block
                        if(item.posX+item.size>title.posX&&item.posX+item.size<title.posX+title.size/2&&item.posY+item.size>title.posY){
                            let deepCollision=item.posX+item.size-title.posX
                            item.posX-=deepCollision+3
                            item.speedX=0
                            
                        }
                        //top
                        if(item.posY<title.posY+title.size&&item.posY>title.posY+title.size/2&&item.posX>title.posX){}
                       
                    
                       }
                      
                     
                    
                    
                    }

            })
        })
    }
})
}