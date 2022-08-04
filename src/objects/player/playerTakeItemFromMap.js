export const playerTakeItemFromMap=(player,itemsOnMap)=>{
    itemsOnMap.forEach((itemsFromMap,indexItemsFromMap,itemsOnMapArr)=>{

        if(itemsFromMap.layOnMap===false){
            itemsOnMapArr.splice(indexItemsFromMap,1)
            setTimeout(()=>{
                player.money++
            },100)
        }

        if(itemsFromMap.posX+itemsFromMap.size<player.posX || itemsFromMap.posX>player.posX+player.size||
            itemsFromMap.posY>player.posY+player.size || itemsFromMap.posY+itemsFromMap.size<player.posY){
                //NO COLLISION
            }
            else{
                itemsFromMap.posY-=10
                setTimeout(()=>{
                    itemsFromMap.posY-=10
                    setTimeout(()=>{
                        itemsFromMap.posY-=10
                        setTimeout(()=>{
                            itemsFromMap.posY+=10
                            setTimeout(()=>{
                                itemsFromMap.posY+=10
                                setTimeout(()=>{
                                    itemsFromMap.layOnMap=false
                                    
                                    return
                                },50)
                            },100)
                        },100)
                    },100)
                },100)
            }
    })

}