import { makeWall } from "../../Functions/makeWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"

export const secondLevelArrangementWall=(player,can)=>{
    let array=[
        makeWall(magmaWall,20,0,can.C_H-65,65,"red","horizontal"),
        makeWall(goldWall,20,0,can.C_H-130,65,"red","horizontal"),
        makeWall(goldWall,20,0,can.C_H-195,65,"red","horizontal"),
        makeWall(goldWall,3,0,can.C_H-260,65,"red","horizontal"),
        makeWall(goldWall,17,195,can.C_H-260,65,"red","horizontal"),
        player.blockToBuild
    ]
    return array
}