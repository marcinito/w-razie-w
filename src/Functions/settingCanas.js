export const canvasSettingsGame=()=>{
    const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
console.log(window.innerHeight)
    canvas.width=1200
canvas.height=900
const C_W=1200
const C_H=900

let canvasProperties={C_H,C_W,ctx}
return canvasProperties
}


