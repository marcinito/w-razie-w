export const AmmoVsWall=(player,WALL,can)=>{
let bulletArr=player.bullet
WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
arrayWithTitle.forEach((title,tI,tArr)=>{

    bulletArr.forEach((bullet,bI,bArr)=>{
        if(bullet.posX+bullet.size<title.posX || bullet.posX>title.posX+title.size||
            bullet.posY>title.posY+title.size || bullet.posY+bullet.size<title.posY){
                //NO COLLISION
            }
            else{
            tArr[tI].hp-=1
            bArr.splice(bArr[bI],1)
            
            if(title.hp===0 || title.hp<0){
               tArr.splice(tI,1)
              
            }
            }

            //IF AMMO PASSED VERGE OF MAP

if(bullet.posX<0 || bullet.posX>can.C_W || bullet.posY>can.C_H || bullet.posY<0){
    bArr.splice(bArr[bI],1)

}

    })

    


})
})


}