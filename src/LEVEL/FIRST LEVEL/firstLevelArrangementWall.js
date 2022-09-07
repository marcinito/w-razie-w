import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { woodenBox } from "../../objects/WALL/woodenBox/woodenBox"
export const firstLevelArrangementWall=(player,can)=>{
    let tablica=
[
    makeWall(plainWall,4,300,can.C_H-570,65,"orange","horizontal"),
    makeWall(plainWall,4,900,can.C_H-510,65,"orange","horizontal"),
    // makeWall(plainWall,4,300,can.C_H-525,65,"orange","horizontal"),
    makeWall(plainWall,35,10,can.C_H-460,65,"orange","horizontal"),
    makeWall(plainWall,35,10,can.C_H-395,65,"orange","horizontal"),
    makeWall(plainWall,5,10,can.C_H-330,65,"orange","horizontal"),
    makeWall(plainWall,30,750,can.C_H-330,65,"orange","horizontal"),
    makeWall(solidWall,5,10,can.C_H-265,65,"orange","horizontal"),
    makeWall(solidWall,15,700,can.C_H-265,65,"orange","horizontal"),
    makeWall(plainWall,30,10,can.C_H-200,65,"orange","horizontal"),

 
    player.blockToBuild
]
return tablica
}