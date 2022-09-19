import { menu } from "../../main"

const board=document.querySelector(".board")
export const items=()=>{
    let container
    if(menu.navigation!=="items"){
        container=document.createElement("div")
        let stylesH1=`text-align:center`
        let styleTABLE=`border:1px solid black;`
        container.innerHTML=`<h1 style="${stylesH1}">Items</h1></br>
        <table>
        <tr style="border:1px solid black;">
        <td >ss</td>
        <td>ss</td>
        <td>ss</td>
        </tr>

        </table>
        `
        board.appendChild(container)
        menu.navigation="items"
    }


  


}