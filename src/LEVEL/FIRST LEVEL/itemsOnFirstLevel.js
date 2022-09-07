
import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"

import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../objects/ITEMSonMAP/goldenCoin/goldenCoin"
import { healthFluidItems } from "../../objects/ITEMSonMAP/healthFluid/healthFluid"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"
import { machineGunItems } from "../../objects/ITEMSonMAP/machineGun/machineGunItems"
import { solidWallItems } from "../../objects/ITEMSonMAP/solidWall/solidWallItems"


export const itemsOnFirstLevel=()=>{
    let array=[
        new glockItems(710,340,true),new machineGunItems(100,0,true),new machineGunItems(300,0,true),new AxeItems(340,210,true),new AxeItems(370,210,true),
        new AxeItems(390,210,true),new glockItems(600,210,true),new dynamiteItems(600,210,true),new dynamiteItems(600,210,true),
        new dynamiteItems(600,210,true),new dynamiteItems(600,210,true), new jumpFluidItems(650,210,true),new healthFluidItems(200,210,true),
        new jumpFluidItems(650,210,true),new jumpFluidItems(650,210,true),new jumpFluidItems(200,200,true)]
    return array
}