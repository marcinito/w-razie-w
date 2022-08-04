import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"

export const glockAmmoVsWall=(player,WALL,can,itemsOnMap)=>{
   
    let bulletArr=player.bulletGlockArray
    WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
    arrayWithTitle.forEach((title,tI,tArr)=>{
    

        if(title.hp<0 && title.isHitBy==="glock"){
           console.log("wykonwalo sie tak czy siak")
                if(title.name==="plainWall"){
                    player.building.plainWall.quantity+=1
                }
                if(title.name==="solidWall"){
                    player.building.solidWall.quantity+=1
                }
                if(title.name==="magmaWall"){
                    player.building.magmaWall.quantity+=1
                }
                if(title.name==="goldWall"){
                    itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
                }
             
                tArr.splice(tI,1)
            
        }
        

        bulletArr.forEach((bullet,bI,bArr)=>{
         
    if(bullet.posX+bullet.size<title.posX || bullet.posX>title.posX+title.size||
        bullet.posY>title.posY+title.size || bullet.posY+bullet.size<title.posY){
            //NO COLLISION
        }
        else{
        tArr[tI].hp-=1
        tArr[tI].isHitBy="glock"
        bArr.splice(bArr[bI],1)
        
        
        
  
        }

        //IF AMMO PASSED VERGE OF MAP

if(bullet.posX<0 || bullet.posX>can.C_W || bullet.posY>can.C_H || bullet.posY<0){
bArr.splice(bArr[bI],1)

}
 
    
        })
    
        
    
    
    })
    })
    
    
    }