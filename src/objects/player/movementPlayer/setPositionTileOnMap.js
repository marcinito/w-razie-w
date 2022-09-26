import { can } from "../../../main"
import { canIPutBlockInThisPlace } from "./canIPutBlockInThisPlace"


export const setPositionTileOnMap=(ex,ey,distance)=>{
    //figure out where is mouse on which percent from window
let calculatePercentX=(ex*100)/window.innerWidth
let calculatePercentY=(ey*100)/window.innerHeight
let pointX=calculatePercentX/100*can.C_W
let pointY=calculatePercentY/100*can.C_H


let point= {x:pointX,y:pointY}

return point

}