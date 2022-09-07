import { greetings } from "./greetings"


const startGame=document.querySelector(".startGame")
const mainMenu=document.querySelector(".mainMenu")
const pause=document.querySelector(".pause")
const instruction=document.querySelector(".aInstruction")
const windowAlert=document.querySelector(".windowAlert")


export const handleButton=(menu)=>{

    startGame.addEventListener("click",()=>{
    
    //     let differenceInWidth=screen.width-window.innerWidth
    // console.log(differenceInWidth)
    //     if(differenceInWidth<200){
    //         menu.playGame="game"
    //     mainMenu.style.opacity=0
    //     mainMenu.style.zIndex=-100
    //     }else{
    //        windowAlert.style.opacity=1
    //        windowAlert.style.zIndex=100
    //        setTimeout(()=>{
    //         windowAlert.style.opacity=0
    //         windowAlert.style.zIndex=-100
    //        },3000)
    //     }
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