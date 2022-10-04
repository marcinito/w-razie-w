const allSlot=[...document.querySelectorAll(".slotBp")]

import moneyImg from '../ITEMSonMAP/goldenCoin/goldenCoins.png'
import axe from '../ITEMSonMAP/axe/axe.png'
import glock from '../ITEMSonMAP/glock/glockItems.png'
import dynamite from '../GUN/dynamite/TnT.png'
import solidWall from '../WALL/solidWall/images/100SolidBlock.png'
import plainWall from '../WALL/plainWall/images/100GrassBlock.png'
import magmaWall from '../WALL/magmaWall/images/100MagmaBlock.png'
import hpPotion from '../ITEMSonMAP/healthFluid/hpPotion.png'
import jumpFluid from '../ITEMSonMAP/jumpFluid/jumpFluid.png'
import meat from '../ITEMSonMAP/meat/Meat.png'
import helperRuna from '../ITEMSonMAP/helperRuna/helperRuna.png'
import machineGun from '../ITEMSonMAP/machineGun/machineGun.png'
import { countAmmoInGlockInPlayer } from './shorthandFunction/countAmmoInGlockInPlayer'
import { countEnduranceInAxe } from './shorthandFunction/countEnduranceInAxe'
import brickWall from '../WALL/brickWall/images/brickWall100.png'
import { displayItemInDetail } from './shorthandFunction/displayItemInDetail'
//player take item from map and put it in backpack in first free place

export const playerTakeItemFromMap=(player,itemsOnMap)=>{
    itemsOnMap.forEach((itemsFromMap,indexItemsFromMap,itemsOnMapArr)=>{
  

        if(itemsFromMap.layOnMap===false){
            
           
            
              if(itemsFromMap.name==="goldenCoin"){
            
                player.backpack.money.amount++
            
               
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.money.itemInBp===false){
                  
                    allSlot[i].src=moneyImg
                    allSlot[i].dataset.item="goldenCoin"
                    player.backpack.money.itemInBp=true
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
              
                 
                }
              
              }
              if(itemsFromMap.name==="axe"){
                
       
                player.backpack.axe.bp.push(itemsFromMap)
            
           
               countEnduranceInAxe(player.backpack)
               
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.axe.itemInBp===false){
                    allSlot[i].src=axe
                    allSlot[i].dataset.item="axe"
                    player.backpack.axe.itemInBp=true
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
                }
                
              }
              if(itemsFromMap.name==="glock"){
                
                player.backpack.glock.bp.push(itemsFromMap)
              
                itemsFromMap.isDrop=false
             
                countAmmoInGlockInPlayer(player.backpack,player.whatIsInHand,"glock")
               
               
              
             
                for(let i=0;i<allSlot.length;i++){

                  if(allSlot[i].dataset.empty==="true"&&player.backpack.glock.itemInBp===false){
                    
                  
                    allSlot[i].src=glock
                  
                    allSlot[i].dataset.item="glock"
                    player.backpack.glock.itemInBp=true
                  
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
             
                
                }
                itemsOnMapArr.splice(indexItemsFromMap,1)
                return
              }
              if(itemsFromMap.name==="machineGun"){
                
                player.backpack.machineGun.bp.push(itemsFromMap)
              
                itemsFromMap.isDrop=false
             
                countAmmoInGlockInPlayer(player.backpack,player.whatIsInHand,"machineGun")
               
             
              
             
                for(let i=0;i<allSlot.length;i++){

                  if(allSlot[i].dataset.empty==="true"&&player.backpack.machineGun.itemInBp===false){
                    
                  
                    allSlot[i].src=machineGun
                  
                    allSlot[i].dataset.item="machineGun"
                    player.backpack.machineGun.itemInBp=true
                  
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
             
                
                }
                itemsOnMapArr.splice(indexItemsFromMap,1)
                return
              }
              if(itemsFromMap.name==="dynamite"){
                player.backpack.dynamite.amount+=1
               
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.dynamite.itemInBp===false){
                    allSlot[i].src=dynamite
                  
                    allSlot[i].dataset.item="dynamite"
                    player.backpack.dynamite.itemInBp=true
                    
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
               
                  
                }

              }
              //handle all sort of wall
              if(itemsFromMap.name.slice(-4)==="Wall"){
             if(itemsFromMap.name==="solidWall"){
              player.backpack.solidWall.amount+=1
              for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.empty==="true"&&player.backpack.solidWall.itemInBp===false){
                  allSlot[i].src=solidWall
                  allSlot[i].dataset.item=itemsFromMap.name
                  player.backpack.solidWall.itemInBp=true
               
                  allSlot[i].dataset.empty="false"
               
                  break
                 
                }
             
                
              }
             }
             if(itemsFromMap.name==="plainWall"){
              player.backpack.plainWall.amount+=1
           

             
              for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.empty==="true"&&player.backpack.plainWall.itemInBp===false){
                  allSlot[i].src=plainWall
                  allSlot[i].dataset.item="plainWall"
                  player.backpack.plainWall.itemInBp=true
                 
                  allSlot[i].dataset.empty="false"
               
                  break
                 
                }
           
                
              }
              

            }
            if(itemsFromMap.name==="magmaWall"){
              player.backpack.magmaWall.amount+=1
           

             
              for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.empty==="true"&&player.backpack.magmaWall.itemInBp===false){
                  allSlot[i].src=magmaWall
                  allSlot[i].dataset.item="magmaWall"
                  player.backpack.magmaWall.itemInBp=true
                  
                  allSlot[i].dataset.empty="false"
               
                  break
                 
                }
            
                
              }
              

            }
            if(itemsFromMap.name==="brickWall"){
              player.backpack.brickWall.amount+=1
           

             
              for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.empty==="true"&&player.backpack.brickWall.itemInBp===false){
                  allSlot[i].src=brickWall
                  allSlot[i].dataset.item=itemsFromMap.name
                  player.backpack.brickWall.itemInBp=true
                  
                  allSlot[i].dataset.empty="false"
               
                  break
                 
                }
            
                
              }
              

            }
            if(itemsFromMap.name==="woodenWall"){
              player.backpack.woodenWall.amount+=1
           

             
              for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.empty==="true"&&player.backpack.woodenWall.itemInBp===false){
                  allSlot[i].src=brickWall
                  allSlot[i].dataset.item=itemsFromMap.name
                  player.backpack.woodenWall.itemInBp=true
                  
                  allSlot[i].dataset.empty="false"
               
                  break
                 
                }
            
                
              }
              

            }

              }
          
           
              if(itemsFromMap.name==="hpPotion"){
                player.backpack.hpPotion.amount+=1
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.hpPotion.itemInBp===false){
                    allSlot[i].src=hpPotion
                    allSlot[i].dataset.item="hpPotion"
                    player.backpack.hpPotion.itemInBp=true
                  
                    allSlot[i].dataset.empty="false"
                 
                    break
                   
                  }
               
                  
                }
                

              }
              if(itemsFromMap.name==="jumpFluid"){
                player.backpack.jumpFluid.amount+=1
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.jumpFluid.itemInBp===false){
                    allSlot[i].src=jumpFluid
                    allSlot[i].dataset.item="jumpFluid"
                    player.backpack.jumpFluid.itemInBp=true
                    
                    allSlot[i].dataset.empty="false"
                 
                    break
                   
                  }
                
                  
                }
                

              }
              if(itemsFromMap.name==="meat"){
                player.backpack.meat.amount+=1
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.meat.itemInBp===false){
                    allSlot[i].src=meat
                    allSlot[i].dataset.item="meat"
                    player.backpack.meat.itemInBp=true
                    
                    allSlot[i].dataset.empty="false"
                 
                    break
                   
                  }
                
                  
                }
                

              }
              if(itemsFromMap.name==="helperRuna"){
                player.backpack.helperRuna.amount+=1
                for(let i=0;i<allSlot.length;i++){
                  //block below work when it is first item in this sort in our bp
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.helperRuna.itemInBp===false){
                    allSlot[i].src=helperRuna
                    allSlot[i].dataset.item="helperRuna"
                    player.backpack.helperRuna.itemInBp=true
                    
                    allSlot[i].dataset.empty="false"
                 console.log(player.backpack.helperRuna.amount,"amount")
                    break
                   
                  }
                
                  
                }
                

              }
              displayItemInDetail(allSlot,player)
              itemsOnMapArr.splice(indexItemsFromMap,1)
        }

        if(itemsFromMap.posX+itemsFromMap.size<player.posX || itemsFromMap.posX>player.posX+player.size||
            itemsFromMap.posY>player.posY+player.size || itemsFromMap.posY+itemsFromMap.size<player.posY){
                //NO COLLISION
            }
            else{
             let score= allSlot.every((el)=>{return el.dataset.empty==="false"})
           
            if(score===false){

        
              if(itemsFromMap.name.slice(-4)==="Wall"){
             
               itemsFromMap.layOnMap=false
               return
               
              }
              if(itemsFromMap.name==="goldenCoin"){
                itemsFromMap.posY-=10
                setTimeout(()=>{
                    itemsFromMap.posY-=10
                    setTimeout(()=>{
                        itemsFromMap.posY-=10
                        setTimeout(()=>{
                            itemsFromMap.posY+=10
                            setTimeout(()=>{
                                itemsFromMap.posY+=10
                                setTimeout(()=>{
                                    itemsFromMap.layOnMap=false
                                    
                                    return
                                },50)
                            },100)
                        },100)
                    },100)
                },100)
              }
              if(itemsFromMap.name==="axe"){
                
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="glock"){
                
                itemsFromMap.layOnMap=false
               
                return
              }
              if(itemsFromMap.name==="dynamite"){
                
                itemsFromMap.layOnMap=false
                return
              }
       
              if(itemsFromMap.name==="hpPotion"){
          
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="jumpFluid"){
                
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="meat"){
                
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="machineGun"){
                
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="helperRuna"){
                
                itemsFromMap.layOnMap=false
                return
              }
             
            }
          }
    })

}