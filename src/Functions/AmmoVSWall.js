export const AmmoVsWall=(player,staticE,can,allObject)=>{
   staticE.forEach((sE,sI,sArr)=>{
if(sE.hp===0 || sE.hp<0){
  
    sArr.splice(sI,1)
    if(player.direction==="up"){player.up=true}
    if(player.direction==="down"){player.down=true}
    if(player.direction==="left"){player.left=true}
    if(player.direction==="right"){player.right=true}
    
    
}
    player.bullet.forEach((bE,bI,bArr)=>{
      
        if(bE.posX>sE.posX+sE.size || bE.posX+bE.size<sE.posX||bE.posY>sE.posY+sE.size || bE.posY+bE.size<sE.posY){
            //no collision
        }
        else {
           
            bArr.splice(bArr[bE],1)
            sE.hp-=1
            console.log(bArr.length)
        }
        //WHEN Bullet reach border map
        if(bE.posX>can.C_W){
            bArr.splice(bArr[bE],1)
        }
        if(bE.posX<0){
            bArr.splice(bArr[bE],1)
        }
        if(bE.posY<0){
            bArr.splice(bArr[bE],1)
        }
        if(bE.posY>can.C_H){
            bArr.splice(bArr[bE],1)
        }
    })
   })


}