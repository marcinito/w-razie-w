import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"

import { brickWall } from "../../objects/WALL/brickWall/brickWall"

export const firstLevelArrangementWall=(player,can)=>{
    let tablica=
[

    makeWall(plainWall,4,900,can.C_H-510,65,"orange","horizontal"),
    // makeWall(plainWall,4,300,can.C_H-525,65,"orange","horizontal"),
    makeWall(plainWall,20,10,can.C_H-460,65,"orange","horizontal"),
    makeWall(plainWall,20,10,can.C_H-260,65,"orange","horizontal"),
    makeWall(plainWall,20,10,can.C_H-160,65,"orange","horizontal"),
    makeWall(brickWall,20,10,can.C_H-360,65,"orange","horizontal"),

 

 
    player.blockToBuild
]
return tablica
}