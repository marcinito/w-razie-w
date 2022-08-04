//IMPORT TITLE
import imgPlainWall from '../../../objects/WALL/plainWall/images/100GrassBlock.png'
import imgSolidWall from '../../../objects/WALL/solidWall/images/100SolidBlock.png'
//IMPORT GUN
import glockImage from './gunImage/glock.png'
import dynamiteImage from './gunImage/dynamiteIconMenu.png'
//TITLE IMAGE
const plainWallImage=new Image(100,100).src=imgPlainWall
const solidWallImage=new Image(100,100).src=imgSolidWall

//GUN IMAGE
const glock=new Image(100,100).src=glockImage
const dynamite=new Image(100,100).src=dynamiteImage


export const drawMenuEquipment=()=>{
   
    //ADD PHOTO TO TITLE MENU
    let imageWithTitleArray=[plainWallImage,solidWallImage,solidWallImage,solidWallImage]
  const titleDashboard=[...document.querySelectorAll(".slot")]
  titleDashboard.forEach((slot,i,arr)=>{
    slot.children[0].src=imageWithTitleArray[i]

  })
  //ADD PHOTO TO GUN MENU
  let imageWithGunArray=[glock,dynamite]
  const gunDashboard=[...document.querySelectorAll(".gunImg")]
  console.log(gunDashboard)
  gunDashboard[0].src=glock
  gunDashboard[1].src=dynamite


}