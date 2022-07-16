import { random } from "./random"

export const changeDirectionMonster=(dE,cross,payload)=>{
    let directionArr=["up","left","right","down"]
    let directionCrossArr=["negative","positive","null"]

    let availableCrossMove=directionCrossArr.filter(el=>el!=cross)
    let newCrossDirection=random(availableCrossMove)

    let availableMove=directionArr.filter(el=>el!=payload)
    let newDirection=random(availableMove)
    
    dE.direction=newDirection
   
    dE.directionCross=newCrossDirection


    
}