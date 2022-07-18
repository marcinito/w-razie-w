export const DRAWALL=(el,can)=>{
    if(el.type==="static"){
        if(el.id==="plainWall" || el.id==="solidWall"){
            if(el.hp>0){
                el.draw(can)
            }
        }
    }
    if(el.type==="dynamic"){
        el.draw(can)
    }
}