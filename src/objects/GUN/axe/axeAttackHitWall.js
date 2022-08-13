import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
export const axeAttackHitWall=(player,WALL,can,itemsOnMap)=>{
   player.axeArray.forEach(axe=>{
    WALL.forEach((pE,i,arr)=>{
        pE.forEach((title,index,arrs)=>{
            if(axe.posX+axe.size<title.posX || axe.posX>title.posX+title.size||
                axe.posY>title.posY+title.size || axe.posY+axe.size<title.posY){
                    //NO COLLISION
                }
                else{
                  
                }
        })
    })
   })
   
}