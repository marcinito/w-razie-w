import css from './style.css'
import duszek from './images/duszek.png'
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

let wallArr=[]
let player=[new Player()]
movementPlayer(player[0])
let allObject=[
    makeWall(plainWall,4,30,110,60,"brown","horizontal",wallArr),
    makeWall(plainWall,4,30,700,60,"darkcyan","horizontal",wallArr),
    makeWall(plainWall,4,400,20,60,"orange","vertical",wallArr),
    makeWall(plainWall,4,700,200,60,"yellow","vertical",wallArr),
    makeWall(plainWall,4,50,200,60,"blue","vertical",wallArr),
  

,player,
createMonster(Ghost,1)]
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

allObject.forEach((allE,allI,allArr)=>{
    allE.forEach((el,i,arr)=>{
        el.draw(can)
        GRAVITY(staticE,dynE,can,wallArr)
        if(el.id==="monster"){
            el.movement()
        }
    })
})

    requestAnimationFrame(runApp)
}
runApp()
