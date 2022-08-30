import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"

export const glockAmmoVsWall=(player,WALL,can,itemsOnMap)=>{
   
    let bulletArr=player.bulletGlockArray
    WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
    arrayWithTitle.forEach((title,tI,tArr)=>{
    

        if(title.isHitBy==="glock"&&title.hp<0 || title.hp===0){
        
                if(title.name==="plainWall"){
                    
                    if(itemsOnMap!==undefined){
                        itemsOnMap.push(new plainWallItems(title.posX,title.posY,title.size))
                    }
                }
                if(title.name==="solidWall"){
                    
                    if(itemsOnMap!==undefined){
                        itemsOnMap.push(new solidWallItems(title.posX,title.posY,title.size))
                    }
                }
                if(title.name==="magmaWall"){
                    if(itemsOnMap!==undefined){
                        itemsOnMap.push(new magmaWallItems(title.posX,title.posY,title.size))
                    }
                }
                if(title.name==="goldWall"){
                   
                    if(itemsOnMap!==undefined){
                        itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
                    }
                }
             
             
                tArr.splice(tI,1)
            
        }
        

        bulletArr.forEach((bullet,bI,bArr)=>{
         
    if(bullet.posX+bullet.size<title.posX || bullet.posX>title.posX+title.size||
        bullet.posY>title.posY+title.size || bullet.posY+bullet.size<title.posY){
            //NO COLLISION
        }
        else{
     
        tArr[tI].hp-=1
        tArr[tI].color="pink"
        tArr[tI].isHitBy="glock"
       

        
        bArr.splice(bArr[bI],1)
        
        
        
        
        
  
        }

        //IF AMMO PASSED VERGE OF MAP

if(bullet.posX<0 || bullet.posX>can.C_W || bullet.posY>can.C_H || bullet.posY<0){
bArr.splice(bArr[bI],1)

}
 
    
        })
    
        
    
    
    })
    })
    
    
    }