import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
export const firstLevelArrangementWall=(player,can)=>{
    let tablica=
[
   
    makeWall(plainWall,30,10,can.C_H-330,65,"orange","horizontal"),
    makeWall(magmaWall,30,10,can.C_H-265,65,"orange","horizontal"),
    makeWall(plainWall,30,10,can.C_H-200,65,"orange","horizontal"),
    
  
 
   
    
    player.blockToBuild
]
return tablica
}