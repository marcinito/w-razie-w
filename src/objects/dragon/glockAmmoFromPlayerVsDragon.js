import { handleHp } from "../../Functions/helpFunction/handleHp"

export const glockAmmoFromPlayerVsDragon=(arrayDragon,player)=>{

    arrayDragon.forEach((monster,indexMonster,arrayMONSTER)=>{

        player.bulletGlockArray.forEach((bullet,indexBullet,arrayBullet)=>{
            if(bullet.posX+bullet.size<monster.posX || bullet.posX>monster.posX+monster.size||
                bullet.posY>monster.posY+monster.size || bullet.posY+bullet.size<monster.posY){
                    //NO COLLISION
                }
                else{
                    
                    monster.hp-=bullet.strenghtAttack
                    monster.percentageHp-=handleHp(bullet.strenghtAttack,monster)
                    arrayBullet.splice(indexBullet,1)
                    if(monster.hp<0){
                        arrayMONSTER.splice(indexMonster,1)
                    }
                }



        })
        

    })

    
}