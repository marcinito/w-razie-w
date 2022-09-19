import { handleHp } from "../../../Functions/shorthandFunction/handleHp"



export const helperAttackMonster=(MONSTER,NPC)=>{
MONSTER.forEach((particularArray,i,MONSTERarr)=>{
    particularArray.forEach((monster,monsterIndex,arrMonster)=>{

        NPC.forEach((npc,indexNpc,arrNpc)=>{
            npc.arrayWithMagic.forEach((magic,indexMagic,arrWhereIsMagic)=>{
              
                if(magic.posX+magic.size<monster.posX || magic.posX>monster.posX+monster.size ||
                    magic.posY+magic.size<monster.posY || magic.posY>monster.posY+monster.size){
           //nothing
                    }else{
                     if(magic.id==="attack"){
                         
                        arrWhereIsMagic.splice(indexMagic,1)
                        
                        monster.hp-=magic.strenghtAttack
                        monster.percentageHp-=handleHp(magic.strenghtAttack,monster)
                        if(monster.hp<0){
                            arrMonster.splice(monsterIndex,1)
                        }
                     }

                        return
                    }

            })




        })

    })

})
}