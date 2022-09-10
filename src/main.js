import scss from './mainStyle.scss'


import { canvasSettingsGame } from './Functions/settingCanas'
//WALL IMPORT

import { Player } from './objects/player/player'
export const menu=new menuObject()
export let player=new Player()
import { movementPlayer } from './objects/player/movementPlayer/movementPlayer'
import { FireAtakFromPlayer } from './objects/player/FireAtakFromPlayer'
import { menuObject } from './objects/menuObject'
import { PLAYERGRAVITY } from './objects/player/PLAYERGRAVITY'
import { ghostAttackPlayer } from './objects/MONSTER/ghost/GhostAttackPlayer'
import { whenFireBallFromDragonTouchWallOrPlayer } from './objects/MONSTER/dragon/whenFireBallFromDragonTouchWallOrPlayer'
import { whenDragonTouchPlayer } from './objects/MONSTER/dragon/whenDragonTouchPlayer'
import { ghostGravity } from './objects/MONSTER/ghost/ghostGravity'
import { dragonGravity } from './objects/MONSTER/dragon/dragonGravity'

import { glockAmmoVsWall } from './objects/GUN/glock/glockAmmoVsWall'
import { dynamiteAmmoVsWall } from './objects/GUN/dynamite/dynamiteAmmoVsWall'
import { dynamiteVsLivingCreature } from './objects/GUN/dynamite/dynamiteVsLivingCreature'
import { playerTakeItemFromMap } from './objects/player/playerTakeItemFromMap'
import { zombieGravity } from './objects/MONSTER/zombie/zombieGravity'
import { zombieAttackPlayer } from './objects/MONSTER/zombie/zombieAttackPlayer'


import { firstLevelArrangementWall } from './LEVEL/FIRST LEVEL/firstLevelArrangementWall'

import { monsterOnFirstLevel } from './LEVEL/FIRST LEVEL/monsterOnFirstLevel'

import { itemsOnFirstLevel } from './LEVEL/FIRST LEVEL/itemsOnFirstLevel'
import { axeAttackHitWall } from './objects/GUN/axe/axeAttackHitWall'
import { gravityItemsOnMap } from './objects/ITEMSonMAP/functionItemsOnMap/gravityItemsOnMap'
import { soldierAttackPlayer } from './objects/MONSTER/soldier/soldierAttackPlayer'
import { soldierGravity } from './objects/MONSTER/soldier/soldierGravity'
import { whenBulletFromSoldierTouchWallOrPlayer } from './objects/MONSTER/soldier/whenBulletFromSoldierTouchWallOrPlayer'
import { axeAttackMonster } from './objects/GUN/axe/axeAttackMonster'
import { breathingOfPlayer } from './objects/player/breathingOfPlayer'
import { handleButton } from './Functions/MENU/handlebutton'
import { greetings } from './Functions/MENU/greetings'

import { sheepGravity } from './objects/MONSTER/sheep/sheepGravity'
import { glockAmmoVsMonster } from './objects/GUN/glock/glockAmmoVsMonster'
import { checkIfPlayerIsAlive } from './objects/player/checkIfPlayerIsAlive'
import { woodenBoxGravity } from './objects/WALL/woodenBox/woodenBoxGravity'
import { secondLevelArrangementWall } from './LEVEL/secondLevel/secondLevelArrangementWall'
import { monsterInSecondLevel } from './LEVEL/secondLevel/monsterInSecondLevel'
import { itemsOnSecondLvl } from './LEVEL/secondLevel/itemsOnSecondlvl'
import { countNumberMonsterOnLeve } from './LEVEL/CHANGE-LEVEl/countNumberMonsterOnLevel'
import { helperPlayer } from './objects/NPC/helperPlayer'
import { npcGravity } from './objects/NPC/npcGravity'



const promotionDiv=document.querySelector(".promotionDiv")
const canvas=document.getElementById("canvas")

const menuEq=document.querySelector(".menuEq")

//LISTA ZADAN//
//1//ZRobic tak by jedna funkcja obslugiwala wszystkie attaki z glocka w potwory//

window.addEventListener("resize",()=>{
    location.reload()
})
//It need be develop in order to handle primary menu button start game etc...
handleButton(menu)

greetings()
export let can=canvasSettingsGame()

// greetings()


const imgTitleFromMenu=[...document.querySelectorAll(".imgTitle")]

export let transitionArray=[]

export let changeLevel=()=>{
    if(menu.level===1){
        console.log("wykonalo sie")
                WALL=secondLevelArrangementWall(player,can)
                MONSTER=monsterInSecondLevel()
                itemsOnMap=itemsOnSecondLvl()
                countNumberMonsterOnLeve()
            }
            if(menu.level===2){
                console.log("wykonalo sie")
                        WALL=firstLevelArrangementWall(player,can)
                        MONSTER=monsterInSecondLevel()
                        itemsOnMap=itemsOnSecondLvl()
                        countNumberMonsterOnLeve()
                    }
}
export let NPC=[]
export let WALL=firstLevelArrangementWall(player,can)
export let MONSTER=monsterOnFirstLevel()
export let itemsOnMap=itemsOnFirstLevel()
movementPlayer(player,imgTitleFromMenu,itemsOnMap)
console.log(MONSTER)
 const runApp=()=>{
 
   if(menu.playGame==="game"){


can.ctx.clearRect(0,0,can.C_W,can.C_H)
//player
player.draw(can)
checkIfPlayerIsAlive(player)
breathingOfPlayer(player)
playerTakeItemFromMap(player,itemsOnMap)
// AmmoVsWall(player,WALL,can)
PLAYERGRAVITY(player,WALL,can)
// checkIfPlayerIsAlive(player) ----- do usuniecia

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
        if(title.name==="wodenBox"){
            woodenBoxGravity()
        }

})   
})

//MONSTER
MONSTER.forEach((pArrMonster,index,arrayMONSTER)=>{
    pArrMonster.forEach((monster,i,arr)=>{
        if(monster.name==="ghost"){
            monster.draw(can)
            ghostAttackPlayer(player,arr)
            ghostGravity(WALL,arr,can)
            monster.movement()
          
        }
        if(monster.name==="dragon"){
            monster.movement()
            monster.draw(can)
            dragonGravity(WALL,arr,can)
            monster.attackFireBall(can)
            whenFireBallFromDragonTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
            whenDragonTouchPlayer(player,arr)
            glockAmmoVsMonster(player,arr)
        }
        if(monster.name==="zombie"){
            monster.movement()
            monster.draw(can)
            zombieGravity(WALL,arr,can)
            zombieAttackPlayer(player,arr)
            glockAmmoVsMonster(player,arr)
           

        }
        if(monster.name==="soldier"){
            monster.movement()
            monster.draw(can)
            monster.shootFromGun(can)
            soldierAttackPlayer(player,arr)
            soldierGravity(WALL,arr,can)
            glockAmmoVsMonster(player,arr)
      whenBulletFromSoldierTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
           
        }
        if(monster.name==="sheep"){
            monster.movement()
            monster.draw(can)
          
            sheepGravity(WALL,arr,can)
            glockAmmoVsMonster(player,arr)
        }
 

    })
})
NPC.forEach((npc,index,arrNpc)=>{
    npc.draw(can)
    npcGravity(npc,WALL,can)
})

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
//effect when player passed level
if(transitionArray.length>0){
    transitionArray.forEach((el)=>{
        el.draw(can)
        let gradient=can.ctx.createLinearGradient(0,30,1050,200)
        gradient.addColorStop(0,"red")
        gradient.addColorStop(1,"magenta")
        gradient.addColorStop(0.5,"green")
        gradient.addColorStop(0.3,"yellow")
        can.ctx.fillStyle=gradient
        can.ctx.font = "100px Arial";
        can.ctx.fillText("You passed level",can.C_H/3,300)
        can.ctx.fillStyle="black"
        can.ctx.strokeText("You passed level",can.C_H/3,300)
    })
}
   }

   if(menu.playGame==="game-over"){
    window.location="/gameover.html"
   }
    requestAnimationFrame(runApp)
}




runApp()





