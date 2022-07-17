export const movementPlayer=(player)=>{
    window.addEventListener("keydown",(e)=>{
   
        if(e.keyCode===37){
                player.moveLeft()
        }
        if(e.keyCode===39){
            player.moveRight()
    }
    if(e.keyCode===38){
        player.moveUp()
}
if(e.keyCode===40){
    player.moveDown()
}
    })
}