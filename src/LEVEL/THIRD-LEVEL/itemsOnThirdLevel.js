import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { healthFluidItems } from "../../objects/ITEMSonMAP/healthFluid/healthFluid"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"

export const itemsOnThirdLevel=()=>{
    let array=[
        new glockItems(20,40,true,"none"),
        new glockItems(20,40,true,"none"),
        new glockItems(20,40,true,"none"),
        new glockItems(20,40,true,"none"),
        new glockItems(20,40,true,"none"),
        new dynamiteItems(20,40,true,"none"),
        new jumpFluidItems(20,30,true,"none"),
        new healthFluidItems(20,30,true,"none"),
      
    ]
    return array
}