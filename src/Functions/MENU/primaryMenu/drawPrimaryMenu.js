//objects
import { Bug1 } from './objects/bugs1/bug1'
const bug1=new Bug1(400,10)
const bug2=new Bug1(700,10)
//images
import smokImg from './images/smok.png'
import bodyImg from './images/tloBody.png'
import bugImg from './objects/bugs1/bug1.png'
import logoPageImg from './images/logoPage.png'
const logoPage=new Image(100,100)
logoPage.src=logoPageImg
const bug=new Image(100,100).src=bugImg
const smok=new Image(100,100)
smok.src=smokImg
const bodyTlo=new Image(100,100).src=bodyImg
let jeden=1
export const drawPrimaryMenu=(canMenu)=>{
    if(jeden<2){
        console.log(canMenu)
        jeden+=10
    }
    // canMenu.ctx.clearRect(canMenu.C_W,canMenu.C_H,canMenu.C_W,canMenu.C_H)
    canMenu.ctx.drawImage(smok,0,0,canMenu.C_W,canMenu.C_H)
    canMenu.ctx.drawImage(logoPage,0,0,canMenu.C_W,140)
    bug1.draw(canMenu)
    bug2.draw(canMenu)
   

}
