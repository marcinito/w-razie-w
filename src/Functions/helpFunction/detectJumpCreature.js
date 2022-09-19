export const detecJumpCreature=(creature,title)=>{
 
    if(creature.detectJump.posX+creature.detectJump.size<title.posX || creature.detectJump.posX>title.posX+title.size ||
        creature.detectJump.posY+creature.detectJump.size<title.posY || creature.detectJump.posY>title.posY+title.size){

        }else{
            creature.touchWall=true
            creature.detectJump.color="black"
        }
}