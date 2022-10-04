import { menu } from "../../main"


let number=0
let greetingDialog=0
const announcement=document.querySelector(".announcement")
export const greetings=(reset)=>{


    
  
    announcement.textContent=""
 
    number=0

    let text=["Welecome players..","Check what items you can use in game",
    "definitely read instruction","...and click start game","of course if you",
    "don't worry about be eaten "]
    let textArray=["time to rest","Did you leave something unfinished?",
    "where are you going!","Muaahaha dragons never...",
    "Lets talk about your goal.."]
    let random=Math.floor(Math.random()*textArray.length)
   
let welcome=()=>{

if(menu.click===0){
    if(number>text[greetingDialog].length-1){
     if(greetingDialog<5){
        setTimeout(()=>{
            greetingDialog+=1
             greetings()
         },3000)
     }
        return
    }
    announcement.textContent+=text[greetingDialog][number]
  
}else{
    if(number>textArray[random].length-1){
        setTimeout(()=>{
            greetings()
        },3000)
        return
    }
    announcement.textContent+=textArray[random][number]
}


    number++
    setTimeout(()=>{
       
    if(menu.playGame==="menu"){
        welcome()
    }
    },200)
}
welcome()
}