import { can } from "../../../main"


export const setPositionTileOnMap=(ex,ey)=>{
    //figure out where is mouse on which percent from window
let calculatePercentX=(ex*100)/window.innerWidth
let calculatePercentY=(ey*100)/window.innerHeight
let pointX=calculatePercentX/100*can.C_W
let pointY=calculatePercentY/100*can.C_H

return {x:pointX,y:pointY}


}