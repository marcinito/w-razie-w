import { can, changeLevel, menu, MONSTER, player } from "../../../main"
import { Glock } from "../../GUN/glock/glock"
import { glockItems } from "../../ITEMSonMAP/glock/glockItems"
import { brickWall } from "../../WALL/brickWall/brickWall"
import { magmaWall } from "../../WALL/magmaWall/magmaWall"
import { plainWall } from "../../WALL/plainWall/plainWall"
import { solidWall } from "../../WALL/solidWall/solidWall"
import { countAmmoInGlockInPlayer } from "../shorthandFunction/countAmmoInGlockInPlayer"
import { displayItemInDetail } from "../shorthandFunction/displayItemInDetail"
import { dropItemFromBpOnMap } from "../shorthandFunction/dropItemFromBpOnMap"
import { giveBorderToUsingSlotBp } from "../shorthandFunction/giveBorderToUsingSlotBp"
import { updateEqDashboard } from "../shorthandFunction/updateEqDashboard"
import { canIPutBlockInThisPlace } from "./canIPutBlockInThisPlace"
import { mouseDetector } from "./mouseDetector"
import { setPositionTileOnMap } from "./setPositionTileOnMap"


const allSlot=[...document.querySelectorAll(".slotBp")]

//QUERY FROM HTML
export let mouseDetectorMonster=new mouseDetector(0,0)
export let point

export const movementPlayer=(player,itemsOnMap)=>{
   
    window.addEventListener("keydown",(e)=>{
       console.log(e.keyCode)
       //monster jump
       if(e.keyCode===87){
               
       
        MONSTER.forEach((particular)=>{
            particular.forEach((monster)=>{
                if(monster.name==="zombie"){
                    monster.posY-=20
                }
            })
        })
  

}
    //monster right
    if(e.keyCode===68){
               
       
        MONSTER.forEach((particular)=>{
            particular.forEach((monster)=>{
                if(monster.name==="zombie"){
                    monster.directionMove="right"
                    monster.posX+=20
                }
            })
        })
        
}
      //Monster left
      if(e.keyCode===65){
               
          
        MONSTER.forEach((particular)=>{
            particular.forEach((monster)=>{
                if(monster.name==="zombie"){
                    monster.directionMove="left"
                    monster.posX-=20
                }
            })
        })
        
}
        if(e.keyCode===37){
               
                player.moveLeft()
                MONSTER.forEach((particular)=>{
                    particular.forEach((monster)=>{
                        if(monster.name==="zombie"){
                            monster.posX-=20
                        }
                    })
                })
                
        }
        if(e.keyCode===39){
            player.moveRight()
            MONSTER.forEach((particular)=>{
                particular.forEach((monster)=>{
                    if(monster.name==="zombie"){
                        monster.posX+=20
                    }
                })
            })
    }

if(e.keyCode===40){
    player.moveDown()
}
if(e.keyCode===32){
    player.fire()
    
}
if(e.keyCode===81){
  

}

    })

    //HANDLE MENU WITH TITLE TO BUILD NEW TITLE ON MAP
    window.addEventListener("keyup",(e)=>{

        //JUMP
        if(e.keyCode===38){
            if(player.counterJump<1){
                player.moveUp()
                player.counterJump++
            }
        
            if(player.counterJump>1){
                player.up=false
                
            }
    }
   
    if(e.keyCode===49){
       //NUMBER 1 on keyboard
        
   if(allSlot[0].dataset.empty!=="true"){
    player.whatIsInHand=allSlot[0].dataset.item
    giveBorderToUsingSlotBp(allSlot,allSlot[0])
displayItemInDetail(allSlot,player)



   }
      
    }
    if(e.keyCode===50){
        //NUMBER 2 on keyboard
        if(allSlot[1].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[1].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[1])
        displayItemInDetail(allSlot,player)
           }

     }
     if(e.keyCode===51){
        //NUMBER 3 on keyboard
        if(allSlot[2].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[2].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[2])
        displayItemInDetail(allSlot,player)
           }

     }
     if(e.keyCode===52){
        //NUMBER 4 on keyboard
        if(allSlot[3].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[3].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[3])
        displayItemInDetail(allSlot,player)
           }


     }
     if(e.keyCode===53){
        //NUMBER 5 on keyboard
        if(allSlot[4].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[4].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[4])

        displayItemInDetail(allSlot,player)
           }
     }
     if(e.keyCode===54){
        //NUMBER 6 on keyboard
        if(allSlot[5].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[5].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[5])
        displayItemInDetail(allSlot,player)
           }


     }
     if(e.keyCode===55){
        //NUMBER 7 on keyboard
        if(allSlot[6].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[6].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[6])
        displayItemInDetail(allSlot,player)
           }


     }
     if(e.keyCode===56){
        //NUMBER 8 on keyboard
        if(allSlot[7].dataset.empty!=="true"){
            player.whatIsInHand=allSlot[7].dataset.item
            giveBorderToUsingSlotBp(allSlot,allSlot[7])
        displayItemInDetail(allSlot,player)
           }


     }
     if(e.keyCode===71){
        //G
        allSlot.forEach((el,i,arr)=>{
         if(el.dataset.item==player.whatIsInHand){
            dropItemFromBpOnMap(el.dataset.item,player.directionMove,itemsOnMap,player.backpack,player)
            updateEqDashboard(el.dataset.item,player.backpack,"drop")
         }
        })
     }






    })
    let ex
    let ey
   let sizeTitle=65
 
    window.addEventListener("click",(e)=>{
        //PLAIN WALL IS BUILDING

     if(player.canBuild===true){
        if(player.whatIsInHand==="solidWall"&&player.backpack.solidWall.amount>0){
            player.blockToBuild.push(new solidWall(point.x-sizeTitle/2,point.y-sizeTitle/2,65,"red","horizontal"))
            player.backpack.solidWall.amount-=1
         
            updateEqDashboard("solidWall",player.backpack)
            }
            if(player.whatIsInHand==="plainWall"&&player.backpack.plainWall.amount>0){
                
                player.blockToBuild.push(new plainWall(point.x-sizeTitle/2,point.y-sizeTitle/2,65,"red","horizontal"))
                player.backpack.plainWall.amount-=1
                updateEqDashboard("plainWall",player.backpack)
                }
                if(player.whatIsInHand==="magmaWall"&&player.backpack.magmaWall.amount>0){
                    player.blockToBuild.push(new magmaWall(point.x-sizeTitle/2,point.y-sizeTitle/2,65,"red","horizontal"))
                    player.backpack.magmaWall.amount-=1
                    updateEqDashboard("magmaWall",player.backpack)
                    }
                    if(player.whatIsInHand==="brickWall"&&player.backpack.brickWall.amount>0){
                        player.blockToBuild.push(new brickWall(point.x-sizeTitle/2,point.y-sizeTitle/2,65,"red","horizontal"))
                        player.backpack.magmaWall.amount-=1
                        updateEqDashboard("brickWall",player.backpack)
                        }
     }
                
          
                    
     
    })
    

    window.addEventListener("mousemove",(e)=>{
        ex=e.x
        ey=e.y
  
        point=setPositionTileOnMap(ex,ey)
    
        mouseDetectorMonster.posX=point.x-mouseDetectorMonster.size/2
        mouseDetectorMonster.posY=point.y-mouseDetectorMonster.size/2
        canIPutBlockInThisPlace(mouseDetectorMonster)
       
    })


    

  
}

