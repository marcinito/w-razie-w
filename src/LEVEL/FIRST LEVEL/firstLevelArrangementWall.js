import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"

import { brickWall } from "../../objects/WALL/brickWall/brickWall"

export const firstLevelArrangementWall=(player,can)=>{
    let tablica=
[

    makeWall(plainWall,20,500,can.C_H-510,65,"orange","horizontal"),
    makeWall(goldWall,1,500,can.C_H-510,65,"orange","horizontal"),
    // makeWall(plainWall,4,300,can.C_H-525,65,"orange","horizontal"),
    makeWall(plainWall,13,10,can.C_H-460,65,"orange","horizontal"),
 


 

 
    player.blockToBuild
]
return tablica
}