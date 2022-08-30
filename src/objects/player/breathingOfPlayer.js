import { player } from "../../main"

const clack=document.querySelector(".clack")
const timer=document.querySelector('.timer')
let click=0

setInterval(()=>{

if(player.counterExtraJump>0){
timer.style.opacity=1
click+=36
    player.counterExtraJump-=1
    console.log(player.counterExtraJump,"tic tack")
clack.style.transform=`rotateZ(${click}deg)`
}else{
    timer.style.opacity=0
}


},1000)


export const breathingOfPlayer=()=>{
    if(player.hp<0 || player.hp==0){
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