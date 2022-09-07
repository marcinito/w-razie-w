const showAmmo=document.querySelector(".showAmmo")
const quantityItem=document.querySelector(".quantityItem")
export const countAmmoInGlockInPlayer=(backpack,whatIsInHand,whatItemTook)=>{
if(whatItemTook==="glock"){
  let sum=backpack.glock.bp.reduce((total,initialValue,index,array)=>{
    
    total+=array[index].ammo
    return total

  
  },0)
  backpack.glock.ammo=sum
  backpack.glock.amount=backpack.glock.bp.length
  if(whatIsInHand==="glock"){
          
    showAmmo.textContent=sum
    quantityItem.textContent=backpack.glock.amount
     
  }
  return
}
     
if(whatItemTook==="machineGun"){
  let sum=backpack.machineGun.bp.reduce((total,initialValue,index,array)=>{
    
    total+=array[index].ammo
    return total

  
  },0)
  backpack.machineGun.ammo=sum
  backpack.machineGun.amount=backpack.machineGun.bp.length
  if(whatIsInHand==="machineGun"){
          
    showAmmo.textContent=sum
    quantityItem.textContent=backpack.machineGun.amount
     
  }
  return
}
     
       
      
}