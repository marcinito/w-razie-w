import { itemsOnMap } from "../../../main"
import { brickWallItems } from "../../ITEMSonMAP/brickWall/brickWall"
import { dynamiteItems } from "../../ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { healthFluidItems } from "../../ITEMSonMAP/healthFluid/healthFluid"
import { jumpFluidItems } from "../../ITEMSonMAP/jumpFluid/jumpFluidItems"
import { machineGunItems } from "../../ITEMSonMAP/machineGun/machineGunItems"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"

export const dynamiteAmmoVsWall=(player,WALL,can)=>{
    //DYNAMITE VS WALL
    
    let dynamitsArray=player.dynamitsArray
WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
arrayWithTitle.forEach((title,tI,tArr)=>{


    if(title.hp<0&&title.isHitBy==="dynamite"){
          
        if(title.name==="goldWall"){
            if(Math.floor(Math.random()*2)===1){
                itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
            }
         
        }
        if(title.name==="solidWall"){
            if(Math.floor(Math.random()*2)===1){
                itemsOnMap.push(new solidWallItems(title.posX,title.posY,title.size))
            }
                
        }
        if(title.name==="plainWall"){
            if(Math.floor(Math.random()*2)===1){
                itemsOnMap.push(new plainWallItems(title.posX,title.posY,title.size))
            }
               
        }
        if(title.name==="magmaWall"){
            if(Math.floor(Math.random()*2)===1){
                itemsOnMap.push(new magmaWallItems(title.posX,title.posY,title.size)) 
            }
                
        }
        if(title.name==="brickWall"){
            if(Math.floor(Math.random()*2)===1){
                itemsOnMap.push(new brickWallItems(title.posX,title.posY,title.size))
            }
           
    }
    if(title.name==="woodenWall"){
  
            let itemToDrop=[dynamiteItems,machineGunItems,glockItems,jumpFluidItems]
                   
            itemsOnMap.push(new itemToDrop[Math.floor(Math.random()*itemToDrop.length)](title.posX,title.posY,title.size,"true"))   
      
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