const showAmmo=document.querySelector(".showAmmo")
const quantityItem=document.querySelector(".quantityItem")
export const countAmmoInGlockInPlayer=(backpack,whatIsInHand)=>{
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
}