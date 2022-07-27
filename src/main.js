import scss from './style.scss'

import { canvasSettings } from './Functions/settingCanas'
import {plainWall} from './objects/plainWall'
import {makeWall} from './Functions/makeWall'
import { Player } from './objects/player/player'
import { movementPlayer } from './objects/player/movementPlayer'

import {createMonster} from './Functions/createMonster.js'
import {Ghost} from './objects/ghost/ghost'
import { AmmoVsWall } from './objects/player/AmmoVSWall'
import { FireAtakFromPlayer } from './objects/player/FireAtakFromPlayer'

import { solidWall } from './objects/solidWall'
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
import { drawMenuEquipment } from './Functions/drawMenuEquipment'

let can=canvasSettings()






let player=new Player()
movementPlayer(player)

let WALL=
[
    // makeWall(plainWall,10,200,300,60,"orange","horizontal"),
    // makeWall(plainWall,10,20,360,60,"skyblue","horizontal"),
    makeWall(plainWall,30,10,can.C_H-170,60,"orange","horizontal"),
    makeWall(plainWall,4,50,200,60,"pink","horizontal"),
    makeWall(solidWall,17,400,100,60,"green","vertical"),
    player.blockToBuild
]

let MONSTER=
[
    createMonster(Ghost,2),
    createMonster(Dragon,1),
]
console.log(MONSTER)








let counter=0
setInterval(()=>{
counter++
},500)

const runApp=()=>{

drawMenuEquipment()

can.ctx.clearRect(0,0,can.C_W,can.C_H)
//player
player.draw(can)
FireAtakFromPlayer(player,can)
AmmoVsWall(player,WALL,can)
PLAYERGRAVITY(player,WALL,can)
checkIfPlayerIsAlive(player)
//////
//****************** */
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
        monster.draw(can)
        monster.movement()
        
        // flyMonsterContactWall(WALL,MONSTER,can)
       
      
        if(monster.name==="ghost"){
            ghostAttackPlayer(player,arr)
            ghostGravity(WALL,arr,can)
            ammoFromPlayerVsGhost(arr,player)
        }
        if(monster.name==="dragon"){
            dragonGravity(WALL,arr,can)
            monster.attackFireBall(counter,can)
            whenFireBallFromDragonTouchWallOrPlayer(monster,player,WALL,can)
            whenDragonTouchPlayer(player,arr)
            ammoFromPlayerVsDragon(arr,player)
        }
 

    })
})





    requestAnimationFrame(runApp)
}
runApp()


