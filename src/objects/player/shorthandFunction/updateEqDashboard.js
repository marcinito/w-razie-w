import backgroundImg from './bgc.png'
const background=new Image(100,100).src=backgroundImg

const allSlot=[...document.querySelectorAll(".slotBp")]
const ammoQuantity=[...document.querySelectorAll(".ammoQuantity")]
export const updateEqDashboard=(nameOfItem,backpack)=>{
    if(nameOfItem==="glock"){
    for(let i=0;i<allSlot.length;i++){
        if(allSlot[i].dataset.item===nameOfItem){
          ammoQuantity[i].textContent=backpack.glock.ammo
          if(backpack.glock.ammo===0){
        allSlot[i].src=background
        ammoQuantity[i].textContent=""
        allSlot[i].dataset.empty="true"
        backpack.glock.itemInBp=false
        allSlot[i].style.border="none"
        
            console.log(allSlot[i])
          }
        }
       }
    }
    if(nameOfItem==="dynamite"){
        for(let i=0;i<allSlot.length;i++){
            if(allSlot[i].dataset.item===nameOfItem){
              ammoQuantity[i].textContent=backpack.dynamite.ammo
              if(backpack.dynamite.ammo===0){
            allSlot[i].src=background
            ammoQuantity[i].textContent=""
            allSlot[i].dataset.empty="true"
            backpack.dynamite.itemInBp=false
            allSlot[i].style.border="none"
            
                console.log(allSlot[i])
              }
            }
           }
        }
        if(nameOfItem==="solidWall"){
          for(let i=0;i<allSlot.length;i++){
              if(allSlot[i].dataset.item===nameOfItem){
                ammoQuantity[i].textContent=backpack.solidWall.amount
                if(backpack.solidWall.amount===0){
              allSlot[i].src=background
              ammoQuantity[i].textContent=""
              allSlot[i].dataset.empty="true"
              backpack.solidWall.itemInBp=false
              allSlot[i].style.border="none"
              
                  console.log(allSlot[i])
                }
              }
             }
          }
          if(nameOfItem==="plainWall"){
            for(let i=0;i<allSlot.length;i++){
                if(allSlot[i].dataset.item===nameOfItem){
                  ammoQuantity[i].textContent=backpack.plainWall.amount
                  if(backpack.plainWall.amount===0){
                allSlot[i].src=background
                ammoQuantity[i].textContent=""
                allSlot[i].dataset.empty="true"
                backpack.plainWall.itemInBp=false
                allSlot[i].style.border="none"
                
                    console.log(allSlot[i])
                  }
                }
               }
            }
            if(nameOfItem==="magmaWall"){
              for(let i=0;i<allSlot.length;i++){
                  if(allSlot[i].dataset.item===nameOfItem){
                    ammoQuantity[i].textContent=backpack.magmaWall.amount
                    if(backpack.magmaWall.amount===0){
                  allSlot[i].src=background
                  ammoQuantity[i].textContent=""
                  allSlot[i].dataset.empty="true"
                  backpack.magmaWall.itemInBp=false
                  allSlot[i].style.border="none"
                  
                      console.log(allSlot[i])
                    }
                  }
                 }
              }
     
}