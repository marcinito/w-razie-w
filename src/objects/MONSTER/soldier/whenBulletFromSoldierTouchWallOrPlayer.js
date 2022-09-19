
import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"
export const whenBulletFromSoldierTouchWallOrPlayer=(monster,player,WALL,can,itemsOnMap)=>{
    WALL.forEach((titleArray,indexTitleArray,arrayWall)=>{
        titleArray.forEach((title,indexTitle,arrayTitle)=>{
    
    monster.arrayWithBullet.forEach((bullet,indexBullet,arrBullet)=>{
        if(title.posX+title.size<bullet.posX || title.posX>bullet.posX+bullet.size ||
            title.posY+title.size<bullet.posY || title.posY>bullet.posY+bullet.size){
        //fire ball no collision with title
            }
            else{
                title.isHitBy="bulletFromSoldier"
                title.hp-=monster.strenghtAttack
                arrBullet.splice(indexBullet,1)
                if(title.hp<0&&title.isHitBy==="bulletFromSoldier"){
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
    monster.arrayWithBullet.forEach((bullet,indexBullet,arrWithBullet)=>{
        if(player.posX+player.size<bullet.posX || player.posX>bullet.posX+bullet.size ||
            player.posY+player.size<bullet.posY || player.posY>bullet.posY+bullet.size){
        
            }
            else{
                console.log(player.hp,"before")
                player.hp-=monster.strenghtAttackFromGun
                arrWithBullet.splice(indexBullet,1)
                player.percentageHp-=handleHp(monster.strenghtAttackFromGun,player)
                console.log(player.hp,"after")
        
            }
    })
}