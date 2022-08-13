export const canvasSettingsGame=()=>{
    const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
    canvas.width=window.innerWidth
canvas.height=window.innerHeight
const C_W=window.innerWidth
const C_H=window.innerHeight

let canvasProperties={C_H,C_W,ctx}
return canvasProperties
}
export const canvasSettingsMenu=()=>{
    const canvas=document.getElementById("canvasMenu")
    const ctx=canvas.getContext("2d")
    canvas.width=window.innerWidth
canvas.height=window.innerHeight
const C_W=window.innerWidth
const C_H=window.innerHeight
let canvasProperties={C_H,C_W,ctx}
return canvasProperties
}