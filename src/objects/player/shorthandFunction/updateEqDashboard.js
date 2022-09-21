import { player } from '../../../main'
import backgroundImg from './bgc.png'

const background=new Image(100,100).src=backgroundImg

const showAmmo=document.querySelector(".showAmmo")
const showAmount=document.querySelector(".showAmount")
const choosenItem=document.querySelector(".choosenItemImg")
const imageAmmo=document.querySelector(".imageAmmo")
const imageAmmo2=document.querySelector(".imageAmmo2")
const quantityItem=document.querySelector(".quantityItem")


const allSlot=[...document.querySelectorAll(".slotBp")]
const ammoQuantity=[...document.querySelectorAll(".ammoQuantity")]

export const updateEqDashboard=(nameOfItem,backpack,drop)=>{

    if(nameOfItem==="glock"){
    if(drop==="drop"&&backpack.glock.ammo===0){
    player.whatIsInHand=undefined
      
    }
    for(let i=0;i<allSlot.length;i++){
        if(allSlot[i].dataset.item===nameOfItem){
          // showAmmo.textContent=backpack.glock.ammo
          if(backpack.glock.ammo===0){
        allSlot[i].src=background
        allSlot[i].dataset.empty="true"
        backpack.glock.itemInBp=false
        allSlot[i].style.border="none"
        allSlot[i].dataset.item=undefined
        choosenItem.src=backgroundImg
        showAmmo.textContent=""
        imageAmmo.src=background
        player.whatIsInHand=undefined
        quantityItem.textContent=""
       
     
        

          }
        }
       }
    }
    if(nameOfItem==="machineGun"){
      if(drop==="drop"&&backpack.machineGun.ammo===0){
      player.whatIsInHand=undefined
        
      }
      for(let i=0;i<allSlot.length;i++){
          if(allSlot[i].dataset.item===nameOfItem){
            // showAmmo.textContent=backpack.glock.ammo
            if(backpack.machineGun.ammo===0){
          allSlot[i].src=background
          allSlot[i].dataset.empty="true"
          backpack.machineGun.itemInBp=false
          allSlot[i].style.border="none"
          allSlot[i].dataset.item=undefined
          choosenItem.src=backgroundImg
          showAmmo.textContent=""
          imageAmmo.src=background
          player.whatIsInHand=undefined
          quantityItem.textContent=""
         
       
          
  
            }
          }
         }
      }
    if(nameOfItem==="dynamite"){
      if(drop==="drop"){backpack.dynamite.amount-=1}
        for(let i=0;i<allSlot.length;i++){
            if(allSlot[i].dataset.item===nameOfItem){
              showAmmo.textContent=backpack.dynamite.ammo
             
              quantityItem.textContent=backpack.dynamite.amount
              if(backpack.dynamite.amount===0){
            allSlot[i].src=background
           
            allSlot[i].dataset.empty="true"
            backpack.dynamite.itemInBp=false
            allSlot[i].style.border="none"
            allSlot[i].dataset.item=undefined
            choosenItem.src=backgroundImg
        showAmmo.textContent=""
        imageAmmo.src=background
        player.whatIsInHand=undefined
        quantityItem.textContent=""
                console.log(allSlot[i])
              }
            }
           }
        }
        if(nameOfItem==="solidWall"){
          if(drop==="drop"){backpack.solidWall.amount-=1}
          quantityItem.textContent=backpack.solidWall.amount
          for(let i=0;i<allSlot.length;i++){
              if(allSlot[i].dataset.item===nameOfItem){
                
                if(backpack.solidWall.amount===0){
              allSlot[i].src=background
             
              allSlot[i].dataset.empty="true"
              backpack.solidWall.itemInBp=false
              choosenItem.src=backgroundImg
              allSlot[i].style.border="none"
              allSlot[i].dataset.item=undefined
              showAmmo.textContent=""
              imageAmmo.src=background
              player.whatIsInHand=undefined
              quantityItem.textContent=""
                  console.log(allSlot[i])
                }
              }
             }
          }
          if(nameOfItem==="plainWall"){
            if(drop==="drop"){backpack.plainWall.amount-=1}
            quantityItem.textContent=backpack.plainWall.amount
            
            for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.item===nameOfItem){
                
                  if(backpack.plainWall.amount===0){
                allSlot[i].src=background
             
                allSlot[i].dataset.empty="true"
                backpack.plainWall.itemInBp=false
                choosenItem.src=backgroundImg
                allSlot[i].style.border="none"
                allSlot[i].dataset.item=undefined
                showAmmo.textContent=""
                imageAmmo.src=background
                player.whatIsInHand=undefined
                quantityItem.textContent=""
                    console.log(allSlot[i])
                  }
                }
               }
            }
            if(nameOfItem==="magmaWall"){
              if(drop==="drop"){backpack.magmaWall.amount-=1}
              quantityItem.textContent=backpack.magmaWall.amount
              for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.item===nameOfItem){
                 
                    if(backpack.magmaWall.amount===0){
                  allSlot[i].src=background
                  choosenItem.src=backgroundImg
                  allSlot[i].dataset.empty="true"
                  backpack.magmaWall.itemInBp=false
                  allSlot[i].style.border="none"
                  allSlot[i].dataset.item=undefined
                  showAmmo.textContent=""
                  imageAmmo.src=background
                  player.whatIsInHand=undefined
                  quantityItem.textContent=""
                      console.log(allSlot[i])
                    }
                  }
                 }
              }
              if(nameOfItem==="hpPotion"){
                if(drop==="drop"){backpack.hpPotion.amount-=1}
                for(let i=0;i<allSlot.length;i++){
                    if(allSlot[i].dataset.item===nameOfItem){
                
                      if(backpack.hpPotion.amount===0){
                    allSlot[i].src=background
                    choosenItem.src=backgroundImg
                    allSlot[i].dataset.empty="true"
                    backpack.hpPotion.itemInBp=false
                    allSlot[i].style.border="none"
                    allSlot[i].dataset.item=undefined
                    quantityItem.textContent=""
                    
                        
                      }
                    }
                   }
                }
                if(nameOfItem==="axe"){
        
                  for(let i=0;i<allSlot.length;i++){
                      if(allSlot[i].dataset.item===nameOfItem){
                    
                        if(backpack.axe.amount===0){
                      allSlot[i].src=background
                  console.log("pozbywa sie")
                  console.log(backpack.axe.amount)
                      allSlot[i].dataset.empty="true"
                      backpack.axe.itemInBp=false
                      allSlot[i].style.border="none"
                      choosenItem.src=backgroundImg
                      showAmmo.textContent=""
                      imageAmmo.src=background
                      player.whatIsInHand=undefined
                      imageAmmo2.style.opacity=0
                      quantityItem.textContent=""
                      
                        }
                      }
                     }
                  }
                  if(nameOfItem==="goldenCoin"){
                    if(drop==="drop"){backpack.money.amount-=1
                   
                    }
  
                    for(let i=0;i<allSlot.length;i++){
                        if(allSlot[i].dataset.item===nameOfItem){
                       
                          if(backpack.money.amount===0){
                        allSlot[i].src=background
                        choosenItem.src=backgroundImg
                        allSlot[i].dataset.empty="true"
                        backpack.money.itemInBp=false
                        allSlot[i].style.border="none"
                        allSlot[i].dataset.item=undefined
                        showAmmo.textContent=""
                        imageAmmo.src=background
                        player.whatIsInHand=undefined
                        quantityItem.textContent=""
                            console.log(allSlot[i])
                          }
                        }
                       }
                    }
                    if(nameOfItem==="jumpFluid"){
                      if(drop==="drop"){backpack.jumpFluid.amount-=1
                     
                      }
                      quantityItem.textContent=backpack.jumpFluid.amount
    
                      for(let i=0;i<allSlot.length;i++){
                          if(allSlot[i].dataset.item===nameOfItem){
                           
                            if(backpack.jumpFluid.amount===0){
                          allSlot[i].src=background
                          choosenItem.src=backgroundImg
                          allSlot[i].dataset.empty="true"
                          backpack.jumpFluid.itemInBp=false
                          allSlot[i].style.border="none"
                          allSlot[i].dataset.item=undefined
                          player.whatIsInHand=undefined
                          showAmmo.textContent=""
                          quantityItem.textContent=""
                              console.log(allSlot[i])
                            }
                          }
                         }
                      }
                      if(nameOfItem==="meat"){
                        if(drop==="drop"){backpack.meat.amount-=1
                       
                        }
                        quantityItem.textContent=backpack.meat.amount
      
                        for(let i=0;i<allSlot.length;i++){
                            if(allSlot[i].dataset.item===nameOfItem){
                             
                              if(backpack.meat.amount===0){
                            allSlot[i].src=background
                            choosenItem.src=backgroundImg
                            allSlot[i].dataset.empty="true"
                            backpack.meat.itemInBp=false
                            allSlot[i].style.border="none"
                            allSlot[i].dataset.item=undefined
                            player.whatIsInHand=undefined
                            showAmmo.textContent=""
                            quantityItem.textContent=""
                                console.log(allSlot[i])
                              }
                            }
                           }
                        }
                        if(nameOfItem==="helperRuna"){
                          if(drop==="drop"){backpack.helperRuna.amount-=1}
                          quantityItem.textContent=backpack.helperRuna.amount
        
                          for(let i=0;i<allSlot.length;i++){
                              if(allSlot[i].dataset.item===nameOfItem){
                               
                                if(backpack.helperRuna.amount===0){
                              allSlot[i].src=background
                              choosenItem.src=backgroundImg
                              allSlot[i].dataset.empty="true"
                              backpack.helperRuna.itemInBp=false
                              allSlot[i].style.border="none"
                              allSlot[i].dataset.item=undefined
                              player.whatIsInHand=undefined
                              showAmmo.textContent=""
                              quantityItem.textContent=""
                                  console.log(allSlot[i])
                                }
                              }
                             }
                          }




                          if(nameOfItem==="brickWall"){
                            if(drop==="drop"){backpack.brickWall.amount-=1}
                            quantityItem.textContent=backpack.brickWall.amount
                            for(let i=0;i<allSlot.length;i++){
                                if(allSlot[i].dataset.item===nameOfItem){
                                  
                                  if(backpack.brickWall.amount===0){
                                allSlot[i].src=background
                               
                                allSlot[i].dataset.empty="true"
                                backpack.brickWall.itemInBp=false
                                choosenItem.src=backgroundImg
                                allSlot[i].style.border="none"
                                allSlot[i].dataset.item=undefined
                                showAmmo.textContent=""
                                imageAmmo.src=background
                                player.whatIsInHand=undefined
                                quantityItem.textContent=""
                                    console.log(allSlot[i])
                                  }
                                }
                               }
                            }
     
}