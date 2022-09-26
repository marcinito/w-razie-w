import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"

import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { woodenWall } from "../../objects/WALL/woodenWall/woodenWall"

export const firstLevelArrangementWall=(player,can)=>{
    let tablica=
[
//COUNT FROM BOTTOM , WALL ON THE SAME LVL IN ONE LINE
   makeWall(solidWall,30,0,can.C_H-220,65,"red","horizontal"),
   makeWall(brickWall,5,0,can.C_H-285,65,"red","horizontal"),makeWall(brickWall,5,450,can.C_H-285,65,"red","horizontal"),makeWall(woodenWall,5,770,can.C_H-285,65,"red","horizontal"),
   makeWall(brickWall,4,65,can.C_H-350,65,"red","horizontal"),makeWall(goldWall,5,450,can.C_H-350,65,"red","horizontal"),
   makeWall(solidWall,1,500,can.C_H-415,65,"red","horizontal"),
   makeWall(solidWall,30,0,can.C_H-480,65,"red","horizontal"),
   makeWall(solidWall,5,0,can.C_H-545,65,"red","horizontal"),   makeWall(brickWall,15,600,can.C_H-545,65,"red","horizontal"),
   makeWall(plainWall,5,0,can.C_H-610,65,"red","horizontal"),   makeWall(plainWall,15,600,can.C_H-610,65,"red","horizontal"),
   makeWall(solidWall,10,330,can.C_H-780,65,"red","horizontal"),
   makeWall(woodenWall,10,620,can.C_H-675,65,"red","horizontal"),
   makeWall(woodenWall,1,43,80,65,"red","horizontal"),
 

// makeWall(solidWall,3,400,380,65,"red","horizontal"),
// makeWall(solidWall,3,400,445,65,"red","horizontal"),
// makeWall(solidWall,50,0,500,65,"red","horizontal"),
 

 
    player.blockToBuild
]
return tablica
}