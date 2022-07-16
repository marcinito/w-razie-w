export const createMonster=(object,howMany)=>{
    let arrMonster=[]
    for(let i=0;i<howMany;i++){
        arrMonster.push(new object())
    }
    return arrMonster
}