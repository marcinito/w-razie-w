import { WALL } from "../../../main"


export const monsterHitInWallToOften=()=>{
    WALL.forEach(particular=>{
        particular.forEach((title,index,arr)=>{
            if(title.isHitBy==="monster"&&title.hp<0){
                arr.splice(index,1)
            }
        })
    })
}