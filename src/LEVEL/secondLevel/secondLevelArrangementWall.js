import { makeWall } from "../../Functions/makeWall"
import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"

export const secondLevelArrangementWall=(player,can)=>{
    let array=[
        //start from bottom
        makeWall(brickWall,5,0,can.C_H-150,65,"red","horizontal"),,makeWall(magmaWall,20,510,can.C_H-150,65,"red","horizontal"),
        makeWall(magmaWall,10,0,can.C_H-215,65,"red","horizontal"), makeWall(magmaWall,10,845,can.C_H-215,65,"red","horizontal"),
        makeWall(magmaWall,15,0,can.C_H-345,65,"red","horizontal"),makeWall(magmaWall,15,0,can.C_H-345,65,"red","horizontal"),
        makeWall(brickWall,30,0,can.C_H-410,65,"red","horizontal"),
    
        player.blockToBuild
    ]
    return array
}