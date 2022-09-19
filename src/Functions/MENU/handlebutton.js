import { greetings } from "./greetings"
import { items } from "./items"

const startGame=document.querySelector(".startGame")
const mainMenu=document.querySelector(".mainMenu")
const pause=document.querySelector(".pause")
const windowAlert=document.querySelector(".windowAlert")
//all element below concern small nav
const smallTab=[...document.querySelectorAll(".tab")]
const itemsTable=document.querySelector(".items")
const story=document.querySelector(".story")
const instruction=document.querySelector(".instruction")

export const handleButton=(menu)=>{

    startGame.addEventListener("click",()=>{

        menu.playGame="game"
        mainMenu.style.opacity=0
        mainMenu.style.zIndex=-100
     
    })
    pause.addEventListener("click",()=>{
   
        menu.playGame="menu"
        mainMenu.style.opacity=1
        mainMenu.style.zIndex=100
        menu.click++
        startGame.textContent="Return"
 
        greetings()
        
    })


//
smallTab.forEach((tab,i,arr)=>{
  
    tab.addEventListener("click",()=>{
    smallTab.forEach((el)=>{
        el.style.backgroundColor="gray"
        el.style.borderStyle="none"
    })
     
        if(tab.textContent==="items"){
            tab.style.backgroundColor="red"
            itemsTable.style.display="block"
            instruction.style.display=`none`
            story.style.display=`none`
            

        }
        else if(tab.textContent==="story"){
            tab.style.backgroundColor="red"
            story.style.display=`block`
            itemsTable.style.display=`none`
            instruction.style.display=`none`
        }
        else if(tab.textContent==="instruction"){
            tab.style.backgroundColor="red"
            story.style.display=`none`
            itemsTable.style.display=`none`
            instruction.style.display=`block`
           
        }
    })
})

}