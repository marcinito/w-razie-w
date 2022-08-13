const allSlot=[...document.querySelectorAll(".slotBp")]
const ammoQuantity=[...document.querySelectorAll(".ammoQuantity")]
import moneyImg from '../../Functions/MENU/dashboard/handleBp/images/goldenCoins.png'
import axe from '../../Functions/MENU/dashboard/handleBp/images/axe.png'
import glock from '../../Functions/MENU/dashboard/handleBp/images/glockItems.png'
import dynamite from '../GUN/dynamite/TnT.png'
import solidWall from '../WALL/solidWall/images/100SolidBlock.png'
import plainWall from '../WALL/plainWall/images/100GrassBlock.png'
import magmaWall from '../WALL/magmaWall/images/100MagmaBlock.png'
//player take item from map and put it in backpack in first free place
export const playerTakeItemFromMap=(player,itemsOnMap)=>{
    itemsOnMap.forEach((itemsFromMap,indexItemsFromMap,itemsOnMapArr)=>{
  

        if(itemsFromMap.layOnMap===false){
            itemsOnMapArr.splice(indexItemsFromMap,1)
           
            
              if(itemsFromMap.name==="goldenCoin"){
            
                player.backpack.money.amount++
               
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.money.itemInBp===false){
                    console.log("what")
                    allSlot[i].src=moneyImg
                    allSlot[i].dataset.item="goldenCoin"
                    player.backpack.money.itemInBp=true
                    ammoQuantity[i].textContent=1
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
                  if(allSlot[i].dataset.item==="goldenCoin"){
                    console.log("teraz")
                    ammoQuantity[i].textContent=player.backpack.money.amount
                  }
                 
                }
              
              }
              if(itemsFromMap.name==="axe"){
                
                player.backpack.axe.amount++
               
                for(let i=0;i<allSlot.length;i++){
                  console.log("bb")
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.axe.itemInBp===false){
                    allSlot[i].src=axe
                  
                    allSlot[i].dataset.item="axe"
                    player.backpack.axe.itemInBp=true
                    ammoQuantity[i].textContent="∞"
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
               
                  
                }
                
              }
              if(itemsFromMap.name==="glock"){
                player.backpack.glock.amount++
                player.backpack.glock.ammo+=2

                for(let i=0;i<allSlot.length;i++){

                  if(allSlot[i].dataset.empty==="true"&&player.backpack.glock.itemInBp===false){
                    console.log("wchodze")
                  
                    allSlot[i].src=glock
                  
                    allSlot[i].dataset.item="glock"
                    player.backpack.glock.itemInBp=true
                    ammoQuantity[i].textContent=10
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
                  if(allSlot[i].dataset.item==="glock"){
                    ammoQuantity[i].textContent=player.backpack.glock.ammo
                    console.log("daje ilosc axe")
                  }
                  
                }

              }
              if(itemsFromMap.name==="dynamite"){
                player.backpack.dynamite.ammo+=1
               
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.dynamite.itemInBp===false){
                    allSlot[i].src=dynamite
                    console.log("jest tutaj2")
                    allSlot[i].dataset.item="dynamite"
                    player.backpack.dynamite.itemInBp=true
                    ammoQuantity[i].textContent=1
                    allSlot[i].dataset.empty="false"
                    break
                   
                  }
                  if(allSlot[i].dataset.item==="dynamite"){
                    console.log("jest tutaj3")
                    ammoQuantity[i].textContent=player.backpack.dynamite.amount
                    console.log("daje ilosc axe")
                  }
                  
                }

              }
              if(itemsFromMap.name==="solidWall"){
                player.backpack.solidWall.amount+=1
             

               
                for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.empty==="true"&&player.backpack.solidWall.itemInBp===false){
                    allSlot[i].src=solidWall
                    allSlot[i].dataset.item="solidWall"
                    player.backpack.solidWall.itemInBp=true
                    ammoQuantity[i].textContent="1"
                    allSlot[i].dataset.empty="false"
                 
                    break
                   
                  }
                  if(allSlot[i].dataset.item==="solidWall"){
                    ammoQuantity[i].textContent=player.backpack.solidWall.amount
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
                    ammoQuantity[i].textContent="1"
                    allSlot[i].dataset.empty="false"
                 
                    break
                   
                  }
                  if(allSlot[i].dataset.item==="plainWall"){
                    ammoQuantity[i].textContent=player.backpack.plainWall.amount
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
                    ammoQuantity[i].textContent="1"
                    allSlot[i].dataset.empty="false"
                 
                    break
                   
                  }
                  if(allSlot[i].dataset.item==="magmaWall"){
                    ammoQuantity[i].textContent=player.backpack.plainWall.amount
                  }
                  
                }
                

              }
            
        }

        if(itemsFromMap.posX+itemsFromMap.size<player.posX || itemsFromMap.posX>player.posX+player.size||
            itemsFromMap.posY>player.posY+player.size || itemsFromMap.posY+itemsFromMap.size<player.posY){
                //NO COLLISION
            }
            else{
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
              if(itemsFromMap.name==="solidWall"){
                
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="plainWall"){
                
                itemsFromMap.layOnMap=false
                return
              }
              if(itemsFromMap.name==="magmaWall"){
                
                itemsFromMap.layOnMap=false
                return
              }
            }
    })

}