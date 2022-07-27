export const handleHp=(attack,creature)=>{
    
   
    let hp=(attack*creature.ratePercentage)/creature.hpTotal
   
    
    return hp
}