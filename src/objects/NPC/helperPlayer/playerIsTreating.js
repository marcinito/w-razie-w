import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { player } from "../../../main"


export const playerIsTreating=(NPC)=>{
    NPC.forEach((npc)=>{
        if(npc.arrayWithMagic.length>0){
            npc.arrayWithMagic.forEach((spell,i,arr)=>{
                if(spell.id==="treat"){
                    
                    if(player.posX+player.size<spell.posX || player.posX>spell.posX+spell.size ||
                        player.posY+player.size<spell.posY || player.posY>spell.posY+spell.size){
               
                        }
                        else{
                           if(player.hp<player.hpTotal){
                            player.hp+=40
                            player.percentageHp+=handleHp(40,player)
                            if(player.hp>player.hpTotal)player.hp=player.hpTotal
                            if(player.percentageHp>player.ratePercentage)player.percentageHp=player.ratePercentage
                           }
                            player.treatment=true
                            arr.splice(i,1)
                            setTimeout(()=>{
                                player.treatment=false
                            },3000)
                        }
                }
            })
        }

    })
  
}