export const FireAtakFromPlayer=(player,can,WALL)=>{
    if(player.bulletGlockArray.length>0){
        player.bulletGlockArray.forEach((el,i,arrBullet)=>{
           if(el.name==="glock"){
            el.draw(can)
           }
       
        })
    }
    if(player.dynamitsArray.length>0){
        player.dynamitsArray.forEach((el,i,arrDynamits)=>{
           if(el.name==="dynamite"){
            el.draw(can)
           }
       
        })
    }
 
}

            
            
            
