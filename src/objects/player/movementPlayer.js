import { plainWall } from "../plainWall"
import { solidWall } from "../solidWall"

export const movementPlayer=(player)=>{
    window.addEventListener("keydown",(e)=>{

        if(e.keyCode===37){
                player.moveLeft()
        }
        if(e.keyCode===39){
            player.moveRight()
    }

if(e.keyCode===40){
    player.moveDown()
}
if(e.keyCode===32){
    player.fire()
    
}
if(e.keyCode===81){
  

}

    })
    window.addEventListener("keyup",(e)=>{
        console.log(e.keyCode)
        //JUMP
        if(e.keyCode===38){
            if(player.counterJump<2){
                player.moveUp()
                player.counterJump++
            }
        
            if(player.counterJump>2){
                player.up=false
                
            }
    }
    //chode first block
    if(e.keyCode===49){
       player.isBuildingIsPossible.plainWall=true
       player.isBuildingIsPossible.solidWall=false
    }
    if(e.keyCode===50){
        player.isBuildingIsPossible.solidWall=true
        player.isBuildingIsPossible.plainWall=false
     }
    })

    window.addEventListener("click",(e)=>{
        if(player.isBuildingIsPossible.plainWall===true){
            player.blockToBuild.push(new plainWall(e.x-35,e.y-35,60,"red","horizontal"))
        }
        if(player.isBuildingIsPossible.solidWall===true){
            player.blockToBuild.push(new solidWall(e.x-30,e.y-30,60,"red","horizontal"))
        }
    })
}
