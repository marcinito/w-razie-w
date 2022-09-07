import styles from './gameover.scss'
const end=[...document.querySelectorAll(".tile")]
const container=document.querySelector(".container")
let counter=0
window.addEventListener("click",(e)=>{
    window.location="./index.html"  
})
window.addEventListener("keydown",(e)=>{
    if(e.keyCode===32||e.keyCode===13){
        window.location="./index.html"
    }
})
setTimeout(()=>{
    let displayNewLetter=setInterval(()=>{
        counter++
        if(counter===9){clearInterval(displayNewLetter)}
        if(counter===1){
            end[0].textContent="P"
            end[0].style.color="red"
    }
if(counter===2){end[1].textContent="l"
end[1].style.color="darkblue"
}
if(counter===3){
    end[2].textContent="a"
    end[2].style.color="red"
}
if(counter===4){
    end[3].textContent="y"
    end[3].style.color="darkblue"
}
if(counter===5){
    end[4].textContent="A"
    end[4].style.color="red"
}
if(counter===6){
    end[5].textContent="g"
    end[5].style.color="darkblue"
}
if(counter===7){
    end[6].textContent="a"
    end[6].style.color="red"
}
if(counter===8){
    end[7].textContent="i"
    end[7].style.color="darkblue"
}
if(counter===9){
    end[8].textContent="n"
container.style.width=`90%`
end[8].style.color="red"
}
        },300)

},3000)
