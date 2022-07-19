
let changeImage=0
setInterval(()=>{
changeImage++
if(changeImage===4){
    changeImage=0
    
}

},200)
export const DRAWALL=(el,can)=>{
    if(el.type==="static"){
        if(el.id==="wall"){
            if(el.hp>0){
                el.draw(can)
            }
        }
    }
    if(el.type==="dynamic"){
        el.draw(can)
    }
}