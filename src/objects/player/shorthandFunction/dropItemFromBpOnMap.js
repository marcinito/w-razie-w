import { player } from "../../../main"
import { AxeItems } from "../../ITEMSonMAP/axe/axe"
import { brickWallItems } from "../../ITEMSonMAP/brickWall/brickWall"
import { dynamiteItems } from "../../ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { healthFluidItems } from "../../ITEMSonMAP/healthFluid/healthFluid"
import { helperSpawnRuna } from "../../ITEMSonMAP/helperRuna/helperRuna"
import { jumpFluidItems } from "../../ITEMSonMAP/jumpFluid/jumpFluidItems"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { Meat } from "../../ITEMSonMAP/meat/meat"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"
import { solidWall } from "../../WALL/solidWall/solidWall"
import { countAmmoInGlockInPlayer } from "./countAmmoInGlockInPlayer"
import { countEnduranceInAxe } from "./countEnduranceInAxe"


export const dropItemFromBpOnMap=(item,directionMove,itemsOnMap,backpack,player)=>{
if(item==="glock"){

 if(directionMove==="left"){

   backpack.glock.bp[0].posX=player.posX-35
   backpack.glock.bp[0].posY=player.posY-50
 
   backpack.glock.bp[0].layOnMap=true
   backpack.glock.bp[0].direction=player.directionMove
   backpack.glock.bp[0].isDrop=true
   backpack.glock.bp[0].speedX=1
   itemsOnMap.push(backpack.glock.bp[0])
   backpack.glock.bp.splice(0,1)
   countAmmoInGlockInPlayer(backpack,player.whatIsInHand,"glock")
   console.log(backpack.glock.ammo,"ammo")
}
 if(directionMove==="right"){

   backpack.glock.bp[0].posX=player.posX+player.size+5
   backpack.glock.bp[0].posY=player.posY-50
   backpack.glock.bp[0].layOnMap=true
   backpack.glock.bp[0].direction=player.directionMove
   backpack.glock.bp[0].isDrop=true
   backpack.glock.bp[0].speedX=1
   itemsOnMap.push(backpack.glock.bp[0])
   backpack.glock.bp.splice(0,1)
   countAmmoInGlockInPlayer(backpack,player.whatIsInHand,"glock")

  

}

//  if(directionMove==="left"){itemsOnMap.push(new glockItems(player.posX-40,player.posY-50,true,directionMove))}
//  if(directionMove==="right"){itemsOnMap.push(new glockItems(player.posX+40,player.posY-50,true,directionMove))}
      
    
}
if(item==="machineGun"){

   if(directionMove==="left"){
  
     backpack.machineGun.bp[0].posX=player.posX-35
     backpack.machineGun.bp[0].posY=player.posY-80
   
     backpack.machineGun.bp[0].layOnMap=true
     backpack.machineGun.bp[0].direction=player.directionMove
     backpack.machineGun.bp[0].isDrop=true
     backpack.machineGun.bp[0].speedX=1
     itemsOnMap.push(backpack.machineGun.bp[0])
     backpack.machineGun.bp.splice(0,1)
     countAmmoInGlockInPlayer(backpack,player.whatIsInHand,"machineGun")
     console.log(backpack.machineGun.bp,"ammo")
  }
   if(directionMove==="right"){
  
     backpack.machineGun.bp[0].posX=player.posX+player.size+5
     backpack.machineGun.bp[0].posY=player.posY-50
     backpack.machineGun.bp[0].layOnMap=true
     backpack.machineGun.bp[0].direction=player.directionMove
     backpack.machineGun.bp[0].isDrop=true
     backpack.machineGun.bp[0].speedX=1
     itemsOnMap.push(backpack.machineGun.bp[0])
     backpack.machineGun.bp.splice(0,1)
     countAmmoInGlockInPlayer(backpack,player.whatIsInHand,"machineGun")
  
    
  
  }
  
        
      
  }
if(item==="dynamite"){
      if(directionMove==="left"){ itemsOnMap.push(new dynamiteItems(player.posX-35,player.posY-51,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new dynamiteItems(player.posX+35,player.posY-51,true,directionMove))}
    
   }
   if(item==="axe"){
      if(directionMove==="left"){
         backpack.axe.bp[0].posX=player.posX-35
         backpack.axe.bp[0].posY=player.posY-50
         backpack.axe.bp[0].layOnMap=true
         backpack.axe.bp[0].direction=player.directionMove
         backpack.axe.bp[0].isDrop=true
         backpack.axe.bp[0].speedX=1
         itemsOnMap.push(backpack.axe.bp[0])
         backpack.axe.bp.splice(0,1)
         countEnduranceInAxe(backpack,player.whatIsInHand)
       
         }
      if(directionMove==="right"){
       
         backpack.axe.bp[0].posX=player.posX+player.size+5
         backpack.axe.bp[0].posY=player.posY-50
         backpack.axe.bp[0].layOnMap=true
         backpack.axe.bp[0].direction=player.directionMove
         backpack.axe.bp[0].isDrop=true
         backpack.axe.bp[0].speedX=1
         itemsOnMap.push(backpack.axe.bp[0])
         backpack.axe.bp.splice(0,1)
         countEnduranceInAxe(backpack,player.whatIsInHand)
      
       
         
         }





      // if(directionMove==="left"){ itemsOnMap.push(new AxeItems(player.posX-35,player.posY-51,true,directionMove))}
      // if(directionMove==="right"){ itemsOnMap.push(new AxeItems(player.posX+35,player.posY-51,true,directionMove))}
   }
   if(item==="goldenCoin"){
      if(directionMove==="left"){ itemsOnMap.push(new goldenCoin(player.posX-45,player.posY-51,40,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new goldenCoin(player.posX+45,player.posY-51,40,true,directionMove))}
   }
   if(item==="solidWall"){
      if(directionMove==="left"){ itemsOnMap.push(new solidWallItems(player.posX-25,player.posY-51,15,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new solidWallItems(player.posX+25,player.posY-51,15,true,directionMove))}
   }
   if(item==="plainWall"){
      if(directionMove==="left"){ itemsOnMap.push(new plainWallItems(player.posX-25,player.posY-51,15,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new plainWallItems(player.posX+25,player.posY-51,15,true,directionMove))}
   }
   if(item==="hpPotion"){
      if(directionMove==="left"){ itemsOnMap.push(new healthFluidItems(player.posX-55,player.posY-51,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new healthFluidItems(player.posX+55,player.posY-51,true,directionMove))}
   }
   if(item==="magmaWall"){
      if(directionMove==="left"){ itemsOnMap.push(new magmaWallItems(player.posX-55,player.posY-51,65,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new magmaWallItems(player.posX+55,player.posY-51,65,true,directionMove))}
   }
   if(item==="brickWall"){
      if(directionMove==="left"){ itemsOnMap.push(new brickWallItems(player.posX-55,player.posY-51,65,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new brickWallItems(player.posX+55,player.posY-51,65,true,directionMove))}
   }
   if(item==="jumpFluid"){
      if(directionMove==="left"){ itemsOnMap.push(new jumpFluidItems(player.posX-35,player.posY-51,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new jumpFluidItems(player.posX+35,player.posY-51,true,directionMove))}
    
   }
   if(item==="meat"){
      if(directionMove==="left"){ itemsOnMap.push(new Meat(player.posX-35,player.posY-51,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new Meat(player.posX+35,player.posY-51,true,directionMove))}
    
   }
   if(item==="helperRuna"){
      if(directionMove==="left"){ itemsOnMap.push(new helperSpawnRuna(player.posX-35,player.posY-71,true,directionMove))}
      if(directionMove==="right"){ itemsOnMap.push(new helperSpawnRuna(player.posX+35,player.posY-71,true,directionMove))}
    
   }

}