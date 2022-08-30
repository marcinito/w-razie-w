import { menu } from "../../main"


let number=0
export const greetings=(reset)=>{
    const announcement=document.querySelector(".announcement")
console.log(announcement)
    
  
    announcement.textContent=""
    announcement.style.fontSize=50+"px"
    number=0
    console.log(number)
    let text="Welecome players.."
    let textArray=["time to rest","Did you leave something unfinished?",
    "where are you going!","Muaahaha dragons never...",
    "Lets talk about your gold..."]
    let random=Math.floor(Math.random()*textArray.length)
   
let welcome=()=>{
if(menu.click===0){
    if(number>text.length-1)return
    announcement.textContent+=text[number]
}
if(menu.click>0){
   


if(number>textArray[random].length-1)return
announcement.textContent+=textArray[random][number]

if(announcement.textContent.length>16){
    announcement.style.fontSize=40+"px"
}
if(announcement.textContent.length>32){
    announcement.style.fontSize=30+"px"
}
if(announcement.textContent.length>48){
    announcement.style.fontSize=20+"px"
}



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