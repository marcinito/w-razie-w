import { menu } from "../../main"


let number=0
const announcement=document.querySelector(".announcement")
export const greetings=(reset)=>{


    
  
    announcement.textContent=""
 
    number=0

    let text="Welecome players.."
    let textArray=["time to rest","Did you leave something unfinished?",
    "where are you going!","Muaahaha dragons never...",
    "Lets talk about your goal.."]
    let random=Math.floor(Math.random()*textArray.length)
   
let welcome=()=>{

if(number>textArray[random].length-1){
    setTimeout(()=>{
        greetings()
    },33432000)
    return
}
announcement.textContent+=textArray[random][number]

    number++
    setTimeout(()=>{
       
    if(menu.playGame==="menu"){
        welcome()
    }
    },200)
}
welcome()
}