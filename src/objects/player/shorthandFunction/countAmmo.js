import { player } from "../../../main"
export const countAmmo=()=>{
let array=[]
    player.backpack.glock.qG.forEach((el,index)=>{
      if(el.isDrop!==true){
        array.push(el.ammo)
      }

    })
console.log(array,"arr")
}