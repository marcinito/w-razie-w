import css from './style.css'
import duszek from './images/duszek.png'
import { canvasSettings } from './Functions/settingCanas'
import {plainWall} from './objects/plainWall'
import {makeWall} from './Functions/makeWall'
import {Player} from './objects/player'
import {movementPlayer} from './Functions/movementPlayer'
import {GRAVITYWALL} from './Functions/GRAVITYWALL'
import {createMonster} from './Functions/createMonster.js'
import {Ghost} from './objects/ghost'
import { AmmoVsWall } from './Functions/AmmoVSWall'
import { FireAtakFromPlayer } from './Functions/FireAtakFromPlayer'
import { DRAWALL } from './Functions/shortHandFunction/DRAWAll'
import { solidWall } from './objects/solidWall'
import { Dragon } from './objects/dragon'

let can=canvasSettings()


const imgDuszek=new Image(100,100)
imgDuszek.src=duszek

let wallArr=[]
let player=[new Player()]
movementPlayer(player[0])
let allObject=[
    makeWall(solidWall,24,30,110,60,"skyblue","horizontal",wallArr),
    makeWall(plainWall,4,30,700,60,"skyblue","horizontal",wallArr),
    makeWall(plainWall,24,400,20,60,"skyblue","vertical",wallArr),
    makeWall(solidWall,24,700,200,60,"skyblue","vertical",wallArr),
    makeWall(plainWall,4,50,200,60,"skyblue","vertical",wallArr),
  

,player,
createMonster(Ghost,1),
createMonster(Dragon,2),
]
console.log(wallArr)

//SORT OBJECT TO STATIC AND DYNAMIC
let staticE=[]
let dynE=[]

allObject.forEach(el=>{
 el.forEach((pE,i,arr)=>{
    //pE - particular element
    if(pE.type==="static"){
        staticE.push(pE)
       
    }
    else if(pE.type==="dynamic"){
        dynE.push(pE)
    }
    
 })
})




console.log(dynE)

const runApp=()=>{
can.ctx.clearRect(0,0,can.C_W,can.C_H)
FireAtakFromPlayer(player[0],can)
allObject.forEach((allE,allI,allArr)=>{
    allE.forEach((el,i,arr)=>{
       DRAWALL(el,can)
       
        GRAVITYWALL(staticE,dynE,can,wallArr)
        AmmoVsWall(player[0],staticE,can,allObject)
        
        if(el.id==="monster"){
            el.movement()
        }
    })
})

    requestAnimationFrame(runApp)
}
runApp()
