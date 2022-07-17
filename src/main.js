import css from './style.css'
import duszek from './images/duszek.jpg'
import { canvasSettings } from './Functions/settingCanas'
import {plainWall} from './objects/plainWall'
import {makeWall} from './Functions/makeWall'
import {Player} from './objects/player'
import {movementPlayer} from './Functions/movementPlayer'
import {GRAVITY} from './Functions/GRAVITY'
import {createMonster} from './Functions/createMonster.js'
import {Ghost} from './objects/ghost'
let can=canvasSettings()


const imgDuszek=new Image(100,100)
imgDuszek.src=duszek

let player=[new Player()]
movementPlayer(player[0])
let allObject=[
    makeWall(plainWall,20,10,10,60,"green","horizontal"),
    makeWall(plainWall,20,10,700,60,"green","horizontal"),
    makeWall(plainWall,10,400,20,60,"green","vertical"),
    makeWall(plainWall,20,700,200,40,"green","vertical"),
    makeWall(plainWall,20,50,200,40,"blue","vertical"),
  

,player,
createMonster(Ghost,1)]

//SORT OBJECT TO STATIC AND DYNAMIC
let staticE=[]
let dynE=[]
allObject.forEach(el=>{
 el.forEach(pE=>{
    //pE - particular element
    if(pE.type==="static"){
        staticE.push(pE)
    }
    else{
        dynE.push(pE)
    }
 })
})




console.log(dynE)

const runApp=()=>{
can.ctx.clearRect(0,0,can.C_W,can.C_H)

allObject.forEach((allE,allI,allArr)=>{
    allE.forEach((el,i,arr)=>{
        el.draw(can)
        GRAVITY(staticE,dynE,can)
        if(el.id==="monster"){
            el.movement()
        }
    })
})

    requestAnimationFrame(runApp)
}
runApp()
