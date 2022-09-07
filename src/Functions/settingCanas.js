export const canvasSettingsGame=()=>{
    const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
console.log(window.innerHeight)
    canvas.width=1300
canvas.height=800
const C_W=1300
const C_H=800

let canvasProperties={C_H,C_W,ctx}
return canvasProperties
}


