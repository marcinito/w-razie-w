export const makeWall=(object,howMany,posX,posY,size,color,direction)=>{
    let arrWall=[]
    for(let i=0;i<howMany;i++){
        arrWall.push(new object(posX,posY,size,color,direction))
        if(direction==="horizontal"){
            posX+=size
        }
        if(direction==="vertical"){
            posY+=size
        }
    }
    return arrWall
}