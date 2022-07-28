//IMPORT TITLE
import imgPlainWall from '../../../images/plainWall/100GrassBlock.png'
import imgSolidWall from '../../../images/solidWall/100SolidBlock.png'
//IMPORT GUN
import glockImage from './gunImage/glock.png'
//TITLE IMAGE
const plainWallImage=new Image(100,100).src=imgPlainWall
const solidWallImage=new Image(100,100).src=imgSolidWall

//GUN IMAGE
const glock=new Image(100,100).src=glockImage

export const drawMenuEquipment=()=>{
   
    //ADD PHOTO TO TITLE MENU
    let imageWithTitleArray=[plainWallImage,solidWallImage,solidWallImage,solidWallImage]
  const titleDashboard=[...document.querySelectorAll(".slot")]
  titleDashboard.forEach((slot,i,arr)=>{
    slot.children[0].src=imageWithTitleArray[i]

  })
  //ADD PHOTO TO GUN MENU
  let imageWithGunArray=[glock]
  const gunDashboard=[...document.querySelectorAll(".gunImg")]
  gunDashboard[0].src=glock


}