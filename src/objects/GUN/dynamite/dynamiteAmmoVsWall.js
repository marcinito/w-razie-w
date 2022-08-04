import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
export const dynamiteAmmoVsWall=(player,WALL,can,itemsOnMap)=>{
    //DYNAMITE VS WALL
    
    let dynamitsArray=player.dynamitsArray
WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
arrayWithTitle.forEach((title,tI,tArr)=>{


    if(title.hp<0&&title.isHitBy==="dynamite"){
           console.log("TUTAJ DYNAMITE")
        if(title.name==="goldWall"){
         
           let undefinedTitle
            
        if(itemsOnMap!==undefined){
           
            itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
        }
  
        setTimeout((undefinedTitle)=>{
            itemsOnMap.push(new goldenCoin(undefinedTitle.x,undefinedTitle.y,title.size))
        },200)
           
        }
        if(title.name==="solidWall"){
            player.building.solidWall.quantity+=1
        }
        if(title.name==="plainWall"){
            player.building.plainWall.quantity+=1
        }
        tArr.splice(tI,1)
    
    
   }

    dynamitsArray.forEach((dynamite,dI,dArr)=>{




        if(dynamite.timeToExplode<-76){
            dArr.splice(dI,1)
           }
      
        if(dynamite.posX+dynamite.size<title.posX || dynamite.posX>title.posX+title.size||
            dynamite.posY>title.posY+title.size || dynamite.posY+dynamite.size<title.posY){
                //NO COLLISION
            }
            else{
                title.isHitBy="dynamite"
           
                dynamite.speed=0
                dynamite.fallenSpeed=0
            
               title.hp-=dynamite.strenghtAttack
               
              
            
           
             
            
                
             
            
        
            }

            //IF AMMO PASSED VERGE OF MAP



    })

    


})
})
}