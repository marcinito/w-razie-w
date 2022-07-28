import viewFinderImageFile from './celownik.png'
import brickImageFile from './brick.png'
const pointerViewFinder=new Image(100,100).src=viewFinderImageFile
const brickViewFinder=new Image(100,100).src=brickImageFile
const POINTER=document.querySelector(".viewFinderImg")

export const switchViewfinder=(player)=>{
if(player.mode==="buildingWall"){
    POINTER.src=brickViewFinder
}
if(player.mode==="fireFire"){
    POINTER.src=pointerViewFinder
}

}