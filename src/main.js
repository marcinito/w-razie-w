import scss from './style.scss'

import { canvasSettingsGame } from './Functions/settingCanas'
//WALL IMPORT

import { Player } from './objects/player/player'
import { movementPlayer } from './objects/player/movementPlayer/movementPlayer'

import {createMonster} from './Functions/createMonster.js'
import {Ghost} from './objects/ghost/ghost'

import { FireAtakFromPlayer } from './objects/player/FireAtakFromPlayer'


import { Dragon } from './objects/dragon/dragon'
import { menuObject } from './objects/menuObject'
import { PLAYERGRAVITY } from './objects/player/PLAYERGRAVITY'
import { ghostAttackPlayer } from './objects/ghost/GhostAttackPlayer'
import { whenFireBallFromDragonTouchWallOrPlayer } from './objects/dragon/whenFireBallFromDragonTouchWallOrPlayer'
import { whenDragonTouchPlayer } from './objects/dragon/whenDragonTouchPlayer'
import { ghostGravity } from './objects/ghost/ghostGravity'
import { dragonGravity } from './objects/dragon/dragonGravity'
import { glockAmmoFromPlayerVsGhost } from './objects/ghost/glockAmmoFromPlayerVsGhost'

import { glockAmmoFromPlayerVsDragon } from './objects/dragon/glockAmmoFromPlayerVsDragon'
import { checkIfPlayerIsAlive } from './objects/player/checkIfPlayerIsAlive'
import { drawMenuEquipment } from './Functions/MENU/dashboard/drawMenuEquipment'

import { switchViewfinder } from './objects/player/movementPlayer/switchViefinder'
import { glockAmmoVsWall } from './objects/GUN/glock/glockAmmoVsWall'
import { dynamiteAmmoVsWall } from './objects/GUN/dynamite/dynamiteAmmoVsWall'
import { dynamiteVsLivingCreature } from './objects/GUN/dynamite/dynamiteVsLivingCreature'
import { goldenCoin } from './objects/ITEMSonMAP/goldenCoin/goldenCoin'
import { playerTakeItemFromMap } from './objects/player/playerTakeItemFromMap'
import { Zombie } from './objects/zombie/zombie'
import { zombieGravity } from './objects/zombie/zombieGravity'
import { zombieAttackPlayer } from './objects/zombie/zombieAttackPlayer'
import { glockAmmoVsZombie } from './objects/zombie/glockAmmoVsZombie'
import { drawPrimaryMenu } from './Functions/MENU/primaryMenu/drawPrimaryMenu'
import { firstLevelArrangementWall } from './LEVEL/FIRST LEVEL/firstLevelArrangementWall'
import { handleButton } from './Functions/MENU/primaryMenu/handleButton'
import { monsterOnFirstLevel } from './LEVEL/FIRST LEVEL/monsterOnFirstLevel'
import { secondLevelArrangementWall } from './LEVEL/secondLevel/secondLevelArrangementWall'
import { monsterInSecondLevel } from './LEVEL/secondLevel/monsterInSecondLevel'
import { canvasSettingsMenu } from './Functions/settingCanas'
import fire from './fireBall.png'

import { itemsOnFirstLevel } from './LEVEL/FIRST LEVEL/itemsOnFirstLevel'
import { axeAttackHitWall } from './objects/GUN/axe/axeAttackHitWall'

const fireBall=new Image(100,100)
fireBall.src=fire
// import smokImg from './smok.png'

//LISTA ZADAN//
//1//ZRobic tak by jedna funkcja obslugiwala wszystkie attaki z glocka w potwory//

const menu=new menuObject()

handleButton(menu)





let can=canvasSettingsGame()
let canMenu=canvasSettingsMenu()

const imgTitleFromMenu=[...document.querySelectorAll(".imgTitle")]
const divsWithNumberAvailableTitleToBuildNew=[...document.querySelectorAll(".quantity")]
export let player=new Player()
movementPlayer(player,imgTitleFromMenu)
drawMenuEquipment()
let WALL=firstLevelArrangementWall(player,can)
let MONSTER=monsterOnFirstLevel()
let itemsOnMap=itemsOnFirstLevel()


let zombieMove=0
setInterval(()=>{
zombieMove++
if(zombieMove>7)
{
    zombieMove=0
}
},100)


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

 const runApp=()=>{
   if(menu.playGame===true){
    can.ctx.drawImage(fireBall,0,0,can.C_W,can.C_H)
if(menu.active==="1"){
    
    WALL=firstLevelArrangementWall(player,can)
    MONSTER=monsterOnFirstLevel()
    menu.active="null"
    
}
if(menu.active==="2"){
    WALL=secondLevelArrangementWall(player,can)
    MONSTER=monsterInSecondLevel()
    menu.active="null"
}

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
            glockAmmoVsZombie(player,arr)
        }
        if(monster.name==="dragon"){
            monster.draw(can,changeImage)
            dragonGravity(WALL,arr,can)
            monster.attackFireBall(counter,can)
            whenFireBallFromDragonTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
            whenDragonTouchPlayer(player,arr)
            glockAmmoVsZombie(player,arr)
        }
        if(monster.name==="zombie"){
            monster.draw(can,zombieMove)
            zombieGravity(WALL,arr)
            zombieAttackPlayer(player,arr)
            glockAmmoVsZombie(player,arr)

        }
 

    })
})


//MENU DASHBOARD





//GUN
glockAmmoVsWall(player,WALL,can,itemsOnMap)
axeAttackHitWall(player,WALL,can,itemsOnMap)
dynamiteAmmoVsWall(player,WALL,can,itemsOnMap)
dynamiteVsLivingCreature(MONSTER,player)
//ITEMS ON MAP
// item.draw(can,moveCoin)
if(itemsOnMap.length>0){
    itemsOnMap.forEach((item,i,arr)=>{
    item.draw(can,moveCoin)
        
    
    })
}
   }
   if(menu.playGame===false){
    drawPrimaryMenu(canMenu)
   }
    requestAnimationFrame(runApp)
}


console.log(player.whatIsInHand)

runApp()




