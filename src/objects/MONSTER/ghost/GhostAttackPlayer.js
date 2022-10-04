import { handleHp } from "../../../Functions/shorthandFunction/handleHp"

export const ghostAttackPlayer=(player,ghostArray)=>{

    ghostArray.forEach((ghost,index,arr)=>{
  
  
        if(player.posX+player.size<ghost.posX || player.posX>ghost.posX+ghost.size ||
            player.posY+player.size<ghost.posY || player.posY>ghost.posY+ghost.size){
               ghost.speed=1
   //No coliision
            }
            else{
                player.color="red"
                player.hp-=ghost.attack
                ghost.speed=0
          
                player.percentageHp-=handleHp(ghost.attack,player)/2
              
               
            }


    })


}