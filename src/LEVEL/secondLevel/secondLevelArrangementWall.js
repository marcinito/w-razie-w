import { makeWall } from "../../Functions/makeWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"

export const secondLevelArrangementWall=(player,can)=>{
    let array=[
        makeWall(magmaWall,50,0,can.C_H-65,65,"red","horizontal"),
        makeWall(magmaWall,50,0,can.C_H-365,65,"red","horizontal"),
        makeWall(magmaWall,50,0,can.C_H-430,65,"red","horizontal"),
    
        player.blockToBuild
    ]
    return array
}