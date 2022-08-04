import scss from './style.scss'

import { canvasSettings } from './Functions/settingCanas'
//WALL IMPORT
import { plainWall } from './objects/WALL/plainWall/plainWall'
import { magmaWall } from './objects/WALL/magmaWall/magmaWall'
import { solidWall } from './objects/WALL/solidWall/solidWall'
import { goldWall } from './objects/WALL/goldWall/goldWall'
import {makeWall} from './Functions/makeWall'
import { Player } from './objects/player/player'
import { movementPlayer } from './objects/player/movementPlayer/movementPlayer'

import {createMonster} from './Functions/createMonster.js'
import {Ghost} from './objects/ghost/ghost'

import { FireAtakFromPlayer } from './objects/player/FireAtakFromPlayer'


import { Dragon } from './objects/dragon/dragon'

import { PLAYERGRAVITY } from './objects/player/PLAYERGRAVITY'
import { ghostAttackPlayer } from './objects/ghost/GhostAttackPlayer'
import { whenFireBallFromDragonTouchWallOrPlayer } from './objects/dragon/whenFireBallFromDragonTouchWallOrPlayer'
import { whenDragonTouchPlayer } from './objects/dragon/whenDragonTouchPlayer'
import { ghostGravity } from './objects/ghost/ghostGravity'
import { dragonGravity } from './objects/dragon/dragonGravity'
import { ammoFromPlayerVsGhost } from './objects/ghost/ammoFromPlayerVsGhost'
import { ammoFromPlayerVsDragon } from './objects/dragon/ammoFromPlayerVsDragon'
import { checkIfPlayerIsAlive } from './objects/player/checkIfPlayerIsAlive'
import { drawMenuEquipment } from './Functions/MENU/dashboard/drawMenuEquipment'
import { showNumberAvailableTitleToUseOnDashBoard } from './Functions/MENU/dashboard/showNumberAvailableTitleToUseOnDashBoard'
import { switchViewfinder } from './objects/player/movementPlayer/switchViefinder'
import { glockAmmoVsWall } from './objects/GUN/glock/glockAmmoVsWall'
import { dynamiteAmmoVsWall } from './objects/GUN/dynamite/dynamiteAmmoVsWall'
import { dynamiteVsLivingCreature } from './objects/GUN/dynamite/dynamiteVsLivingCreature'
import { goldenCoin } from './objects/ITEMSonMAP/goldenCoin/goldenCoin'
import { playerTakeItemFromMap } from './objects/player/playerTakeItemFromMap'
import { Zombie } from './objects/zombie/zombie'
import { zombieGravity } from './objects/zombie/zombieGravity'


const imgTitleFromMenu=[...document.querySelectorAll(".imgTitle")]
const divsWithNumberAvailableTitleToBuildNew=[...document.querySelectorAll(".quantity")]


let can=canvasSettings()






let player=new Player()
movementPlayer(player,imgTitleFromMenu)

let WALL=
[
    // makeWall(plainWall,10,200,300,60,"orange","horizontal"),
    // makeWall(plainWall,10,20,360,60,"skyblue","horizontal"),
    makeWall(goldWall,30,10,can.C_H-65,65,"orange","vertical"),
    makeWall(goldWall,30,10,can.C_H-130,65,"orange","horizontal"),
    makeWall(goldWall,30,10,can.C_H-195,65,"orange","horizontal"),
    makeWall(goldWall,30,10,can.C_H-260,65,"orange","horizontal"),
    makeWall(goldWall,30,10,can.C_H-325,65,"orange","horizontal"),
    makeWall(goldWall,15,10,20,65,"orange","vertical"),
    makeWall(goldWall,15,700,20,65,"orange","vertical"),
 
    
   
  
 
   
    
    player.blockToBuild
]

let MONSTER=
[
    createMonster(Ghost,0),
    createMonster(Dragon,0),
    createMonster(Zombie,10)
]

let itemsOnMap=[

]
let zombieMove=0
setInterval(()=>{
zombieMove++
if(zombieMove>9)
{
    zombieMove=0
}
},200)


//Coin rotate
let moveCoin=0
setInterval(()=>{
if(moveCoin==4){
    moveCoin=0
}
moveCoin++


},300)

//How often dragon move his wings
let changeImage=0
setInterval(()=>{
changeImage++
if(changeImage>=3){
    changeImage=0
    
}
},150)
//COUNTER is equivalent how often dragon attack from fire ball
let counter=0
setInterval(()=>{
counter++
if(counter>=3){
    counter=0
}
},1000)
drawMenuEquipment()
const runApp=()=>{



can.ctx.clearRect(0,0,can.C_W,can.C_H)
//player
player.draw(can)

FireAtakFromPlayer(player,can)
playerTakeItemFromMap(player,itemsOnMap)

// AmmoVsWall(player,WALL,can)
PLAYERGRAVITY(player,WALL,can)
checkIfPlayerIsAlive(player)
switchViewfinder(player)
//////
//****************** */


//GUN
glockAmmoVsWall(player,WALL,can)
dynamiteAmmoVsWall(player,WALL,can)




//wall
//pArrWallArray-particular array with set o wall
WALL.forEach((pArrWallArray,wI,WALLarray)=>{
pArrWallArray.forEach((title,pItitle,pArrWall)=>{
    if(title.hp>0){
        title.draw(can)
    }

})   
})

//MONSTER
MONSTER.forEach((pArrMonster,index,arrayMONSTER)=>{
    pArrMonster.forEach((monster,i,arr)=>{
        
        monster.movement()
        
        // flyMonsterContactWall(WALL,MONSTER,can)
       
   
        if(monster.name==="ghost"){
            monster.draw(can)
            ghostAttackPlayer(player,arr)
            ghostGravity(WALL,arr,can)
            ammoFromPlayerVsGhost(arr,player)
        }
        if(monster.name==="dragon"){
            monster.draw(can,changeImage)
            dragonGravity(WALL,arr,can)
            monster.attackFireBall(counter,can)
            whenFireBallFromDragonTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
            whenDragonTouchPlayer(player,arr)
            ammoFromPlayerVsDragon(arr,player)
        }
        if(monster.name==="zombie"){
            monster.draw(can,zombieMove)
            zombieGravity(WALL,arr)

        }
 

    })
})


//MENU
showNumberAvailableTitleToUseOnDashBoard(divsWithNumberAvailableTitleToBuildNew,player)
//GUN
glockAmmoVsWall(player,WALL,can,itemsOnMap)
dynamiteAmmoVsWall(player,WALL,can,itemsOnMap)
dynamiteVsLivingCreature(MONSTER,player)
//ITEMS ON MAP
itemsOnMap.forEach((item,i,arr)=>{
    
        item.draw(can,moveCoin)
    
})

    requestAnimationFrame(runApp)
}
runApp()




