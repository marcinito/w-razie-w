import { menu, player } from "../../main"
const clack=document.querySelector(".clack")
const timer=document.querySelector('.timer')
const canvas=document.querySelector("canvas")
let click=0

setInterval(()=>{

if(player.counterExtraJump>0){
timer.style.opacity=1
click+=36
    player.counterExtraJump-=1
clack.style.transform=`rotateZ(${click}deg)`
}else{
    timer.style.opacity=0
}


},1000)


export const breathingOfPlayer=()=>{
    if(player.hp<0 || player.hp==0){
        player.quantityLive-=1
        canvas.style.backgroundColor="red"
        setTimeout(()=>{
            canvas.style.backgroundColor="skyblue"
            setTimeout(()=>{
                canvas.style.backgroundColor="red"
                setTimeout(()=>{
                    canvas.style.backgroundColor="skyblue"
                },100)
            },100)

        },100)
        
        if(player.quantityLive===0&&player.hp<0){
            menu.playGame="game-over"
        }
        player.hp=player.hpTotal
        player.percentageHp=player.ratePercentage

    }
    if(player.counterExtraJump>0){
        player.extraJump=true
    }
    else{
        player.extraJump=false
    }

}