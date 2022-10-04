
import { makeWall } from "../../Functions/makeWall"
import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { woodenWall } from "../../objects/WALL/woodenWall/woodenWall"



export const thirdLevelArrangement=(player,can)=>{
   let tablica=[
   makeWall(solidWall,30,0,0,65,"red","horizontal"),
   makeWall(plainWall,10,200,130,65,"red","horizontal"),
   makeWall(goldWall,5,0,195,65,"red","horizontal"),
   makeWall(goldWall,2,200,65,65,"red","horizontal"),




   makeWall(plainWall,10,0,500,65,"red","horizontal"),
   makeWall(plainWall,10,0,565,65,"red","horizontal"),
   makeWall(solidWall,8,0,630,65,"red","horizontal"),
   makeWall(goldWall,2,520,630,65,"red","horizontal"),
   makeWall(solidWall,1,650,630,65,"red","horizontal"),
   makeWall(solidWall,1,650,565,65,"red","horizontal"),
   makeWall(solidWall,1,650,500,65,"red","horizontal"),

   makeWall(brickWall,10,950,500,65,"red","horizontal"),
   makeWall(solidWall,1,885,500,65,"red","horizontal"),
   makeWall(solidWall,1,885,435,65,"red","horizontal"),
   makeWall(solidWall,1,885,370,65,"red","horizontal"),
   makeWall(solidWall,1,885,305,65,"red","horizontal"),


   makeWall(solidWall,8,1080,305,65,"red","horizontal"),
   makeWall(woodenWall,5,1080,435,65,"red","horizontal"),
   makeWall(magmaWall,10,780,700,65,"red","horizontal"),


   player.blockToBuild
   ]
   return tablica
}