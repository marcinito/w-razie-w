import { handleHp } from "../../Functions/helpFunction/handleHp"

export const ghostAttackPlayer=(player,ghostArray)=>{
    ghost.speed=1
    console.log("sad")
    ghostArray.forEach((ghost,index,arr)=>{
    
        if(player.posX+player.size<ghost.posX || player.posX>ghost.posX+ghost.size ||
            player.posY+player.size<ghost.posY || player.posY>ghost.posY+ghost.size){
   
            }
            else{
              
                player.color="red"
                player.hp-=ghost.attack
                ghost.speed=0
          
                player.percentageHp-=handleHp(ghost.attack,player)
                console.log("cps")
              
               
            }


    })


}