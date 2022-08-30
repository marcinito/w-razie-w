export const createMonster=(object,howMany,coordiante)=>{
    let arrMonster=[]
    console.log(coordiante)
if(howMany===coordiante.length){
    for(let i=0;i<howMany;i++){
        
        arrMonster.push(new object(coordiante[i].x,coordiante[i].y))
    }
}else{
    console.log("You have to specify equal amount coordinates and number of monster")
}
    return arrMonster
}