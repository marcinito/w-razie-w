let axeCounter=0
setInterval(()=>{
axeCounter+=1
if(axeCounter>3){axeCounter=0}
},200)

//
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
 
    if(player.axeArray.length>0){
        player.axeArray[0].draw(can,axeCounter)
        if(player.axeArray[0].lifeCycleAttack>50){
            player.axeArray.splice(0,1)
        }
    }
 
}

            
            
            
