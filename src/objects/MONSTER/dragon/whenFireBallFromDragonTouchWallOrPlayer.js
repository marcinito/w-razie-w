import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { NPC } from "../../../main"
import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"



export const whenFireBallFromDragonTouchWallOrPlayer=(monster,player,WALL,can,itemsOnMap)=>{
//IF FIRE BALL MEET WALL BLOCK

WALL.forEach((titleArray,indexTitleArray,arrayWall)=>{
    titleArray.forEach((title,indexTitle,arrayTitle)=>{

monster.fireBall.forEach((ball,indexBall,arrayBall)=>{
    if(title.posX+title.size<ball.posX || title.posX>ball.posX+ball.size ||
        title.posY+title.size<ball.posY || title.posY>ball.posY+ball.size){
    //fire ball no collision with title
        }
        else{
            title.isHitBy="dragonBall"
            title.hp-=monster.attack.wall
            arrayBall.splice(indexBall,1)
            if(title.hp<0&&title.isHitBy==="dragonBall"){
                if(title.name==="goldWall"){
                        itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
                }
                if(title.name==="solidWall"){
                    itemsOnMap.push(new solidWallItems(title.posX,title.posY,title.size))
                }
                if(title.name==="plainWall"){
                        itemsOnMap.push(new plainWallItems(title.posX,title.posY,title.size))
                }
                if(title.name==="magmaWall"){   
                       itemsOnMap.push(new magmaWallItems(title.posX,title.posY,title.size))
                    
                }
                arrayTitle.splice(indexTitle,1)
            }
        }
})


    })
})

//IF FIRE BALL HIT PLAYER
monster.fireBall.forEach((ball,indexBall,arrWithFireBall)=>{
    if(player.posX+player.size<ball.posX || player.posX>ball.posX+ball.size ||
        player.posY+player.size<ball.posY || player.posY>ball.posY+ball.size){
    
        }
        else{
    
            player.hp-=monster.attack.player
            arrWithFireBall.splice(indexBall,1)
            player.percentageHp-=handleHp(monster.attack.player,player)
    
        }
})

//If fire ball hit NPC
monster.fireBall.forEach((ball,indexBall,arrWithFireBall)=>{
NPC.forEach((npc,index,arr)=>{
    if(npc.posX+npc.size<ball.posX || npc.posX>ball.posX+ball.size ||
        npc.posY+npc.size<ball.posY || npc.posY>ball.posY+ball.size){
    
        }
        else{
    
            npc.hp-=monster.attack.player
            arrWithFireBall.splice(indexBall,1)
            npc.percentageHp-=handleHp(monster.attack.player,npc)
    
        }
})
})

}