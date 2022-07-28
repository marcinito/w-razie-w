export const showNumberAvailableTitleToUseOnDashBoard=(divs,player)=>{
    divs[0].innerHTML=`<p>Q:</p><h2 class="number">${player.building.plainWall.quantity} </h2>`
    divs[1].innerHTML=`<p>Q:</p><h2 class="number">${player.building.solidWall.quantity} </h2>`

}