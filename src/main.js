import scss from './mainStyle.scss'


import { canvasSettingsGame } from './Functions/settingCanas'
//WALL IMPORT

import { Player } from './objects/player/player'
export let player=new Player()
import { movementPlayer } from './objects/player/movementPlayer/movementPlayer'
import { FireAtakFromPlayer } from './objects/player/FireAtakFromPlayer'
import { menuObject } from './objects/menuObject'
import { PLAYERGRAVITY } from './objects/player/PLAYERGRAVITY'
import { ghostAttackPlayer } from './objects/ghost/GhostAttackPlayer'
import { whenFireBallFromDragonTouchWallOrPlayer } from './objects/dragon/whenFireBallFromDragonTouchWallOrPlayer'
import { whenDragonTouchPlayer } from './objects/dragon/whenDragonTouchPlayer'
import { ghostGravity } from './objects/ghost/ghostGravity'
import { dragonGravity } from './objects/dragon/dragonGravity'

import { switchViewfinder } from './objects/player/movementPlayer/switchViefinder'
import { glockAmmoVsWall } from './objects/GUN/glock/glockAmmoVsWall'
import { dynamiteAmmoVsWall } from './objects/GUN/dynamite/dynamiteAmmoVsWall'
import { dynamiteVsLivingCreature } from './objects/GUN/dynamite/dynamiteVsLivingCreature'
import { playerTakeItemFromMap } from './objects/player/playerTakeItemFromMap'
import { zombieGravity } from './objects/zombie/zombieGravity'
import { zombieAttackPlayer } from './objects/zombie/zombieAttackPlayer'


import { firstLevelArrangementWall } from './LEVEL/FIRST LEVEL/firstLevelArrangementWall'

import { monsterOnFirstLevel } from './LEVEL/FIRST LEVEL/monsterOnFirstLevel'

import { itemsOnFirstLevel } from './LEVEL/FIRST LEVEL/itemsOnFirstLevel'
import { axeAttackHitWall } from './objects/GUN/axe/axeAttackHitWall'
import { gravityItemsOnMap } from './objects/ITEMSonMAP/functionItemsOnMap/gravityItemsOnMap'
import { soldierAttackPlayer } from './objects/soldier/soldierAttackPlayer'
import { soldierGravity } from './objects/soldier/soldierGravity'
import { whenBulletFromSoldierTouchWallOrPlayer } from './objects/soldier/whenBulletFromSoldierTouchWallOrPlayer'
import { axeAttackMonster } from './objects/GUN/axe/axeAttackMonster'
import { breathingOfPlayer } from './objects/player/breathingOfPlayer'
import { handleButton } from './Functions/MENU/handlebutton'
import { greetings } from './Functions/MENU/greetings'
import {secondLevelArrangementWall} from './LEVEL/secondLevel/secondLevelArrangementWall'
import {monsterInSecondLevel} from './LEVEL/secondLevel/monsterInSecondLevel'
import {itemsOnSecondLvl} from './LEVEL/secondLevel/itemsOnSecondlvl'
import { sheepGravity } from './objects/sheep/sheepGravity'
import { glockAmmoVsMonster } from './objects/GUN/glock/glockAmmoVsMonster'

const interFace=document.querySelector(".interFace")

//LISTA ZADAN//
//1//ZRobic tak by jedna funkcja obslugiwala wszystkie attaki z glocka w potwory//

export const menu=new menuObject()
//It need be develop in order to handle primary menu button start game etc...
handleButton(menu)

greetings()
let can=canvasSettingsGame()

// greetings()

const imgTitleFromMenu=[...document.querySelectorAll(".imgTitle")]



export let WALL=firstLevelArrangementWall(player,can)
let MONSTER=monsterOnFirstLevel()
export let itemsOnMap=itemsOnFirstLevel()
movementPlayer(player,imgTitleFromMenu,itemsOnMap)


 const runApp=()=>{
 
   if(menu.playGame==="game"){
if(menu.level===1){
    WALL=secondLevelArrangementWall(player,can)
    MONSTER=monsterInSecondLevel()
    itemsOnMap=itemsOnSecondLvl()
}

can.ctx.clearRect(0,0,can.C_W,can.C_H)
//player
player.draw(can)
breathingOfPlayer(player)
playerTakeItemFromMap(player,itemsOnMap)
// AmmoVsWall(player,WALL,can)
PLAYERGRAVITY(player,WALL,can)
// checkIfPlayerIsAlive(player) ----- do usuniecia
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
        title.draw(can)
})   
})

//MONSTER
MONSTER.forEach((pArrMonster,index,arrayMONSTER)=>{
    pArrMonster.forEach((monster,i,arr)=>{
        
        monster.movement()
        
   
        if(monster.name==="ghost"){
            monster.draw(can)
            ghostAttackPlayer(player,arr)
            ghostGravity(WALL,arr,can)
          
        }
        if(monster.name==="dragon"){
            monster.draw(can)
            dragonGravity(WALL,arr,can)
            monster.attackFireBall(can)
            whenFireBallFromDragonTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
            whenDragonTouchPlayer(player,arr)
            glockAmmoVsMonster(player,arr)
        }
        if(monster.name==="zombie"){
            monster.draw(can)
            zombieGravity(WALL,arr,can)
            zombieAttackPlayer(player,arr)
            glockAmmoVsMonster(player,arr)

        }
        if(monster.name==="soldier"){
            monster.draw(can)
            monster.shootFromGun(can)
            soldierAttackPlayer(player,arr)
            soldierGravity(WALL,arr,can)
            glockAmmoVsMonster(player,arr)
      whenBulletFromSoldierTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
           
        }
        if(monster.name==="sheep"){
            monster.draw(can)
          
            sheepGravity(WALL,arr,can)
            glockAmmoVsMonster(player,arr)
        }
 

    })
})


//MENU DASHBOARD


FireAtakFromPlayer(player,can)


//GUN
glockAmmoVsWall(player,WALL,can,itemsOnMap)
axeAttackHitWall(player,WALL,can,itemsOnMap)
dynamiteAmmoVsWall(player,WALL,can,itemsOnMap)
dynamiteVsLivingCreature(MONSTER,player)
axeAttackMonster(MONSTER,player)
//ITEMS ON MAP
// item.draw(can,moveCoin)
if(itemsOnMap.length>0){
    gravityItemsOnMap()
    itemsOnMap.forEach((item,i,arr)=>{
    item.draw(can)
        
    
    })
}
   }

    requestAnimationFrame(runApp)
}




runApp()




