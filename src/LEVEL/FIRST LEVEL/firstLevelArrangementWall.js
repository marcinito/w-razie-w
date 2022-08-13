import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
export const firstLevelArrangementWall=(player,can)=>{
    let tablica=
[
   
    // makeWall(goldWall,30,10,can.C_H-100,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-165,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-230,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-295,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-360,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-425,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-490,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,can.C_H-545,65,"orange","horizontal"),
    // makeWall(goldWall,30,10,10,65,"blue","vertical"),
    // makeWall(goldWall,30,800,10,65,"blue","vertical"),
    // makeWall(goldWall,9,600,400,65,"darkblue","horizontal"),
    // makeWall(goldWall,7,400,300,65,"darkblue","horizontal"),
  
 
    
    makeWall(magmaWall,30,0,400,65,"orange","vertical"),
    makeWall(solidWall,30,65,400,65,"orange","vertical"),
    makeWall(solidWall,30,130,400,65,"orange","vertical"),
    makeWall(solidWall,30,195,400,65,"orange","vertical"),
    makeWall(solidWall,30,260,400,65,"orange","vertical"),
    makeWall(solidWall,30,325,400,65,"orange","vertical"),
    makeWall(solidWall,30,390,400,65,"orange","vertical"),
    makeWall(solidWall,30,455,400,65,"orange","vertical"),
    makeWall(magmaWall,30,510,400,65,"blue","vertical"),
    makeWall(plainWall,30,575,400,65,"blue","vertical"),
    makeWall(plainWall,30,640,400,65,"blue","vertical"),
    makeWall(plainWall,30,705,400,65,"blue","vertical"),
    makeWall(plainWall,30,770,400,65,"blue","vertical"),
    makeWall(plainWall,30,835,400,65,"blue","vertical"),
    makeWall(magmaWall,30,900,400,65,"blue","vertical"),
  
 
   
    
    player.blockToBuild
]
return tablica
}