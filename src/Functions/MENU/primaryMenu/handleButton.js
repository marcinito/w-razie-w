


export const handleButton=(menu)=>{
    const mainMenu=document.querySelector(".mainMenu")
    const startGame=document.querySelector(".startGame")
    const viewFinderImg=document.querySelector(".viewFinderImg")
    startGame.addEventListener("click",(e)=>{
        console.log("siema")
        menu.playGame=true
        mainMenu.style.opacity=0
        mainMenu.style.zIndex=-10
        viewFinderImg.style.zIndex=30

     
    })
}