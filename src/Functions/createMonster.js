export const createMonster=(object,howMany,coordinate)=>{
    let arrMonster=[]
   
if(howMany===coordinate.length){
    for(let i=0;i<howMany;i++){
        
        arrMonster.push(new object(coordinate[i].x,coordinate[i].y))
    }
}else{
    console.log("You have to specify equal amount coordinates and number of monster")
}
    return arrMonster
}