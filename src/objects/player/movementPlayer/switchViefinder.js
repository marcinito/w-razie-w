import viewFinderImageFile from './celownik.png'
import brickImageFile from './brick.png'
const pointerViewFinder=new Image(100,100).src=viewFinderImageFile
const brickViewFinder=new Image(100,100).src=brickImageFile
const POINTER=document.querySelector(".viewFinderImg")
const viewFinder=document.querySelector(".viewFinder")

export const switchViewfinder=(player)=>{
if(player.mode==="buildingWall"){
    POINTER.src=brickViewFinder
    viewFinder.style.zIndex=30
    document.body.style.cursor="none"
    POINTER.style.opacity=1
    

}
if(player.mode==="fireFire"){
    viewFinder.style.zIndex=-30
    document.body.style.cursor="pointer"
    POINTER.style.opacity=0
}

}