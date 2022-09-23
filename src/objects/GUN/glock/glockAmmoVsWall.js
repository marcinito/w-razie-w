import { random } from "../../../Functions/shorthandFunction/random"
import { itemsOnMap } from "../../../main"
import { brickWallItems } from "../../ITEMSonMAP/brickWall/brickWall"
import { dynamiteItems } from "../../ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { jumpFluidItems } from "../../ITEMSonMAP/jumpFluid/jumpFluidItems"
import { machineGunItems } from "../../ITEMSonMAP/machineGun/machineGunItems"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"


export const glockAmmoVsWall=(player,WALL,can)=>{
   
    let bulletArr=player.bulletGlockArray
    WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
    arrayWithTitle.forEach((title,tI,tArr)=>{
    

        if(title.isHitBy==="glock"&&title.hp<0 || title.hp===0&&title.isHitBy==="glock"){
      
                if(title.name==="plainWall"){
                        itemsOnMap.push(new plainWallItems(title.posX,title.posY,title.size))
                }
                if(title.name==="solidWall"){
                        itemsOnMap.push(new solidWallItems(title.posX,title.posY,title.size))
                }
                if(title.name==="magmaWall"){
                   
                        itemsOnMap.push(new magmaWallItems(title.posX,title.posY,title.size))
                }
                if(title.name==="goldWall"){
                        itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
                    
                }
                if(title.name==="brickWall"){
                    itemsOnMap.push(new brickWallItems(title.posX,title.posY,title.size))
                
            }
            if(title.name==="woodenWall"){
                   let itemToDrop=[dynamiteItems,machineGunItems,glockItems,jumpFluidItems]
                   
                itemsOnMap.push(new itemToDrop[Math.floor(Math.random()*itemToDrop.length)](title.posX,title.posY,title.size,"true"))
            
        }
            
            
        tArr.splice(tI,1)
        
            
        }
        

        bulletArr.forEach((bullet,bI,bArr)=>{
         
    if(bullet.posX+bullet.size<title.posX || bullet.posX>title.posX+title.size||
        bullet.posY>title.posY+title.size || bullet.posY+bullet.size<title.posY){
            //NO COLLISION
        }
        else{
     
        title.hp-=1
        title.isHitBy="glock"
       
      

        
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