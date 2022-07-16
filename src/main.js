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
    

,player,
createMonster(Ghost,10)]

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
player[0].draw(can)
allObject.forEach((allE,allI,allArr)=>{
    allE.forEach((el,i,arr)=>{
        el.draw(can)
        GRAVITY(staticE,dynE)
        if(el.id==="monster"){
            el.movement()
        }
    })
})

    requestAnimationFrame(runApp)
}
runApp()
