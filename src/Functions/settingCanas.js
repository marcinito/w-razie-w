export const canvasSettings=()=>{
    const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
    canvas.width=window.innerWidth-50
canvas.height=window.innerHeight-50
const C_W=window.innerWidth-50
const C_H=window.innerHeight-50

let canvasProperties={C_H,C_W,ctx}
return canvasProperties
}