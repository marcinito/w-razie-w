export const helperAttackWall=(WALL,arrayWithMagic)=>{
if(arrayWithMagic.length>0){
    WALL.forEach((particularArray,i,WALL)=>{
        particularArray.forEach((title,indexTitle,arrTitle)=>{
arrayWithMagic.forEach((spell,indexSpell,spellArr)=>{
 
    if(spell.posX+spell.size<title.posX || spell.posX>title.posX+title.size ||
        spell.posY+spell.size<title.posY || spell.posY>title.posY+title.size){

        }else{
            if(spell.id==="attack"){
                spellArr.splice(indexSpell,1)
            }
        }
})
          
        })
    })
}
    
}