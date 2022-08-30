import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../objects/ITEMSonMAP/goldenCoin/goldenCoin"
import { healthFluidItems } from "../../objects/ITEMSonMAP/healthFluid/healthFluid"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"
import { solidWallItems } from "../../objects/ITEMSonMAP/solidWall/solidWallItems"

export const itemsOnFirstLevel=()=>{
    let array=[
        new glockItems(560,210),new AxeItems(300,210),new AxeItems(340,210),new AxeItems(370,210),
        new AxeItems(390,210),new glockItems(600,210),new dynamiteItems(600,210),new dynamiteItems(600,210),
        new dynamiteItems(600,210),new dynamiteItems(600,210), new jumpFluidItems(650,210),new healthFluidItems(200,210),
        new jumpFluidItems(650,210),new jumpFluidItems(650,210)]
    return array
}