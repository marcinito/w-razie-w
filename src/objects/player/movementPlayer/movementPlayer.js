import { magmaWall } from "../../WALL/magmaWall/magmaWall"
import { plainWall } from "../../WALL/plainWall/plainWall"
import { solidWall } from "../../WALL/solidWall/solidWall"
import { giveBorderToUsingSlotBp } from "../shorthandFunction/giveBorderToUsingSlotBp"
import { updateEqDashboard } from "../shorthandFunction/updateEqDashboard"

const allSlot=[...document.querySelectorAll(".slotBp")]

//QUERY FROM HTML


const POINTER=document.querySelector(".viewFinderImg")

export const movementPlayer=(player,imgTitleFromMenu)=>{
    
    window.addEventListener("keydown",(e)=>{
        console.log(e.keyCode)
        if(e.keyCode===37){
               
                player.moveLeft()
                
        }
        if(e.keyCode===39){
            player.moveRight()
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
  console.log(e.keyCode)
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
    //choicee first block
    if(e.keyCode===49){
       //NUMBER 1 on keyboard
        
        player.whatIsInHand=allSlot[0].dataset.item
        console.log(allSlot[0].dataset.item)
       giveBorderToUsingSlotBp(allSlot,allSlot[0])
    }
    if(e.keyCode===50){
        //NUMBER 2 on keyboard
  player.whatIsInHand=allSlot[1].dataset.item
  console.log(allSlot[1].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[1])

     }
     if(e.keyCode===51){
        //NUMBER 3 on keyboard
  player.whatIsInHand=allSlot[2].dataset.item
  console.log(allSlot[2].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[2])

     }
     if(e.keyCode===52){
        //NUMBER 4 on keyboard
  player.whatIsInHand=allSlot[3].dataset.item
  console.log(allSlot[3].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[3])


     }
     if(e.keyCode===53){
        //NUMBER 5 on keyboard
  player.whatIsInHand=allSlot[4].dataset.item
  console.log(allSlot[4].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[4])
     }
     if(e.keyCode===54){
        //NUMBER 6 on keyboard
  player.whatIsInHand=allSlot[5].dataset.item
  console.log(allSlot[5].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[5])


     }
     if(e.keyCode===55){
        //NUMBER 7 on keyboard
  player.whatIsInHand=allSlot[6].dataset.item
  console.log(allSlot[6].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[6])


     }
     if(e.keyCode===56){
        //NUMBER 8 on keyboard
  player.whatIsInHand=allSlot[7].dataset.item
  console.log(allSlot[7].dataset.item)
  giveBorderToUsingSlotBp(allSlot,allSlot[7])


     }
     if(e.keyCode===71){
        allSlot.forEach((el,i,arr)=>{
         console.log(el)
        })
     }






    })
    let ex
    let ey
    window.addEventListener("click",(e)=>{
        //PLAIN WALL IS BUILDING
     console.log("dziala")
            if(player.whatIsInHand==="solidWall"&&player.backpack.solidWall.amount>0){
            player.blockToBuild.push(new solidWall(ex-30,ey-30,65,"red","horizontal"))
            player.backpack.solidWall.amount-=1
         
            updateEqDashboard("solidWall",player.backpack)
            }
            if(player.whatIsInHand==="plainWall"&&player.backpack.plainWall.amount>0){
                player.blockToBuild.push(new plainWall(ex-30,ey-30,65,"red","horizontal"))
                player.backpack.plainWall.amount-=1
                updateEqDashboard("plainWall",player.backpack)
                }
                if(player.whatIsInHand==="magmaWall"&&player.backpack.magmaWall.amount>0){
                    player.blockToBuild.push(new magmaWall(ex-30,ey-30,65,"red","horizontal"))
                    player.backpack.magmaWall.amount-=1
                    updateEqDashboard("magmaWall",player.backpack)
                    }
          
       
     
    })
    

    window.addEventListener("mousemove",(e)=>{
      
        POINTER.style.left=e.x -15 +"px"
        POINTER.style.top=e.y - 15+"px"
        ex=e.x
        ey=e.y
    
    })
  
}

