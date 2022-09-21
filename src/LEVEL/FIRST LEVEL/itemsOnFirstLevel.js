
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
        new glockItems(710,340,true),new Meat(100,0,true),new machineGunItems(300,0,true),new machineGunItems(400,0,true),new machineGunItems(500,0,true),new AxeItems(340,210,true),new AxeItems(370,210,true),
        new AxeItems(390,210,true),new glockItems(600,210,true),new brickWallItems(600,210,true),new dynamiteItems(600,210,true),
        new dynamiteItems(600,210,true),new dynamiteItems(600,210,true), new jumpFluidItems(650,210,true),new healthFluidItems(200,210,true),
        new jumpFluidItems(650,210,true),new jumpFluidItems(650,210,true),new jumpFluidItems(50,210,true),new jumpFluidItems(350,210,true),new jumpFluidItems(200,200,true),new helperSpawnRuna(200,200,true,0)
    ,new helperSpawnRuna(300,200,true,0),new helperSpawnRuna(100,200,true,0),new helperSpawnRuna(220,200,true,0),new helperSpawnRuna(200,200,true,0)]
    return array
}