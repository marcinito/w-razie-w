
import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { brickWallItems } from "../../objects/ITEMSonMAP/brickWall/brickWall"

import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { goldenCoin } from "../../objects/ITEMSonMAP/goldenCoin/goldenCoin"
import { healthFluidItems } from "../../objects/ITEMSonMAP/healthFluid/healthFluid"
import { helperSpawnRuna } from "../../objects/ITEMSonMAP/helperRuna/helperRuna"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"
import { machineGunItems } from "../../objects/ITEMSonMAP/machineGun/machineGunItems"
import { Meat } from "../../objects/ITEMSonMAP/meat/meat"
import { solidWallItems } from "../../objects/ITEMSonMAP/solidWall/solidWallItems"


export const itemsOnFirstLevel=()=>{
    let array=[
      new glockItems(348,621,true),new machineGunItems(348,621,true),new dynamiteItems(348,621,true), new helperSpawnRuna(348,621,true), new AxeItems(348,621,true), new AxeItems(348,621,true),new AxeItems(348,621,true),
     new glockItems(32,463,true)
    ]
    return array
}