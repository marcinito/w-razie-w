export const FireAtakFromPlayer=(player,can)=>{
    if(player.bullet.length>0){
        player.bullet.forEach((el,i,arr)=>{
            el.draw(can,player)
        })
    }
}