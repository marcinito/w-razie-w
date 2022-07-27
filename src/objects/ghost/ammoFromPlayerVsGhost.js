import { handleHp } from "../../Functions/helpFunction/handleHp"

export const ammoFromPlayerVsGhost=(arrayGhost,player)=>{

    arrayGhost.forEach((monster,indexMonster,arrayMONSTER)=>{

        player.bullet.forEach((bullet,indexBullet,arrayBullet)=>{
            if(bullet.posX+bullet.size<monster.posX || bullet.posX>monster.posX+monster.size||
                bullet.posY>monster.posY+monster.size || bullet.posY+bullet.size<monster.posY){
                    //NO COLLISION
                }
                else{
                    monster.hp-=bullet.strenghtAttack
                    console.log(monster.hp,"hp")
                    monster.percentageHp-=handleHp(bullet.strenghtAttack,monster)
                    console.log(monster.percentageHp,"percentage")
                    arrayBullet.splice(indexBullet,1)
                    if(monster.hp<0){
                        arrayMONSTER.splice(indexMonster,1)
                    }
                }



        })
        

    })

    
}