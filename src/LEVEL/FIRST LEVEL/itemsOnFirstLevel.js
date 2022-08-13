import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../objects/ITEMSonMAP/goldenCoin/goldenCoin"
import { solidWallItems } from "../../objects/ITEMSonMAP/solidWall/solidWallItems"

export const itemsOnFirstLevel=()=>{
    let array=[new goldenCoin(400,10,80),new AxeItems(430,230),new AxeItems(450,230),
        new AxeItems(470,230),new glockItems(500,230),new dynamiteItems(550,230),
        new glockItems(300,230),new glockItems(250,230)]
    return array
}