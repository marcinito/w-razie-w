import { makeWall } from "../../Functions/makeWall"
import { can } from "../../main"
import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { woodenWall } from "../../objects/WALL/woodenWall/woodenWall"

export const lastLevelArrangementWall=()=>{
    let array=[
makeWall(plainWall,30,0,0,65,"red","horizontal"),
makeWall(plainWall,30,0,65,65,"red","horizontal"),
makeWall(plainWall,30,0,130,65,"red","horizontal"),
makeWall(brickWall,30,0,195,65,"red","horizontal"),
makeWall(brickWall,30,0,260,65,"red","horizontal"),
makeWall(solidWall,30,0,325,65,"red","horizontal"),
makeWall(goldWall,3,600,390,65,"red","horizontal"),makeWall(brickWall,1,795,390,65,"red","horizontal"),
makeWall(goldWall,3,600,455,65,"red","horizontal"),makeWall(brickWall,1,795,455,65,"red","horizontal"),
makeWall(goldWall,3,600,520,65,"red","horizontal"),makeWall(brickWall,1,795,520,65,"red","horizontal"),
makeWall(goldWall,3,600,585,65,"red","horizontal"),makeWall(brickWall,1,795,585,65,"red","horizontal"),
makeWall(goldWall,3,600,650,65,"red","horizontal"),makeWall(brickWall,1,795,650,65,"red","horizontal"),


makeWall(woodenWall,5,0,can.C_H-325,65,"red","horizontal"),
makeWall(woodenWall,5,0,can.C_H-390,65,"red","horizontal"),

makeWall(solidWall,30,0,can.C_H-260,65,"red","horizontal"),
makeWall(magmaWall,30,0,can.C_H-65,65,"red","horizontal"),
makeWall(magmaWall,30,0,can.C_H-130,65,"red","horizontal"),
makeWall(magmaWall,30,0,can.C_H-195,65,"red","horizontal"),

    ]
    return array
}