import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"
export const dynamiteAmmoVsWall=(player,WALL,can,itemsOnMap)=>{
    //DYNAMITE VS WALL
    
    let dynamitsArray=player.dynamitsArray
WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
arrayWithTitle.forEach((title,tI,tArr)=>{


    if(title.hp<0&&title.isHitBy==="dynamite"){
          
        if(title.name==="goldWall"){
         
           
            
        if(itemsOnMap!==undefined){
           
            itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
        }
  
        
           
        }
        if(title.name==="solidWall"){
          
            if(itemsOnMap!==undefined){
           
                itemsOnMap.push(new solidWallItems(title.posX,title.posY,title.size))
            }
      
        }
        if(title.name==="plainWall"){
       
            if(itemsOnMap!==undefined){
           
                itemsOnMap.push(new plainWallItems(title.posX,title.posY,title.size))
            }
      
        }
        if(title.name==="magmaWall"){
       
            if(itemsOnMap!==undefined){
           
                itemsOnMap.push(new magmaWallItems(title.posX,title.posY,title.size))
            }
      
        }
        tArr.splice(tI,1)
    
    
   }

    dynamitsArray.forEach((dynamite,dI,dArr)=>{




        if(dynamite.timeToExplode<-76){
            dArr.splice(dI,1)
           }
      
        if(dynamite.posX+dynamite.size<title.posX || dynamite.posX>title.posX+title.size||
            dynamite.posY>title.posY+title.size || dynamite.posY+dynamite.size<title.posY){
                //NO COLLISION
            }
            else{
                title.isHitBy="dynamite"
           
                dynamite.speed=0
                dynamite.fallenSpeed=0
            
               title.hp-=dynamite.strenghtAttack
               
              
            
           
             
            
                
             
            
        
            }

            //IF AMMO PASSED VERGE OF MAP



    })

    


})
})
}