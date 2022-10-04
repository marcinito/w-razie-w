import { makeWall } from "../../Functions/makeWall"
import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { woodenWall } from "../../objects/WALL/woodenWall/woodenWall"

export const secondLevelArrangementWall=(player,can)=>{
    let array=[
        //start from bottom
        makeWall(solidWall,5,0,can.C_H-150,65,"red","horizontal"),,makeWall(brickWall,20,510,can.C_H-150,65,"red","horizontal"),
        makeWall(solidWall,10,0,can.C_H-215,65,"red","horizontal"), makeWall(brickWall,10,845,can.C_H-215,65,"red","horizontal"),
        makeWall(woodenWall,2,0,can.C_H-280,65,"red","horizontal"),
        makeWall(brickWall,15,0,can.C_H-345,65,"red","horizontal"),makeWall(brickWall,15,0,can.C_H-345,65,"red","horizontal"),
        makeWall(brickWall,30,0,can.C_H-410,65,"red","horizontal"),
        makeWall(magmaWall,10,0,can.C_H-605,65,"red","horizontal"),
  
        makeWall(magmaWall,10,0,can.C_H-835,65,"red","horizontal"),
        makeWall(magmaWall,10,715,can.C_H-770,65,"red","horizontal"),
        makeWall(woodenWall,1,1365,can.C_H-835,65,"red","horizontal"),
        makeWall(woodenWall,1,1365,can.C_H-770,65,"red","horizontal"),
        makeWall(solidWall,1,585,can.C_H-770,65,"red","horizontal"),
        makeWall(solidWall,1,585,can.C_H-705,65,"red","horizontal"),
        makeWall(woodenWall,4,700,425,65,"red","horizontal"),
        makeWall(goldWall,3,1400,425,65,"red","horizontal"),
        makeWall(goldWall,3,1400,360,65,"red","horizontal"),
        makeWall(magmaWall,3,1400,295,65,"red","horizontal"),
        makeWall(magmaWall,1,1335,295,65,"red","horizontal"),
        makeWall(magmaWall,1,1335,360,65,"red","horizontal"),
        makeWall(magmaWall,1,1335,425,65,"red","horizontal"),
    
        player.blockToBuild
    ]
    return array
}