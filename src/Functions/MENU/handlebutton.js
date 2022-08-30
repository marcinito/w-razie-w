import { greetings } from "./greetings"


const startGame=document.querySelector(".startGame")
const mainMenu=document.querySelector(".mainMenu")
const pause=document.querySelector(".pause")
const instruction=document.querySelector(".aInstruction")


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
instruction.addEventListener("click",()=>{
    menu.playGame="menu"
})
}