import { player } from "../../../main"
const amountEndurance=document.querySelector(".amountEndurance")
const showAmmo=document.querySelector(".showAmmo")
const quantityItem=document.querySelector(".quantityItem")

export const countEnduranceInAxe=(backpack)=>{
const sum=backpack.axe.bp.reduce((total,initialValue,index,arr)=>{
    total+=arr[index].endurance
    return total
},0)
backpack.axe.totalEndurance=sum
backpack.axe.amount=backpack.axe.bp.length
console.log(backpack.axe.bp)
if(player.whatIsInHand==="axe"){
    showAmmo.textContent=sum
    quantityItem.textContent=backpack.axe.amount
}

if(player.backpack.axe.bp.length>0){
    amountEndurance.style.width=player.backpack.axe.bp[0].endurance+"%"
    
    
}
}