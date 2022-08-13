export const giveBorderToUsingSlotBp=(allSlot,particularSlot)=>{
allSlot.forEach((el)=>{
    el.style.border="none"
})
if(particularSlot.dataset.item!==undefined){
    particularSlot.style.border="4px solid blue"
}
}