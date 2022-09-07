const showAmmo=document.querySelector(".showAmmo")
const showAmount=document.querySelector(".showAmount")
const imageAmmo=document.querySelector(".imageAmmo")
const imageAmmo2=document.querySelector(".imageAmmo2")
const choosenItem=document.querySelector(".choosenItemImg")
const quantityItem=document.querySelector(".quantityItem")
import bulletsImg from '../../ITEMSonMAP/glock/bulletsImage.png'
import keyImg from '../../ITEMSonMAP/solidWall/imageBuilding.png'
import goldenBag from '../../ITEMSonMAP/goldenCoin/moneyBag.png'
export const displayItemInDetail=(allSlot,player)=>{
    allSlot.forEach((el)=>{
        if(el.dataset.item===player.whatIsInHand){
            choosenItem.src=el.src
            if(player.whatIsInHand==="glock"){
                showAmmo.textContent=player.backpack.glock.ammo
                imageAmmo.style.opacity=1
                imageAmmo2.style.opacity=0
                imageAmmo.src=bulletsImg
                quantityItem.textContent=player.backpack.glock.amount
                
            }
            if(player.whatIsInHand==="machineGun"){
                showAmmo.textContent=player.backpack.machineGun.ammo
                imageAmmo.style.opacity=1
                imageAmmo2.style.opacity=0
                imageAmmo.src=bulletsImg
                quantityItem.textContent=player.backpack.machineGun.amount
                console.log("wykonuje sie")
                
            }
            if(player.whatIsInHand==="axe"){
                imageAmmo.style.opacity=0
                imageAmmo2.style.opacity=1
                showAmmo.textContent=player.backpack.axe.totalEndurance
                quantityItem.textContent=player.backpack.axe.amount
                
            }
            if(player.whatIsInHand==="dynamite"){
                showAmmo.textContent=player.backpack.dynamite.ammo
                quantityItem.textContent=player.backpack.dynamite.amount
                imageAmmo.style.opacity=0
                imageAmmo2.style.opacity=0
            }
            if(player.whatIsInHand==="solidWall"){
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.solidWall.amount
                imageAmmo.src=keyImg
                imageAmmo.style.opacity=1
                imageAmmo2.style.opacity=0
            }
            if(player.whatIsInHand==="magmaWall"){
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.magmaWall.amount
                imageAmmo.src=keyImg
                imageAmmo.style.opacity=1
                imageAmmo2.style.opacity=0
            }
            if(player.whatIsInHand==="plainWall"){
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.plainWall.amount
                imageAmmo.src=keyImg
                imageAmmo.style.opacity=1
                imageAmmo2.style.opacity=0
            }
            if(player.whatIsInHand==="goldenCoin"){
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.money.amount
                imageAmmo.src=goldenBag
                imageAmmo.style.opacity=1
                imageAmmo2.style.opacity=0
            }
            if(player.whatIsInHand==="jumpFluid"){
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.jumpFluid.amount
                imageAmmo.src=
                imageAmmo.style.opacity=0
                imageAmmo2.style.opacity=0
            }
            if(player.whatIsInHand==="hpPotion"){
                imageAmmo.style.opacity=0
                imageAmmo2.style.opacity=0
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.hpPotion.amount
                
            }
            if(player.whatIsInHand==="meat"){
                imageAmmo.style.opacity=0
                imageAmmo2.style.opacity=0
                showAmmo.textContent=""
                quantityItem.textContent=player.backpack.meat.amount
                
            }
           
        }
       })

}